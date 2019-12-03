<template lang="">
  <div>
    <tz-mask v-show="isShow" v-model='isShow' :opacity='0.9'></tz-mask>
    <transition name="van-fade" @after-leave="afterLeaveHandle">
      <div class="tz__image-preview"
        v-show='isShow'
        style="z-index: 2032"
        @touchstart="onWrapperTouchStart"
        @touchmove="preventDefault"
        @touchend="onWrapperTouchEnd"
        @touchcancel="onWrapperTouchEnd">
        <div v-if="showIndex" class="tz__image-preview-index">{{`${active + 1}/${images.length}`}}</div>
        <tz-swipe ref="swipe"
          loop="loop"
          indicatorColor="white"
          :initialSwipe="startPosition"
          :showIndicators="showIndicators"
          @change="onSwipeChange">
          <tz-swipe-item  v-for="(image, index) in images" :key="index">
            <img class="tz__image-preview-image"
              :style = "index === active ? imageStyle : null"
              :src="image"
              @touchstart="onImageTouchStart"
              @touchmove="onImageTouchMove"
              @touchend="onImageTouchEnd"
              @touchcancel="onImageTouchEnd">
          </tz-swipe-item>
        </tz-swipe>
      </div>
    </transition>
  </div>
</template>
<script>
import { TouchMixin } from '../../../src/common/mixins/touch'
import { preventDefault } from '../../../src/utils/dom/events'
import { range } from '../../../src/utils'
function getDistance(touches) {
  return Math.sqrt(
    Math.abs(
      (touches[0].clientX - touches[1].clientX) *
        (touches[0].clientY - touches[1].clientY)
    )
  )
}
export default {
  name: 'TzImagePreview',
  mixins: [TouchMixin],
  data() {
    this.bindStatus = false
    return {
      isShow: this.value,
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    images: Array,
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    startPosition: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: 'tz__image-preview-overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    imageStyle() {
      const { scale } = this
      const style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      }

      if (scale !== 1) {
        style.transform = `scale3d(${scale}, ${scale}, 1) translate(${this.moveX /
          scale}px, ${this.moveY / scale}px)`
      }

      return style
    }
  },

  watch: {
    value(val) {
      this.active = this.startPosition
      this.isShow = val
    },

    startPosition(active) {
      console.log('11111', active)
      this.active = active
    },

    closeOnPopstate: {
      handler(val) {
        this.handlePopstate(val)
      },
      immediate: true
    }
  },
  mounted() {
    console.log('1111222', this)
    this.isShow = this.value
  },
  methods: {
    handlePopstate(bind) {
      /* istanbul ignore if */
      // if (isServer) {
      //   return
      // }
      console.log('1111222bind', bind, this.bindStatus)
      if (this.bindStatus !== bind) {
        this.bindStatus = bind
        const action = bind ? 'add' : 'remove'
        window[`${action}EventListener`]('popstate', this.close())
      }
    },
    close() {
      this.isShow = false
    },
    onWrapperTouchStart() {
      this.touchStartTime = new Date()
    },
    onWrapperTouchEnd(event) {
      preventDefault(event)
      const deltaTime = new Date() - this.touchStartTime
      const { offsetX = 0, offsetY = 0 } = this.$refs.swipe || {}

      // prevent long tap to close component
      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        console.log('onWrapperTouchEnd', this.active)
        const index = this.active

        this.resetScale()
        this.$emit('close', {
          index,
          url: this.images[index]
        })

        if (!this.asyncClose) {
          this.$emit('input', false)
        }
      }
    },
    onSwipeChange(active) {
      this.resetScale()
      this.active = active
      this.$emit('change', active)
    },
    resetScale() {
      this.scale = 1
      this.moveX = 0
      this.moveY = 0
    },
    startMove(event) {
      const image = event.currentTarget
      const rect = image.getBoundingClientRect()
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight

      this.touchStart(event)
      this.moving = true
      this.startMoveX = this.moveX
      this.startMoveY = this.moveY
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2)
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2)
    },

    startZoom(event) {
      this.moving = false
      this.zooming = true
      this.startScale = this.scale
      this.startDistance = getDistance(event.touches)
    },

    onImageTouchStart(event) {
      const { touches } = event
      const { offsetX = 0 } = this.$refs.swipe || {}

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event)
      } /* istanbul ignore else */ else if (touches.length === 2 && !offsetX) {
        this.startZoom(event)
      }
    },
    onImageTouchMove(event) {
      console.log('66666', this.active)
      const { touches } = event
      if (this.moving || this.zooming) {
        preventDefault(event, true)
      }

      if (this.moving) {
        this.touchMove(event)
        const moveX = this.deltaX + this.startMoveX
        const moveY = this.deltaY + this.startMoveY
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX)
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY)
      }

      if (this.zooming && touches.length === 2) {
        const distance = getDistance(touches)
        const scale = (this.startScale * distance) / this.startDistance
        this.scale = range(scale, this.minZoom, this.maxZoom)
      }
    },

    onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        let stopPropagation = true

        if (
          this.moving &&
          this.startMoveX === this.moveX &&
          this.startMoveY === this.moveY
        ) {
          stopPropagation = false
        }

        if (!event.touches.length) {
          this.moving = false
          this.zooming = false
          this.startMoveX = 0
          this.startMoveY = 0
          this.startScale = 1

          if (this.scale < 1) {
            this.resetScale()
          }
        }

        if (stopPropagation) {
          preventDefault(event, true)
        }
      }
    },
    preventDefault(event) {
      preventDefault(event)
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  }
}
</script>

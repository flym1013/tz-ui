<template lang="">
  <div class="tz__swipe">
    <div class="tz__swipe-track"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
      @touchcancel="endDrag"
      :style="trackStyle">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div v-if="showIndicators && count > 1"
      class="tz__swipe-indicators"
      :class="vertical ? 'tz__swipe-vertical' : ''">
        <i v-for="index in count"
          :key="index"
          class="tz__swipe-indicator"
          :class="index - 1 === activeIndicator ? 'tz__swipe-indicator--active' : null"
          :style="index - 1 === activeIndicator ? indicatorStyle : null"></i>
    </div>
  </div>
</template>
<script>
import { TouchMixin } from '../../../src/common/mixins/touch'
export default {
  name: 'TzSwipe',
  mixins: [TouchMixin],
  data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    }
  },
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    initialSwipe: {
      type: Number,
      default: 0
    },
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  watch: {
    swipes() {
      this.initialize()
    },

    initialSwipe() {
      this.initialize()
    },

    autoplay(autoplay) {
      if (!autoplay) {
        this.clear()
      } else {
        this.autoPlay()
      }
    }
  },
  computed: {
    count() {
      return this.swipes.length
    },

    delta() {
      return this.vertical ? this.deltaY : this.deltaX
    },

    size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth']
    },

    trackSize() {
      return this.count * this.size
    },

    activeIndicator() {
      return (this.active + this.count) % this.count
    },

    isCorrectDirection() {
      const expect = this.vertical ? 'vertical' : 'horizontal'
      return this.direction === expect
    },

    trackStyle() {
      const mainAxis = this.vertical ? 'height' : 'width'
      const crossAxis = this.vertical ? 'width' : 'height'
      return {
        [mainAxis]: `${this.trackSize}px`,
        [crossAxis]: this[crossAxis] ? `${this[crossAxis]}px` : '',
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      }
    },
    indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      }
    }
  },
  mounted() {
    window.onresize = () => {
      this.initialize(this.activeIndicator)
    }
  },
  destroyed() {
    window.onresize = null
  },
  methods: {
    // initialize swipe position
    initialize(active = this.initialSwipe) {
      clearTimeout(this.timer)
      if (this.$el) {
        console.log('this.$el.getBoundingClientRect()', this.$el.getBoundingClientRect(), this.width)
        const rect = this.$el.getBoundingClientRect()
        this.computedWidth = this.width || rect.width
        this.computedHeight = this.height || rect.height
      }
      this.swiping = true
      this.active = active
      this.offset = this.count > 1 ? -this.size * this.active : 0
      this.swipes.forEach(swipe => {
        swipe.offset = 0
      })
      this.autoPlay()
    },

    clear() {
      clearTimeout(this.timer)
    },

    startDrag(event) {
      if (!this.touchable) return

      this.clear()
      this.swiping = true
      this.touchStart(event)
      this.correctPosition()
    },

    onDrag(event) {
      if (!this.touchable || !this.swiping) return

      this.touchMove(event)

      if (this.isCorrectDirection) {
        event.preventDefault(true)
        this.move({ offset: Math.min(Math.max(this.delta, -this.size), this.size) })
      }
    },

    endDrag() {
      if (!this.touchable || !this.swiping) return

      if (this.delta && this.isCorrectDirection) {
        const offset = this.vertical ? this.offsetY : this.offsetX
        this.move({
          pace: offset > 0 ? (this.delta > 0 ? -1 : 1) : 0,
          emitChange: true
        })
      }

      this.swiping = false
      this.autoPlay()
    },

    move({ pace = 0, offset = 0, emitChange }) {
      const { delta, active, count, swipes, trackSize } = this
      const atFirst = active === 0
      const atLast = active === count - 1
      const outOfBounds =
        !this.loop &&
        ((atFirst && (offset > 0 || pace < 0)) || (atLast && (offset < 0 || pace > 0)))

      if (outOfBounds || count <= 1) {
        return
      }

      if (swipes[0]) {
        swipes[0].offset = atLast && (delta < 0 || pace > 0) ? trackSize : 0
      }

      if (swipes[count - 1]) {
        swipes[count - 1].offset = atFirst && (delta > 0 || pace < 0) ? -trackSize : 0
      }

      if (pace && active + pace >= -1 && active + pace <= count) {
        this.active += pace

        if (emitChange) {
          this.$emit('change', this.activeIndicator)
        }
      }

      this.offset = Math.round(offset - this.active * this.size)
    },

    swipeTo(index) {
      this.swiping = true
      this.resetTouchStatus()
      this.correctPosition()
      setTimeout(() => {
        this.swiping = false
        this.move({
          pace: (index % this.count) - this.active,
          emitChange: true
        })
      }, 30)
    },

    correctPosition() {
      if (this.active <= -1) {
        this.move({ pace: this.count })
      }
      if (this.active >= this.count) {
        this.move({ pace: -this.count })
      }
    },
    autoPlay() {
      const { autoplay } = this

      if (autoplay && this.count > 1) {
        this.clear()
        this.timer = setTimeout(() => {
          this.swiping = true
          this.resetTouchStatus()
          this.correctPosition()

          setTimeout(() => {
            this.swiping = false
            this.move({
              pace: 1,
              emitChange: true
            })
            this.autoPlay()
          }, 30)
        }, autoplay)
      }
    }
  }
}
</script>

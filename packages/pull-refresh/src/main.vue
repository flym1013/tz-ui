<template>
  <div class="tz__pull-refresh">
    <div class="tz__pull-refresh-track"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
      @touchcancel="endDrag"
      :style="style">
      <div class="tz__pull-refresh-head">
        <span v-if="status === 'loading'">
          <slot name="loading">
            <tz-loading size='20px'>{{Status}}</tz-loading>
          </slot>
        </span>
        <span v-if="status === 'pulling'">
          <slot name="pulling">{{Status}}</slot>
        </span>
        <span v-if="status === 'loosing'">
          <slot name="loosing">{{Status}}</slot>
        </span>
        <span v-if="status === 'success'">
          <slot name="success">{{Status}}</slot>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { TouchMixin } from '../../../src/common/mixins/touch'
import { getScrollTop, getScrollEventTarget } from '../../../src/utils/dom/scroll'
export default {
  name: 'TzPullRefresh',
  mixins: [TouchMixin],
  props: {
    disabled: Boolean,
    successText: {
      type: String,
      default: ''
    },
    pullingText: {
      type: String,
      default: '下拉即可刷新...'
    },
    loosingText: {
      type: String,
      default: '释放即可刷新...'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    }
  },
  computed: {
    style() {
      const style = {
        transition: `${this.duration}ms`,
        transform: this.height ? `translate3d(0,${this.height}px, 0)` : ''
      }
      return style
    },
    untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled
    },
    Status() {
      return this[`${this.status}Text`]
    }
  },
  watch: {
    value(loading) {
      this.duration = this.animationDuration
      if (!loading && this.successText) {
        this.status = 'success'
        setTimeout(() => {
          this.setStatus(0)
        }, this.successDuration)
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading)
      }
    }
  },
  mounted() {
    this.scrollEl = getScrollEventTarget(this.$el)
    console.log('0', this.scrollEl)
  },
  methods: {
    startDrag(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0
        this.touchStart(event)
      }
    },
    onDrag(event) {
      if (this.untouchable) {
        return
      }

      this.touchMove(event)

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0
        this.startY = event.touches[0].clientY
        this.deltaY = 0
      }
      console.log()
      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY))
          event.preventDefault()
        }
      }
    },
    endDrag() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration
        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true)
          this.$emit('input', true)
          this.$emit('refresh')
        } else {
          this.setStatus(0)
        }
      }
    },
    getCeiling() {
      this.ceiling = getScrollTop(this.scrollEl) === 0
      console.log(this.ceiling)
      return this.ceiling
    },
    ease(height) {
      const { headHeight } = this
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4)
    },
    setStatus(height, isLoading) {
      this.height = height

      const status = isLoading
        ? 'loading'
        : height === 0
          ? 'normal'
          : height < this.headHeight
            ? 'pulling'
            : 'loosing'

      if (status !== this.status) {
        this.status = status
      }
    }
  }
}
</script>

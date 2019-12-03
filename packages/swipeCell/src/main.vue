<template>
  <div class="tz__swipecell"
    @click="onClick('cell')"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    @touchcancel="endDrag">
    <div class="tz__swipecell-wrapper"
      :style="wrapperStyle"
      @transitionend="transitionend">
      <div ref="left" class="tz__swipecell-left" @click="onClick('left', true)">
        <slot name="left"></slot>
      </div>
      <slot></slot>
      <div ref="right" class="tz__swipecell-right" @click="onClick('right', true)">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { TouchMixin } from '../../../src/common/mixins/touch'
import { range } from '../../../src/utils'
const THRESHOLD = 0.15
export default {
  name: 'TzSwipeCell',
  mixins: [TouchMixin],
  data() {
    return {
      offset: 0,
      dragging: false
    }
  },
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    name: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left')
    },

    computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right')
    },

    wrapperStyle() {
      return {
        transform: `translate3d(${this.offset}px, 0, 0)`,
        transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      }
    }
  },
  methods: {
    getWidthByRef(ref) {
      if (this.$refs[ref]) {
        const rect = this.$refs[ref].getBoundingClientRect()
        return rect.width
      }

      return 0
    },
    transitionend() {
      this.swiping = false
    },
    onClick(position, stop) {
      console.log(position, stop)
      if (stop) {
        event.stopPropagation()
      }
      this.$emit('click', position)
      if (!this.offset) {
        return
      }

      if (this.onClose) {
        this.onClose(position, this, { name: this.name })
      } else {
        this.swipeMove(0)
      }
    },
    swipeLeaveTransition(direction) {
      const { offset, computedLeftWidth, computedRightWidth } = this
      const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD

      // right
      if (
        direction === 'right' &&
        -offset > computedRightWidth * threshold &&
        computedRightWidth > 0
      ) {
        this.open('right')
        // left
      } else if (
        direction === 'left' &&
        offset > computedLeftWidth * threshold &&
        computedLeftWidth > 0
      ) {
        this.open('left')
        // reset
      } else {
        this.swipeMove(0)
      }
    },
    close() {
      this.offset = 0
    },
    open(position) {
      const offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth
      this.swipeMove(offset)
      this.resetSwipeStatus()
    },
    resetSwipeStatus() {
      this.swiping = false
      this.opened = true
    },
    swipeMove(offset = 0) {
      this.offset = range(offset, -this.computedRightWidth, this.computedLeftWidth)
      if (this.offset) {
        this.swiping = true
      } else {
        this.opened = false
      }
    },
    startDrag(event) {
      if (this.disabled) {
        return
      }

      this.dragging = true
      this.startOffset = this.offset
      this.touchStart(event)
    },
    onDrag(event) {
      if (this.disabled) {
        return
      }

      this.touchMove(event)

      if (this.direction === 'horizontal') {
        event.preventDefault()
        this.swipeMove(this.deltaX + this.startOffset)
      }
    },
    endDrag() {
      if (this.disabled) {
        return
      }

      this.dragging = false
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right')
      }
    }
  }
}
</script>

<template>
  <div class='tz__mask' :style='styles' :class="className">
    <slot></slot>
  </div>
</template>
<script>
import {
  addClass,
  removeClass,
  getScrollview,
  isIOS
} from '../../../src/utils/mask.js'
export default {
  name: 'TzMask',
  data() {
    return {
      show: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    bgcolor: {
      type: String,
      default: '#000'
    },
    zindex: {
      type: Number,
      default: 1500
    },
    opacity: {
      type: Number,
      default: 0.5
    },
    animated: {
      type: Boolean,
      default: true
    },
    className: String
  },
  computed: {
    styles() {
      const style = {
        'z-index': this.zindex,
        'background-color': this.bgcolor
      }
      if (this.show) {
        style['opacity'] = this.opacity
        style['pointer-events'] = 'auto'
      }
      return style
    }
  },
  watch: {
    value(val) {
      this.show = val
      if (isIOS) {
        if (val) {
          addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
        } else {
          setTimeout(() => {
            removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
          }, 200)
        }
      }
    }
  },
  mounted() {
    this.scrollView = getScrollview(this.$el)
  },
  beforeDestroy() {
    isIOS && removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')
  }
}
</script>

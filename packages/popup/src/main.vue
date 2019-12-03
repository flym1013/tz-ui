<template>
  <div>
    <tz-mask v-model='show' @click.native='close' :opacity='maskerOpacity'></tz-mask>
    <div class='tz__popup' :class="classes" :style="styles" ref="box">
      <div v-if="!!$slots.top && position !== 'center'" ref="top">
        <slot name="top"></slot>
      </div>
      <div class="tz__popup-content">
        <div ref="content">
          <slot></slot>
        </div>
      </div>
      <div v-if="!!$slots.bottom && position !== 'center'" ref="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { preventScroll } from '../../../src/utils/mask.js'
export default {
  name: 'TzPopup',
  data() {
    return {
      show: this.value
    }
  },
  props: {
    value: {
      type: Boolean
    },
    position: {
      validator(value) {
        return ['bottom', 'top', 'center', 'left', 'right'].indexOf(value) > -1
      },
      default: 'bottom'
    },
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    closeOnMasker: {
      type: Boolean,
      default: true
    },
    maskerOpacity: {
      validator(val) {
        return /^([0]|[1-9]\d*)?(\.\d*)?$/.test(val)
      },
      default: 0.5
    }
  },
  computed: {
    classes() {
      return (this.position === 'center' ? 'tz__popup-center ' : 'tz__popup tz__popup-' + this.position) + (this.show ? ' tz__popup-show ' : '')
    },
    styles() {
      if (this.position === 'left' || this.position === 'right') {
        return {width: this.width}
      } else if (this.position === 'bottom' || this.position === 'top') {
        return {width: '100%', height: this.height}
      } else {
        return {width: this.width, height: this.height}
      }
    }
  },
  watch: {
    value(val) {
      val ? preventScroll.lock() : preventScroll.unlock()

      this.show = val
    }
  },
  methods: {
    close() {
      if (this.closeOnMasker) {
        this.show = false
        this.$emit('input', false)
        this.$emit('change', false)
      }
    }
  },
  beforeDestroy() {
    preventScroll.unlock()
  }
}
</script>

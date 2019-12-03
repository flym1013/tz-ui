<template lang="">
  <div class="tz__slider"
    :class="[{'tz__slider-disabled': disabled, 'tz__slider-vertical': vertical}]"
    :style="{'background': inactiveColor}"
    @click="onClick">
    <div class="tz__slider-bar" :style="barStyle">
      <div class="tz__slider-button-wrapper"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd">
        <slot name="button" v-if="useButtonSlot"></slot>
        <div class="tz__slider-button" v-else></div>
      </div>
    </div>
  </div>
</template>
<script>
import { TouchMixin } from '../../../src/common/mixins/touch'
export default {
  name: 'TzSlider',
  mixins: [TouchMixin],
  data () {
    return {
      barStyle: {},
      mainAxis: '',
      crossAxis: ''
    }
  },
  props: {
    value: Number,
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    useButtonSlot: Boolean,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  watch: {
    value(value) {
      this.updateValue(value, false)
      this.barStyle = {
        [this.mainAxis]: `${((this.value - this.min) * 100) / this.range}%`,
        [this.crossAxis]: this.barHeight,
        background: this.activeColor
      }
    }
  },
  computed: {
    range() {
      return this.max - this.min
    }
  },
  created() {
    this.mainAxis = this.vertical ? 'height' : 'width'
    this.crossAxis = this.vertical ? 'width' : 'height'
    this.barStyle = {
      [this.mainAxis]: `${((this.value - this.min) * 100) / this.range}%`,
      [this.crossAxis]: this.barHeight,
      background: this.activeColor
    }
  },
  methods: {
    onTouchStart(event) {
      if (this.disabled) return
      this.touchStart(event)
      this.startValue = this.format(this.value)
    },

    onTouchMove(event) {
      event.preventDefault()
      event.stopPropagation()
      if (this.disabled) return

      this.touchMove(event)

      const rect = this.$el.getBoundingClientRect()
      const delta = this.vertical ? this.deltaY : this.deltaX
      const total = this.vertical ? rect.height : rect.width
      const diff = (delta / total) * this.range

      this.updateValue(this.startValue + diff)
    },

    onTouchEnd() {
      if (this.disabled) return
      this.updateValue(this.value, true)
    },

    onClick(event) {
      event.stopPropagation()

      if (this.disabled) return

      const rect = this.$el.getBoundingClientRect()
      const delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left
      const total = this.vertical ? rect.height : rect.width
      const value = (delta / total) * this.range + this.min
      this.updateValue(value, true)
    },
    updateValue(value, end) {
      value = this.format(value)
      this.$emit('input', value)
      if (end) {
        this.$emit('change', value)
      }
    },
    format(value) {
      return (
        Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step
      )
    }
  }
}
</script>

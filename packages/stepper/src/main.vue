<template lang="">
  <div class='tz__stepper'>
    <button @click="onChange('minus')" class='tz__stepper-minus' :class="[{'tz__stepper-disabled': minusDisabled}]"></button>
    <input
    class='tz__stepper-input'
    v-model.number="currentValue"
    :style="{'width': inputWidth}"
    :disabled="disabled || disableInput"
    @focus="focusFun"
    @input="inputFun"
    @blur="blurFun"
    type="number"/>
    <button @click="onChange('plus')" class='tz__stepper-plus' :class="[{'tz__stepper-disabled': plusDisabled}]"></button>
  </div>
</template>
<script>
export default {
  name: 'TzStepper',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: null,
    step: {
      type: [String, Number],
      default: 1
    },
    disabled: Boolean,
    integer: Boolean,
    asyncChange: Boolean,
    inputWidth: String,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    }
  },
  computed: {
    minusDisabled() {
      return this.disabled || this.currentValue <= this.min
    },

    plusDisabled() {
      return this.disabled || this.currentValue >= this.max
    }
  },
  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val)
      }
    },
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  methods: {
    // filter illegal characters
    format(value) {
      value = String(value).replace(/[^0-9.-]/g, '')
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value
    },
    // limit value range
    range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min)
    },
    onChange(type) {
      if (type === 'minus' && this.minusDisabled) {
        this.$emit('overlimit', type)
        return
      }
      if (type === 'plus' && this.plusDisabled) {
        this.$emit('overlimit', type)
        return
      }
      const diff = type === 'minus' ? -this.step : +this.step
      const value = Math.round((this.currentValue + diff) * 100) / 100
      if (!this.asyncChange) {
        this.currentValue = this.range(value)
      } else {
        this.$emit('input', value)
        this.$emit('change', value)
      }
      this.$emit(type)
    },
    inputFun(event) {
      const { value } = event.target
      const formatted = this.format(value)

      if (!this.asyncChange) {
        if (+value !== formatted) {
          event.target.value = formatted
        }
        this.currentValue = formatted
      } else {
        event.target.value = this.currentValue
        this.$emit('input', formatted)
        this.$emit('change', formatted)
      }
    },
    focusFun() {
      this.$emit('focus', event)
    },
    blurFun() {
      this.currentValue = this.range(this.currentValue)
      this.$emit('blur', event)

      // fix edge case when input is empty and min is 0
      if (this.currentValue === 0) {
        event.target.value = this.currentValue
      }
    }
  }
}
</script>

<template lang="">
  <div class="tz__radio"
    :aria-checked="String(this.checked)"
    @click="onClick">
    <div class="tz__radio-icon"
      :class="['tz__radio-icon-' + shape, {'tz__radio-icon-disabled': isDisabled, 'tz__radio-icon-checked': checked}]"
      :style="{'fontSize': iconSize}"
      @click="onClickIcon">
      <slot name="icon" :checked="checked">
        <tz-icon
          :style="checkedColor && checked && !isDisabled ? 'border-color:' + checkedColor + '; background-color:' + checkedColor : ''"
          class="tz-icon"
          type="md-checkmark"
        ></tz-icon>
      </slot>
    </div>
    <span class="tz__radio-label"
      :class="[{'tz__radio-label-disabled': isDisabled || labelDisabled}]"
      @click="onClickLabel">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'TzRadio',
  data() {
    return {
    }
  },
  props: {
    name: null,
    value: null,
    iconSize: [String, Number],
    disabled: Boolean,
    checkedColor: String,
    // labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    _radioGroup() {
      let parent = this.$parent
      // console.log(parent.$options.componentName)
      while (parent) {
        if (parent.$options.componentName !== 'TzRadioGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    currentValue: {
      get() {
        return this._radioGroup ? this._radioGroup.value : this.value
      },

      set(val) {
        (this._radioGroup || this).$emit('input', val)
      }
    },

    checked() {
      return this.currentValue === this.name
    },

    isDisabled() {
      return (this._radioGroup && this._radioGroup.disabled) || this.disabled
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    },

    emitChange(value) {
      const instance = this._radioGroup || this
      instance.$emit('input', value)
      instance.$emit('change', value)
    },

    onClickIcon() {
      console.log(this.isDisabled)
      if (!this.isDisabled) {
        this.currentValue = this.name
        this.emitChange(this.name)
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name
        this.emitChange(this.name)
      }
    }
  }
}
</script>

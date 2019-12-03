<template>
  <div class="tz__checkbox"  @click="onClick">
    <div class="tz__checkbox-icon"
      :class="['tz__checkbox-icon-' + shape, {'tz__checkbox-icon-disabled': isDisabled, 'tz__checkbox-icon-checked': checked}]"
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
    <span class="tz__checkbox-label"
      :class="[{'tz__checkbox-label-disabled': isDisabled || labelDisabled}]"
      @click="onClickLabel">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'TzCheckbox',
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
    _checkboxGroup() {
      let parent = this.$parent
      // console.log(parent.$options.componentName)
      while (parent) {
        if (parent.$options.componentName !== 'TzCheckboxGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    checked: {
      get() {
        return this._checkboxGroup ? this._checkboxGroup.value.indexOf(this.name) !== -1 : this.value
      },

      set(val) {
        if (this._checkboxGroup) {
          this.setParentValue(val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isDisabled() {
      return (this._checkboxGroup && this._checkboxGroup.disabled) || this.disabled
    }
  },
  watch: {
    value(val) {
      console.log(val)
      this.$emit('change', val)
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    },

    toggle() {
      const checked = !this.checked

      // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.
      clearTimeout(this.toggleTask)
      this.toggleTask = setTimeout(() => {
        this.checked = checked
      })
    },

    onClickIcon() {
      if (!this.isDisabled) {
        this.toggle()
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.toggle()
      }
    },
    setParentValue(val) {
      const value = this._checkboxGroup.value.slice()

      if (val) {
        if (this._checkboxGroup.max && value.length >= this._checkboxGroup.max) {
          return
        }

        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name)
          this._checkboxGroup.$emit('input', value)
        }
      } else {
        const index = value.indexOf(this.name)

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1)
          this._checkboxGroup.$emit('input', value)
        }
      }
    }
  }
}
</script>

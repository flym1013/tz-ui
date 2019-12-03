<template lang="">
  <div class='tz__field' :class="[{'tz__field-required': required}]">
    <div class='tz__field-left-icon' v-if="leftIcon">
      <tz-icon :type="leftIcon" size="20px"></tz-icon>
    </div>
    <div class='tz__field-label' v-if="label" :style="{'text-align': labelAlign, 'width': labelWidth}">{{label}}</div>
    <div class='tz__field-value'>
      <div class='tz__field-body' :class="[{'tz__field-body--textarea': type === 'textarea'}]">
        <textarea
        v-if="type === 'textarea'"
        :style="{'text-align': inputAlign,}"
        style="overflow-y:visible"
        class='tz__field-input'
        :class="[{'tz__field-input-disabled': disabled, 'tz__field-input-error': error}]"
        v-model="currentValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled='disabled || readonly'
        :readonly="readonly"
        @focus="focusFun"
        @input="inputFun"
        @blur="blurFun"
        @change='changeFun'
        ref="textarea">
        </textarea>
        <input
        v-else
        :type="type"
        :style="{'text-align': inputAlign}"
        class='tz__field-input'
        :class="[{'tz__field-input-disabled': disabled, 'tz__field-input-error': error}]"
        v-model="currentValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled='disabled || readonly'
        :readonly="readonly"
        @focus="focusFun"
        @input="inputFun"
        @blur="blurFun"
        @change='changeFun'
        >
        <tz-icon v-if="currentValue !== '' && clearable && focus" @touchstart.native="clearInput" class='tz__field-clear-icon' :type="clearIcon" size="18px" color='#3399ff'></tz-icon>
        <div class='tz__field-button'>
          <slot name="button"/>
        </div>
      </div>
      <div v-if='errorMessage' class='tz__field-error-message' :style="{'text-align': errorMessageAlign}">{{errorMessage}}</div>
    </div>
    <tz-icon v-if="rightIcon" @click="clickRightIcon" class='tz__field-right-icon' :type="rightIcon" size="18px" color='#3399ff'></tz-icon>
  </div>
</template>

<script>
import Autosize from 'autosize' // textarea自适用高度
export default {
  name: 'TzField',
  data () {
    return {
      focus: false,
      currentValue: this.value
    }
  },
  props: {
    value: String,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    placeholder: String,
    errorMessage: String,
    errorMessageAlign: String,
    labelAlign: String,
    labelWidth: String,
    autosize: Boolean,
    inputAlign: {
      type: String,
      default: 'left'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: String,
      default: 'ios-close-circle'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    maxlength: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: 'text'
    },
    label: String
  },
  watch: {
    autosize (val) {
      this.unbindAutosize()
      if (val) {
        this.bindAutosize()
      }
    },
    value(val) {
      this.value = val
      this.currentValue = val
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize()
      }
    })
  },
  beforeDestroy () {
    this.unbindAutosize()
  },
  methods: {
    updateAutosize () {
      Autosize.update(this.$refs.textarea)
    },
    // prop.autosize
    bindAutosize () {
      Autosize(this.$refs.textarea)
    },
    unbindAutosize () {
      Autosize.destroy(this.$refs.textarea)
    },
    focusFun() {
      console.log('focusFun')
      this.focus = true
      this.$emit('focus')
    },
    inputFun() {
      console.log('inputFun')
      this.$emit('input', this.currentValue)
    },
    changeFun() {
      console.log('changeFun')
      this.$emit('change', this.currentValue)
    },
    blurFun() {
      console.log('blurFun')
      this.focus = false
      this.$emit('blur', this.currentValue)
    },
    clearInput() {
      this.currentValue = ''
      console.log(this.currentValue, '55555')
      this.$emit('clear', this.currentValue)
    },
    clickRightIcon() {
      console.log('clickRightIcon')
      this.$emit('clickRightIcon', this.currentValue)
    }
  }
}
</script>

<template lang="">
  <div class='tz__search' :style='{background: background}' :class="[{'tz__search-show-action': showAction}]">
    <div class='tz__search-content' :class="['tz__search-content--' + shape]">
      <div class="tz__search-label" v-if="label">{{label}}</div>
      <slot v-else name="label" />
      <div class="tz__search-body">
        <tz-icon class='tz__search-left-icon' :type="leftIcon" size="20px"></tz-icon>
        <input type="text"
        :style="{'text-align': inputAlign}"
        class='tz__search-input'
        :class="[{'tz__search-input-disabled': disabled}]"
        v-model="currentValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled='disabled || readonly'
        @focus="focusFun"
        @input="inputFun"
        @blur="blurFun"
        @change='changeFun'
        >
        <tz-icon v-show="currentValue !== '' && clearable" @click="clearInput" class='tz__search-right-icon' :type="rightIcon" size="20px"></tz-icon>
      </div>
    </div>
    <div v-if="showAction || useActionSlot" class="tz__search-action">
        <slot v-if='useActionSlot' name="action"/>
        <div v-else @click='onCancel'>取 消</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TzSearch',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: String,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    inputAlign: {
      type: String,
      default: 'left'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: 'ios-search'
    },
    rightIcon: {
      type: String,
      default: 'ios-close'
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    maxlength: {
      type: Number,
      default: -1
    },
    shape: {
      type: String,
      default: 'square'
    },
    label: String
  },
  // watch: {
  //   // currentValue(val) {
  //   //   this.$emit('input', val)
  //   // },
  //   value(val) {
  //     console.log('5654645', val)
  //     this.value = val
  //     this.currentValue = val
  //   }
  // },
  created() {
    console.log('this.value', this.value)
  },
  methods: {
    focusFun() {
      console.log('focusFun')
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
      this.$emit('blur', this.currentValue)
    },
    clearInput() {
      this.currentValue = ''
      this.$emit('clear', this.currentValue)
    },
    onCancel() {
      this.currentValue = ''
      this.$emit('cancel', this.currentValue)
    }
  }
}
</script>

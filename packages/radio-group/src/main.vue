<template lang="">
  <div class="tz__radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TzRadioGroup',
  componentName: 'TzRadioGroup',
  data() {
    return {

    }
  },
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value(value) {
      console.log('value', value)
      this.$emit('change', value)
    }
  }
}
</script>

<template lang="">
  <div class="tz__checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TzCheckboxGroup',
  componentName: 'TzCheckboxGroup',
  data() {
    return {

    }
  },
  props: {
    max: Number,
    value: null,
    disabled: Boolean
  },
  watch: {
    value(value) {
      this.$emit('change', value)
    }
  }
}
</script>

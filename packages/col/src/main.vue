<template>
  <div :class="classes"
       :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'tz__col'
export default {
  name: 'TzCol',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`, {
          [`${prefixCls}-${this.span}`]: this.span,
          [`${prefixCls}-offset-${this.offset}`]: this.offset
        }
      ]
    },
    gutter () {
      console.log(this.$parent)
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },
    styles () {
      let style = {}
      const margin = `${Number(this.gutter) / 2}px`
      style['padding-right'] = margin
      style['padding-left'] = margin
      return style
    }
  }
}
</script>

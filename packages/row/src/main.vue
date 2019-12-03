<template>
  <div :class="classes"
       :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'tz__row'
export default {
  name: 'TzRow',
  props: {
    type: String,
    align: String,
    justify: String,
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    classes () {
      const flex = this.type === 'flex'
      return [
        `${prefixCls}`, {
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-align-${this.align}`]: flex && this.align,
          [`${prefixCls}-justify-${this.justify}`]: flex && this.justify
        }
      ]
    },
    styles () {
      let style = {}
      if (this.gutter) {
        const margin = `-${Number(this.gutter) / 2}px`
        style['margin-right'] = margin
        style['margin-left'] = margin
      }
      return style
    }
  }
}
</script>

<template lang="">
  <div class="tz__swipe-item" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TzSwipeItem',
  data() {
    return {
      offset: 0
    }
  },
  computed: {
    style() {
      const { vertical, computedWidth, computedHeight } = this.$parent
      const obj = {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`
      }
      return obj
    }
  },
  beforeCreate() {
    this.$parent.swipes.push(this)
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  }
}
</script>

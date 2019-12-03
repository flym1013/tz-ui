<template lang="">
  <div class="tz__image" :style="style" @click="onClick">
    <img class="tz__image-img"
        :src="src"
        :alt="alt"
        :style="{'object-fit': fit}"
        @load="onLoad"
        @error="onError"/>
    <div v-if="loading" class="tz__image-loading">
        <slot name="loading">加载中</slot>
    </div>
    <div v-if="error" class="tz__image-error">
        <slot name="error">加载失败</slot>
    </div>
  </div>
</template>
<script>
import {isDef, suffixPx} from '../../../src/utils'
export default {
  name: 'TzImage',
  props: {
    src: String,
    fit: String,
    alt: String,
    lazyLoad: Boolean,
    width: [String, Number],
    height: [String, Number]
  },
  data() {
    return {
      loading: true,
      error: false
    }
  },
  watch: {
    src() {
      this.loading = true
      this.error = false
    }
  },
  computed: {
    style() {
      const style = {}

      if (isDef(this.width)) {
        style.width = suffixPx(this.width)
      }

      if (isDef(this.height)) {
        style.height = suffixPx(this.height)
      }

      return style
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    },
    onLoad(event) {
      this.loading = false
      this.$emit('loading', event)
    },
    onError(event) {
      this.loading = false
      this.error = true
      this.$emit('error', event)
    }
  }
}
</script>

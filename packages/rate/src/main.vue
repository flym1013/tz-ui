<template lang="">
  <div class="tz__rate" @touchmove="onTouchMove">
    <div class="tz__rate-item" v-for="(item, index) in count" :key="index" :style="{paddingRight: gutter}">
      <tz-icon
      class="tz__rate-icon"
      :type="index + 1 <= innerValue ? icon : voidIcon"
      :color="disabled ? disabledColor : index + 1 <= innerValue ? color : voidColor"
      :data-score="item"
      @click="onSelect(item)"
      :size='size'></tz-icon>
      <tz-icon
      class="tz__rate-icon tz__rate-icon-half"
      v-if="allowHalf"
      :type="index + 0.5 <= innerValue ? icon : voidIcon"
      :color="disabled ? disabledColor : index + 0.5 <= innerValue ? color : voidColor"
      :data-score="item - 0.5"
      @click="onSelect(item - 0.5)"
      :size='size'></tz-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerValue: Number(this.value)
    }
  },
  name: 'TzRate',
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    gutter: String,
    size: {
      type: String,
      default: '20px'
    },
    icon: {
      type: String,
      default: 'ios-star'
    },
    voidIcon: {
      type: String,
      default: 'ios-star-outline'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },
  watch: {
    // value(value) {
    //   console.log('watch', value)
    //   if (value !== this.innerValue) {
    //     this.innerValue = Number(value)
    //   }
    // }
  },
  methods: {
    onTouchMove() {
      if (this.readonly || this.disabled || !document.elementFromPoint) {
        return
      }
      event.preventDefault()
      const { clientX, clientY } = event.touches[0]
      // console.log(this.$el.getBoundingClientRect())
      const target = document.elementFromPoint(clientX, clientY)
      if (target && target.dataset) {
        const { score } = target.dataset
        /* istanbul ignore else */
        // console.log('target', score)
        if (score) {
          this.onSelect(+score)
        }
      }
    },
    onSelect(score) {
      // console.log('onSelect', event.currentTarget.dataset)
      // console.log('score', score)
      // const { score } = event.currentTarget.dataset
      if (!this.disabled && !this.readonly) {
        this.innerValue = score
        this.$emit('input', score)
        this.$emit('change', score)
      }
    }
  }
}
</script>

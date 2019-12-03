<template lang="">
  <transition name="move-up" @after-leave="afterLeaveHandle">
    <div class="tz__notify tz__notify-top" :class="className" v-show="isShow" :style="styles">
      <div v-html="value || message"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'TzNotify',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    message: {
      type: String | Number,
      default: ''
    },
    color: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: 'red'
    },
    duration: {
      type: Number,
      default: 3000
    },
    zIndex: {
      type: Number,
      default: 110
    },
    className: String
  },
  computed: {
    styles() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
        zIndex: this.zIndex
      }
    }
  },
  mounted () {
    (this.message || this.value) && this.show()
  },
  methods: {
    show() {
      clearTimeout(this.timer)
      this.isShow = true
      if (this.duration > 0 && this.duration !== Infinity) {
        this.timer = setTimeout(() => {
          this.hide()
        }, this.duration)
      }
    },
    hide() {
      clearTimeout(this.timer)
      this.isShow = false
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  }
}
</script>

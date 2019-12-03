<template lang="">
  <div>
    <tz-mask v-show="mask && isShow" v-model='mask' :opacity='maskerOpacity'></tz-mask>
    <transition name="fade" @after-leave="afterLeaveHandle" class="tz__toast-container">
      <div v-show="isShow"
      class="tz__toast"
      :style="{'z-index': zIndex}"
      :class="[type === 'text' ? 'tz__toast-text' : 'tz__toast-icon', 'tz__toast-' + position]">
        <!-- <p v-if="type === 'text'" v-html="value || message"></p> -->
        <p v-if="type === 'text'">{{value || message}}</p>
        <div v-else>
          <tz-loading v-if="type === 'loading'" :type="loadingType" class="tz__toast--loading"></tz-loading>
          <tz-icon v-if="type === 'icon' || 'success' || 'fail'" class="tz__toast--icon" :size='iconSize' :type="icons" />
          <img v-if="type === 'image'" class="tz__toast--img" :src="icons"/>
          <p v-if="message" class="tz__toast--text">{{ messages }}</p>
        </div>
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TzToast',
  data() {
    return {
      isShow: false,
      messages: this.message
    }
  },
  props: {
    mask: {
      type: Boolean,
      default: false
    },
    value: {
      type: String | Number,
      default: ''
    },
    message: [String, Number],
    icon: String,
    maskerOpacity: {
      validator(val) {
        return /^([0]|[1-9]\d*)?(\.\d*)?$/.test(val)
      },
      default: 0.5
    },
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    duration: {
      type: Number,
      default: 2000
    },
    zIndex: {
      typ: Number,
      default: 1501
    },
    iconSize: {
      type: String,
      default: '50px'
    }
  },
  computed: {
    icons() {
      let icon = ''
      if (this.type === 'success') {
        icon = 'ios-checkmark'
      } else if (this.type === 'fail') {
        icon = 'ios-close'
      } else {
        icon = this.icon
      }
      return icon
    }
  },
  mounted() {
    this.show()
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
    hide () {
      this.isShow = false
      this.clearTimer()
    },
    clearTimer () {
      clearTimeout(this.timer)
      this.timer = null
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  }
}
</script>

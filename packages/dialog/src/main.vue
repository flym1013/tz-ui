<template>
  <div>
    <tz-mask v-show="overlay&&isVisble" @click.native='closeMask' v-model='overlay'></tz-mask>
    <transition name="tz__dialog-bounce" @after-leave="afterLeaveHandle">
      <div v-show="isVisble" class="tz__dialog" style="z-index: 1501">
        <div v-if="title"
          :class="!message && !children ? 'tz__dialog-isolated' : ''"
          class="tz__dialog-header">{{title}}</div>
        <div class="tz__dialog-content">
          <div class="tz__dialog-message"
            :class="[{'tz__dialog-message--has-title': title}]">{{message}}</div>
          <slot></slot>
        </div>
        <div class="tz__dialog-footer"
          :class="[{'tz__dialog-footer-button': true}]">
          <tz-button v-if="showCancelButton" type="default" plain @click="handleAction('cancel')">{{cancelButtonText}}</tz-button>
          <tz-button v-if="showConfirmButton" type="primary" plain @click="handleAction('confirm')">{{confirmButtonText}}</tz-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TzDialog',
  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      },
      isVisble: this.value,
      children: this.$slots
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    cancelButtonColor: String,
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.isVisble = true
      }
    }
  },
  methods: {
    closeMask() {
      if (this.closeOnClickOverlay) {
        this.isVisble = false
      }
    },
    handleAction(action) {
      this.$emit(action)

      if (this.beforeClose) {
        this.loading[action] = true
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action)
          }
          this.loading[action] = false
        })
      } else {
        this.onClose(action)
      }
    },
    onClose(action) {
      console.log(action)
      if (this.callback) {
        this.callback(action)
      }
      this.isVisble = false
      this.$emit('input', false)
    },
    afterLeaveHandle () {
      this.remove && this.remove()
    }
  }
}
</script>

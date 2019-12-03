<template>
  <button :type="nativeType"
          class="tz__button"
          :disabled="disabled"
          :class="['tz__button-'+type,
            'tz__button-'+size,{
            'tz__button-disabled':disabled,
            'tz__button-plain':plain,
            'tz__button-hairline':hairline,
            'tz__button-square':square,
            'tz__button-round':round
          }]"
          @click="handleClick">
    <span class="tz__button-icon"
          v-if="icon||$slots.icon">
      <slot class="name">
        <i v-if="icon"
           class="tzui"
           :class="'tzui__'+icon"></i>
      </slot>
    </span>
    <label class="tz__button-text">
      <slot></slot>
    </label>
  </button>
</template>
<script>
export default {
  name: 'TzButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    hairline: Boolean,
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: ''
    },
    loadingSize: {
      type: String,
      default: ''
    },
    loadingType: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (event) {
      if (this.type === 'disabled') {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>

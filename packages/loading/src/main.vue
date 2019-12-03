<template>
  <div class="tz__loading"
       :class="['tz__loading-'+type,{'tz__loading-vertical':vertical}]">
    <span v-if="
       type==='circular'"
          class="
       tz__loading-spinner
       tz__loading-sppiner-circular"
          :style="{'color':color,'width':size,'height':size}">
      <svg viewBox="25 25 50 50">
        <circle cx="50"
                cy="50"
                r="20"
                fill="none" />
      </svg>
    </span>
    <span v-else
          class="tz__loading-spinner tz__loading-spinner-spinner"
          :style="{'color':color,'width':size,'height':size}">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>
    <span class="tz__loading-text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
const DEFAULT_COLOR = '#c9c9c9'
export default {
  name: 'TzLoading',
  props: {
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    },
    size: {
      type: String,
      default: ''
    },
    textSize: {
      type: String,
      default: ''
    },
    vertical: Boolean

  },
  methods: {

  }
}
</script>

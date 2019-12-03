<template>
  <div class="tz__cell" :class="'tz__cell-' + size">
    <tz-icon class="tz__cell-left-icon" :size="iconSize" v-if="icon" :type='icon'></tz-icon>
    <slot v-else name="icon"></slot>
    <div class="tz__cell-title" v-if="showTitle">
      <span v-if="title">{{title}}</span>
      <slot v-else name="title"></slot>
      <div class="tz__cell-label" v-if="showLabel">
        <span v-if="label">{{label}}</span>
        <slot v-else name="label"></slot>
      </div>
    </div>
    <div class="tz__cell-value" v-if="showValue" :class="[{'tz__cell-value-alone': !$slots.title && !title}]">
      <span v-if="value">{{value}}</span>
      <slot name="value"></slot>
    </div>
    <tz-icon class="tz__cell-right-icon" :size="iconSize" v-if="rightIcon" :type='rightIcon'></tz-icon>
    <slot v-else name="right-icon"></slot>
  </div>
</template>
<script>
export default {
  name: 'TzCell',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: String,
    label: String,
    icon: String,
    arrowDirection: String,
    isLink: Boolean,
    size: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: '20px'
    },
    rightIcon: String
  },
  data () {
    return {
    }
  },
  computed: {
    showTitle() {
      let isShow = this.title || this.$slots.title
      return !!isShow
    },
    showValue() {
      let isShow = this.value || this.$slots.value
      return !!isShow
    },
    showLabel() {
      let isShow = this.label || this.$slots.label
      return !!isShow
    }
  },
  mounted() {
    console.log(this.showValue)
  },
  methods: {
    handleClickItem (event) {

    }
  }
}
</script>

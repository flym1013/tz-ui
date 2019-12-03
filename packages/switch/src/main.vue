<template lang="">
  <div class="tz__switch"
      :class="[{'tz__switch-on': checked, 'tz__switch-disabled': disabled}]"
      :style="{'font-size': size, 'background-color': checked ? activeColor : inactiveColor}"
      @click="onClick">
    <div class="tz__switch-node">
      <tz-loading :color="checked ? activeColor : inactiveColor" class="tz__switch-loading" v-if="loading"></tz-loading>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TzSwitch',
  data () {
    return {
      checked: this.value
    }
  },
  props: {
    value: '',
    disabled: Boolean,
    loading: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      default: '30px'
    }
  },
  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.checked = !this.checked
        this.$emit('input', this.checked)
        this.$emit('change', this.checked)
      }
    }
  }
}
</script>

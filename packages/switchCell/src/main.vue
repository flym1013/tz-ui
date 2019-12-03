<template lang="">
   <div class='tz__switchcell'>
     <div class='tz__switchcell-title'>
       {{title}}
     </div>
     <div class='tz__switchcell-value'>
       <tz-switch :value='checked' @change='onchange' :size='size' :disabled='disabled' :loading='loading' :activeColor='activeColor' :inactiveColor='inactiveColor'></tz-switch>
     </div>
   </div>
</template>
<script>
export default {
  name: 'TzSwitchCell',
  data () {
    return {
      checked: this.value
    }
  },
  props: {
    value: '',
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '20px'
    },
    disabled: Boolean,
    loading: Boolean,
    activeColor: String,
    inactiveColor: String
  },
  methods: {
    onchange(checked) {
      // input须在change之前调用
      this.$emit('input', checked)
      this.$emit('change', checked)
    }
  }
}
</script>

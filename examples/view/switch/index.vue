<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-switch v-model='checked' @change='onChange'></tz-switch>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-switch v-model='checked' disabled></tz-switch>
    </div>
    <div class='item'>
      <h2 class='item-h2'>加载状态</h2>
      <tz-switch v-model='checked' loading></tz-switch>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义大小</h2>
      <tz-switch v-model='checked' size="20px"></tz-switch>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义颜色</h2>
      <tz-switch v-model='checked' activeColor="#07c160" inactiveColor="#f44"></tz-switch>
    </div>
    <div class='item'>
      <h2 class='item-h2'>异步控制</h2>
      <tz-switch v-model='checked' @input="onInput"></tz-switch>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onChange(val) {
      // this.checked = val
      console.log(this.checked)
      console.log(val)
    },
    onInput(checked) {
      console.log('是否切换开关')
    }
  }
}
</script>
<style lang="less" scoped>
.item{
  padding: 15px;
  .item-h2{
    margin: 0;
    font-weight: 400;
    font-size: 28px;
    color: #455a6499;
    padding: 35px 0;
  }
}
</style>

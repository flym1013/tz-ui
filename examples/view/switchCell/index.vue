<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-switch-cell title='标题' @change='onchange' v-model='checked'></tz-switch-cell>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-switch-cell title='标题' disabled v-model='checked'></tz-switch-cell>
    </div>
    <div class='item'>
      <h2 class='item-h2'>加载状态</h2>
      <tz-switch-cell title='标题' loading v-model='checked'></tz-switch-cell>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    }
  },
  methods: {
    onchange(value) {
      console.log(value)
      console.log(this.checked)
    }
  }
}
</script>
<style lang="less" scoped>
.item{
  padding: 15px 0;
  .item-h2{
    margin: 0;
    font-weight: 400;
    font-size: 28px;
    color: #455a6499;
    padding: 25px 20px;
  }
}
</style>

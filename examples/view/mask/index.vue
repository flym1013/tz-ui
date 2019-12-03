<template lang="">
  <TzPage>
    <tz-mask v-model='show' @click.native='show = false'></tz-mask>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="show = true">显示遮罩层</tz-button>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.item{
  padding: 15px 15px;
  .item-h2{
    margin: 0;
    font-weight: 400;
    font-size: 28px;
    color: #455a6499;
    padding: 35px 20px;
  }
}
</style>

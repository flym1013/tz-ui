<template>
  <tzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="onClick">显示消息</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义配置</h2>
      <tz-button type="primary" @click="onClick1">显示自定义消息通知</tz-button>
    </div>
  </tzPage>
</template>
<script>
export default {
  data () {
    return {
      show1: false
    }
  },
  methods: {
    onClick() {
      this.$notify('第一条通知')
    },
    onClick1() {
      this.$notify({
        message: '通知内容',
        duration: 1000,
        backgroundColor: '#1989fa',
        className: 'className'
      })
    }
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
    padding: 35px 15px 15px;
  }
}
</style>
<style lang="less">
.className{
  height: 100px;
}
</style>

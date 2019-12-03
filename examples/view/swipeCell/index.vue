<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-swipe-cell>
        <template slot="left">
          <tz-button type="primary">选择</tz-button>
        </template>

        <tz-cell title="单元格" value="内容" />

        <template slot="right">
          <tz-button type="danger">删除</tz-button>
          <tz-button type="primary">收藏</tz-button>
        </template>
      </tz-swipe-cell>
    </div>
    <div class='item'>
      <h2 class='item-h2'>异步关闭</h2>
      <tz-swipe-cell :onClose="onClose">
        <template slot="left">
          <tz-button type="primary">选择</tz-button>
        </template>

        <tz-cell title="单元格" value="内容" />

        <template slot="right">
          <tz-button type="danger">删除</tz-button>
          <tz-button type="primary">收藏</tz-button>
        </template>
      </tz-swipe-cell>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onClose(clickPosition, instance) {
      console.log(clickPosition, instance)
      console.log('3s中之后自动关闭')
      setTimeout(() => {
        instance.close()
      }, 3000)
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
    padding: 35px 20px;
  }
}
</style>

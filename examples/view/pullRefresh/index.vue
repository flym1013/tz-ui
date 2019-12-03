<template lang="">
  <TzPage>
    <tz-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <template slot="pulling">
        <span>(插槽)下拉即可刷新...</span>
      </template>
      <p style='text-align: center; margin-top: 40px;'>刷新次数: {{ count }}</p>
    </tz-pull-refresh>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
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
    padding: 35px 20px;
  }
}
</style>
<style lang="less">
.tz__pull-refresh {
  height: calc(100vh - 50px);
  &-track {
    height: calc(100vh - 50px);
  }
}
</style>

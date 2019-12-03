<template>
  <tzPage>
    <div class="item">
      <h4>加载类型</h4>
      <tz-loading></tz-loading>
      <tz-loading type="spinner"></tz-loading>
    </div>
    <div class="item">
      <h4>自定义颜色</h4>
      <tz-loading color="#1989fa"></tz-loading>
      <tz-loading type="spinner"
                  color="#1989fa"></tz-loading>
    </div>
    <div class="item">
      <h4>加载文案</h4>
      <tz-loading size="24px">加载中。。。</tz-loading>
    </div>
    <div class="item">
      <h4>垂直排列</h4>
      <tz-loading size="24px"
                  vertical>加载中。。。</tz-loading>
    </div>
  </tzPage>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.item{
  margin:0 20px 30px 20px;
  h4{
    font-size:32px;
    color:#666;
    font-weight:400;
  }
}
  .tz__loading{
    display: inline-block;
    margin-right:40px;
    &-vertical {
      display: inline-flex;
    }
  }
</style>

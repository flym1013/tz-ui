<template>
  <tzPage>
    <div class="demo__block">
      <p>基础用法</p>
      <tz-cell title="单元格"
               value="内容"></tz-cell>
      <tz-cell title="单元格"
               value="内容"
               label="描述信息"></tz-cell>
    </div>
    <div class="demo__block">
      <p>单元格大小</p>
      <tz-cell title="单元格"
               size="large"
               value="内容"></tz-cell>
      <div style="height: 4px; width: 100%;"></div>
      <tz-cell title="单元格"
               size="large"
               value="内容"
               label="描述信息"></tz-cell>
    </div>
    <div class="demo__block">
      <p>展示图标</p>
      <tz-cell title="单元格"
               icon="ios-clipboard"
               value="内容"></tz-cell>
    </div>
    <div class="demo__block">
      <p>只设置 value</p>
      <tz-cell>
        <span slot="value">内容</span>
      </tz-cell>
      <div style="height: 4px; width: 100%;"></div>
      <tz-cell value="内容"></tz-cell>
    </div>
    <div class="demo__block">
      <p>展示箭头</p>
      <tz-cell title="单元格"
               rightIcon="ios-arrow-forward"
               ></tz-cell>
      <div style="height: 4px; width: 100%;"></div>
      <tz-cell title="单元格"
               value="内容"
               rightIcon="ios-arrow-forward"
              ></tz-cell>
    </div>
  </tzPage>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.demo__block>p{
    font-size: 28px;
    color: rgba(69,90,100,.6);
    padding: 20px;
    background-color:#f8f8f8;
}
</style>

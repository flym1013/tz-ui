<template>
  <tzPage>
    <div class="demo-block">
      <h4>基础用法</h4>
      <tz-row>
        <tz-col span="8">8</tz-col>
        <tz-col span="8">8</tz-col>
        <tz-col span="8">8</tz-col>
      </tz-row>
      <tz-row>
        <tz-col span="4">4</tz-col>
        <tz-col span="10"
                offset="4"> offset: 4, span: 10</tz-col>
      </tz-row>
      <tz-row>
        <tz-col span="12"
                offset="12">offset: 12, span: 12</tz-col>
      </tz-row>
    </div>
    <div class="demo-block">
      <h4>在列元素之间增加间距</h4>
      <tz-row gutter="20">
        <tz-col span="8">span: 8</tz-col>
        <tz-col span="8">span: 8</tz-col>
        <tz-col span="8">span: 8</tz-col>
      </tz-row>
    </div>
    <div class="demo-block">
      <h4>Flex 布局</h4>
      <tz-row type="flex">
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
      </tz-row>
      <tz-row type="flex"
              justify="center">
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
      </tz-row>
      <tz-row type="flex"
              justify="end">
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
      </tz-row>
      <tz-row type="flex"
              justify="space-between">
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
      </tz-row>
      <tz-row type="flex"
              justify="space-around">
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 6</tz-col>
        <tz-col span="6">span: 7</tz-col>
      </tz-row>
    </div>
  </tzPage>
</template>
<script>
export default {

}
</script>
 <style lang="less" scoped>
 .demo-block{
   margin:0 20px;
   h4{
     font-weight: 400;
     color:rgba(69,90,100,.6);
     padding:30px 0 20px;
   }
 }
 .tz__col {
    color: #fff;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 20px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
</style>

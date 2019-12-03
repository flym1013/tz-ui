<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-search v-model='value' :maxlength='2' clearable  @change='change' @blur='blur' @input='input' placeholder="请输入搜索关键词"></tz-search>
    </div>
    <div class='item'>
      <h2 class='item-h2'>监听对应事件</h2>
      <tz-search v-model='value' showAction disabled placeholder="请输入搜索关键词">
        <!-- <div slot="action">取 消</div> -->
      </tz-search>
    </div>
    <div class='item'>
      <h2 class='item-h2'>高级用法</h2>
      <tz-search v-model='value1' label='地址' showAction useActionSlot shape="round" placeholder="请输入搜索关键词">
        <div slot="action">搜 索</div>
      </tz-search>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      value: '54555',
      value1: '6556656565'
    }
  },
  methods: {
    change() {
      console.log(this.value)
    },
    blur() {
      console.log(this.value)
    },
    input() {
      console.log(this.value)
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
    padding: 35px 15px 15px;
  }
}
</style>

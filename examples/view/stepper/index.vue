<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-stepper v-model='value'></tz-stepper>
    </div>
    <div class='item'>
      <h2 class='item-h2'>步长设置</h2>
      <tz-stepper v-model='value1' step="5"></tz-stepper>
    </div>
    <div class='item'>
      <h2 class='item-h2'>限制输入范围</h2>
      <tz-stepper v-model='value2' min='-8' max='15' ></tz-stepper>
    </div>
    <div class='item'>
      <h2 class='item-h2'>限制输入整数</h2>
      <tz-stepper v-model='value3' integer></tz-stepper>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-stepper v-model='value4' disabled></tz-stepper>
    </div>
    <div class='item'>
      <h2 class='item-h2'>异步变更</h2>
      <tz-stepper v-model='value5' asyncChange @change="onChange"></tz-stepper>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1
    }
  },
  methods: {
    onChange(value) {
      if (this.changing) {
        return
      }

      this.changing = true
      setTimeout(() => {
        this.value = value
        this.changing = false
      }, 500)
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

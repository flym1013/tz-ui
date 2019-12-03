<template lang="">
  <TzPage style="background: #ffffff">
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-rate v-model="value1" @change="onchange1" gutter='10px'></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义图标</h2>
      <tz-rate v-model="value2" @change="onchange2" icon="md-heart" void-icon="md-heart-outline"></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义样式</h2>
      <tz-rate v-model="value3" @change="onchange3" size="25px" color="#f44" voidColor="#eee"></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>半星</h2>
      <tz-rate v-model="value4" @change="onchange4" size="25px" allow-half></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义数量</h2>
      <tz-rate v-model="value5" @change="onchange5" size="25px" :count="8"></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-rate v-model="value6" @change="onchange6" size="25px" disabled></tz-rate>
    </div>
    <div class='item'>
      <h2 class='item-h2'>只读状态</h2>
      <tz-rate v-model="value7" @change="onchange7" size="25px" readonly></tz-rate>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 1,
      value6: 2,
      value7: 4
    }
  },
  methods: {
    onchange1(value) {
      console.log(value)
      console.log(this.value1)
    },
    onchange2(value) {
      console.log(value)
      console.log(this.value2)
    },
    onchange3(value) {
      console.log(value)
      console.log(this.value3)
    },
    onchange4(value) {
      console.log(value)
      console.log(this.value4)
    },
    onchange5(value) {
      console.log(value)
      console.log(this.value5)
    },
    onchange6(value) {
      console.log(value)
      console.log(this.value6)
    },
    onchange7(value) {
      console.log(value)
      console.log(this.value7)
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

<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法{{value}}</h2>
      <tz-slider v-model="value" @change="onChange"></tz-slider>
    </div>
    <div class='item'>
      <h2 class='item-h2'>指定选择范围{{value1}}</h2>
      <tz-slider v-model="value1" @change="onChange1" :min="-50" :max="50" barHeight='1px'></tz-slider>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用{{value2}}</h2>
      <tz-slider v-model="value2" @change="onChange2" disabled></tz-slider>
    </div>
    <div class='item'>
      <h2 class='item-h2'>指定步长{{value3}}</h2>
      <tz-slider v-model="value3" @change="onChange3" :step='10'></tz-slider>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义样式{{value4}}</h2>
      <tz-slider v-model="value4" @change="onChange4" activeColor='red'></tz-slider>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义按钮{{value5}}</h2>
      <tz-slider v-model="value5" @change="onChange5" useButtonSlot activeColor='red'>
        <div slot="button" class="custom-button">{{value5}}</div>
      </tz-slider>
    </div>
    <div class='item' >
      <h2 class='item-h2'>垂直方向{{value6}}</h2>
      <div :style="{ height: '120px', paddingLeft: '30px' }">
        <tz-slider v-model="value6" @change="onChange6" vertical></tz-slider>
      </div>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value1: 0,
      value2: 50,
      value3: 50,
      value4: 50,
      value5: 50,
      value6: 50
    }
  },
  methods: {
    onChange(val) {
      this.value = val
    },
    onChange1(val) {
      this.value1 = val
    },
    onChange2(val) {
      this.value2 = val
    },
    onChange3(val) {
      this.value3 = val
    },
    onChange4(val) {
      this.value4 = val
    },
    onChange5(val) {
      this.value5 = val
    },
    onChange6(val) {
      this.value6 = val
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
  .custom-button {
    width: 52px;
    color: #fff;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    background-color: red;
    border-radius: 200px;
  }
}
</style>

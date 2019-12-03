<template>
  <tzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="onClick1">展示弹出层</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>弹出位置</h2>
      <div>
        <tz-button type="primary" @click="onClick2">顶部弹出</tz-button>
        <tz-button type="primary" @click="onClick3">底部弹出</tz-button>
      </div>
      <div style="margin-top: 20px;">
        <tz-button type="primary" @click="onClick4">左侧弹出</tz-button>
        <tz-button type="primary" @click="onClick5">右侧弹出</tz-button>
      </div>
    </div>
    <tz-popup v-model="isShow1" position="center" width="100px" height="50px" @change="onChange1">内容</tz-popup>
    <tz-popup v-model="isShow2" position="top" height="30%">内容</tz-popup>
    <tz-popup v-model="isShow3" position="bottom" height="30%">内容</tz-popup>
    <tz-popup v-model="isShow4" position="left" width="30%">内容</tz-popup>
    <tz-popup v-model="isShow5" position="right" width="30%">内容</tz-popup>
  </tzPage>
</template>
<script>
export default {
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false
    }
  },
  methods: {
    onClick1() {
      this.isShow1 = true
    },
    onClick2() {
      this.isShow2 = true
    },
    onClick3() {
      this.isShow3 = true
    },
    onClick4() {
      this.isShow4 = true
    },
    onClick5() {
      this.isShow5 = true
    },
    onChange1(val) {
      console.log(val)
      console.log(this.isShow1)
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

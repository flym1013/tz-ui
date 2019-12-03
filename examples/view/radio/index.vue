<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-radio-group  v-model="radio" @change="onChange">
        <tz-radio name="1">单选框1</tz-radio>
        <tz-radio name="2">单选框2</tz-radio>
      </tz-radio-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-radio-group  v-model="radio1" @change="onChange1" disabled>
        <tz-radio name="1">单选框1</tz-radio>
        <tz-radio name="2">单选框2</tz-radio>
      </tz-radio-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义颜色</h2>
      <tz-radio-group  v-model="radio2" @change="onChange2">
        <tz-radio name="1" checkedColor="#07c160">单选框1</tz-radio>
        <tz-radio name="2" checkedColor="#07c160">单选框2</tz-radio>
      </tz-radio-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义图标</h2>
      <tz-radio-group  v-model="radio3" @change="onChange3">
        <tz-radio name="1">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.checked ? icon.active : icon.inactive"
          >
          单选框1</tz-radio>
        <tz-radio name="2">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.checked ? icon.active : icon.inactive"
          >
          单选框2</tz-radio>
      </tz-radio-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>与cell一起用</h2>
      <p>更新中</p>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '2',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  methods: {
    onChange(val) {
      console.log(val)
      console.log(this.radio)
    },
    onChange1(val) {
      console.log(val)
      console.log(this.radio1)
    },
    onChange2(val) {
      console.log(val)
      console.log(this.radio2)
    },
    onChange3(val) {
      console.log(val)
      console.log(this.radio3)
    },
    onChange4(val) {
      console.log(val)
      console.log(this.radio3)
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
  img {
    height: 40px;
  }
}
</style>

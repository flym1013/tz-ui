<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-checkbox class="tz-checkbox" v-model="checked" @change="onChange">复选框</tz-checkbox>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-checkbox class="tz-checkbox" v-model="checked1" @change="onChange1" disabled>复选框</tz-checkbox>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用状态</h2>
      <tz-checkbox-group v-model="checked3" @change="onChange3" disabled>
        <tz-checkbox class="tz-checkbox" v-for="item in arr" :name="item" :key="item">{{item}}</tz-checkbox>
      </tz-checkbox-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义颜色</h2>
      <tz-checkbox class="tz-checkbox" v-model="checked4" @change="onChange4" checkedColor="#07c160">复选框</tz-checkbox>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义图标</h2>
      <tz-checkbox class="tz-checkbox" v-model="checked5" @change="onChange5">
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.inactive"
        >
        复选框</tz-checkbox>
    </div>
    <div class='item'>
      <h2 class='item-h2'>复选框组</h2>
      <tz-checkbox-group v-model="checked8" @change="onChange8">
        <tz-checkbox class="tz-checkbox" v-for="item in arr" :name="item" :key="item">{{item}}</tz-checkbox>
      </tz-checkbox-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>设置最大可选数</h2>
      <tz-checkbox-group v-model="checked6" @change="onChange6" :max="2">
        <tz-checkbox class="tz-checkbox" v-for="item in arr" :name="item" :key="item">{{item}}</tz-checkbox>
      </tz-checkbox-group>
    </div>
    <div class='item'>
      <h2 class='item-h2'>搭配单元格组件使用</h2>
      <p>更新中</p>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      arr: [1, 2, 3],
      checked: true,
      checked1: true,
      checked2: [],
      checked3: [2],
      checked4: true,
      checked5: true,
      checked6: [],
      checked8: []
    }
  },
  methods: {
    onChange(val) {
      console.log(val)
      console.log(this.checked)
    },
    onChange1(val) {
      console.log(val)
      console.log(this.checked1)
    },
    onChange2(val) {
      console.log(val)
      console.log(this.checked2)
    },
    onChange3(val) {
      console.log(val)
      console.log(this.checked3)
    },
    onChange4(val) {
      console.log(val)
      console.log(this.checked4)
    },
    onChange5(val) {
      console.log(val)
      console.log(this.checked5)
    },
    onChange6(val) {
      console.log(val)
      console.log(this.checked6)
    },
    onChange8(val) {
      console.log(val)
      console.log(this.checked8)
    }
  }
}
</script>
<style lang="less" scoped>
.tz-checkbox{
  margin: 10px 0 0 20px;
}
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

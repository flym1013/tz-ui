<template>
  <tzPage>
    <div class='item'>
      <h2 class='item-h2'>提示弹窗</h2>
        <tz-button type="primary" @click="onClick">提示弹窗</tz-button>
        <tz-button type="primary" @click="onClick1">提示弹窗(无标题)</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>确认弹窗</h2>
        <tz-button type="primary" @click="onClick2">确认弹窗</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>异步关闭</h2>
        <tz-button type="primary" @click="onClick3">异步关闭</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>组件调用</h2>
        <tz-button type="primary" @click="show = true">组件调用</tz-button>
        <tz-dialog v-model="show" title="标题" showCancelButton @confirm='confirm'>
          <img :src="image">
        </tz-dialog>
    </div>
  </tzPage>
</template>
<script>
export default {
  data () {
    return {
      image: 'https://img.yzcdn.cn/vant/apple-3.jpg',
      show: false
    }
  },
  methods: {
    onClick() {
      this.$dialog({
        title: '标题',
        message: '代码是写出来给人看的，附带能在机器上运行',
        closeOnClickOverlay: true,
        callback: (action) => {
          console.log(action)
        }
      })
    },
    onClick1() {
      this.$dialog({
        message: '代码是写出来给人看的，附带能在机器上运行'
      })
    },
    onClick2() {
      this.$dialog({
        title: '标题',
        message: '代码是写出来给人看的，附带能在机器上运行',
        showCancelButton: true
      })
    },
    onClick3() {
      this.$dialog({
        title: '标题',
        message: '代码是写出来给人看的，附带能在机器上运行',
        showCancelButton: true,
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            console.log('异步关闭, 2s之后关闭')
            setTimeout(done, 2000)
          } else {
            done()
          }
        }
      })
    },
    confirm() {
      this.show = false
      console.log('555555', this.show)
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

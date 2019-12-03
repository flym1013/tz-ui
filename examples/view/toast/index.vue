<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="onClick">文字提示</tz-button>
      <tz-button type="primary" @click="onClick1">长文字提示</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>加载提示</h2>
      <tz-button type="primary" @click="onClick2">加载提示</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>成功/失败提示</h2>
      <tz-button type="primary" @click="onClick3">成功提示</tz-button>
      <tz-button type="primary" @click="onClick4">失败提示</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义图表</h2>
      <tz-button type="primary" @click="onClick5">自定义图标</tz-button>
      <tz-button type="primary" @click="onClick6">展示图片</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>高级用法</h2>
      <tz-button type="primary" @click="onClick7">高级用法</tz-button>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onClick() {
      this.$toast('提示内容')
    },
    onClick1() {
      this.$toast('这是一条长文字提示，超过一定字数就会换行')
    },
    onClick2() {
      this.$toast({
        mask: true,
        message: '加载中..',
        type: 'loading'
      })
    },
    onClick3() {
      this.$toast({
        message: '成功提示',
        type: 'success'
      })
    },
    onClick4() {
      this.$toast({
        message: '失败提示',
        type: 'fail'
      })
    },
    onClick5() {
      this.$toast({
        message: '自定义图标',
        icon: 'ios-attach',
        type: 'icon'
      })
    },
    onClick6() {
      this.$toast({
        message: '展示图片',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
        type: 'image'
      })
    },
    onClick7() {
      const toast = this.$toast({
        duration: 0,
        message: '倒计时 20 秒',
        type: 'loading'
        // loadingType: 'spinner'
      })
      let second = 20
      console.log(toast)
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.messages = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
          toast.hide()
        }
      }, 1000)
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
    padding: 25px 20px;
  }
}
</style>

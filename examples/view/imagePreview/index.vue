<template lang="">
  <TzPage class="tz-page" style="background: #ffffff;">
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="onClick">预览图片</tz-button>
    </div>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-button type="primary" @click="onClick1">预览图片</tz-button>
      <tz-image-preview v-if="show" v-model="show" :images="images"></tz-image-preview>
    </div>
  </TzPage>
</template>
<script>
const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg'
]
export default {
  data() {
    return {
      show: false,
      images: images
    }
  },
  methods: {
    onClick(position) {
      this.$imagePreview({
        images: images,
        closeOnPopstate: true,
        startPosition: typeof position === 'number' ? position : 0
      })
    },
    onClick1() {
      this.show = true
    }
  }
}
</script>
<style lang="less" scoped>
.tz-checkbox{
  margin: 10px 0 0 20px;
}
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

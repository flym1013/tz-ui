<template lang="">
  <TzPage class="tz-page" style="background: #ffffff;">
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-swipe :autoplay="3000" indicator-color="white">
        <tz-swipe-item>1</tz-swipe-item>
        <tz-swipe-item>2</tz-swipe-item>
        <tz-swipe-item>3</tz-swipe-item>
        <tz-swipe-item>4</tz-swipe-item>
      </tz-swipe>
    </div>
    <div class='item'>
      <h2 class='item-h2'>图片懒加载</h2>
      <tz-swipe :autoplay="3000">
        <tz-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-lazy="image">
        </tz-swipe-item>
      </tz-swipe>
    </div>
    <div class='item'>
      <h2 class='item-h2'>监听事件</h2>
      <tz-swipe
        indicator-color="white"
        @change="onChange"
      >
        <tz-swipe-item>1</tz-swipe-item>
        <tz-swipe-item>2</tz-swipe-item>
        <tz-swipe-item>3</tz-swipe-item>
        <tz-swipe-item>4</tz-swipe-item>
      </tz-swipe>
    </div>
    <div class='item'>
      <h2 class='item-h2'>纵向滚动</h2>
      <tz-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        class="item-swipe--vertical"
      >
        <tz-swipe-item>1</tz-swipe-item>
        <tz-swipe-item>2</tz-swipe-item>
        <tz-swipe-item>3</tz-swipe-item>
        <tz-swipe-item>4</tz-swipe-item>
      </tz-swipe>
    </div>
    <div class='item'>
      <h2 class='item-h2'>设置滑块大小</h2>
      <tz-swipe
        :autoplay="3000"
        :width="300"
        :loop="false"
        indicator-color="white"
      >
        <tz-swipe-item>1</tz-swipe-item>
        <tz-swipe-item>2</tz-swipe-item>
        <tz-swipe-item>3</tz-swipe-item>
        <tz-swipe-item>4</tz-swipe-item>
      </tz-swipe>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义指示器</h2>
      <tz-swipe @change="onChange" :showIndicators = false>
        <tz-swipe-item>1</tz-swipe-item>
        <tz-swipe-item>2</tz-swipe-item>
        <tz-swipe-item>3</tz-swipe-item>
        <tz-swipe-item>4</tz-swipe-item>

        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </tz-swipe>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ]
    }
  },
  methods: {
    onChange(index) {
      this.current = index
      console.log(index, this.current)
      this.$toast({
        message: index
      })
    }
  }
}
</script>
<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #ffffff;
  font-size: 12px;
  background: rgba(0, 0, 0, .1);
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
  .tz__swipe {
    cursor: pointer;

    &-item {
      color: #ffffff;
      font-size: 40px;
      line-height: 300px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 480px;
      padding: 60px 120px;
      background-color: #ffffff;
      pointer-events: none;
    }
  }

  &-swipe--vertical {
    height: 400px;

    .tz-swipe-item {
      line-height: 400px;
    }
  }
}
</style>

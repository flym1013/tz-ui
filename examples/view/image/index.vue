<template lang="">
  <TzPage class="tz-page" style="background: #ffffff;">
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-image :src="image" width="100" height="100"></tz-image>
    </div>
    <div class='item'>
      <h2 class='item-h2'>填充模式</h2>
      <tz-row gutter="20">
        <tz-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <tz-image
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </tz-col>
      </tz-row>
    </div>
    <div class='item'>
      <h2 class='item-h2'>加载中提示</h2>
      <tz-row gutter="20">
        <tz-col span="8">
          <tz-image
            width="100%"
            height="27vw"
          />
          <div class="text">默认提示</div>
        </tz-col>
        <tz-col span="8">
          <tz-image
            width="100%"
            height="27vw"
          >
            <tz-loading type="spinner" slot="loading"></tz-loading>
          </tz-image>
          <div class="text">自定义提示</div>
        </tz-col>
      </tz-row>
    </div>
    <div class='item'>
      <h2 class='item-h2'>加载失败提示</h2>
      <tz-row gutter="20">
        <tz-col span="8">
          <tz-image
            width="100%"
            height="27vw"
            :src="images"
          />
          <div class="text">默认提示</div>
        </tz-col>
        <tz-col span="8">
          <tz-image
            width="100%"
            height="27vw"
            :src="images"
          >
            <tz-icon type="ios-alert" slot="error" size="30px"></tz-icon>
          </tz-image>
          <div class="text">自定义提示</div>
        </tz-col>
      </tz-row>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      images: '',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    }
  },
  methods: {
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

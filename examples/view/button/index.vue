<template>
  <TzPage>
    <div class="item">
      <div class="item__row">
        <h4>按钮类型</h4>
        <p>
          <tz-button type="default">默认按钮</tz-button>
          <tz-button type="primary">主要按钮</tz-button>
          <tz-button type="info">信息按钮</tz-button>
        </p>
        <p>
          <tz-button type="danger">危险按钮</tz-button>
          <tz-button type="warning">警告按钮</tz-button>
        </p>
      </div>
      <div class="item__row">
        <h4>朴素按钮</h4>
        <p>
          <tz-button plain
                     type="primary">朴素按钮</tz-button>
          <tz-button plain
                     type="danger">朴素按钮</tz-button>
        </p>
      </div>
      <div class="item__row">
        <h4>细边框</h4>
        <p>
          <tz-button hairline
                     plain
                     type="primary">细边框按钮</tz-button>
          <tz-button hairline
                     plain
                     type="danger">细边框按钮</tz-button>
        </p>
      </div>
      <div class="item__row">
        <h4>禁用状态</h4>
        <p>
          <tz-button type="primary"
                     disabled>禁用状态</tz-button>
          <tz-button type="danger"
                     disabled>禁用状态</tz-button>
        </p>
      </div>
      <!-- <div class="item__row">
        <h4>加载状态</h4>
        <p>
          <tz-button loading
                     type="primary"></tz-button>
          <tz-button loading
                     loading-type="spinner"
                     :loading-text="loaddingtext"
                     type="danger"></tz-button>
        </p>
      </div> -->
      <!-- <div class="item__row">
        <h4>图标按钮</h4>
        <p>
          <tz-button icon="star-o"
                     :text="disabled"></tz-button>
          <tz-button round
                     type="danger"
                     :text="disabled"></tz-button>
        </p>
      </div> -->
      <div class="item__row">
        <h4>按钮形状</h4>
        <p>
          <tz-button type="primary"
                     square>方形按钮</tz-button>
          <tz-button type="danger"
                     round>圆形按钮</tz-button>
        </p>
      </div>
      <div class="item__row item_row-size">
        <h4>按钮尺寸</h4>
        <p>
          <tz-button size="large"
                     type="primary">大号按钮</tz-button>
          <tz-button size="normal"
                     type="primary">普通按钮</tz-button>
          <tz-button size="small"
                     type="primary">小型按钮</tz-button>
          <tz-button size="mini"
                     type="primary">迷你按钮</tz-button>
        </p>
      </div>
    </div>
  </TzPage>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handle (event) {
      console.log('event', event)
    }
  }
}
</script>

<style lang="less" scoped>
  .item__row{
    padding:0 40px;
    h4{
      font-size:36px;
      line-height: 1;
      font-weight: 400;
      color:#999;
      margin-bottom:40px;
    }
    p{
      margin-bottom:20px;
      button{
        margin-right:20px;
      }
    }
  }
  .item_row-size .tz__button{
    margin-bottom:20px;
  }

</style>

<template lang="">
  <TzPage>
    <div class='item'>
      <h2 class='item-h2'>基础用法</h2>
      <tz-field v-model='name' clearable placeholder="请输入用户名"></tz-field>
    </div>
    <div class='item'>
      <h2 class='item-h2'>自定义类型</h2>
      <tz-field v-model='name1' placeholder="请输入用户名" label='用户名' clearable required rightIcon='ios-alert'></tz-field>
      <tz-field v-model='password' placeholder="请输入密码" label='密码' type='password' required></tz-field>
    </div>
    <div class='item'>
      <h2 class='item-h2'>禁用输入框</h2>
      <tz-field v-model='name1' placeholder="输入框已禁止" disabled label='用户名' leftIcon='ios-person'></tz-field>
    </div>
    <div class='item'>
      <h2 class='item-h2'>错误提示</h2>
      <tz-field v-model='name1' placeholder="请输入用户名" error label='用户名'></tz-field>
      <tz-field v-model='phoneNumber' placeholder="请输入用户名" label='手机号' errorMessage='手机号码格式错误'></tz-field>
    </div>
    <div class='item'>
      <h2 class='item-h2'>高度自适应</h2>
      <tz-field v-model='name2' placeholder="请输入留言" type='textarea' autosize label='留言'></tz-field>
    </div>
    <div class='item'>
      <h2 class='item-h2'>插入按钮</h2>
      <tz-field v-model='name3' placeholder="请输入短信验证码" label='短信验证码' labelWidth='130px'>
        <tz-button slot="button" type="primary" size="mini">发送</tz-button>
        <!-- <div slot='button'>发送验证码</div> -->
      </tz-field>
    </div>
  </TzPage>
</template>
<script>
export default {
  data() {
    return {
      name: '小米',
      name1: '',
      name2: '',
      name3: '',
      password: '',
      phoneNumber: '1387852'
    }
  }
}
</script>
<style lang="less" scoped>
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

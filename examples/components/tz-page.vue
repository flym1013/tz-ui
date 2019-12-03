<template>
  <div class="tz-page">
    <Title />
    <slot />
  </div>
</template>

<style lang="less" scoped>
.tz-page {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #f8f8f8;
  padding-top: 40Px;
}
</style>

<template>
  <div class="chengxin">
    <img src="@/assets/bj_Aboutus@1x.png" alt="">
    <div class="chengxin-content">
      <p class="p1">—— 诚信、创新、专业、责任、分享 ——</p>
      <p class="p2">始于2011年，注册资本1千万，<br>
业绩持续快速增长</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chengxin {
  background-color: #D3F0E2;
  position: relative;
  .chengxin-content {
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    .p1 {
      color: #000000;
      font-size: 15px;
      text-align: center;
      font-weight: bold;
    }
    .p2 {
      color: #666666;
      font-size: 14px;
      padding: 0 0 0 24px;
      line-height: 30px;
    }
  }
}
</style>
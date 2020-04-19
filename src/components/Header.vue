<template>
  <div>
    <div class="menu-mark" v-show="isShowMenu"></div>
    <transition name="fade">
      <div class="menu-mark-move" v-if="isShowMenu">
        <div class="menu-mark-close"  @click="isShowMenu = !isShowMenu"></div>
        <ul class="menu-mark-nav">
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/solution">解决方案</router-link></li>
          <li><router-link to="/cooperation">合作客户</router-link></li>
          <li><router-link to="/join">加入我们</router-link></li>
          <li><router-link to="/contactUs">联系我们</router-link></li>
        </ul>
      </div>
    </transition>
    <div class="header">
      <div><img src="@/assets/logo_Antiwhite@1x.png" width="100" alt=""></div>
      <div @click="isShowMenu = !isShowMenu">
        <div class="menu"></div>
      </div>
    </div>
    <div class="header bfff">
      <div><img src="@/assets/logo@1x.png" width="100" alt=""></div>
      <div @click="isShowMenu = !isShowMenu">
        <div class="menu"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowMenu: false
    }
  },
}
</script>
<style lang="scss" scoped>

  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 74px;
    width: 375px;
    margin: auto;
  }
  .menu{
      width: 25px;
      height: 3px;
      background: #fff;
      position: relative;
  }
  .menu::before{
      position: absolute;
      top: -8px;
      content: '';
      width: 25px;
      height: 3px;
      background: #fff;
  }
  .menu::after{
      position: absolute;
      bottom: -8px;
      content: '';
      width: 25px;
      height: 3px;
      background: #fff;
  }
.menu-mark {
  background:rgba(0,0,0,0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  opacity: 1; 
}
.menu-mark-nav {
    background-color: #fff;
    height: 100%;
    padding: 78px 0 0 33px;
    a {
      font-size: 19px;
      color: #000;
      margin-bottom: 35px;
      font-weight: bold;
      display: block;
    }
  }
  .menu-mark-close {
    background-image: url('~@/assets/icon_x.png');
    background-repeat: no-repeat;
    width: 17px;
    height: 17px;
    position: absolute;
    background-size: 100%;
    right: 23px;
    top: 23px;
  }
  .menu-mark-move {
    height: 100%;
    transition: 0.5s all;
    transform: translate(45px,0);
    width: 330px;
    position: absolute;
    z-index: 10000;
  }
  .bfff {
    background-color: #fff;
    opacity: 0;
    .menu{
        background: #999;
    }
    .menu::before{
        background: #999;
    }
    .menu::after{
        background: #999;
    }
  }

.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(375px,0);
}
</style>
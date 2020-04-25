<template>
  <div :class="isIndex ? '' : 'hidde'">
    <div class="menu-mark" v-show="isShowMenu" @click="isShowMenu = false"></div>
    <transition name="fade">
      <div class="menu-mark-move" v-if="isShowMenu">
        <div class="menu-mark-close"  @click="isShowMenu = !isShowMenu"></div>
        <ul class="menu-mark-nav">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/solution">解决方案</router-link></li>
          <li><router-link to="/cooperation">合作客户</router-link></li>
          <li><router-link to="/join">加入我们</router-link></li>
          <li><router-link to="/contactUs">联系我们</router-link></li>
        </ul>
      </div>
    </transition>
    <div class="header" v-if="isIndex">
      <div><img src="@/assets/logo_Antiwhite@1x.png" width="100" alt=""></div>
      <div class="menu-wrap" @click="isShowMenu = !isShowMenu">
        <div class="menu"></div>
      </div>
    </div>
    <div :class="isIndex ? 'header bfff' : 'header bfff2'" ref="bfff">
      <div><img src="@/assets/logo@1x.png" width="100" alt=""></div>
      <div class="menu-wrap"  @click="isShowMenu = !isShowMenu">
        <div class="menu"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowMenu: false
    }
  },
  watch: {
    isShowMenu (val) {
      if (val) {
        console.log(val)
      }
      
    }
  },
  destroyed () {
    window.onscroll = null
  },
  mounted() {
    if (this.isIndex) {
      window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        this.$refs.bfff.style.opacity = scrollTop/100
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.hidde {
  height: 74px;
}
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
    // width: 375px;
    margin: auto;
  }
  .menu{
      width: 25px;
      height: 3px;
      background: #fff;
      position: relative;
      display: inline-block;
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
    right: 0;
    width: 330px;
    position: fixed;
    z-index: 10000;
  }
  .bfff, .bfff2 {
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
  .bfff2 {
    opacity: 1;
  }
.menu-wrap {
  height: 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  right: -100%;
}
</style>
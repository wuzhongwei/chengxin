<template>
  <div class="wap">
    <div class="banner">
      <img src="@/assets/banner.png" alt="">
      <div class="arrow bounce"></div>
      <div class="it">IT智慧解决方案+IT创新服务</div>
    </div>
    <Chengxing></Chengxing>
    <div class="about-us">
      <div class="pl24">
        <div class="about-en">About us</div>
        <div class="about-cn">关于我们</div>
      </div>
      <div class="pd20">
        <div class="swiper-container">
          <div class="swiper-wrapper list">
            <div class="swiper-slide list-item">
              <img class="list-item-img" src="@/assets/wap_aboutus01.png" alt="">
                <p class="name">团队成员</p>
                <p class="content">资深技术专家组成的销售和管理团队，成员稳定，金融行业背景丰富</p>
            </div>
            <div class="swiper-slide list-item">
              <img class="list-item-img" src="@/assets/wap_aboutus02.png" alt="">
                <p class="name">公司资质</p>
                <p class="content">在网络、云计算、协作通信、信息安全、IT管理等领域， 提供 新IT智慧解决方案 和 综合IT服务</p>
            </div>
            <div class="swiper-slide list-item">
              <img class="list-item-img" src="@/assets/wap_aboutus03.png" alt="">
                <p class="name">专业化技术认证</p>
                <p class="content">全公司共有多项各类技术认证，涵盖IT基础架构的各个方面</p>
            </div>
            <div class="swiper-slide list-item ch-warp">
              <div class="ch-w">
                <div class="more-btn"></div>
                <div>查看更多</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <ul class="list">
        <li class="list-item">
          <img src="@/assets/wap_aboutus01.png" alt="">
          <p class="name">团队成员</p>
          <p class="content">资深技术专家组成的销售和管理团队，成员稳定，金融行业背景丰富</p>
        </li>
      </ul> -->
    </div>
    <div class="wrap">
      <h2>Solution</h2>
      <p>解决方案</p>
      <div class="jicheng">
        <img src="@/assets/ing_jichf.png" alt="">
      </div>
      <img class="mt42" src="@/assets/bg1.jpg" alt="">
      <h2 class="mt60">Service Proposal</h2>
      <p>服务方案</p>
      <div class="jicheng">
        <img src="@/assets/ing_fuwu.png" alt="">
      </div>
      <img class="mt42" src="@/assets/bg2.jpg" alt="">
      <img class="mt42" src="@/assets/img_fuwuchennuo.png" alt="">
    </div>
    <div class="pr">
      <div class="cooperative-wrap">
        <p class="cooperative-en">Cooperative client</p>
        <p class="cooperative-cn">合作客户</p>
      </div>
      <a class="more-user">更多客户</a>
      <img class="mt42 row-r" src="@/assets/wap_hezuokehu.png" alt="">
    </div>
    <Footer></Footer>
    
    <!-- Swiper -->
  </div>
</template>
<script>
import Chengxing from './Chengxin'
import Footer from './Footer'
export default {
  components: {
    Chengxing,
    Footer
  },
  mounted () {
    new window.Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });   
  }
}
</script>

<style lang="scss" scoped>
.wap {
  width: 375px;
  margin: 0 auto;
  .cooperative-en {
    color: #000;
    font-size: 24px;
    margin-bottom: 5px;
  }
  .more-user {
    position: absolute;
    right: 0;
    top: 120px;

  }
  .cooperative-wrap {
    position: absolute;
    left: 24px;
    top: 76px;
  }
  .cooperative-cn {
    font-size: 17px;
  }
  .row-r {
    float: right;
  }
  .pr {
    position: relative;
    overflow: hidden;
  }
  .mt60 {
    margin-top: 60px;
  }
  .mt42 {
    margin-top: 42px;
  }
  .banner {
    position: relative;
    .it {
      font-size: 17px;
      color: #fff;
      position: absolute;
      bottom: 91px;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
  .arrow {
    background-image: url('~@/assets/icon_downarrow.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 25px;
    height: 12px;
    position: absolute;
    bottom: 63px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .about-en {
    color: #000;
    font-size: 24px;
    margin: 0 0 5px;
    
  }
  .pl24{
    padding-left: 24px;
  }
  .about-cn {
    font-size: 17px;
    color: #000;
    font-weight: bold;
  }
  .about-us {
    background-color: #F8F8F8;
    padding-top: 60px;
  }
  .list {
    .list-item {
      float: left;
      width: 225px;
      background-color: #fff;
      color: #222222;
      min-height: 330px;
    }
    .name {
      font-size: 15px;
      margin: 20px 0 34px;
      text-align: center;
      font-weight: bold;
    }
    .content {
      font-size: 13px;
      line-height: 24px;
      padding: 0 25px;
    }
  }
  .wrap {
    background-color: #020129;
    padding: 30px 24px;
    color: #fff;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 17px;
    }
  }
  .jicheng {
    padding: 0 67px 0 40px;
  }
  .pd20 {
    padding: 48px 0 100px;
  }
  .list-item-img {
    width: 450px;
  }
  .ch-warp {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
    font-size: 15px;
    .more-btn {
      background-image: url('~@/assets/icon_Viewmore.png');
      background-repeat: no-repeat;
      background-size: contain;
      width: 38px;
      height: 38px;
      margin: 0 auto 19px;
    }
  }
}


</style>
<template>
  <div class="about w375">
    <div class="join-title">基金客户</div>
    <div class="about-content">
      <img src="@/assets/img_jijingkehu.png" alt="">
    </div>
    <div class="join-title">其他金融客户</div>
    <div class="about-content none">
      <img src="@/assets/img_qitajingrongkehu.png" alt="">
    </div>
<Contact></Contact>
<Footer></Footer>
  </div>
</template>
<script>
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  components: {
    Contact,
    Footer
  },
}
</script>
<style lang="scss" scoped>
.about {
  background-color: #F8F8F8;
  .about-title {
    line-height: 110px;
    text-align: center;
    color: #000;
    font-size: 17px;
    font-weight: bold;
    background-color: #fff;
    margin-top: 60px;
    margin-bottom: 5px;
  }
  .about-content {
    background-color: #fff;
    padding: 45px 40px;
    margin-bottom: 60px;
  }

  .about-content-title {
    color: #262626;
    font-size: 15px;
    font-weight: bold;
  }
  .about-content-d {
    // margin-bottom: 60px;
    font-size: 13px;
    line-height: 26px;
  }
  .join-title {
    color: #000;
    font-size: 19px;
    line-height: 110px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #fff;
  }
  .join-content {
    background-color: #fff;
  }
  .none {
    margin-bottom: 0;
  }
}
</style>
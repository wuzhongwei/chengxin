<template>
  <div class="about w375">
    <Header></Header>
    <div class="join-title">上海市虹口区大连路839号
合生财富广场A座903室</div>
    <div class="about-content">
      <img src="@/assets/img_map.png" alt="">
      <div class="hopne">
        <p>邮 编：200127 </p>
        <p>电话：＋<a href="tel:862150213251">86 21 50213251</a></p>
        <p>传真：＋86 21 50213261</p>
        <p>客服邮箱：services@chinahorn.com </p>

      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
}
</script>
<style lang="scss" scoped>
.about {
  background-color: #F8F8F8;
  .hopne {
    margin-top: 35px;
    p {
      margin-bottom: 10px;
    }
  }
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
    padding: 40px 24px;
    margin-bottom: 60px;
  }

  .about-content-title {
    color: #262626;
    font-size: 15px;
    font-weight: 500;
  }
  .about-content-d {
    // margin-bottom: 60px;
    font-size: 13px;
    line-height: 26px;
    color: #222;
  }
  .join-title {
    color: #000;
    font-size: 19px;
    height: 110px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 65px;
    margin-top: 20px;
  }
  .join-content {
    background-color: #fff;
  }
  .none {
    margin-bottom: 0;
  }
}
</style>
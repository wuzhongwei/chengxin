<template>
  <div class="about w375">
    <Header></Header>
    <div class="join-title">安全集成解决方案</div>
    <div class="about-content">
      <img src="@/assets/img_jiejiefa.png" alt="">
      <p class="about-content-title">方案概述</p>
      <div class="about-content-d">
应用虚拟化是按需交付应用程序的解决方案，用于在数据中心集中管理应用程序，并即时向任何地方、使用任何设备的用户交付应用。采用应用虚拟化基础架构软件可有效解决目前金融行业所面临的普遍问题，可以实现应用、网络架构的灵活扩展。在保护现有系统完整性的前提下，帮助用户建立高效、安全、稳定的、可按需扩展的应用服务基础架构信息系统，真正实现应用和信息的价值，并提升企业信息系统可控性、灵活性和降低企业信息化运营维护成本。
</div>
<p class="about-content-title">典型应用场景</p>
<div class="about-content-d">
1、 动态应用交付<br>
2、 单一实例应用管理<br>
3、 任何设备，任何地方访问应用<br>
4、 以安全为出发点设计
</div>
<p class="about-content-title">价值意义</p>
<div class="about-content-d">
1、 提升ＩＴ生产力，简化IT资源运维手段，让终端用户可以安全、便捷、即时的访问应用。<br>
2、 集中化管理IT资源，实现IT资源投资准确评估，最大限度地利用服务器计算性能，避免IT投资浪费。<br>
3、 所有数据保存在数据中心，规避信息孤岛，加快了数据整合速度，为经营提供全面、及时的决策依据，将信息应用价值最大化。<br>
4、 将终端用户的体验变得简单，降低了出差成本，提高工作效率。
</div>
    </div>
    <Contact></Contact>
    <router-link to="/cooperation"><Footer></Footer></router-link>
  </div>
</template>
<script>
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: {
    Contact,
    Footer,
    Header
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
    padding: 45px 24px;
    // margin-bottom: 60px;
  }

  .about-content-title {
    color: #222;
    font-size: 15px;
    font-weight: 500;
    margin-top: 45px;
    
  }
  .about-content-d {
    // margin-bottom: 60px;
    font-size: 14px;
    line-height: 26px;
    color: #222;
  }
  .join-title {
    color: #000;
    font-size: 19px;
    line-height: 110px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #fff;
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
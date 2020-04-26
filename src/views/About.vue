<template>
  <div class="about w375">
    <Header></Header>
    <Chengxing></Chengxing>
    <div class="about-title">金融行业软件及系统集成解决方案提供商</div>
    <div class="about-content">
      <p class="about-content-title">关于成号</p>
      <div class="about-content-d">
上海成号信息科技有限公司是一家专注于为金融行业提供行业应用软件和信息系统集成的综合解决方案提供商，致力于行业业务和技术创新，并力争为行业客户提供最优质的服务，公司客户涉及证券、基金、资管、私募、财富管理、中小贷等多个金融领域。
“诚信、创新、专业、责任、分享”是我们的价值观。
</div>
<p class="about-content-title">公司介绍</p>
      <div class="about-content-d">
成立于 2011 年，注册资本1千万，业绩持续快速 增长 基本信息：80%团队成员有长期为金融企业服务的经验，大部分成员都在信息技术行业有10年以上的工作经验及大型项目实施和管理经验。 公司目标：力争成为专业的金融行业应用软件及IT信息解决方案提供商，专注于行业业务和技术创新，并力争为行业客户提供最优质的服务。 公司客户：公司客户涉及证券、基金、信托、资管、私募、财富管理、第三方销售、信贷等多个金融领域。
</div>
<p class="about-content-title">服务宗旨</p>
      <div class="about-content-d">
上海成号坚持以持续创新，提供高品质服务，为客户创造价值的经营理念，使客户在激烈的竞争中获得优势。我们通过以下几方面的实现从而使我们的服务宗旨和目标得以实现。
1、尽力取得最高的客户满意度--通过上海成号专业化的优质的服务，协助客户去赢得和保持竞争优势，并取得最佳的经济效益；
2、针对所有客户树立一致的服务形象--为任何客户都提供同样高水平的技术支持和专业的服务支持；
3、拥有技术熟练、高度敬业的专业服务队伍--上海成号力争在管理应用软件业务及相匹配的服务均拥有优质的人力资源。
</div>
    </div>
<Contact></Contact>
<router-link to="/solution"><Footer></Footer></router-link>
  </div>
</template>
<script>
import Chengxing from '@/components/Chengxin'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: {
    Chengxing,
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
    font-weight: 500;
    background-color: #fff;
    margin-top: 60px;
    margin-bottom: 5px;
  }
  .about-content {
    background-color: #fff;
    padding: 45px 40px;
  }
  .about-content-title {
    color: #262626;
    font-size: 15px;
    font-weight: 500;
  }
  .about-content-d {
    margin-bottom: 60px;
    font-size: 14px;
    line-height: 26px;
    color: #262626;
  }
  .about-content-d:last-child {
    margin-bottom: 0;
  }
}
</style>
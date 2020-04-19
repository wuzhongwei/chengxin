<template>
  <div class="about w375">
     <Header></Header>
    <div class="join-title">.net 软件开发实习生</div>
    <div class="about-content">
      <p class="about-content-title">岗位职责：</p>
      <div class="about-content-d">负责公司内部信息系统的开发、运维工作；</div>
      <p class="about-content-title">任职资格：</p>
      <div class="about-content-d">
1、 全日制正规院校计算机相关专业大三、大四学生；<br>
2、 理解面向对象开发思想，有实际ASP.net开发经验，并愿意向.net软件工程师发展；<br>
3、 了解SQLServer数据库；<br>
4、 理论知识扎实，动手能力强，能服从工作安排，具有良好沟通和团队精神，独立分析与解决问题的能力；<br>
5、 积极向上，勤奋好学；</div>
    </div>
    <div class="join-title">.net 软件开发工程师</div>
    <div class="about-content">
      <p class="about-content-title">岗位职责：</p>
      <div class="about-content-d">1、精通Asp.net(C#) ,javascript, css, Ajax编程技术，熟悉Jquery者优先；<br> 2、熟悉SQLServer/Oracle数据库（二选一），T-SQL； <br>3、熟悉ORM技术，有NHibernate编程经验优先； <br>4、熟悉面向对象知识，有良好的代码风格； <br>5、有金融软件项目开发经验优先；</div>
      <p class="about-content-title">任职资格：</p>
      <div class="about-content-d">
1、一年以上B/S开发经验；<br>
2、良好的阅读能力、理解能力、学习能力，思路清晰，工作规范；<br>
3、具有良好的编程习惯；<br>
4、良好的团队精神、沟通能力；</div>
    </div>
    <div class="join-title">系统工程师</div>
    <div class="about-content">
      <p class="about-content-title">职位描述：</p>
      <div class="about-content-d">
1、熟悉Windows Server 2003/2008/2008 R2操作系统的部署、维护、故障排查；<br>
2、熟悉微软企业级产品，AD、Exchange2007/2010/2013；<br>
3、具备良好的沟通和团队协作能力；<br>
4、优秀应届毕业生或一年左右相关工作经验，有上述产品相关证书或微软MCP证书或MCSE证书者优先；
      </div>
      
    </div>
    <div class="join-title">网络工程师</div>
    <div class="about-content">
      <p class="about-content-title">岗位职责：</p>
      <div class="about-content-d">
1、 承担项目的实施、维护、优化等工作；<br>
2、 为客户提供专业、规范的技术支持服务和技术培训；
      </div>
      <p class="about-content-title">任职资格：</p>
      <div class="about-content-d">

1、二年以上网络项目实施工作经验，具有丰富的故障排查经验；<br>
2、 具备扎实的网络方面的理论基础知识.熟练掌握计算机网络原理，组网技术，熟悉华为、H3C交换机.路由器.主流防火墙等网络设备的配置和管理，有相关认证者优先；<br>
3、 精通TCP/IP协议通信原理和协议分析工具，熟悉网络故障/问题/隐患的诊断分析方法，熟悉网络安全、性能和质量优化方法；<br>
4、 良好的人际交往和沟通能力，具备独立负责组织.实施集成项目的能力；<br>
5、 具备良好的团队合作精神，高度的责任感，善于沟通，有创新精神，能够承受压力；
      </div>
      
    </div>
<Contact></Contact>
<router-link to="/contactUs"><Footer></Footer></router-link>
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
    padding: 45px 40px;
    margin-bottom: 60px;
  }
  &.about-content:last-child{
margin-bottom: 0;
  }
  .about-content:last-child {
    margin-bottom: 0;
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
    margin-top: 20px;
  }
  .join-content {
    background-color: #fff;
  }
}
</style>
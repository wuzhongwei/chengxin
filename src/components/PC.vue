<template>
	<div class="pc">
		<div class="banner" ref="test">
			<div class="logo"></div>
			<div class="nav">
				<p>
					<a class="active" href="javascript:;">首页</a>
					<a @click="handleScrollTo('#aboutUs')" href="javascript:;">关于我们</a>
					<a @click="handleScrollTo('#solution')" href="javascript:;">解决方案</a>
					<a @click="handleScrollTo('#cooperative')" href="javascript:;">合作客户</a>
				</p>
			</div>
			<div class="banner-content">
				<h1 class="h1">科技助力金融</h1>
				<h2 class>成号科技--可信赖的金融技术服务提供商</h2>
				<h3 class>IT智慧解决方案+IT创新服务</h3>
				<p class="arrow bounce" @click="nextScreen"></p>
			</div>
		</div>
		<div class="pc-content">
			<div class="container">
				<div class="dis">
					<div class="chengxin wow bounceInLeft">—— 诚信、创新、专业、责任、分享 ——</div>
					<div class="chengli wow bounceInLeft">
						<p>成立于2011年,</p>
						<p>注册资本1千万</p>
						<p>业绩持续快速增长</p>
					</div>
					<img class="wow bounceInRight" src="@/assets/img_Aboutus.png" alt />
				</div>
			</div>

			<div id="aboutUs" class="about-us container">
				<h2 class>About us</h2>
				<div class="about-more">
					<div class="about-l">关于我们</div>
					<div class="more" @click="show = !show">更多</div>
				</div>
				<div class="row">
					<div class="col-4" @click="show = !show">
						<div class="box wow swing">
							<img src="@/assets/img_Aboutus01.png" alt />
							<div class="pd10">
								<div class="name">团队成员</div>
								<p>资深技术专家组成的销售和管理团队，成员稳定，金融行业背景丰富</p>
							</div>
						</div>
					</div>
					<div class="col-4" @click="show = !show">
						<div class="box wow shake">
							<img src="@/assets/img_Aboutus02.png" alt />
							<div class="pd10">
								<div class="name">公司资质</div>
								<p>在网络、云计算、协作通信、信息安全、IT管理等领域， 提供 新IT智慧解决方案 和 综合IT服务</p>
							</div>
						</div>
					</div>
					<div class="col-4" @click="show = !show">
						<div class="box wow swing">
							<img src="@/assets/img_Aboutus03.png" alt />
							<div class="pd10">
								<div class="name">专业化技术认证</div>
								<p>全公司共有多项各类技术认证，涵盖IT基础架构的各个方面</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="warp" id="solution">
			<div class="container">
				<h2 class="warp-h2">Solution</h2>
				<div class="warp-tip">
					<div class="warp-h3">解决方案</div>
					<div class="more" @click="show = !show">更多</div>
				</div>
				<img class="mt130 wow fadeIn" src="@/assets/img_jichengfangan.png" alt />
				<h2 class="warp-h2 mt356">Service Proposal</h2>
				<div class="warp-tip">
					<div class="warp-h3">服务方案</div>
					<div class="more" @click="show = !show">更多</div>
				</div>
				<img class="mt130 wow bounceInRight" src="@/assets/img_fuwufangan.png" alt />
				<div class="pledge wow bounceInDown">服务承诺</div>
				<div class="row">
					<div class="col-4 pledge-center">
						<div data-wow-delay="0.5s" class="yuan wow bounceInUp">服务承诺</div>
						<div class="wow bounceInLeft">
							<dl class="pledge-dl">
								<dt>微软</dt>
								<dd>企业活动目录</dd>
								<dd>数据库</dd>
								<dd>操作系统</dd>
								<dd>企业统一消息系统</dd>
							</dl>
							<dl class="pledge-dl">
								<dt>网络服务</dt>
								<dd>路由、交换网络服务</dd>
								<dd>混合云网络服务</dd>
								<dd>网络流量/业务性能分析服务</dd>
								<dd>存储网络服务</dd>
							</dl>
						</div>
					</div>
					<div class="col-4 pledge-center">
						<div data-wow-delay="0.5s" class="yuan wow rollIn">精细化</div>
						<div class="wow bounceInLeft">
							<dl class="pledge-dl">
								<dt>虚拟化、云桌面服务</dt>
								<dd>Vmware/Citirix虚拟化系统服务</dd>
								<dd>公有云、混合云体系软件系统服务</dd>
							</dl>
							<dl class="pledge-dl">
								<dt>安全服务</dt>
								<dd>等保服务</dd>
								<dd>风险评估服务(漏洞扫描等）</dd>
								<dd>渗透测试</dd>
								<dd>安全运维调优加固</dd>
							</dl>
						</div>
					</div>
					<div class="col-4 pledge-center">
						<div data-wow-delay="0.5s" class="yuan wow bounceInDown">稳定</div>
						<div class="wow bounceInLeft">
							<dl class="pledge-dl">
								<dt>Linux及开源服务</dt>
								<dd>Linux系统支撑服务</dd>
							</dl>
							<dl class="pledge-dl">
								<dt>开源大数据</dt>
								<dd>大数据架构系统服务</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="cooperative" class="cooperative">
			<div class="container">
				<div class="cooperative-client">
					<h2>Cooperative client</h2>
					<h3>合作客户</h3>
				</div>
			</div>
			<img class="r wow bounceInUp" src="@/assets/img_hezuokehu.png" alt />
		</div>
		<div class="join">
			<!-- <div class="join-btn" @click="show = !show">加入我们</div> -->
		</div>
		<div class="footer">
			<div class="container fd">
				<div class="footer-l">
					<p class="p1">Contact us</p>
					<p class="p2">联系我们</p>
					<p class="p3">上海市虹口区大连路839号合生财富广场A座903室</p>
					<p>
						邮 编：200127
						<br />电话：＋86 21 50213251
						<br />传真：＋86 21 50213261
						<br />客服邮箱：services@chinahorn.com
					</p>
					<p>沪公网安备 31010902002731号 沪ICP备15037898号</p>
				</div>
				<!-- <div class="footer-r">
					<img src="@/assets/img_QRCode.png" alt />
					<div>扫一扫联系我们</div>
				</div>-->
			</div>
		</div>
		<transition name="fade">
			<div class="mark1" v-if="show">
				<div class="mark-box">
					<div class="close" @click="show = !show">X</div>
					<h2 class="mark-box-header">金融行业软件及系统集成解决方案提供商</h2>
					<div class="mark-box-content">
						<p class="mark-box-t">关于成号</p>
						<div>上海成号信息科技有限公司是一家专注于为金融行业提供行业应用软件和信息系统集成的综合解决方案提供商，致力于行业业务和技术创新，并力争为行业客户提供最优质的服务，公司客户涉及证券、基金、资管、私募、财富管理、中小贷等多个金融领域。 “诚信、创新、专业、责任、分享”是我们的价值观。</div>
						<p class="mark-box-t">公司介绍</p>
						<div>成立于 2011 年，注册资本1千万，业绩持续快速 增长 基本信息：80%团队成员有长期为金融企业服务的经验，大部分成员都在信息技术行业有10年以上的工作经验及大型项目实施和管理经验。 公司目标：力争成为专业的金融行业应用软件及IT信息解决方案提供商，专注于行业业务和技术创新，并力争为行业客户提供最优质的服务。 公司客户：公司客户涉及证券、基金、信托、资管、私募、财富管理、第三方销售、信贷等多个金融领域。</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			show: false
		};
	},
	methods: {
		nextScreen() {
			console.log('next');
			// window.onscroll = () => {
			// 	this.document.body.clientHeight
			// }
			// this.$refs.test.scrollTop = 1000 + 'px';
			let distance = window.screen.height;
			window.scrollTo({
				top: distance,
				behavior: 'smooth'
			});
		},
		handleScrollTo(cls) {
			let t = document.querySelector(cls).offsetTop;
			console.log(t);
			window.scrollTo({
				top: t,
				behavior: 'smooth'
			});
		}
	},
	mounted() {
		new window.WOW().init();
	}
};
</script>
<style lang="scss" scoped>
.mark-box-content {
	overflow: auto;
	max-height: 500px;
	padding-right: 36px;
}
.chengli {
	font-size: 38px;
	color: #7d7d7d;
	position: absolute;
	top: 130px;
	left: 0;
	p {
		margin: 0;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.container {
	max-width: 1400px;
}
.pc {
	.mark1 {
		background-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;

		.mark-box {
			width: 800px;
			height: 600px;
			background: rgba(255, 255, 255, 1);
			border-radius: 8px;
			border: 5px solid rgba(213, 213, 213, 1);
			background-color: #fff;
			padding: 40px 4px 40px 40px;
			color: #222222;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
			.mark-box-t {
				font-size: 18px;
				margin: 20px 0;
			}
		}
		.close {
			position: absolute;
			right: 0;
			top: -40px;
			color: #fff;
			font-weight: normal;
			cursor: pointer;
		}
		.mark-box-header {
			color: #000;
			font-size: 18px;
			text-align: center;
			font-weight: bold;
		}
	}
	.join {
		margin: 100px 0 170px;
	}
	.join-btn {
		background-color: #fb6d51;
		text-align: center;
		line-height: 120px;
		width: 600px;
		font-size: 32px;
		color: #fff;
		margin: 0 auto;
		cursor: pointer;
	}
	.footer {
		background-color: #000;
		padding: 40px 0 46px;
		color: #fff;
		.p1 {
			font-size: 48px;
			margin-bottom: 20px;
		}
		.p2 {
			font-size: 32px;
			margin-bottom: 30px;
		}
		.p3 {
			font-size: 28px;
			margin-bottom: 14px;
		}
		.fd {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.footer-r {
			text-align: center;
			img {
				margin-bottom: 14px;
				display: block;
			}
		}
	}
	.cooperative {
		background-color: #f8f8f8;
		margin-top: 100px;
		overflow: hidden;
		position: relative;
		padding-top: 76px;
		padding-bottom: 129px;
		margin-left: 90px;
		.r {
			float: right;
		}
		.cooperative-client {
			position: absolute;
			top: 165px;
			h2 {
				font-size: 48px;
				color: #000;
				font-weight: bold;
			}
			h3 {
				font-size: 32px;
				color: #000;
				font-weight: bold;
				margin-top: 20px;
			}
		}
	}
	.banner {
		background-image: url('~@/assets/img_banner.png');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		overflow: hidden;
		.logo {
			background-image: url('~@/assets/logo.png');
			background-repeat: no-repeat;
			background-size: cover;
			width: 200px;
			height: 66px;
			margin: 18px 0 0 76px;
		}
		.banner-content {
			margin-top: 608px;
			text-align: center;
			color: #fff;
		}
		.h1 {
			font-size: 72px;
		}
		h2 {
			margin-top: 22px;
		}
		h3 {
			margin-top: 179px;
		}
		.arrow {
			background-image: url('~@/assets/icon_downarrow.png');
			background-repeat: no-repeat;
			background-size: cover;
			width: 67px;
			height: 35px;
			margin: 28px auto 120px;
		}
	}
	.pc-content {
		background-color: #f8f8f8;
		margin-left: 90px;
		padding: 83px 94px 34px;
	}
	.chengxin {
		color: #000;
		font-size: 49px;
		text-align: center;
	}
	.dis {
		display: inline-block;
		position: relative;
		.chengxin {
			position: absolute;
			top: 0;
			right: 48px;
		}
	}
	.about-us {
		padding-top: 238px;
		color: #000;
		.about-more {
			overflow: hidden;
		}
		.about-l {
			float: left;
			font-size: 32px;
			margin-bottom: 86px;
			font-weight: bold;
		}
		.more {
			float: right;
			color: #717171;
			font-size: 24px;
		}
		h2 {
			font-size: 48px;
			margin-bottom: 20px;
		}
		.box {
			background-color: #fff;
			min-height: 600px;
			img {
				width: 100%;
			}
		}
		.pd10 {
			padding: 50px 40px 135px;
			.name {
				margin-bottom: 50px;
				font-size: 18px;
				font-weight: bold;
			}
			p {
				color: #303030;
			}
		}
	}
	.warp {
		background-color: #020129;
		margin-top: 80px;
		padding-top: 165px;
		color: #fff;
		background-image: url('~@/assets/bj_web756.png');
		background-repeat: no-repeat;
		background-position: center bottom;
	}
	.warp-h3 {
		font-size: 32px;
		float: left;
	}
	.warp-tip {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.more {
			font-size: 24px;
		}
	}
	.mt130 {
		margin-top: 130px;
	}
	.mt356 {
		margin-top: 356px;
	}
	.yuan {
		border-radius: 50%;
		width: 268px;
		height: 268px;
		line-height: 268px;
		border: solid 4px #979797;
		font-size: 44px;
		text-align: center;
		color: #fff;
		font-weight: bold;
		margin: 0 auto 55px;
	}
	.pledge {
		font-size: 60px;
		text-align: center;
		font-weight: bold;
		margin: 247px 0 100px;
	}
	.pledge-dl {
		margin-bottom: 40px;
		min-height: 170px;
		dt {
			font-size: 28px;
			color: #f9ffff;
		}
		dd {
			position: relative;
			padding-left: 28px;
			&:after {
				content: '';
				border-radius: 50%;
				width: 5px;
				height: 5px;
				background-color: #fff;
				position: absolute;
				left: 15px;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
	}
	.pledge-center {
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	// 临时隐藏
	.more {
		display: none;
	}

	.nav {
		position: absolute;
		right: 0;
		top: 30px;
		padding-right: 160px;
		a {
			margin: 0 20px;
			color: #fff;
		}
		.active {
			color: #ffdf00;
		}
	}
}
</style>

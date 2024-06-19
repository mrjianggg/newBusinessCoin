<template>
    <div class="content-page" :style="$i18n.locale === 'en'?`font-family: 'G'`:`font-family: 'PingFang SC'`" id="app">
			<!-- 导航 -->
			<my-navigation ref="MenuBar" @menuActive="menuActive" :isTop="isTop" />
			<div class="content-main mx-auto  <xl:w-full xl:w-[1200px]" >

				<!-- About us -->
				<AboutUs @menuScroll="menuScroll" />
				<CoreFeatures />

				<!-- Product Architecture -->
				<MyProduct @menuScroll="menuScroll" />

				<!-- NBC Token -->
				<NBCToken @menuScroll="menuScroll" />

				<!-- Roadmap -->
				<Roadmap @menuScroll="menuScroll" />

				<!-- Backer -->
				<Backer @menuScroll="menuScroll" />

				<!-- Community -->
				<Community @menuScroll="menuScroll" />

			</div>
			<Footer />
    </div>
</template>

<script>
import MyNavigation from '@/components/MyNavigation.vue'
import AboutUs from '@/components/AboutUs.vue'
import CoreFeatures from '@/components/CoreFeatures.vue'
import MyProduct from '@/components/MyProduct.vue'
import NBCToken from '@/components/NBCToken.vue'
import Roadmap from '@/components/Roadmap.vue'
import Backer from '@/components/Backer.vue'
import Community from '@/components/Community.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
		MyNavigation,
		AboutUs,
		CoreFeatures,
		MyProduct,
		NBCToken,
		Roadmap,
		Backer,
		Community,
		Footer
  },
	data() {
		return {
			mouseDistance: 0,
			pageHight: 100,
			scrollHeight: 0,
			language: 'en',
			animateState: false,
			animateState_two: false,
			isActive: true, //是否按钮点击事件
			isTop: true,
		};
	},
	mounted() {

	},
  methods: {
		menuScroll(index) {
			this.$refs.MenuBar.menuActive(index, 'scroll');
		},
    menuActive(index) {
			//左边菜单栏点击事件
			let that = this;
			let selector = '';
			if (index === 0) {
        selector = '#aboutUsId';
			}
			if (index === 1) {
        selector = '#productId';
			}
			if (index === 2) {
				selector = '#nbcTokenId';
			}
      if (index === 3) {
				selector = '#roadmapId';
			}
      if (index === 4) {
				selector = '#backerId';
			}
      if (index === 5) {
				selector = '#communityId';
			}
			that.goAnchor(selector);
		},
		goAnchor(selector) {
			var anchor = this.$el.querySelector(selector); // 获取元素
			if (anchor) {
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		},
  }
}
</script>

<style lang="scss">
.content-page {
	height: 100%;
	width: 100%;
	background: #0F0F0F;
	transition: all 0.8s;
	overflow-y: auto;
	z-index: 2;
	position: relative;
}
</style>
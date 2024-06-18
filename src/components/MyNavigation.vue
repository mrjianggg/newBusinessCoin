<template>
  <div class="navigationPage" :class="isTop ? 'yesTop':'noTop'">
    <div class="navigationBox" style="font-family: 'G'">
      <div class="left flex items-center">
        <img src="@/assets/img/icon.png" class="w-[168px] h-[30px] mr-[66px]" />
        <div class="menu-list mr-[24px]" v-for="(item,index) in menuList" :key="index" @click="menuActive(index,'click')">
          <div :class="currentActive==index?'colorff':''" class="text-[#929495]">
            <span class="text-sm font-semibold">{{item}}</span>
          </div>
        </div>
      </div>
      <div class="right flex items-center cursor-pointer" @click="changeLanguage">
        <div class="img w-[18px] h-[18px]"></div>
        <div class="ml-2 text-sm font-semibold">{{ $t('language') }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			currentActive:0,
      isTop: true,
      menuList: [this.$t('navigation.Aboutus'),this.$t('navigation.ProductArchitecture'),this.$t('navigation.NBCToken'),this.$t('navigation.Roadmap'),this.$t('navigation.Backer'),this.$t('navigation.Community')],
		};
	},
  watch: {
    // 监听语言变化，以便动态更新 translatedArray
    '$i18n.locale'() {
      this.menuList = [this.$t('navigation.Aboutus'),this.$t('navigation.ProductArchitecture'),this.$t('navigation.NBCToken'),this.$t('navigation.Roadmap'),this.$t('navigation.Backer'),this.$t('navigation.Community')];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
	methods: {
    changeLanguage(){
      if(this.$i18n.locale === 'en'){
        this.$i18n.locale = 'zh' // 切换到英文
        localStorage.setItem("language",'zh')
      }else{
        this.$i18n.locale = 'en' // 切换到英文
        localStorage.setItem("language",'en')
      }
    },
		menuActive(index,type) {//click 点击导航触发,scroll 滚动页面触发（导航名称只变色，页面不定位）
      this.currentActive = index
      if(type === 'click'){
        this.$emit('menuActive', this.currentActive)
      }
		},
    handleScroll() {
      // 获取页面垂直滚动的距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // 根据滚动距离更新 div 的 class
      if (scrollTop > 10) {
        this.isTop = false
      } else {
        this.isTop = true
      }
    }
	}
};
</script>

<style lang="scss" scoped>
.noTop{
  top: 0;
  background: #1A1A1A;
}
.yesTop{
  top: 20px;
  background: transparent;
}
.navigationPage{
  box-sizing: border-box; /* 确保宽度包含 padding 和 border */
  position: fixed;
  z-index: 1;
  left: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  display: flex;
  justify-content: center;
  .navigationBox{
    width: 1200px;
    height: 66px;
    background: #1A1A1A;
    border-radius: 40px;
    backdrop-filter: blur(10px);
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      .menu-list {
        cursor: pointer;
        -moz-user-select: none; /* Firefox私有属性 */
        -webkit-user-select: none; /* WebKit内核私有属性 */
        -ms-user-select: none; /* IE私有属性(IE10及以后) */
        -khtml-user-select: none; /* KHTML内核私有属性 */
        user-select: none; /* CSS3属性 */
        display: flex;
        align-items: center;
      }
    }
    .right{
      font-weight: 600;
      .img{
        background-repeat:no-repeat;/*   背景略平铺1_1 */
        background-size:100% 100%;/*   背景略平铺1_2 */
        -moz-background-size:100% 100%;/*   背景略平铺1_3 */
        background-image: url('~@/assets/img/yuyan.png');
      }
    }
  }
  .arrow-page-img{
    width:12px;
    height: 6px;
    margin-top: 3px;
  }
  .colorff{
    color: #FFFFFF;
  }
}

</style>
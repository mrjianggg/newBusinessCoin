<template>
  <div class="navigationPage !<xl:top-0" :class="isTop ? 'yesTop':'noTop'">
    <div class="navigationBox <xl:hidden flex" style="font-family: 'G'">
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
    <!-- phone -->
    <div class="xl:hidden w-full h-[50px]">
      <div class="h-full w-full pl-[15px] pr-[20px] flex justify-between items-center">
        <img src="@/assets/img/icon.png" class="w-[146px] h-[26px]" />
        <div class="flex items-center">
          <img src="@/assets/img/yuyanPh.png" class="w-[22px] h-[22px] mr-[15px]" @click="showLanguage = !showLanguage;showNavigation = false" />
          <img src="@/assets/img/caidan.png" class="w-[22px] h-[22px]" @click="showNavigation = !showNavigation;showLanguage = false" />
        </div>
      </div>
    </div>

    <!-- 导航菜单 顶部弹出 -->
    <van-popup v-model:show="showNavigation" position="top">
      <div class="bg-[#0F0F0F] px-[20px]">
        <div class="w-full h-[50px]">
          <div class="h-full w-full flex justify-between items-center">
            <img src="@/assets/img/icon.png" class="w-[146px] h-[26px]" />
            <div class="flex items-center">
              <img src="@/assets/img/yuyanPh.png" class="w-[22px] h-[22px] mr-[15px]" @click="showLanguage = !showLanguage;showNavigation = false" />
              <img src="@/assets/img/caidan.png" class="w-[22px] h-[22px]" @click="showNavigation = !showNavigation;showLanguage = false" />
            </div>
          </div>
        </div>
        <div v-for="(item,index) in menuList" :key="item + index"  @click="menuActive(index,'click')">
          <div v-if="index > 0" style="border: 1px solid #222222;"></div>
          <div class="h-[57px] w-full flex justify-between items-center text-[14px] text-[#B4B4B4] font-semibold">
            <div :class="currentActive==index?'text-[#fff]':''">{{item}}</div>
            <img v-if="currentActive==index" src="@/assets/img/xuanzhong.png" class="w-[22px] h-[22px]" />
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 语言菜单 顶部弹出 -->
    <van-popup v-model:show="showLanguage" position="top">
      <div class="bg-[#0F0F0F] px-[20px]">
        <div class="w-full h-[50px]">
          <div class="h-full w-full flex justify-between items-center">
            <img src="@/assets/img/icon.png" class="w-[146px] h-[26px]" />
            <div class="flex items-center">
              <img src="@/assets/img/yuyanPh.png" class="w-[22px] h-[22px] mr-[15px]" @click="showLanguage = !showLanguage;showNavigation = false" />
              <img src="@/assets/img/caidan.png" class="w-[22px] h-[22px]" @click="showNavigation = !showNavigation;showLanguage = false" />
            </div>
          </div>
        </div>
        
        <div @click="changeLanguage('zh','phone')">
          <div class="h-[57px] w-full flex justify-between items-center text-[14px] text-[#B4B4B4] font-semibold">
            <div :class="$i18n.locale=='zh'?'text-[#fff]':''">{{ $t('zhongwen') }}</div>
            <img v-if="$i18n.locale=='zh'" src="@/assets/img/xuanzhong.png" class="w-[22px] h-[22px]" />
          </div>
        </div>
        <div style="border: 1px solid #222222;"></div>
        <div @click="changeLanguage('en','phone')">
          <div v-if="index > 0" style="border: 1px solid #222222;"></div>
          <div class="h-[57px] w-full flex justify-between items-center text-[14px] text-[#B4B4B4] font-semibold">
            <div :class="$i18n.locale=='en'?'text-[#fff]':''">{{ $t('yinwen') }}</div>
            <img v-if="$i18n.locale=='en'" src="@/assets/img/xuanzhong.png" class="w-[22px] h-[22px]" />
          </div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>

export default {
	data() {
		return {
			currentActive:0,
      isTop: true,
      showNavigation: false,
      showLanguage: false,
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
    changeLanguage(language,type){
      if(type === 'phone'){
        if(language && language === this.$i18n.locale){
          this.showLanguage = false;
          return
        }
        this.showLanguage = false;
      }
      
      
      if(this.$i18n.locale === 'en'){
        this.$i18n.locale = 'zh' // 切换到英文
        localStorage.setItem("language",'zh')
      }else{
        this.$i18n.locale = 'en' // 切换到英文
        localStorage.setItem("language",'en')
      }
    },
		menuActive(index,type) {//click 点击导航触发,scroll 滚动页面触发（导航名称只变色，页面不定位）
      this.showNavigation = false;
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
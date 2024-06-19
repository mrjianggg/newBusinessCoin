<template>
  <!-- Product Architecture -->
  <div class="pt-[163px] <xl:pt-[63px] <xl:px-[20px] productBox">
    <div class="title mx-auto my-0 font-bold text-[40px] <xl:text-[22px] leading-[60px] <xl:leading-[30px] text-center <xl:text-left <xl:w-full" style="font-family: 'F';">{{ $t('product.title') }}</div>
    <img src="@/assets/img/icon_text.png" class="w-[132px] h-[34px] mt-[79px] <xl:hidden" />
    <div class="mt-[15px] <xl:mt-[0] flex justify-between <xl:block">
      <div>
        <div class="title2 text-[24px] <xl:text-[15px] leading-[44px] <xl:leading-[25px]" v-if="$i18n.locale === 'en'">Learn How New Business Coin Works</div>
        <div class="title2 text-[24px] <xl:text-[15px] leading-[44px] <xl:leading-[25px]" v-if="$i18n.locale !== 'en'">NBC通证AI系统通过神经网络和</div>
        <div class="title2 text-[24px] <xl:text-[15px] leading-[44px] <xl:leading-[25px]" v-if="$i18n.locale !== 'en'">大数据驱动生态系统，量化价值和信任。</div>
        <img src="@/assets/img/chahua_Pro.png" class="w-[282px] <xl:w-[141px] h-[278px] <xl:h-[139px] mt-[59px] <xl:mx-auto <xl:mt-[30px] div-1 animated-div" :class="isSmallScreen ? 'div-1-p':''" />
      </div>
      <div class="collapseBox <xl:mt-[20px]" ref="buttonsContainer">
        <van-collapse v-model="activeNames1" :border="false" class="w-[600px] <xl:w-full p-0 infoItem" scale-up :style="{ '--order': 1 }">
          <van-collapse-item name="1" :border="false">
            <template #title>
              <div class="flex items-center text-white font-medium text-lg">
                <div class="h-2 w-2 rounded-1 bg-[#FFEE02] mr-[10px]"></div>
                {{ $t('product.AISystem') }}
              </div>
            </template>
            <div class="text-sm <xl:text-[12px] text-[#929495] leading-[26px] font-normal mt-[5px]">
              {{ $t('product.andtrust') }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="fengexian mt-[21px] <xl:mt-[12px]"></div>

        <van-collapse v-model="activeNames2" :border="false" class="w-[600px] <xl:w-full p-0 mt-[27px] infoItem" scale-up :style="{ '--order': 2 }">
          <van-collapse-item name="1" :border="false">
            <template #title>
              <div class="flex items-center text-white font-medium text-lg <xl:text-[14px]">
                <div class="h-2 w-2 rounded-1 bg-[#FFEE02] mr-[10px]"></div>
                {{ $t('product.CreditSystem') }}
              </div>
            </template>
            <div class="text-sm <xl:text-[12px] text-[#929495] leading-[26px] font-normal mt-[5px]">
              {{ $t('product.InitialCredit') }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="fengexian mt-[21px] <xl:mt-[12px]"></div>

        <van-collapse v-model="activeNames3" :border="false" class="w-[600px] <xl:w-full p-0 mt-[27px] infoItem" scale-up :style="{ '--order': 3 }">
          <van-collapse-item name="1" :border="false">
            <template #title>
              <div class="flex items-center text-white font-medium text-lg <xl:text-[14px]">
                <div class="h-2 w-2 rounded-1 bg-[#FFEE02] mr-[10px]"></div>
                {{ $t('product.IndustryInsight') }}
              </div>
            </template>
            <div class="text-sm <xl:text-[12px] text-[#929495] leading-[26px] font-normal mt-[5px]">
              {{ $t('product.NBCemploys') }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="fengexian mt-[21px] <xl:mt-[12px]"></div>

        <van-collapse v-model="activeNames4" :border="false" class="w-[600px] <xl:w-full p-0 mt-[27px] infoItem" scale-up :style="{ '--order': 4 }">
          <van-collapse-item name="1" :border="false">
            <template #title>
              <div class="flex items-center text-white font-medium text-lg <xl:text-[14px]">
                <div class="h-2 w-2 rounded-1 bg-[#FFEE02] mr-[10px]"></div>
                {{ $t('product.DecentralizedGovernance') }}
              </div>
            </template>
            <div class="text-sm <xl:text-[12px] text-[#929495] leading-[26px] font-normal mt-[5px]">
              {{ $t('product.efficientgovernance') }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="fengexian mt-[21px] <xl:mt-[12px]"></div>

        <van-collapse v-model="activeNames5" :border="false" class="w-[600px] <xl:w-full p-0 mt-[27px] infoItem" scale-up :style="{ '--order': 5 }">
          <van-collapse-item name="1" :border="false">
            <template #title>
              <div class="flex items-center text-white font-medium text-lg <xl:text-[14px]">
                <div class="h-2 w-2 rounded-1 bg-[#FFEE02] mr-[10px]"></div>
                {{ $t('product.ComprehensiveEcosystem') }}
              </div>
            </template>
            <div class="text-sm <xl:text-[12px] text-[#929495] leading-[26px] font-normal mt-[5px]">
              {{ $t('product.overallutility') }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="fengexian mt-[21px] <xl:mt-[12px]"></div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount , computed} from 'vue';
export default defineComponent({
  name: 'MyProduct',
  setup(props, { emit }) {
    const buttonsContainer = ref(null);
    let observer = null;

    // 初始化 IntersectionObserver
    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry,index) => {
            if (entry.isIntersecting) {
              // 进入视图，对应导航名称变色
              emit('menuScroll', 1);
              // 当元素进入视口时，添加 'in-view' 类
              entry.target.classList.add('in-view');
            } else {
              // 当元素离开视口时，移除 'in-view' 类
              entry.target.classList.remove('in-view');
            }
          });
        },
        { threshold: 0.5 }
      );

      const animatedDivs = document.querySelectorAll('.animated-div');
      animatedDivs.forEach(div => observer.observe(div));

      if (buttonsContainer.value) {
        const infoBox = buttonsContainer.value.querySelectorAll('.infoItem');
        infoBox.forEach((infoItem) => observer.observe(infoItem));
      }
    };

    const screenWidth = ref(window.innerWidth);
    const updateWidth = () => {
      screenWidth.value = window.innerWidth;
    };
    const isSmallScreen = computed(() => screenWidth.value < 1280);
    onMounted(() => {
      initObserver();
      window.addEventListener('resize', updateWidth);
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('resize', updateWidth);
    });

    const activeNames1 = ref([])
    const activeNames2 = ref([])
    const activeNames3 = ref([])
    const activeNames4 = ref([])
    const activeNames5 = ref([])
    return {
      isSmallScreen,
      buttonsContainer,
      activeNames1,
      activeNames2,
      activeNames3,
      activeNames4,
      activeNames5
    };
  }
});
</script>

<style lang="scss">
.productBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title{

    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }
  .title2{
    font-weight: bold;
    text-align: center;
    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }
  .collapseBox{
    .van-cell{
      padding: 0;
      background: transparent;
    }
    .van-collapse-item__content{
      padding: 0;
      background: transparent;
    }
    .fengexian{
      width: 100%;
      height: 0;
      border-top: 1px solid #222222;
    }
    .van-cell__right-icon{
      font-size: 14px;
      color: #87898a;
      font-weight: 900;
    }
    .van-collapse-item__title--expanded .van-cell__right-icon:before{
      color: #FFF;
      font-size: 14px;
      font-weight: 900;
    }

  }
}
</style>
<style scoped>
  .infoItem {
    transform: translateX(100px); /* 初始位置在屏幕右边外 */
    opacity: 0; /* 初始透明度为 0 */
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  }

  /* 当元素可见时，应用动画 */
  .infoItem.in-view {
    animation: scale-up var(--ani-speed, 200ms) forwards;
    animation-delay: calc(var(--order) * var(--ani-speed, 200ms));
  }

  @keyframes scale-up {
    0% {
      transform: translateX(100px); /* 右侧 div 移动到原位置 */
      opacity: 1;
    }
    100% {
      transform: translateX(0); /* 右侧 div 移动到原位置 */
      opacity: 1;
    }
  }


  .animated-div {
		opacity: 0; /* 初始透明度为 0 */
		transition: transform 0.5s ease-out, opacity 0.5s ease-out;
	}

	/* 初始位置设置 */
	.div-1 {
		transform: translateX(-200px); /* 初始位置在屏幕左边外 */
	}
	.div-1-p {
		transform: translateX(-50px); /* 初始位置在屏幕左边外 */
	}
	/* 可见时的动画 */
	.in-view.div-1 {
		transform: translateX(0); /* 左侧 div 移动到原位置 */
		opacity: 1;
	}
	.in-view.div-1-p {
		transform: translateX(0); /* 左侧 div 移动到原位置 */
		opacity: 1;
	}
</style>
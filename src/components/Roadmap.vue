<template>
  <!-- NBC Token -->
  <div class="pt-[120px] <xl:pt-[50px] RoadmapBox" id="roadmapId">
    <div class="title1 <xl:pl-[20px] my-0 font-bold text-[40px] <xl:text-[22px] leading-[60px] <xl:leading-[30px] text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale === 'en'">NBC DEVELOPMENT</div>
    <div class="title1 <xl:pl-[20px] my-0 font-bold text-[40px] <xl:text-[22px] leading-[60px] <xl:leading-[30px] text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale === 'en'">ROADMAP</div>
    <div class="title1 <xl:pl-[20px] my-0 font-bold text-[40px] <xl:text-[22px] leading-[60px] <xl:leading-[30px] text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale !== 'en'">NBC发展规划</div>
    <div class="mt-3  <xl:pl-[20px] <xl:mt-0 text-[#EAECEF] text-lg <xl:text-[14px] <xl:leading-[20px] font-medium leading-[30px]">{{ $t('roadmap.Strategicplans') }}</div>
    <div class="xl:hidden w-full mt-[30px] pl-[20px]">
      <van-swipe :loop="false" :show-indicators="false" :width="300"> 
        <van-swipe-item v-for="(item, index) in itemsAll" :key="index">
          <div style="border-radius: 10px; border: 1px #222222 solid;" class="h-[200px] w-[240px] px-[15px] pt-[15px]">
            <div style="border-radius: 10px;background: linear-gradient( 180deg, #FFF805 0%, #FFEE02 100%);" class="w-[40px] h-[20px] flex justify-center items-center text-[12px] leading-[20px] font-bold text-black">Q{{index + 1}}</div>
            <div class="mt-[12px] text-[14px] font-semibold">{{ item.title }}</div>
            <div class="mt-[8px] text-[12px] leading-[20px] text-[#929495]">{{ item.value }}</div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mt-[80px] <xl:hidden">
      <div class="flex items-center">
        <div class="yuan"><div>Q1</div></div>
        <div class="xian w-[244px]"></div>
        <div class="yuan"><div>Q2</div></div>
        <div class="xian w-[244px]"></div>
        <div class="yuan"><div>Q3</div></div>
        <div class="xian w-[244px]"></div>
        <div class="yuan"><div>Q4</div></div>
        <div class="xian w-[190px]"></div>
      </div>

      <div class="infoBox flex mt-6" ref="buttonsContainer">
        <div
          v-for="(item, index) in items1"
          :key="index"
          class="infoItem w-[260px]"
          :class="index===0?'ml-0':'ml-[54px]'"
          scale-up
          :style="{ '--order': index + 1 }"
        >
          <div class="flex items-center">
            <div class="w-2 h-2 rounded-1" style="background: linear-gradient( 180deg, #FFF805 0%, #FFEE02 100%);"></div>
            <div class="ml-2 font-bold text-lg text-white leading-[30px]">{{ item.title }}</div>
          </div>
          <div class="mt-1 text-sm font-normal text-[#929495]">
            {{ item.value }}
          </div>
        </div>
      </div>

      <div class="flex items-center mt-[48px]">
        <div class="yuan"><div>Q5</div></div>
        <div class="xian w-[244px]"></div>
        <div class="yuan"><div>Q6</div></div>
        <div class="xian w-[244px]"></div>
        <div class="yuan"><div>Q7</div></div>
        <div class="xian w-[500px]"></div>
      </div>

      <div class="infoBox flex mt-6">
        <div
          v-for="(item, index) in items2"
          :key="index +'222'"
          class="infoItem infoItem2 w-[260px]"
          :class="index===0?'ml-0':'ml-[54px]'"
          scale-up
          :style="{ '--order': index + 5 }"
        >
          <div class="flex items-center" v-if="index !== 3">
            <div class="w-2 h-2 rounded-1" style="background: linear-gradient( 180deg, #FFF805 0%, #FFEE02 100%);"></div>
            <div class="ml-2 font-bold text-lg text-white leading-[30px]">{{ item.title }}</div>
          </div>
          <div class="mt-1 text-sm font-normal text-[#929495]" v-if="index !== 3">
            {{ item.value }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount ,computed} from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'Roadmap',
  setup(props, { emit }) {
    const { t } = useI18n();
    const infoItem2 = document.getElementsByClassName('infoItem2');
    const buttonsContainer = ref(null);
    let observer = null;

    // 初始化 IntersectionObserver
    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry,index) => {
            if (entry.isIntersecting) {
              // 进入视图，对应导航名称变色
              emit('menuScroll', 3);
              // 当元素进入视口时，添加 'in-view' 类
              entry.target.classList.add('in-view');
              infoItem2[index].classList.add('in-view');
            } else {
              // 当元素离开视口时，移除 'in-view' 类
              entry.target.classList.remove('in-view');
              infoItem2[index].classList.remove('in-view');
            }
          });
        },
        { threshold: 0.5 }
      );

      if (buttonsContainer.value) {
        const infoBox = buttonsContainer.value.querySelectorAll('.infoItem');
        infoBox.forEach((infoItem) => observer.observe(infoItem));
      }
    };

    onMounted(() => {
      initObserver();
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    const items1 = computed(() => [
      {
        title: t('roadmap.FirePhase'),
        value: t('roadmap.NBCvalue')
      },
      {
        title: t('roadmap.StonePhase'),
        value: t('roadmap.thebrand')
      },
      {
        title: t('roadmap.WritingPhase'),
        value: t('roadmap.SecondUniverse')
      },
      {
        title: t('roadmap.MachinePhase'),
        value: t('roadmap.SecondUniverse2')
      },
    ]);

    const items2 = computed(() => [
      {
        title: t('roadmap.ComputerPhase'),
        value: t('roadmap.assettransactions')
      },
      {
        title: t('roadmap.QuantumAI'),
        value: t('roadmap.integratequantum')
      },
      {
        title: t('roadmap.SecondUniversePhase'),
        value: t('roadmap.platformgrowth')
      },
      {

      }
    ]);
    const itemsAll = computed(() => [
      {
        title: t('roadmap.FirePhase'),
        value: t('roadmap.NBCvalue')
      },
      {
        title: t('roadmap.StonePhase'),
        value: t('roadmap.thebrand')
      },
      {
        title: t('roadmap.WritingPhase'),
        value: t('roadmap.SecondUniverse')
      },
      {
        title: t('roadmap.MachinePhase'),
        value: t('roadmap.SecondUniverse2')
      },
      {
        title: t('roadmap.ComputerPhase'),
        value: t('roadmap.assettransactions')
      },
      {
        title: t('roadmap.QuantumAI'),
        value: t('roadmap.integratequantum')
      },
      {
        title: t('roadmap.SecondUniversePhase'),
        value: t('roadmap.platformgrowth')
      },
    ]);
    
    return {
      buttonsContainer,
      items1,
      items2,
      itemsAll
    };
  }
});
</script>

<style lang="scss">
.RoadmapBox{
  white-space: pre-line; /* 换行符生效 */

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  .title1{

    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }
  .yuan{
    width: 70px;
    height: 70px;
    background: #0F0F0F;
    border-radius: 100%;
    border: 1px solid rgba(255,247,4,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: linear-gradient( 180deg, #FFF805 0%, #FFEE02 100%);
      box-shadow: 0px 0px 30px 0px rgba(255,241,3,0.2);
      border-radius: 100%;
      font-weight: bold;
      font-size: 18px;
      color: #000000;
    }
  }
  .xian{
    height: 0;
    border-top: 1px solid #222222;
  }


}
</style>
<style scoped>
  .infoItem {
    scale: 0; /* 初始为缩放为0 */
    transition: scale 200ms ease-in-out;
  }

  /* 当元素可见时，应用动画 */
  .infoItem.in-view {
    animation: scale-up var(--ani-speed, 200ms) forwards;
    animation-delay: calc(var(--order) * var(--ani-speed, 200ms));
  }

  @keyframes scale-up {
    0% {
      scale: 0;
    }
    60% {
      scale: 1.15;
    }
    100% {
      scale: 1;
    }
  }
</style>
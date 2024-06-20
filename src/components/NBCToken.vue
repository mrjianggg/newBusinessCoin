<template>
  <!-- NBC Token -->
  <div class="pt-[125px] <xl:pt-[25px] mt-[150px] <xl:mt-[50px] <xl:px-[20px] NBCTokenBox" id="nbcTokenId">
    <div class="title1 mx-auto my-0 font-bold text-[40px] <xl:text-[22px] leading-[60px] <xl:leading-[60px] text-center <xl:text-left <xl:w-full" style="font-family: 'F';">NBC Token</div>
    <div class="mt-3 <xl:mt-0 text-[#EAECEF] text-lg <xl:text-[14px] <xl:leading-[20px] font-medium leading-[30px]">{{ $t('nBCToken.Witha') }}</div>
    <div class="mt-[60px] <xl:mt-[10px] w-full h-[680px] <xl:h-[780px] flex items-center <xl:block border-[1px] <xl:border-[0px] border-solid border-[#222222]" style="border-radius: 3%;">
      <!-- 饼图 -->
      <div class="relative">
        <div ref="chartContainer" class="w-[600px] <xl:w-[340px] h-[400px] <xl:h-[300px] mx-auto my-auto"></div>
        <div class="absolute flex flex-col justify-center items-center" style="transform: translate(-50%,-50%);top: 50%;left: 50%;">
          <div class="text-sm <xl:text-[12px] text-[#EAECEF] leading-[24px] <xl:leading-[18px] font-medium">{{ $t('nBCToken.TotalSupply') }}</div>
          <div style="font-family: 'F';" class="font-bold text-[26px] <xl:text-[15px] text-[#FFF304] leading-[34px] <xl:leading-[24px]">1,000,000,000</div>
        </div>
      </div>

      <div class="ml-3" ref="buttonsContainer">
        <div class="NBCToken_item1 NBCToken_item w-[460px] <xl:w-full <xl:h-[104px] h-[122px] pl-6 infoItem" scale-up :style="{ '--order': 1 }">
          <div class="font-bold text-lg text-white leading-[30px]">{{ $t('nBCToken.OperationPool') }}</div>
          <div class="mt-[4px] font-normal text-sm text-[#929495] leading-[24px]">{{ $t('nBCToken.andsettlement') }}</div>
        </div>

        <div class="NBCToken_item2 NBCToken_item w-[460px] <xl:w-full <xl:h-[104px] h-[122px] pl-6 mt-4 infoItem" scale-up :style="{ '--order': 1 }">
          <div class="font-bold text-lg text-white leading-[30px]">{{ $t('nBCToken.EcologicalMining') }}</div>
          <div class="mt-[4px] font-normal text-sm text-[#929495] leading-[24px]">{{ $t('nBCToken.noderewards') }}</div>
        </div>

        <div class="NBCToken_item3 NBCToken_item w-[460px] <xl:w-full <xl:h-[104px] h-[122px] pl-6 mt-4 infoItem" scale-up :style="{ '--order': 1 }">
          <div class="font-bold text-lg text-white leading-[30px]">{{ $t('nBCToken.GenesisPool') }}</div>
          <div class="mt-[4px] font-normal text-sm text-[#929495] leading-[24px]">{{ $t('nBCToken.technicalteams') }}</div>
        </div>

        <div class="NBCToken_item4 NBCToken_item w-[460px] <xl:w-full <xl:h-[104px] h-[122px] pl-6 mt-4 infoItem" scale-up :style="{ '--order': 1 }">
          <div class="font-bold text-lg text-white leading-[30px]">{{ $t('nBCToken.CharitableEcosystem') }}</div>
          <div class="mt-[4px] font-normal text-sm text-[#929495] leading-[24px]">{{ $t('nBCToken.socialcontributions') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { defineComponent, onMounted, ref, onUnmounted ,computed, onBeforeUnmount } from 'vue';
export default defineComponent({
  name: 'NBCToken',
  setup(props, { emit }) {
    const chartContainer = ref(null);
    let chartInstance = null; // 保存 ECharts 实例
    let observer = null; // 保存 Intersection Observer 实例
    const buttonsContainer = ref(null);
    const screenWidth = ref(window.innerWidth);
    const updateWidth = () => {
      screenWidth.value = window.innerWidth;
    };
    const isSmallScreen = computed(() => screenWidth.value < 1280);
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateWidth);
      if (observer) {
        observer.disconnect();
      }
    });
    // 初始化 ECharts 图表
    const initChart = () => {
      chartInstance = echarts.init(chartContainer.value);
      const option = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: isSmallScreen.value ? ['45%', '70%']:['60%', '92%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              // position: 'center'
              // formatter: '{b}: {d}'
              fontSize: isSmallScreen.value ? 14:18,
              color: '#FFF',
              fontFamily: 'G',
              fontWeight: 'bold',
            },

            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [], // 初始数据为空
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              // 每块的动画延迟
              return idx * 100;
            }
          }
        ]
      };
      chartInstance.setOption(option);
    };

    // 设置新数据，触发动画
    const updateChart = () => {
      if (chartInstance) {
        chartInstance.setOption({
          series: [
            {
              data: [
                {
                  value: 50,
                  name: '50%',
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        { offset: 0, color: '#FFF805' }, // 起始颜色
                        { offset: 1, color: '#FFEE02' }  // 结束颜色
                      ]
                    }
                  }
                },
                {
                  value: 30,
                  name: '30%',
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        { offset: 0, color: '#FFD105' }, // 起始颜色
                        { offset: 1, color: '#FFA502' }  // 结束颜色
                      ]
                    }
                  }
                },
                {
                  value: 10,
                  name: '10%',
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        { offset: 0, color: '#EC7C2D' }, // 起始颜色
                        { offset: 1, color: '#DB691B' }  // 结束颜色
                      ]
                    }
                  }
                },
                {
                  value: 10,
                  name: '10%',
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        { offset: 0, color: '#D68500' }, // 起始颜色
                        { offset: 1, color: '#C86C00' }  // 结束颜色
                      ]
                    }
                  }
                }
              ]
            }
          ]
        });
      }
    };

    // 清空图表数据
    const clearChart = () => {
      if (chartInstance) {
        chartInstance.setOption({
          series: [
            {
              data: [] // 清空数据
            }
          ]
        });
      }
    };

    

    onMounted(() => {
      window.addEventListener('resize', updateWidth);

      initChart(); // 初始化图表

      // 使用 Intersection Observer API 来检测元素是否进入视口
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 进入视图，对应导航名称变色
              emit('menuScroll', 2);
              // 当元素进入视口时，添加 'in-view' 类  右边列表
              entry.target.classList.add('in-view');

              // 元素进入视口时，设置数据触发动画
              updateChart();
            } else {
              // 当元素离开视口时，移除 'in-view' 类  右边列表
              entry.target.classList.remove('in-view');

              // 元素离开视口时，清空数据
              clearChart();
            }
          });
        },
        { threshold: 0.5 } // 触发的阈值
      );

      if (chartContainer.value) {
        observer.observe(chartContainer.value);
      }
      
      if (buttonsContainer.value) {
        const infoBox = buttonsContainer.value.querySelectorAll('.infoItem');
        infoBox.forEach((infoItem) => observer.observe(infoItem));
      }
    });

    onUnmounted(() => {
      // 组件卸载时取消观察
      if (observer && chartContainer.value) {
        observer.unobserve(chartContainer.value);
      }
      if (observer) {
        observer.disconnect();
      }
    });
    return {
      chartContainer,
      buttonsContainer,
      isSmallScreen
    };
  }
});
</script>

<style lang="scss">
.NBCTokenBox{
  width: 100%;
  position: relative;
  .title1{

    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }


  .NBCToken_item {
      border: 1px solid #222222;
      border-radius: 20px;
      position: relative; /* 使伪元素相对于div定位 */
      overflow: hidden; /* 保证内容不会溢出，保持边框圆角效果 */

      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .NBCToken_item1::before {
    background-color: #FFEE02;
  }
  .NBCToken_item2::before {
    background-color: #FFA802;
  }
  .NBCToken_item3::before {
    background-color: #FF7C36;
  }
  .NBCToken_item4::before {
    background-color: #CF7900;
  }
  .NBCToken_item::before {
      content: ''; /* 创建空内容 */
      width: 5px; /* 设置伪元素宽度为2px */
      height: 100%; /* 高度与父元素一致 */
      position: absolute; /* 绝对定位 */
      top: 0;
      left: 0; /* 定位到div的最左侧 */
      border-radius: 20px 0 0 20px; /* 保持左侧圆角效果 */
  }
}
</style>
<style scoped>
  .infoItem {
    transform: translateX(100px); /* 初始位置在屏幕右边外 */
    opacity: 0; /* 初始透明度为 0 */
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  /* 当元素可见时，应用动画 */
  .infoItem.in-view {
    animation: scale-up var(--ani-speed, 300ms) forwards;
    animation-delay: calc(var(--order) * var(--ani-speed, 300ms));
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
</style>
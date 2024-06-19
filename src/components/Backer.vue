<template>
  <!-- Backer -->
  <div class="pt-[178px] <xl:pl-[20px] <xl:pt-[28px] mt-[100px] <xl:mt-[40px] BackerBox" id="backerId">
    <div class="title1 font-bold text-[30px] <xl:text-[22px] <xl:leading-[30px] leading-[48px] text-center <xl:text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale === 'en'">THE ECOSYSTEM</div>
    <div class="title2 mt-2 font-bold text-[40px] <xl:text-[22px] <xl:leading-[28px] leading-[60px] text-center <xl:text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale === 'en'">BACKED BY THE BEST</div>
    <div class="title1 font-bold text-[40px] <xl:text-[22px] <xl:leading-[48px] leading-[48px] text-center <xl:text-left <xl:w-full" style="font-family: 'F';" v-if="$i18n.locale !== 'en'">NBC分布式商业生态系统</div>
    <div class="mt-3 <xl:mt-0 text-lg <xl:text-[14px] font-normal text-[#EAECEF] <xl:text-left <xl:w-full" v-if="$i18n.locale !== 'en'">成为全球金融生态变革的推动者，探索人类财富伟大机遇</div>
    <div class="xl:hidden mt-[60px] <xl:mt-[0px] w-full flex items-center">
      <div class="infoBox scrolling-container mt-6 px-[125px] <xl:px-[15px] <xl:px-[15px] py-[65px] <xl:py-[15px]" ref="buttonsContainer">
        <div class="scrolling-wrapper" ref="scrollingWrapper">
          <!-- 渲染图片 -->
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index}.png`)" class="w-[83px] h-[50px]"  >
          </div>
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index}.png`)" class="w-[83px] h-[50px]"  >
          </div>
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index}.png`)" class="w-[83px] h-[50px]"  >
          </div>
        </div>
        <div class="scrolling-wrapper" ref="scrollingWrapper">
          <!-- 渲染图片 -->
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index+5}.png`)" class="w-[83px] h-[50px]" >
          </div>
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index+5}.png`)" class="w-[83px] h-[50px]" >
          </div>
          <div v-for="index in 5" :key="index" class="scrolling-item">
            <img :src="require(`@/assets/img/backer${index+5}.png`)" class="w-[83px] h-[50px]" >
          </div>
        </div>
      </div>
    </div>

    <div class="<xl:hidden mt-[60px] w-full h-[370px] flex items-center" style="border: 1px solid #222222;border-radius: 3%;">
      <div class="infoBox mt-6 px-[125px] py-[65px] div-2 animatedDiv" ref="buttonsContainer">
        <div
          v-for="index in 10"
          :key="index"
          :class="index > 5 ? 'mt-[40px]':''"
          scale-up
          :style="{ '--order': index + 1 }"
        >
          <img :src="require(`@/assets/img/backer${index}.png`)" class="w-[166px] h-[100px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount} from 'vue';
export default defineComponent({
  name: 'Backer',
  setup(props, { emit }) {

    const buttonsContainer = ref(null);
    let observer = null;

    // 初始化 IntersectionObserver
    const initObserver = () => {
      const options = {
        threshold: 0.2 // 当目标元素 20% 可见时触发回调
      };
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry,index) => {
            if (entry.isIntersecting) {
              // 进入视图，对应导航名称变色
              emit('menuScroll', 4);
              // 当元素进入视口时，添加 'in-view' 类
              entry.target.classList.add('in-view');
            } else {
              // 当元素离开视口时，移除 'in-view' 类
              entry.target.classList.remove('in-view');
            }
          });
        },options);


      // 选择所有需要监视的 div
      const animatedDivs = document.querySelectorAll('.animatedDiv');
      animatedDivs.forEach(div => observer.observe(div));
    };

    onMounted(() => {
      initObserver();
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      buttonsContainer
    };
  }
});
</script>

<style lang="scss">
.BackerBox{
  white-space: pre-line; /* 换行符生效 */

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title1{

    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }
  .title2{

    background: linear-gradient(134deg, #FFEE02 0%, #FFFFFF 29%, #FFFCD1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 备用属性，以防浏览器不支持 */
    background-clip: text;
    color: transparent;
    display: inline-block; /* 确保背景应用于文本的内容 */
  }
  .infoBox{
    display: flex;
    flex-wrap: wrap; /* 让图片自动换行 */
    justify-content: space-between; /* 图片居中 */
  }
  .scrolling-container {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    .scrolling-wrapper {
      display: flex;
      animation: scroll 20s linear infinite;
    }
    
    .scrolling-item {
      min-width: 83px; /* 图片宽度，可以根据需要调整 */
      margin-right: 10px; /* 图片之间的间距 */
    }
    
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
<style scoped>
  .animatedDiv {
		opacity: 0; /* 初始透明度为 0 */
		transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  }
	.div-2 {
		transform: translateY(60px); /* 初始位置为缩小 */
	}
  .div-2.in-view {
		transform: translateY(0); /* 中间 div 从无到有 */
		opacity: 1;
	}
</style>
<template>
  <!-- Backer -->
  <div class="pt-[178px] mt-[100px] BackerBox" id="backerId">
    <div class="title1" style="font-family: 'F';" v-if="$i18n.locale === 'en'">THE ECOSYSTEM</div>
    <div class="title2 mt-2" style="font-family: 'F';" v-if="$i18n.locale === 'en'">BACKED BY THE BEST</div>
    <div class="title1" style="font-family: 'F';" v-if="$i18n.locale !== 'en'">NBC投资者生态系统</div>
    <div class="mt-3 text-lg font-normal text-[#EAECEF]" v-if="$i18n.locale !== 'en'">成为全球金融变革的推动者，探索无限机遇</div>
    <div class="mt-[60px] w-full h-[370px] flex items-center" style="border: 1px solid #222222;border-radius: 3%;">

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
    font-weight: bold;
    font-size: 30px;
    line-height: 48px;
    text-align: center;

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
    font-size: 40px;
    line-height: 60px;
    text-align: center;

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
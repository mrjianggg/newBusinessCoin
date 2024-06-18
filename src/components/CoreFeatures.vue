<template>
  <div class="CoreFeaturesBox" id="coreFeaturesId">
		<div class="mt-[156px] flex justify-center">
			<div class="mr-[100px] div-1 animated-div">
				<img src="@/assets/img/icon_1.png" class="w-[48px] h-[48px] mx-auto" />
				<div style="text-align: center;" class="w-[280px] mt-10 font-semibold text-base text-[#929495] leading-[24px]">
          <span v-if="$i18n.locale === 'en'">
            Driving innovation in decentralized finance <span class="text-[#FFEE02]">since 2013</span>
          </span>
          <span v-else>
            自<span class="text-[#FFEE02]">2013年</span>以来推动去中心化<br>金融创新
          </span>
        </div>
			</div>
			<div class="mr-[100px] div-2 animated-div">
				<img src="@/assets/img/icon_2.png" class="w-[48px] h-[48px] mx-auto" />
				<div style="text-align: center;" class="w-[280px] mt-10 font-semibold text-base text-[#929495] leading-[24px]">
          <span v-if="$i18n.locale === 'en'">
            Pioneers in Decentralized <span class="text-[#FFEE02]">Autonomous Fund Organization</span>
          </span>
          <span v-else>
            分布式<span class="text-[#FFEE02]">自治基金</span><br>组织的先驱
          </span>
        </div>
			</div>
			<div class="div-3 animated-div">
				<img src="@/assets/img/icon_3.png" class="w-[48px] h-[48px] mx-auto" />
				<div style="text-align: center;" class="w-[220px] mt-10 font-semibold text-base text-[#929495] leading-[24px]">
          <span v-if="$i18n.locale === 'en'">
            <span class="text-[#FFEE02]">Over 30,000 active users</span> and growing
          </span>
          <span v-else>
            <span class="text-[#FFEE02]">超过30,000</span>个活跃用户<br>且在不断增长
          </span>
        </div>
			</div>
		</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount} from 'vue';
export default defineComponent({
  name: 'CoreFeatures',
  setup() {
    const buttonsContainer = ref(null);
    let observer = null;

    // 初始化 IntersectionObserver
    const initObserver = () => {
      const options = {
        threshold: 0.2 // 当目标元素 20% 可见时触发回调
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 当元素进入视口时，添加 'visible' 类
            entry.target.classList.add('visible');
          } else {
            // 元素离开视口时，移除 'visible' 类（以便每次进入时重新触发动画）
            entry.target.classList.remove('visible');
          }
        });
      }, options);

      // 选择所有需要监视的 div
      const animatedDivs = document.querySelectorAll('.animated-div');
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

    const activeNames1 = ref([])
    const activeNames2 = ref([])
    const activeNames3 = ref([])
    const activeNames4 = ref([])
    const activeNames5 = ref([])
    return {
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


<style scoped lang="scss">
/* 容器样式，使三个 div 水平居中排列 */
.CoreFeaturesBox {
	.animated-div {
		opacity: 0; /* 初始透明度为 0 */
		transition: transform 0.5s ease-out, opacity 0.5s ease-out;
	}
	
	/* 初始位置设置 */
	.div-1 {
		transform: translateX(-200px); /* 初始位置在屏幕左边外 */
	}
	
	.div-2 {
		transform: translateY(60px); /* 初始位置为缩小 */
	}
	
	.div-3 {
		transform: translateX(200px); /* 初始位置在屏幕右边外 */
	}
	
	/* 可见时的动画 */
	.visible.div-1 {
		transform: translateX(0); /* 左侧 div 移动到原位置 */
		opacity: 1;
	}
	
	.visible.div-2 {
		transform: translateY(0); /* 中间 div 从无到有 */
		opacity: 1;
	}
	
	.visible.div-3 {
		transform: translateX(0); /* 右侧 div 移动到原位置 */
		opacity: 1;
	}
}


</style>
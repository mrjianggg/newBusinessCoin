<template>
  <!-- About us -->
  <div class="AboutUsBox pt-[166px]" id="aboutUsId">
      <div class="main-title font-bold">
        <p class="title-text3 text-[30px] leading-[36px]" style="font-family: 'F';" v-if="$i18n.locale === 'en'">GLOBAL FIRST</p>
        <p class="title-text text-[40px] leading-[60px] mt-2" style="font-family: 'F';">{{ $t('AboutUs.DISTRIBUTED') }}</p>
        <p class="title-text text-[40px] leading-[60px] mt-1" style="font-family: 'F';"><span>{{ $t('AboutUs.ORGANIZATION') }}</span> <span class="title-text2">DACO</span></p>
      </div>
      
      <div class="w-[578px] font-normal text-base leading-[30px] mx-auto mt-4 text-[#929495] text-center">
        {{ $t('AboutUs.Using') }}
      </div>

      <div class="mt-10 mx-auto flex items-center justify-center">
        <div class="w-[168px] h-[52px] rounded-[30px] bg-[#FFEE02] cursor-pointer font-semibold text-black text-base flex items-center justify-center">{{ $t('AboutUs.Building') }}</div>
        <div style="border: 1px solid #323232;" class="w-[168px] h-[52px] rounded-[30px] cursor-pointer font-semibold text-white text-base flex items-center justify-center ml-4">{{ $t('AboutUs.LearnMore') }}</div>
      </div>

        <!-- 插画 -->
      <div class="mt-[124px] flex justify-center relative">
        <img src="@/assets/img/chahua_left.png" class="w-[291px] h-[286px]" />
        <img src="@/assets/img/chahua_center.png" class="w-[481px] h-[457px] mt-[8px] ml-[1px]" />
        <img src="@/assets/img/chahua_right.png" class="w-[232px] h-[273px] mt-[35px] ml-[32px]" />
        <img src="@/assets/img/chahua_da.png" class="w-[82px] h-[60px] mt-[35px] ml-[32px] absolute bottom-[90px] right-[220px] moving1" />
        <img src="@/assets/img/chahua_xiao.png" class="w-[62px] h-[46px] mt-[35px] ml-[32px] absolute bottom-[50px] right-[320px] moving2" />
      </div>

  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount,defineEmits} from 'vue';
export default defineComponent({
  name: 'About us',
  setup(props, { emit }) {
    let observer = null;
    // 定义 emit 事件
    // 初始化 IntersectionObserver
    const initObserver = () => {
      const options = {
        threshold: 0.2 // 当目标元素 20% 可见时触发回调
      };
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 进入视图，对应导航名称变色
            emit('menuScroll', 0);
          } else {
            // console.log('离开');
          }
        });
      }, options);

      // 选择所有需要监视的 div
      const div = document.getElementById('aboutUsId');
      observer.observe(div)
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
      
    };
  }
});
</script>

<style lang="scss">
.AboutUsBox{
	.main-title{
		display: flex;
		flex-direction: column;
		justify-content: center;
		.title-text{
			/* 使用线性渐变作为背景 */
			background: linear-gradient(15deg, #FFEE02 5%, #FFFFFF 29%, #FFFCD1 100%);
			-webkit-background-clip: text;
			/* 隐藏文字的实际颜色，使背景显示出来 */
			color: transparent;
		}
		.title-text2{
			color: #FFEE02;
		}
		.title-text3{
			/* 使用线性渐变作为背景 */
			background: linear-gradient(44deg, #FFEE02 2%, #FFFFFF 29%, #FFFCD1 100%);
			-webkit-background-clip: text;
			/* 隐藏文字的实际颜色，使背景显示出来 */
			color: transparent;
		}
		p {
				text-align: center;
				margin: auto;
				mask: radial-gradient(
						circle at 0 50%,
						#000,
						transparent 10%,
						transparent 0
				);
				mask-size: 100%;
				animation: scale 7s forwards;
				animation-fill-mode: forwards; /* 确保动画结束后保持最后状态 */
		}
		@keyframes scale {
				50%,
				99% {
						mask-size: 2000%;
				}
				100% {
            mask: none;
				}
		}

	}


  .moving1 {
    transform: translate(0,0);
    animation: moveAround1 4s linear infinite; /* 应用动画 */
  }
  
  @keyframes moveAround1 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px); /* 向下移动100px */
    }
  }

  .moving2 {
    transform: translate(0,0);
    animation: moveAround2 3s linear infinite; /* 应用动画 */
  }
  
  @keyframes moveAround2 {
    /*
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(10px, 10px);
    }
    25% {
      transform: translate(10px, 0);
    }
    75% {
      transform: translate(0, 10px);
    }
    */
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px); /* 向下移动100px */
    }
  }
}
</style>

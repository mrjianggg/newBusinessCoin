<template>
  <!-- NBC Token -->
  <div class="pt-[140px] <xl:pt-[30px] CommunityBox flex items-center justify-between <xl:block" id="communityId">
    <div class="<xl:flex <xl:flex-col <xl:items-center">
      <div class="title1 text-[22px] leading-[30px]" style="font-family: 'F';" v-if="$i18n.locale === 'en'">JOIN THE</div>
      <br>
      <div class="title1 text-[22px] leading-[30px]" style="font-family: 'F';" v-if="$i18n.locale === 'en'">NBC COMMUNITY NOW</div>
      <div class="title1 text-[22px] leading-[30px]" style="font-family: 'F';" v-if="$i18n.locale !== 'en'">立刻加入NBC社区</div>
      <div class="mt-4 <xl:mt-2 text-[#929495] text-base <xl:text-[14px] font-normal leading-[26px] <xl:leading-[26px] w-[520px] <xl:text-center <xl:w-[330px]">
        <span v-if="$i18n.locale === 'en'">Become a part of the revolutionary financial ecosystem. Join the NBC community today and contribute to a future of wealth sharing and abundant opportunities.</span>
        <span v-else>成为革命性金融生态系统的一员。
          今天就加入NBC社区，为财富共享和充满机遇的未来作出贡献。</span>
      </div>
      <div class="<xl:w-[108px] w-[178px] h-[56px] <xl:h-[38px] bg-[#FFEE02] rounded-[30px] flex items-center justify-center cursor-pointer font-bold text-base <xl:text-[14px] text-black mt-[48px] <xl:mt-[18px]">
        <span v-if="$i18n.locale === 'en'">Follow us</span>
        <span v-else>加入我们</span>
      </div>
    </div>
    <div class="relative text-white text-lg <xl:w-[400px] <xl:h-[400px] <xl:w-full <xl:mx-auto">
      <!-- <canvas class="<xl:hidden" ref="canvas" width="560" height="560"></canvas> -->
      
      <canvas class="mx-auto" ref="canvas" :width="isSmallScreen?400:560" :height="isSmallScreen?400:560"></canvas>
      
      <div class="platform platform1 pb-[41px] <xl:pb-[20px] w-[242px] <xl:w-[121px] h-[222px] <xl:h-[111px] absolute top-[0px] <xl:top-[40px] left-[-20px] <xl:left-[13%]">Facebook</div>
      <div class="platform platform2 pb-[41px] <xl:pb-[20px] w-[242px] <xl:w-[121px] h-[222px] <xl:h-[111px] absolute top-[40px] <xl:top-[70px] left-[240px] <xl:left-[53%]">Telegram</div>
      <div class="platform platform3 pb-[41px] <xl:pb-[20px] w-[242px] <xl:w-[121px] h-[222px] <xl:h-[111px] absolute top-[240px] <xl:top-[160px] left-[-20px] <xl:left-[13%]">Youtube</div>
      <div class="platform platform4 pb-[41px] <xl:pb-[20px] w-[242px] <xl:w-[121px] h-[222px] <xl:h-[111px] absolute top-[280px]  <xl:top-[190px] left-[240px] <xl:left-[53%]">Twitter</div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return{
      buttonsContainer: null,
      observer: null,
      screenWidth: window.innerWidth,
    }
  },
  mounted() {
    // 在组件挂载时开始绘制和动画
    this.drawAndAnimate();
    this.initObserver();
    window.addEventListener('resize', this.updateWidth);
  },
  destroyed() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', updateWidth);
  },
  computed: {
    isSmallScreen(){
      return this.screenWidth < 1280;
    },
  },
  methods: {
    updateWidth() {
      this.screenWidth = window.innerWidth;
    },
    initObserver() {
      const options = {
        threshold: 0.2 // 当目标元素 20% 可见时触发回调
      };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 进入视图，对应导航名称变色
            this.$emit('menuScroll', 5);
          } else {

          }
        });
      }, options);

      // 选择所有需要监视的 div
      const div = document.getElementById('communityId');
      this.observer.observe(div)
    },
    drawAndAnimate() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      // 设置两个圆的属性
      const radius1 = this.isSmallScreen ? 150:260; // 第一个圆的半径
      const radius2 = this.isSmallScreen ? 130:210; // 第二个圆的半径
      const centerX1 = canvas.width / 2; // 第一个圆的中心 X 坐标
      const centerY1 = canvas.height / 2; // 第一个圆的中心 Y 坐标
      const centerX2 = canvas.width / 2 - 10; // 第二个圆的中心 X 坐标，稍微右移一些以重叠
      const centerY2 = canvas.height / 2 + 20; // 第二个圆的中心 Y 坐标
      const ballRadius = 10; // 小球的半径
      let angle1 = 0; // 第一个小球的角度
      let angle2 = 0; // 第二个小球的角度

      // 绘制虚线圆的方法
      const drawDashedCircle = (centerX, centerY, radius) => {
        // 绘制虚线圆
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#717171'; // 圆的颜色
        ctx.lineWidth = 1; // 圆的线宽
        ctx.setLineDash([10, 8]); // 设置虚线样式，[虚线长度, 间隔长度]
        ctx.stroke();
        ctx.closePath();
      };

      // 绘制小球的方法
      const drawBall = (centerX, centerY, radius, angle) => {
        // 计算小球的位置
        const ballX = centerX + radius * Math.cos(angle);
        const ballY = centerY + radius * Math.sin(angle);

        // 绘制小球
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFEE02'; // 小球的颜色
        ctx.fill();
        
        // 绘制小球的环形边框
        ctx.lineWidth = 5; // 边框宽度
        ctx.strokeStyle = 'rgba(255, 238, 2, 0.1)'; // 环形边框颜色，半透明的黄色
        ctx.stroke(); // 画出边框

        ctx.closePath();
      };

      const animate = () => {
        // 更新角度
        angle1 += 0.01; // 第一个小球的移动速度
        angle2 -= 0.02; // 第二个小球的移动速度，反向且速度稍快
        if (angle1 >= Math.PI * 2) {
          angle1 = 0; // 重置角度以循环动画
        }
        if (angle2 <= -Math.PI * 2) {
          angle2 = 0; // 重置角度以循环动画
        }

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制两个虚线圆和小球
        drawDashedCircle(centerX1, centerY1, radius1);
        drawBall(centerX1, centerY1, radius1, angle1);

        drawDashedCircle(centerX2, centerY2, radius2);
        drawBall(centerX2, centerY2, radius2, angle2);

        // 请求下一帧动画
        requestAnimationFrame(animate);
      };

      // 初始化绘制和动画
      animate();
    }
  }
};
</script>

<style scoped lang="scss">
.CommunityBox{
  width: 100%;
  .title1{
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
  .platform{
    font-weight: bolder;
    background-repeat:no-repeat;/*   背景略平铺1_1 */
    background-size:100% 100%;/*   背景略平铺1_2 */
    -moz-background-size:100% 100%;/*   背景略平铺1_3 */
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .platform1{
    background-image: url('~@/assets/img/icon_Facebook.png');
  }
  .platform2{
    background-image: url('~@/assets/img/icon_Telegram.png');
  }
  .platform3{
    background-image: url('~@/assets/img/icon_Youtube.png');
  }
  .platform4{
    background-image: url('~@/assets/img/icon_Telegram.png');
  }
}
</style>
<template>
  <!-- Footer -->
  <div class="FooterBox pt-[48px] mt-[250px]">
    <div class="w-[1200px] flex justify-between mx-auto">
      <div>
        <img src="@/assets/img/icon.png" class="w-[168px] h-[30px] mr-[66px]" />
        <div class="mt-2 font-normal text-xs leading-[20px] text-white">© 2024 New Business Coin </div>
        <div class="flex mt-6">
          <img src="@/assets/img/lianxi1.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi2.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi3.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi4.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi5.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi6.png" class="cursor-pointer w-[28px] h-[28px]" />
        </div>
      </div>
      <div class="flex mt-10">
        <img src="@/assets/img/Google.png" class="cursor-pointer w-[142px] h-[42px] mr-[30px]" />
        <img src="@/assets/img/App.png" class="cursor-pointer w-[142px] h-[42px]" />
      </div>
    </div>

    <div class="xian mx-auto"></div>

    <div class="mt-[60px] w-full h-[60px] bg-[#171717] flex justify-center items-center font-normal text-xs text-[#929495]">
      <span v-if="$i18n.locale === 'en'">All investments involve risk, and the past performance of a financial product does not guarantee future results. Please consider your investment objectives, level of experience, and risk appetite before investing.</span>
      <span v-else>所有投资都涉及风险，金融产品的过去表现不能保证未来结果。请在投资前考虑您的投资目标、经验水平和风险承受能力。</span>
    </div>

  </div>
</template>

<script>
import { defineComponent, onMounted, ref, onUnmounted ,onBeforeUnmount} from 'vue';
export default defineComponent({
  name: 'Footer',
  setup() {

  }
});
</script>

<style lang="scss">
.FooterBox{
  width: 100%;
  .xian{
    margin-top: 40px;
    width: 1200px;
    height: 0;
    border-top: 1px solid #222222;
  }

}
</style>
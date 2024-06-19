<template>
  <!-- Footer -->
  <div class="FooterBox pt-[48px] mt-[250px] <xl:pt-[18px] <xl:mt-[10px]">
    <div class="w-[1200px] <xl:w-full flex justify-between mx-auto <xl:px-[20px]">
      <div>
        <img src="@/assets/img/icon.png" class="w-[168px] <xl:w-[146px] h-[30px] <xl:h-[26px] mr-[66px] <xl:mr-[0]" />
        <div class="mt-2 font-normal text-xs leading-[20px] text-white">© 2024 New Business Coin </div>
        <div class="flex mt-6 <xl:hidden">
          <img src="@/assets/img/lianxi1.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi2.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi3.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi4.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi5.png" class="cursor-pointer w-[28px] h-[28px] mr-[30px]" />
          <img src="@/assets/img/lianxi6.png" class="cursor-pointer w-[28px] h-[28px]" />
        </div>
      </div>
      <div class="flex mt-10 <xl:mt-0 <xl:block">
        <img src="@/assets/img/Google.png" class="cursor-pointer w-[142px] <xl:w-[81px] h-[42px] <xl:h-[24px] mr-[30px] <xl:mr-[0]" />
        <img src="@/assets/img/App.png" class="cursor-pointer w-[142px] <xl:w-[81px] h-[42px] <xl:h-[24px] <xl:mt-[10px]" />
      </div>
    </div>

    <div class="flex mt-6 xl:hidden <xl:px-[20px]">
      <img src="@/assets/img/lianxi1.png" class="cursor-pointer w-[28px] h-[28px] mr-[20px]" />
      <img src="@/assets/img/lianxi2.png" class="cursor-pointer w-[28px] h-[28px] mr-[20px]" />
      <img src="@/assets/img/lianxi3.png" class="cursor-pointer w-[28px] h-[28px] mr-[20px]" />
      <img src="@/assets/img/lianxi4.png" class="cursor-pointer w-[28px] h-[28px] mr-[20px]" />
      <img src="@/assets/img/lianxi5.png" class="cursor-pointer w-[28px] h-[28px] mr-[20px]" />
      <img src="@/assets/img/lianxi6.png" class="cursor-pointer w-[28px] h-[28px]" />
    </div>

    <div class="xian mx-auto <xl:hidden"></div>

    <div class="mt-[60px] <xl:mt-[20px] w-full py-[20px] bg-[#171717] flex justify-center items-center font-normal text-xs text-[#929495]  <xl:px-[20px]">
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
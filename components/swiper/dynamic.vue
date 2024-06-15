<template>
  <div class=" overflow-hidden">
    <swiper
        :direction="direction"
        :slidesPerView="direction==='vertical'?1:1"
        :loop="true"
        :spaceBetween="50"
        :breakpoints="{
      '1024': {
        slidesPerView: `${direction === 'vertical' ? 2 : 1}`,
        spaceBetween: 60,
      },

    }"
        :grid="{
        // rows:2 ,
      }"
        @slideChange="onSlideChange"
        :mousewheel="true"
        :navigation=" {
      nextEl:'.button-next',
      prevEl: '.button-prev'
       }"
        :autoplay="{
        delay:5000,
        disableOnInteraction: false,
      }"
        :modules="[Autoplay, Navigation ,Grid , Pagination]"
        :pagination="{
       clickable: true,
       }
"

        class="mySwiper1 w-full " :class="{weblog:weblog===true , vertical:direction}"
    >
      <slot/>

      <div
          :class="{hidden:direction}"
          class="control absolute z-10 right-1/2 bottom-4 md:bottom-5 lg:bottom-8 transform translate-x-[-10%]  flex flex-row-reverse justify-center mt-4 gap-2">
        <div
            class="hover:cursor-pointer relative custom-button button-prev px-2 py-1.5   flex items-center justify-center text-gray-400"
            slot="button-prev">
          <i class="angle angel-left"/>
        </div>
        <div
            class="hover:cursor-pointer relative custom-button button-next px-2 py-1.5  flex items-center justify-center text-gray-400"
            slot="button-next">
          <i class="angle angel-right"/>
        </div>
      </div>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation, Mousewheel, Grid , Pagination} from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css'
import 'swiper/css/pagination';
import vertical from "~/components/swiper/vertical.vue";

const props = defineProps({
  direction: {
    type: String,
    default: "horizontal"
  },
  weblog:Boolean,
  breakpoint: Object,
  data: Object,
  grid: {
    type: Number,
    default: 1
  }
})

function onSlideChange() {
  // console.log('slide change');
}
</script>
<style scoped lang="scss">
.swiper {
  padding: 20px 50px 20px 20px;

}

.custom-button {
  .angle {
    width: 20px;
    height: 20px;
    border: 2px solid #AE7BB6;
    @media screen and (max-width: 1024px) {
      width: 12px;
      height: 12px;
    }
    @media screen and (max-width: 768px) {
      width: 6px;
      height: 6px;
    }

    &.angel-right {
      transform: rotate(45deg);
      border-bottom: 0;
      border-left: 0;
    }

    &.angel-left {
      transform: rotate(45deg);
      border-top: 0;
      border-right: 0;
    }
  }
}
.vertical{
  height: 685px;
  @media screen and (max-width: 1024px)  {
    height: 280px;
  }
  @media screen and (max-width: 768px)  {
    height: 500px;
  }
  @media screen and (max-width: 600px)  {
    height: 480px;
  }
  @media screen and (max-width: 558px)  {
    height: 460px;
  }
  @media screen and (max-width: 510px)  {
    height: 430px;
  }
  @media screen and (max-width: 460px)  {
    height: 400px;
  }
}
.weblog{
  height: auto !important;
}
</style>

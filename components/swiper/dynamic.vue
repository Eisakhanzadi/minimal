<template>
  <div class="container overflow-hidden">
    <swiper
        :spaceBetween="10"
        :loop="true"
        @slideChange="onSlideChange"
        :navigation=" {
        nextEl:'.button-next',
        prevEl: '.button-prev'
    }"
        :autoplay="{
          delay:5000,
                disableOnInteraction: false,
        }"
        :modules="[Autoplay, Navigation]"
        :pagination="{
      clickable: true,
    }
"

        class="mySwiper1"
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
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const props = defineProps({
  direction: {
    type: String,
    default: "horizontal"
  },
  breakpoint: Object,
  data: Object,
})

function onSlideChange() {
  console.log('slide change');
}
</script>
<style scoped lang="scss">
.swiper {
  padding: 20px 0 20px;

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
</style>

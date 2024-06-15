<template>
  <div class="container overflow-hidden">
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :loop="true"
        :mousewheel="true"
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
      clickable: true
    }"
        :breakpoints="{
      '400': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      '1240': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }"
        class="basic-swiper"
    >
      <slot></slot>
      <div
          class="control absolute z-10 w-full flex flex-row-reverse justify-between top-1/2 transform translate-y-[-50%] gap-2">
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
<script setup>
const props = defineProps(['data', 'direction'])
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

</script>
<style scoped lang="scss">

.custom-button {
  .angle {
    width: 20px;
    height: 20px;
    border: 2px solid #AE7BB6;
    @media screen and (max-width: 1024px) {
      width: 18px;
      height: 18px;
    }

    &.angel-right {
      transform: rotate(45deg) translate(-50%, -50%);
      border-bottom: 0;
      border-left: 0;
    }

    &.angel-left {
      transform: rotate(45deg) translate(-50%, -50%);
      border-top: 0;
      border-right: 0;
    }
  }
}
</style>

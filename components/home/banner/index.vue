<template>
  <swiper
      :slidesPerView="1"
      :loop="true"
      :spaceBetween="10"
      :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
      :pagination="{
      clickable: true,
    }"
      :modules="[Pagination]"
      class="mySwiper "
  >
    <swiper-slide >
      <img src="/public/image/home/banner.png" class="w-full" alt="">
    </swiper-slide>

  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules';

</script>
<style scoped>
.swiper{
  padding: 0 !important;
}
</style>


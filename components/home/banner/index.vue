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
      :modules="[]"
      class="mySwiper "
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
      <nuxt-link :to="item.link" class="card">
        <div>
          <img :src="item.image.url" class="w-full" :alt="item.image.name">
        </div>
      </nuxt-link>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules';
const props = defineProps(['data'])
</script>
<style scoped>
.swiper{
  padding: 0 !important;
}
</style>


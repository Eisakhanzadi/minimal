<template>
  <swiper
      :slidesPerView="theme==='newProduct' ?2 :3"
      :loop="true"
      :spaceBetween="10"
      :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
      :pagination="{
      clickable: true,
    }"
      :breakpoints="{
      '640': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: theme==='newProduct' ? 4 : 6 ,
        spaceBetween: theme==='newProduct' ? 10 : 50 ,
      },
    }"
      :modules="[Pagination]"
      class="mySwiper p-10 "
  >
    <swiper-slide v-for="(item , index) in data" :key="index" :class="`${theme==='brands'?'mx-auto':''}`">
      <home-category-card :data="item" v-if="theme !== 'brands'" :theme="props.theme"/>
      <div v-else>
        <figure class="overflow-hidden h-full w-full">
          <img :src="item.image" class="w-full h-full" :alt="index">
        </figure>
      </div>
    </swiper-slide>

  </swiper>
</template>
<script setup>
const props = defineProps(['data','theme'])
const {data} = props
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import "assets/swiper-style/_index.scss";

</script>
<style scoped lang="scss">
@import "assets/swiper-style/_index.scss";
figure{
  border-radius: var(--home-brands-border-radius);
  border:var(--home-brands-border-width) solid var(--home-brands-border-color);
}
</style>

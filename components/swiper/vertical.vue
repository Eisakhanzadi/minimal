<template>
<!--  <Swiper-->
<!--      :direction="'vertical'"-->
<!--      :modules="[SwiperAutoplay]"-->
<!--      :slides-per-view="2"-->
<!--      :loop="true"-->

<!--      :autoplay="{-->
<!--      delay: 8000,-->
<!--      disableOnInteraction: true,-->
<!--    }"-->
<!--      :creative-effect="{-->
<!--      prev: {-->
<!--        shadow: false,-->
<!--        translate: ['-20%', 0, -1],-->
<!--      },-->
<!--      next: {-->
<!--        translate: ['100%', 0, 0],-->
<!--      },-->
<!--    }"-->
<!--  >-->
<!--    <SwiperSlide v-for="slide in 10" :key="slide">-->
<!--      <strong>{{ slide }}</strong>-->
<!--    </SwiperSlide>-->
<!--  </Swiper>-->
  <swiper
      :direction="'vertical'"
      :mousewheel="true"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      class="mySwiper h-[400px]"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

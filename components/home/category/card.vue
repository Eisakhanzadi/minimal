<script setup lang="ts">
const props = defineProps(['data', 'theme'])
const {data, theme} = props
</script>

<template>
  <div class="card flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
    <div class="card-header">
      <div class="image">
        <figure class=" md:w-full md:h-full " :class="`${theme==='category' ? 'w-16 h-16' : ''}`" >
          <img :src="data.img" :alt="data.name" class="w-full h-full object-cover+">
        </figure>
      </div>
    </div>
    <div :class="`card-body  ${theme !== 'offer' ? 'text-center': ''} `">
      <nuxt-link :to="data.url" class="content flex flex-col gap-1.5">
        <div class="title">
          <h2>{{ data.name }}</h2>
        </div>
        <div class="card-text flex gap-2 justify-center">
          <span>تعداد</span>
          <span>{{ data.info }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

h2 {
  font-size: var(--home-swiper-category-font-size-title);
  font-weight: var(--home-swiper-category-font-weight-title);
  font-family: var(--home-swiper-category-font-family-title);
  color: var(--home-swiper-category-color-title);
  @media screen and (max-width: 768px) {
    font-size: var(--home-swiper-category-font-size-title-responsive);
  }
}

.card-text {
  color: var(--home-swiper-category-color-text);
  font-family: var(--home-swiper-category-font-family-text);
  @media screen and (max-width: 768px) {
    font-size: var(--home-swiper-category-font-size-title-responsive);
  }
}
</style>
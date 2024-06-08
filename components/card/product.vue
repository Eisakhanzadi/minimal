<script setup lang="ts">
const props = defineProps(['data', 'theme', 'price'])
const {data, theme, price} = props
</script>

<template>
  <div class="card  gap-2 hover:cursor-pointer">
    <div class="card-header overflow-hidden ">
      <div class="image">
        <img :src="data.img" class="w-full h-full transition duration-300 ease" :alt="data.name">
      </div>
    </div>
    <div :class="`card-body mt-2 ${theme === 'offer' ? 'text-center': ''} `">
      <nuxt-link :to="data.url" class="content grid gap-2 pt-2">
        <div class="title">
          <h2 v-if="data.name">{{ data.name }}</h2>
          <h2 v-if="data.title">{{ data.title }}</h2>
        </div>
        <div class="card-text" v-if="price===true">
          <div class="flex gap-1" >
            <span>{{ data.info }}</span>
            <span>تومان</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
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

.card {
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
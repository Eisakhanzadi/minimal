<script setup lang="ts">
const props = defineProps(['data', 'theme'])
const {data, theme} = props
</script>

<template>
  <nuxt-link :to="{path:'/products/' , query:{category_id:data.id}}" class="card flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
    <div class="card-header">
      <div class="image">
        <figure v-if="data.image" class=" md:w-full md:h-full " :class="`${theme==='category' ? 'w-16 h-16' : ''}`" >
          <img v-if="data.image.url && data.image.name" :src="data.image.url" :alt="data.image.name" class="w-full h-full object-cover+">
        </figure>
      </div>
    </div>
    <div :class="`card-body  ${theme !== 'offer' ? 'text-center': ''} `">
      <div  class="content flex flex-col gap-1.5">
        <div class="title" v-if="data.title">
          <h2>{{ data.title }}</h2>
        </div>
        <div class="card-text flex gap-2 justify-center">
          <span>تعداد</span>
          <span v-if="data.products_count">{{ data.products_count }}</span>
        </div>
      </div>
    </div>
  </nuxt-link>
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
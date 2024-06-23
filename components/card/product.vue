<script setup lang="ts">
const props = defineProps(['data', 'theme', 'price'])
const {data, theme, price} = props
const routeName = ref(null)
const route = useRoute()
if (route.path.includes('weblog')){
  routeName.value = 'weblog'
}
else if (route.path.includes('products')){
  routeName.value = 'products'
}
</script>

<template>
  <nuxt-link v-if="data.id" :to="`/${routeName}/${data.id}`" class="card relative  gap-2 hover:cursor-pointer">
      <icons-offers v-if="data.price && data.discount" :price="data.price" :discount="data.discount" />
    <div class="card-header rounded overflow-hidden ">
      <div class="image">
        <img v-if="data.image.url" :src="data.image.url" class="w-full h-full transition duration-300 ease" :alt="data.title">
      </div>
    </div>
    <div :class="`card-body mt-2 ${theme === 'offer' ? 'text-center': ''} `">
      <div  class="content grid gap-2 pt-2">
        <div class="title">
          <h2 v-if="data.title">{{ data.title }}</h2>
        </div>
        <div class="card-text" v-if="price===true">
          <div class="flex gap-1" >
            <span v-if="data.price">{{ data.price.toLocaleString()}}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
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
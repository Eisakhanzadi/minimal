<script setup lang="ts">
const props = defineProps(['data'])
const {data} = props
</script>

<template>
  <div class="card w-full hover:opacity-60 transition duration-150 ease-in ">
    <div class="card-header w-full">
      <div class="image w-full">
        <figure class="w-full relative overflow-hidden ">
          <div class="offer">
            <span class="relative"></span>
          </div>
          <img :src="data.img" class=" hover:scale-105 transition duration-300 ease w-full" :alt="data.name">
        </figure>
      </div>
    </div>
    <div class="card-body mt-1.5 ">
      <nuxt-link :to="data.url" class="content  ">
        <div class="title">
          <h2>{{ data.name }}</h2>
        </div>
        <div class="card-text mt-1.5 ">
          <span>{{ data.info.toLocaleString() }}</span>
        </div>
      </nuxt-link>
    </div>

  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: var(--home-offer-card-font-size-title);
  font-weight: var(--home-offer-card-font-weight-title);
  font-family: var(--home-offer-card-font-family-title);
  color: var(--home-offer-card-color-title);
  @media screen and (max-width: 768px) {
    font-size: var(--home-swiper-category-font-size-title-responsive);
  }
}

.card-text {
  color: var(--home-offer-card-color-text);
  font-family: var(--home-offer-card-font-family-text);
  font-size: var(--home-offer-card-font-size-text);
  @media screen and (max-width: 768px) {
    font-size: var(--home-swiper-category-font-size-title-responsive);
  }

}

</style>
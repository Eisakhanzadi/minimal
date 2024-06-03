<script setup lang="ts">
const props = defineProps(['data'])
const {data} = props
</script>

<template>
  <div class="card">
    <div class="card-header text-center">
      <div class="card-title">
        <h3>{{ data.title }}</h3>
      </div>
      <div class="sub-title">
        <p>{{ data.sub }}</p>
      </div>
    </div>
    <div class="card-body">
      <home-swiper :data="data.products" theme="newProduct"/>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  color: var(--home-new-products-title-color);
  font-size: var(--home-new-products-title-font-size);
  font-family: var(--home-new-products-title-font-family);
  font-weight: var(--home-new-products-title-font-weight);
}
.sub-title p {
  color: var(--home-new-products-text-color);
  font-size: var(--home-new-products-text-font-size);
  font-family: var(--home-new-products-text-font-family);
  font-weight: var(--home-new-products-text-font-weight);
  line-height: var(--home-new-products-text-line-height);
}
@media screen and (max-width: 768px) {
  .card-title{
    font-size: var(--home-new-products-text-font-size-responsive);
  }
  .sub-title p {
    font-size: var(--home-new-products-text-font-size-responsive);
  }
}

</style>
<script setup lang="ts">
const props = defineProps(['data'])
const {data} = props
</script>

<template>
  <div class="backdrop-weblog pt-10 pb-14">
    <div class="pt-5  lg:pt-10">
      <div class="text-center title"><h2>{{ data.title }}</h2></div>
      <div class="text-center sub-title"><p>{{ data.subTitle }}</p></div>
    </div>
    <div class="container px-5 flex flex-col gap-10 mt-8 mx-auto">
      <swiper-dynamic direction='vertical' :grid="2" >
        <swiper-slide v-for="(item,index) in data.content" :key="index" class="h-fit my-auto">
          <home-weblog-card :data="item"/>
        </swiper-slide>
      </swiper-dynamic>
    </div>
  </div>
</template>

<style scoped>

.backdrop-weblog {
  position: relative;

  &:after {
    position: absolute;
    content: "";
    width: var(--home-weblog-width);
    height: 100%;
    left: 0;
    background: var(--home-weblog-background-color);
    z-index: -1;
    top: 0;
  }

  .title {
    color: var(--home-weblog-title-color);
    font-size: var(--home-weblog-title-font-size);
    font-family: var(--home-weblog-title-font-family);
    font-weight: var(--home-weblog-title-font-weight);
  }

  .sub-title {
    color: var(--home-weblog-sub-title-color);
    font-size: var(--home-weblog-sub-title-font-size);
    font-family: var(--home-weblog-sub-title-font-family);
    font-weight: var(--home-weblog-sub-title-font-weight);
  }
}

figure {
  &:nth-child(even):after {
    display: none;
  }
}
</style>
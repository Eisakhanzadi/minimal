<script setup lang="ts">
const props = defineProps(['data' , 'count'])
</script>

<template>
<div class="card grid grid-cols-12 gap-5 ">
  <div class="card-header col-span-4 flex items-center relative">
    <span class="w-10 h-10 flex items-center justify-center absolute right-5 top-1/2 transform translate-y-[-50%] rounded">{{count+1}}</span>
    <img src="/public/image/offers/5.png"  alt="" class=" ms-auto w-[110px] h-[110px]">
  </div>
  <div class="body col-span-8">
    <div class="category flex items-center gap-1.5"><h5>{{data.category}}</h5></div>
    <nuxt-link :to="data.url" class="title"><h4>{{data.title}}</h4></nuxt-link>
  </div>
</div>
</template>

<style scoped lang="scss">
span{
  background: #AE7BB6;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
}
.category{
  font-weight: 700;
  font-size: 15px;
  line-height: 56px;
  color: #5E2E66;
  &:before{
    content: "";
    width: 32px;
    height: 3px;
    border-radius: 3px;
    background: #AE7BB6;
  }
}
.title{
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
}
</style>
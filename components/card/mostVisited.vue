<script setup lang="ts">
const props = defineProps(['data' , 'count'])
</script>

<template>
<nuxt-link :to="`/weblog/${data.id}`" v-if="data.id" class="card grid grid-cols-12 gap-5 ">
  <div class="card-header col-span-3 lg:col-span-4 flex items-center relative">
    <span class="w-10 h-10 flex items-center justify-center absolute right-[30%] lg:right-[5%] xl:right-[20%] top-[50%] transform translate-y-[-50%] translate-x-[50%]  rounded">{{count+1}}</span>
    <img v-if="data.image.url && data.title" :src="data.image.url"  :alt="data.title" class=" ms-auto w-[110px] h-[110px]">
  </div>
  <div class="body col-span-9 lg:col-span-8">
    <div class="category flex items-center gap-1.5" v-if="data.category.title"><h5>{{data.category.title}}</h5></div>
    <div  class="title" v-if="data.title"><h4>{{data.title}}</h4></div>
  </div>
</nuxt-link>
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
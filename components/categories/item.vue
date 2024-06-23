<script setup lang="ts">
const  props = defineProps(['items'])
</script>

<template>
<div>
  <ul class="grid gap-3">
    <li v-for="(item ,index) in items " :key="index" class="text-center ">
      <nuxt-link :to="{path:'/weblog' , query:{category_id:item.id}}" > {{item.title}} </nuxt-link>
    </li>
  </ul>
</div>
</template>

<style scoped>
li{
  background: linear-gradient(to left ,#AE7BB6,#c5a7c9);
}
  a{
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 91px;
  }
</style>
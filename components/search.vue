<script setup lang="ts">
const emit = defineEmits(['closeSearch'])
</script>

<template>
<div class="search-box backdrop" @click.self="emit('closeSearch')">
  <div class="form w-full mt-[15vh] relative ">
    <input type="text" class=" w-11/12 sm:w-2/3 mx-auto block rounded-full py-3 outline-0 px-3 md:px-5 focus:border-2 focus:shadow-sm focus:shadow-[#AE7BB6] focus:border-[#AE7BB6] placeholder:text-sm md:placeholder:text-lg " name="" id="" placeholder="دنبال چی میگردی ... ؟">
    <button class="absolute bottom-2 left-[7%] sm:left-[19%] lg:left-[17.5%] "><icons-search/></button>
  </div>
</div>
</template>

<style scoped lang="scss">
.backdrop{
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  z-index: 20;
  backdrop-filter: blur(3px);
  border: #AE7BB6;
}
</style>
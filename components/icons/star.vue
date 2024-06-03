<script setup lang="ts">
const props = defineProps(['comments'])
</script>

<template>
  <div class="flex items-center justify-center overflow-hidden w-[11.61px] h-[11.61px] md:w-[26px] md:h-[26px]" :class="{comment: comments===true}">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 26 24" fill="none">
      <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFDE2F"/>
    </svg>
  </div>
</template>
<style scoped>
.comment{
 width: 36px;
  height: 36px;
  @media screen and (max-width: 768px){
    width: 13.5px;
    height: 13.5px;
  }
}
</style>
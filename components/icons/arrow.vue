<script setup>
const props = defineProps(['theme'])
</script>
<template>
<div class="flex justify-center items-center w-4 h-8 md:w-6 md:h-10"  >
  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-10" :class="{arrow:theme===true}" viewBox="0 0 24 42" fill="none">
    <path d="M10.5 40C10.5 40.8284 11.1716 41.5 12 41.5C12.8284 41.5 13.5 40.8284 13.5 40H10.5ZM13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 40L13.5 2H10.5L10.5 40H13.5Z" fill="#AE7BB6"/>
  </svg>
</div>
</template>
<style scoped>
.arrow{
  width: 8px !important;
  height:28px !important;
  rotate: -90deg;
}
</style>

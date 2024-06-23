<script setup lang="ts">
import calculateOffer from "../../assets/tools/calculateOffer";

const props = defineProps(['price' , 'discount'])
</script>

<template>
<div class="absolute top-[-8%] z-[1] left-[-8%]">
  <div class="relative">
    <img src="/svg/offers.svg" alt="offers Image">
    <span class="absolute transform "> {{calculateOffer(price,discount).toString().substring(0,4)}} % تخفیف</span>
  </div>
</div>
</template>

<style scoped lang="scss">
span{
  position: absolute;
  transform-origin: center;
  transform: rotate(-37deg);
  top: 39%;
  left: -8%;
  font-size: 12px;
  text-align: center;
  width: 100%;
  color: #FFFFFF;
  font-weight: bold;
}
</style>
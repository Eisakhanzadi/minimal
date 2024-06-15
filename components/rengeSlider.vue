<script setup>
const range = reactive({
  min:0,
  max:100
})
</script>
<template>
  <div>
    <div class="price-content flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <span>از</span>
        <input type="text" class="py-1.5 w-full rounded px-3 text-left outline-0" placeholder="0">
        <span>تومان</span>
      </div>
      <div class="flex items-center gap-2">
        <span>تا</span>
        <input type="text" class="py-1.5 w-full rounded px-3 text-left outline-0" placeholder="150.000.000" >
        <span>تومان</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div{
  font-size: 16px ;
  line-height: 15px;
  font-weight: 500;
}
</style>
<script setup >
const props = defineProps(['data'])
</script>

<template>
  <div class="bread-crumb my-5">
      <nav class="flex  items-center ">
        <ul class="flex items-center gap-3 " >
          <li class="flex items-center">
            <nuxtLink to="/">صفحه اصلی</nuxtLink>
          </li>
          <li v-for="(item , index ) in props.data" class="flex items-center gap-2" :key="index" >
            <div class="divider">
              <icons-arrow :theme="true" />
            </div>
            <nuxtLink :class="{disabled:data.length-1 == index}"  :to="data.length-1 == index ? '' :item.url">{{item.name}}</nuxtLink>
          </li>
        </ul>
      </nav>
  </div>
</template>

<style scoped lang="scss">
.bread-crumb{
  //background: url("@/assets/image/swiper/parellex-bg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
a{
  color: var(--color-default);
  font-size: var(--breadcrumb-font-size) ;
}
.disabled{
  font-weight: 500;
}

</style>
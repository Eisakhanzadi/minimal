<script setup lang="ts">
const emit = defineEmits(['openList'])
const props = defineProps([
  'theme',
  'filter'
])
const data = [
    'فیلتر',
    'دسته بندی ',
    'قیمت ',
    'برند',
]
const items = ref(null)

onMounted(() => {
  items.value[props.theme].classList.add('active')
})

function handleActive(index , item) {
  items.value.forEach(item => {
    item.classList.remove('active')
  })
  items.value[index].classList.add('active')
  emit('openList' , item)
}
</script>

<template>

  <ul class="nav flex gap-3 md:gap-5 items-center productPage ">
    <li class="flex items-center pb-2"><span class="icon"><lazy-icons-filter/></span><span class="title">دسته بندی بر اساس :</span></li>
    <li class="nav-list  pb-2 hover:cursor-pointer " ref="items" @click="handleActive(index , item)"
        v-for="(item , index) in data" :key="index">
      <nuxt-link class="nav-item">{{ item }}</nuxt-link>
    </li>
  </ul>

</template>

<style scoped lang="scss">


.productPage {
  align-items: center;
  li {
    &:first-child{
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    }
    padding-bottom: 0  !important;
    gap: 20px;
    font-size: var(--products-filter-font-size-item);
    font-family: var(--products-filter-font-family-item);
    font-weight: var(--products-filter-font-weight-item);
    color: var(--products-filter-color-item);
    @media screen and (max-width: 768px) {
      &:first-child{
        font-size: 10px;
        line-height: 10px;
      }
      font-size: var(--products-filter--font-size-item-responsive);
      font-family: var(--products-filter-font-family-item-responsive);
    }
    &.nav-list{
      position: relative;
    }
    &.nav-list:after{
      content: "";
      width: 0%;
      height: 3px;
      background: #AE7BB6;
      position: absolute;
      bottom: -15px ;
      right: 0;
      transition:width 0.2s;
    }
    &.active {
      color: var(--products-filter-color-item-active);
      &:after{
        width: 100%;
      }
    }
  }
}


</style>
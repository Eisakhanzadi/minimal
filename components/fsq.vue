<script setup lang="ts">
const props = defineProps({
  data:Array
})
const collapses = ref(null)
const defaultOpen = 3
function showCollapse(index) {
  collapses.value.forEach(item => {
    item.classList.remove('active-collapse')
    item.lastElementChild.style.maxHeight = 0
  })
  collapses.value[index].classList.toggle('active-collapse')
  collapses.value[index].lastElementChild.style.maxHeight = `${collapses.value[index].lastElementChild.scrollHeight}px`
}
onMounted(()=>{
  collapses.value[defaultOpen].lastElementChild.style.maxHeight = `${collapses.value[defaultOpen].lastElementChild.scrollHeight}px`
  // باز کردن یک آیتم به صورت پیض فزض یک کلاس داینامیک هم به خود المنت داده شده
})
</script>

<template>
  <div class="question py-5 container px-5 mx-auto">
    <h3 class="question-title py-5 mb-5 ">سوالات متداول</h3>
    <div class="accordion grid gap-y-3">
      <div class="collapse-container  flex flex-col px-4 " ref="collapses"
           v-for="(item , index) in data"  :key="index" :class="{'active-collapse': defaultOpen === index }"  >
        <div class="collapse-title hover:cursor-pointer flex justify-between items-center py-4"  @click="showCollapse(index)">
          <h4>{{ item.name }}</h4>
        </div>
        <div class="collapse-body" >
          <p class="py-3">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  .question-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 31.2px;
    color: #000000;
  }

  .accordion {
    background: #F6ECF8;
    padding: 25px 20px;

    .collapse-container {
      background: white;
      .collapse-title {
        font-size: 20px;
        font-weight: 700;
        color: #000000;
        line-height: 26px;
        transition: 0.2s;
        &:after {
          content: "";
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
          border: 2px solid #5E2E66;
          border-top: 0;
          border-left: 0;
          transition: 0.3s;
        }
      }

      .collapse-body {
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        line-height: 32.16px;
        max-height: 0;
        overflow: hidden;
        transition: 0.5s;
      }

      &.active-collapse {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

        .collapse-title {
          padding-bottom: 0;
          &:after {
            transform: rotate(225deg);
          }
        }
      }
    }
  }
}
</style>
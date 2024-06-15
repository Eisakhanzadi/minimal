<script setup lang="ts">
const props = defineProps(["data", "theme"])
const parent = ref(null)
const child = ref(null)
const showList = ref(false)

function show() {
  parent.value.classList.toggle('show')

  showList.value = !showList.value
}
</script>

<template>
  <div class="w-full  py-3 father navbar-mobile-item  relative mt-3 "
      :class="{ theme:props.theme===true , borderNone:!props.data.sub}"
      ref="parent">
    <div class="flex  justify-between w-full">
      <nuxtLink :to="props.data.link">
        <span>{{ props.data.name }}</span>
      </nuxtLink>
      <div class="navbar-mobile-icon bg-gray-300 cursor-pointer">
        <span v-if="props.data.sub" class="icon" @click="show"></span>
      </div>
    </div>
    <div class="sub-menu overflow-hidden" v-if="props.data.sub " ref="child">
      <div class="nav w-full overflow-hidden">
        <transition-group name="transition">
          <navbar-mobile v-if="props.data.sub && showList" v-for="(item , index) in props.data.sub" :key="index" :data="item"
                  :theme="props.data.sub.length ? true : false"/>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme {
  padding: 5px 10px;
  margin-top: 10px;
}

.borderNone {
  border: none;
}

div > div > div > span.icon:after {
  position: absolute;
  content: "+";
  left: 0;
  top: 5px;
  font-size: 20px;
  padding: 5px 10px;
}

.sub-menu {
  transition: 0.5s;
}

div.show > div > div > span.icon:after {
  content: "-";
}

.transition-enter-active {
  transition: 0.5s ease;
}

.transition-leave-active {
  transition: 0.5s ease;
}

.transition-enter-from, .transition-leave-to {
  transform: translateX(20%);
  opacity: 0;
}

</style>
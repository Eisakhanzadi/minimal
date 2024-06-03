<script setup lang="ts">
const data = ref({
  menu: [
    {
      name: "خانه",
      link: "/",
    },
    {
      name: "محصولات",
      link: "/products",
      sub: [
        {
          name: "محصولات",
          link: ""
        },
        {
          name: "محصولات",
          link: ""
        },
        {
          name: "محصولات",
          link: ""
        },
        {
          name: "محصولات",
          link: ""
        },
      ]
    },
    {
      name: "وبلاگ",
      link: "/weblog",
      sub: [
        {
          name: "وبلاگ",
          link: " "
        },
        {
          name: "وبلاگ",
          link: ""
        },
        {
          name: "وبلاگ ",
          link: ""
        },
        {
          name: " وبلاگ",
          link: ""
        },
      ]
    },
    {
      name: "تماس با ما",
      link: "",
    },
    {
      name: "درباره ما",
      link: "",
    },

  ],
})
</script>

<template>
  <nav class="flex justify-end xl:justify-between ms-auto lg:w-full items-center ">
    <ul class="nav menu hidden justify-between gap-5 lg:gap-5 xl:gap-3 2xl:gap-7 xl:flex">
      <li class="nav-item relative" v-for="(item , index) in data.menu" :key="index">
        <nuxt-link class="nav-link flex items-center gap-2 hover:cursor-pointer " :to="item.link">
          <span>{{ item.name }}</span>
          <span v-if="item.sub"><i class="fa-solid fa-angle-down fa-md text-sm font-bold flex items-center"/></span>
        </nuxt-link>
        <ul v-if="item.sub" class="grid  gap-4 sub-menu mt-6" :class="{colsActive:item.sub.length>15}">
          <li v-for="(item , index) in item.sub" :key="index">
            <nuxtLink :to="item.link" class=" flex justify-between">
              <span>{{ item.name }}</span>
              <span v-if="item.sub"><i class="fa-solid fa-angle-left"/></span>
            </nuxtLink>
            <ul v-if="item.sub" class="grid  gap-4 sub-menu mt-6" :class="{colsActive:item.sub.length>15}">
              <li v-for="(item , index) in item.sub" :key="index">
                <nuxtLink :to="item.link" class=" flex justify-between">
                  <span>{{ item.name }}</span>
                  <span v-if="item.sub"><i class="fa-solid fa-angle-left"/></span>
                </nuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  .menu {
    position: relative;
    z-index: 1;

    a {
      cursor: pointer;
    }

    .sub-menu {
      position: absolute;
      border-radius: 3px;
      top: 0;
      padding: 50px 30px 30px;
      right: 0;
      min-width: 270px;
      background-color: white;
      transition: .4s;
      opacity: 0;
      transform: translateY(-20%);
      visibility: hidden;
      z-index: -1;

      & .sub-menu {
        position: absolute;
        right: 101%;
        opacity: 0;
        transform: translatex(10%);
        visibility: hidden;
        z-index: -2;
      }
    }

    li:hover > .sub-menu {
      transform: translate(0%);
      opacity: 1;
      visibility: visible;

      & li:hover .sub-menu {
        transform: translate(0%);
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

.transition-enter-active {
  transition: all 0.7s ease;
}

.transition-leave-active {
  transition: all 0.5s ease;
}

.transition-enter-from, .transition-leave-to {
  transform: translatex(100%);
}
</style>
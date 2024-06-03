<script setup lang="ts">
import heart from '@/public/svg/heart.svg';
import search from '@/public/svg/search.svg';
import brand from '@/public/svg/navbar-brand.svg';
import HoverMenu from "~/components/header/hover-menu.vue";
import NavbarMobile from "~/components/header/navbar-mobile.vue";
const data = {
  brand:brand,
  search:search,
  bookmark:heart,
  menu:[
    {
      name:"صفحه اصلی",
      url:"/"
    },
    {
      name:"محصولات",
      url:"/products"
    },
    {
      name:"بلاگ",
      url:"/weblog"
    },
    {
      name:"درباره ما",
      url:"/about-us"
    },
    {
      name:"تماس با ما",
      url:"/contact-us"
    },
  ]
}
const  menu = [
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

    ]
const showMenu = ref(false)
</script>

<template>
<div class="navbar shadow">
  <div class="container px-3 md:px-0 py-5 mx-auto flex  items-center justify-between">
    <div class="hamburger-menu flex flex-col gap-2 relative md:hidden cursor-pointer " @click="showMenu = !showMenu">
      <div class="hamburger-item "></div>
      <div class="hamburger-item "></div>
      <div class="hamburger-item "></div>
    </div>
    <div class="navbar-brand ms-auto md:ms-0">
      <figure><img :src="data.brand" alt="مینیمال"></figure>
    </div>
    <div class="menu hidden md:block">
      <hover-menu/>
    </div>
    <div class=" items-center gap-4 hidden md:flex">
      <div class="search">
        <figure><img :src="search" alt="search icon"></figure>
      </div>
    </div>
  </div>
  <ul class="nav w-full ">
<!--    <navbar-mobile v-for="(item , index) in menu" :key="index" :data="item" theme="parent"/>-->
  </ul>

</div>
</template>
<style scoped lang="scss">
.hamburger-item{
  width: 35px;
  height: 4px;
  background: #606060;
  border-radius: 5px;
  &:nth-child(2){
    background: transparent;
    position: relative;
    &:after{
      position: absolute;
      content: "";
      height: 4px;
      width:100%;
      background: #606060;
      right: 0;
      border-radius: 5px;
    }
    &:before{
      position: absolute;
      content: "";
      height: 4px;
      width:100%;
      background: #606060;
      left: 0;
      border-radius: 5px;
    }
  }
}
</style>
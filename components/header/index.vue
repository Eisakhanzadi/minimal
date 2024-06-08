<script setup lang="ts">
import heart from '@/public/svg/heart.svg';
import brand from '@/public/svg/navbar-brand.svg';
import HoverMenu from "~/components/header/hover-menu.vue";
import NavbarMobile from "~/components/header/navbar-mobile.vue";
const showSearch = ref(false)
const data = {
  brand:brand,
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
            link: "",
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
            name: " وبلاگ",
            link: ""
          },
        ]
      },
      {
        name: "تماس با ما",
        link: "/contact-us",
      },
      {
        name: "درباره ما",
        link: "/about-us",
      },

    ]
const showMenu = ref(false)
const route = useRoute()
watch(()=>route.name , ()=>{
  showMenu.value  = false
  if (process.client){
    document.body.classList.remove('overflow-hidden')
  }
})
function showNavbarMobile(){
  if (process.client){
    document.body.classList.toggle('overflow-hidden')
  }
  showMenu.value = !showMenu.value
}
</script>

<template>
<div class="navbar shadow">
  <div class="container px-3 md:px-0 py-5 mx-auto flex  items-center justify-between">
    <div class="hamburger-menu flex flex-col gap-2 relative lg:hidden cursor-pointer " @click="showNavbarMobile">
      <div class="hamburger-item "></div>
      <div class="hamburger-item "></div>
      <div class="hamburger-item "></div>
    </div>
    <nuxt-link to="/" class="navbar-brand ms-auto lg:ms-0">
      <figure><img :src="data.brand" alt="مینیمال"></figure>
    </nuxt-link>
    <div class="menu hidden lg:block">
      <hover-menu/>
    </div>
    <div class=" items-center gap-4 hidden lg:flex">
      <div class="search cursor-pointer" @click="showSearch=true">
        <figure><lazy-icons-search/></figure>
      </div>
    </div>
  </div>
  <transition-group name="transition">
    <div class="nav fixed z-20 backdrop-filter backdrop-blur-sm inset-0" @click.self="showNavbarMobile" v-if="showMenu">
      <div class="w-2/3 px-3 sm:w-1/2  h-full overflow-y-auto navbar-mobile-menu ">
        <div class="title pt-5 pb-5"><nuxt-link to="/"><img :src="data.brand" alt=""></nuxt-link></div>
        <navbar-mobile v-for="(item , index) in menu" :key="index" :data="item" theme="parent"/>
      </div>
    </div>
  </transition-group>
  <transition name="search">
    <lazy-search @close-search="showSearch = false" v-if="showSearch"/>
  </transition>
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
.navbar-mobile-menu{
  background: #F6ECF8;
}
.nav{
  ::-webkit-scrollbar{
    display: none !important;
  }
  ::-webkit-scrollbar-thumb{
    display: none;
  }
}
.transition-enter-active {
  transition: 0.5s ease;
}

.transition-leave-active {
  transition: 0.8s ease;
}

.transition-enter-from , .transition-leave-to{
  transform: translateX(100%);
  opacity: 0;
}
/*search box transition*/
.search-enter-active {
  transition: 0.8s ease;
}
.search-leave-active {
  transition: 0.8s ease;
}

.search-enter-from , .search-leave-to{
  opacity: 0;
}
</style>
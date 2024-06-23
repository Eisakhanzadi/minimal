<script setup lang="ts">
import {VueAwesomePaginate} from "vue-awesome-paginate";
import CategoryIcon from "~/components/icons/category-icon.vue";
import {SwiperSlide} from "swiper/vue";
const searchInput = ref("")
/*weblog image*/
import {useWeblogStore} from "~/store/weblog";
const categoryItems = ref(null)
const currentPage = ref(1)
const category = [
  {
    name: "سبک های مبل",
    url: ""
  },
  {
    name: "ترند",
    url: ""
  },
  {
    name: "طراحی مبل",
    url: ""
  },
  {
    name: "ایده",
    url: ""
  },
  {
    name: "نظافت",
    url: ""
  },
]
const breadCrumb = [
  {
    name: 'بلاگ'
  }
]

function activeItem(index) {
  categoryItems.value.forEach(item => item.classList.remove('active-category-item'))
  categoryItems.value[index].classList.add('active-category-item')
}

const store = useWeblogStore()
store.fetchWeblogData()
const weblogPosts = computed(()=>store.getWeblogData)

function searchWeblog(item){
  console.log(item)
}
</script>

<template>
  <div class="weblog py-5">
    <div class="px-5 container mx-auto ">
      <lazy-bread-crumb :data="breadCrumb"/>
    </div>
    <div class="weblog-title mb-3 lg:mb-7 px-5 container mx-auto "><h1>محبوب ترین بلاگ ها</h1></div>
    <div class="swiper-container my-5 lg:my-10">
      <swiper-dynamic class="container  mx-auto " :weblog="true" v-if="weblogPosts">
        <swiper-slide v-for="(item , index) in weblogPosts.lastPosts.data " class="px-5 py-10 md:px-0" :key="index">
          <card-swiper :data="item"/>
        </swiper-slide>
      </swiper-dynamic>
    </div>
    <div class="container mx-auto  grid gap-10  px-5 md:px-0">
      <div class="category-header grid grid-cols-12 gap-5 lg:gap-10 ">
        <div class="search col-span-4 hidden md:block"><input type="text" class="w-full py-2 px-3" v-model="searchInput" placeholder="جستوجو" @keyup="searchWeblog(this)" >
        </div>
        <div class="category col-span-12 md:col-span-8 flex gap-1.5 items-center ">
          <div class="category-title flex gap-1.5 items-center">
            <span class="icon"><category-icon/></span>
            <h5>دسته بندی :</h5>
          </div>
          <ul class="flex ms-2 gap-5 lg:gap-7" v-if="weblogPosts.postCategories.data && weblogPosts.postCategories.data.length">
            <li class="" ref="categoryItems" v-for="(item , index) in weblogPosts.postCategories.data.slice(0.4)" :key="index" @click="activeItem(index)">
              <nuxt-link :to="{path:'/weblog' , query:{category_id:item.id}}">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid gap-5" >
        <article class="grid grid-cols-12 gap-5 px-5 sm:px-0 lg:gap-10 " v-if="weblogPosts">
          <card-wash class="col-span-6 md:col-span-4 xl:col-span-3" v-for="(item , index) in weblogPosts.featuredPosts"
                     :key="index" :data="item"/>
        </article>
        <div class="pagination flex justify-center mb-5 mt-10 ">
          <vue-awesome-paginate
              dir="rtl"
              :total-items="50"
              :items-per-page="5"
              :max-pages-shown="3"
              v-model="currentPage"
              :hide-prev-next="true"
              :on-click="onClickHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weblog-title {
  font-weight: 700;
  font-size: 24px;
  color: #000;
  line-height: 31.2px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 15.6px;
  }
}

.swiper-container {
  position: relative;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 70%;
    height: 100%;
    background: #f4f4f4;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }
}

.category {
  position: relative;
  border-bottom: 1px solid rgba(192, 192, 192, 0.71);
  @media screen and (max-width: 768px) {
    padding-bottom: 8px;
  }

  .category-title {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    line-height: 20.8px;
    @media screen and (max-width: 768px) {
      font-size: 8px ;
      color: #000;
      line-height: 20.8px;
    }
  }

  li {
    position: relative;
    transition: 0.5s;

    a {
      font-size: 16px;
      font-weight: 400;
      color: #000;
      line-height: 20.8px;
      @media screen and (max-width: 768px) {
        font-size: 10px ;
        color: #000;
        line-height: 13px;
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      bottom: -40%;
      right: 0;
      background: #AE7BB6;
      display: none;
      @media screen and (max-width: 768px) {
        bottom: -10px;
      }
    }

    &.active-category-item {
      color: #AE7BB6;

      &:after {
        display: block;
      }
    }
  }
}

input {
  background: #F6ECF8;
}
</style>
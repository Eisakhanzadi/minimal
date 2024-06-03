<script setup lang="ts">
import imageEight from "public/image/offers/8.png";
import imageSeven from "public/image/offers/7.png";
import imageThree from "public/image/offers/3.png";
import imageFour from "public/image/offers/4.png";
import imageFive from "public/image/offers/5.png";
import imageSix from "public/image/offers/6.png";
import imageOne from "public/image/offers/9.png";
import imageTwo from "public/image/offers/10.png";
import "../../node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css";
import "../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";

const filtersMobile = reactive({
  brands: false,
  prices: false,
  categories: false,
  filters: false
})

const breadcrumb = [
  {
    name: "محصولات"
  }
]
const filter = [
  {
    name: "پربازدید ترین",
    url: ""
  },
  {
    name: "گران ترین",
    url: ""
  },
  {
    name: "ارزان ترین",
    url: ""
  },
  {
    name: "جدیدترین",
    url: ""
  },
  {
    name: "تخفیف دار",
    url: ""
  },
]
const data = [
  {
    name: "مبل راحتی تک نقره",
    info: 1500000,
    img: imageEight,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 2000000,
    img: imageSeven,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 5000000,
    img: imageThree,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 3300000,
    img: imageFour,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageFive,
    url: "/products/item-5"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageSix,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageOne,
    url: "/products/item-5"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageTwo,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 1500000,
    img: imageEight,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 2000000,
    img: imageSeven,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 5000000,
    img: imageThree,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 3300000,
    img: imageFour,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageFive,
    url: "/products/item-5"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageSix,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageOne,
    url: "/products/item-5"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageTwo,
    url: "/products/item-5"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageOne,
    url: "/products/item-5"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageTwo,
    url: "/products/item-5"
  },
]
const category = [
  {
    name: "مبلمان",
    url: "",
    sub: [
      {
        name: "سرویس خواب",
        url: "",
        sub: []
      },
      {
        name: "صندلی",
        url: "",
        sub: []
      },
      {
        name: "آینه",
        url: "",
        sub: []
      },
      {
        name: "کنسول",
        url: "",
        sub: []
      },
    ]
  },
  {
    name: "اکسسوری",
    url: "",
    sub: [
      {
        name: "مجسمه",
        url: "",
        sub: []
      },
      {
        name: "آباژور",
        url: "",
        sub: []
      },
      {
        name: "لوستر",
        url: "",
        sub: []
      },
      {
        name: "ساعت",
        url: "",
        sub: []
      },
      {
        name: "کوسن و شال مبل",
        url: "",
        sub: []
      },
      {
        name: "گلدان",
        url: "",
        sub: []
      },
    ]
  },
  {
    name: "میز",
    url: "",
  },
]
const currentPage = ref(1)

function handleFiltersMobile(item){
  if (item === 'دسته بندی') {
    filtersMobile.categories = true
  } else if (item === 'قیمت') {
    filtersMobile.prices = true
  } else if (item === 'برند') {
    filtersMobile.brands = true
  } else {
    filtersMobile.filters = true
  }
}
</script>

<template>
  <div class="products">
    <section>
      <div class="container mx-auto">
        <bread-crumb :data="breadcrumb"/>
      </div>
    </section>
    <main class="grid grid-cols-12 gap-3 items-start container mx-auto pt-10">
      <aside class="col-span-3 hidden md:flex flex-col gap-5">
        <div class="search aside-item p-0">
          <form>
            <input type="text"
                   class="bg-transparent caret-[#AE7BB6] py-3 w-full outline-0 px-4 placeholder:text-[#AE7BB6] "
                   placeholder="جستوجو">
          </form>
        </div>
        <div class="category aside-item">
          <div class="aside-title text-center">
            <h4 class="title">دسته بندی</h4>
          </div>
          <div>
            <ul class="">
              <categories :data="item" v-for="(item , index) in category" :key="index"/>
            </ul>
          </div>
        </div>
        <div class="price aside-item">
          <div class="aside-title text-center">
            <h4 class="title">محدوده قیمت</h4>
          </div>
          <div>

          </div>
          <div class="filter aside-item">
            <div class="aside-title text-center">
              <h4 class="title">فیلتر</h4>
            </div>
            <div>
              <ul class="">
                <categories :data="item" v-for="(item , index) in category" :key="index"/>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <article class=" col-span-12 md:col-span-9 grid grid-cols-12 gap-x-5 gap-y-5">
        <section class="col-span-12 grid w-full">
          <div class="border-b-2 border-[#F6ECF8] py-3">
            <div class="  w-full  ">
              <div class=" hidden md:block">
                <navbar-filters :data="filter" theme="0" filter="product"/>
              </div>
              <div class="md:hidden px-5">
                <navbar-filters-mobile @open-list="handleFiltersMobile" theme="0" filter="product"/>
              </div>
            </div>
          </div>
        </section>
        <section class="col-span-12 grid grid-cols-12 px-5 md:px-0  gap-5">
          <home-product-card v-for="(item , index) in data" :key="index" class="col-span-6 md:col-span-4 " :data="item"/>
        </section>
        <section class="pagination col-span-12 flex justify-center px-5 my-16 md:px-0">
          <vue-awesome-paginate
              dir="rtl"
              :total-items="50"
              :items-per-page="5"
              :max-pages-shown="5"
              v-model="currentPage"
              :hide-prev-next="true"
              :on-click="onClickHandler"
          />
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped lang="scss">
.aside-item {
  background: var(--product-aside-background);

  &:not(.search) {
    padding: 20px;
  }

  h4.title {
    font-size: var(--product-aside-title-font-size);
    font-weight: var(--product-aside-title-font-weight);
    color: var(--product-aside-title-color);
    line-height: var(--product-aside-title-line-height);
  }
}

.article {
  .card:hover > :not(:hover) {
    opacity: 0.5 !important;
  }
}
</style>
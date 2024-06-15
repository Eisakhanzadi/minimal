<script setup lang="ts">
import Server from "~/.output/server/chunks/build/server.mjs";

const search = ref()
import sameOne from 'public/image/offers/1.png'
import sameTwo from 'public/image/offers/2.png'
import sameThree from 'public/image/offers/3.png'
import sameFour from 'public/image/offers/4.png'
import sameFive from 'public/image/offers/5.png'
import sameSix from 'public/image/offers/6.png'
import {SwiperSlide} from "swiper/vue";

const breadcrumb = [
  {
    name: 'وبلاگ',
    url: '/weblog'
  }, {
    name: "چگ.نه مبل خود را بشوییم ؟"
  }
]
const data = {
  categories: [
    {
      name: "سبک های مبل "
    },
    {
      name: "ترند"
    },
    {
      name: "طراحی مبل"
    },
    {
      name: "ایده"
    },
    {
      name: "نظافت"
    },
  ],
  mostVisited: [
    {
      category: "نظافت",
      title: "جنس کف مبلمان از چیست ؟",
      url: '/weblog/item-21'
    },
    {
      category: "سبک های مبل",
      title: "جنس کلاف مبلمان از چیست ؟",
      url: '/weblog/item-22'
    },
    {
      category: "طراحی مبل",
      title: "آماده سازی مبلمان چه مقدار زمان میبرد؟",
      url: '/weblog/item-23'
    },
    {
      category: "ایده",
      title: "آیا امکان تغییر رنگ میل وجود دارد؟",
      url: '/weblog/item-24'
    },
  ],
  time: '16 مهز 1403',
  study: "10",
  count: "200",
  sameContent: [
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameOne,
      url: "/weblog/item-5"
    },
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameTwo,
      url: "/weblog/item-4"
    },
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameThree,
      url: "/weblog/item-51"
    },
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameFour,
      url: "/weblog/item-58"
    },
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameFive,
      url: "/weblog/item-50"
    },
    {
      title: "چگونه مبل خود را بشوریم ؟",
      img: sameSix,
      url: "/weblog/item-59"
    },
  ]
}
</script>

<template>
  <div class=" ">
    <section class="breadcrumb px-5 container mx-auto">
      <lazy-bread-crumb :data="breadcrumb"/>
    </section>
    <section class="header">
      <div class="subject-container pb-9 pt-5 md:py-10 px-5 ">
        <div class="subject  container mx-auto  grid grid-cols-12  gap-5 ">
          <div class="subject-header w-10/12 h-fit lg:w-auto col-span-12 md:ms-auto    md:col-span-5 order-1">
            <img src="/public/image/id/1.png" class="w-full h-full" alt="">
          </div>
          <div class="subject-content col-span-12 md:col-span-7 flex flex-col justify-center md:mx-auto items-start">
            <div class="subject-category flex gap-2 my-2">
              <span class="py-1 px-3">مبل</span>
              <span class="py-1 px-3">بلاگ</span>
            </div>
            <div class="subject-title my-3">
              <h1>چگونه مبل خود را بشوریم؟</h1>
            </div>
            <div class="author flex items-center gap-2.5">
              <div class="author-image w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <img src="" alt="">
                <icons-user-id/>
              </div>
              <div class="author-info">
                <div class="author-name mb-1.5">
                  <span>عیسی خانزادی</span>
                </div>
                <div class="author-details flex gap-1.5">
                  <span class="time">{{ data.time }}</span>
                  <span class="study-time">{{ data.study }}دقیقه خواندن</span>
                  <span class="count-visited">{{ data.count }}بازدید</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main container mx-auto lg:grid  grid-cols-3 gap-8 px-5 lg:px-5">
      <article class=" lg:col-span-2 ">
        <div class="content text-justify "> <!-- v-html -->
                    <v-html-weblog class="w-[50%]"/>
        </div>
      </article>
      <aside class="lg:col-span-1 flex flex-col gap-5">
        <div class="search hidden lg:block">
          <div class="search-title py-2.5 mb-5"><h5 class="pe-2">جستوجو</h5></div>
          <div><input type="text" placeholder="جستوجو" class=" outline-0 py-2.5 px-4 w-full" v-model="search"></div>
        </div>
        <div class="category hidden lg:block ">
          <div class="category-title py-2.5 mb-5 "><h5 class="pe-2">دسته بندی</h5></div>
          <div class="category-body">
                        <categories-item :items="data.categories"/>
          </div>
        </div>
                <div class="most-visited lg:sticky top-5">
                  <div class="most-visited-title py-2.5 mb-5 "><h5 class="pe-2">پربازدید ها</h5></div>
                  <div class="most-visited-body grid gap-y-3">
                    <card-most-visited v-for="(item , index) in data.mostVisited" :key="index" :data="item" :count="index"/>
                  </div>
                </div>
      </aside>
    </section>
        <div class="same-content container mx-auto mt-10 px-5 overflow-hidden">
          <div class="same-content-title"><h4>مطالب مشابه</h4></div>
          <div class="same-content-body  md:w-full mt-5">
            <swiper-basic>
              <swiperSlide v-for="(item , index) in data.sameContent" :key="index">
                <card-product :data="item"/>
              </swiperSlide>
            </swiper-basic>
          </div>
        </div>
  </div>
</template>

<style scoped lang="scss">
//
.search {
  .search-title {
    border-bottom: 2px solid #c7c7c7;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    color: #000000;

    h5 {
      width: fit-content;
      position: relative;

      &:after {
        position: absolute;
        content: "";
        bottom: -12px;
        right: 0;
        width: 100%;
        height: 3px;
        background: #AE7BB6;
      }
    }
  }

  input {
    color: #AE7BB6;
    background: rgba(244, 244, 244, 0.87);

    &::placeholder {
      font-size: 14px;
      line-height: 27.5px;
      color: #AE7BB6;
    }
  }
}

.category-title {
  border-bottom: 2px solid #c7c7c7;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
  color: #000000;

  h5 {
    width: fit-content;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: -12px;
      right: 0;
      width: 100%;
      height: 3px;
      background: #AE7BB6;
    }
  }
}

.most-visited {
  .most-visited-title {
    border-bottom: 2px solid #c7c7c7;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    color: #000000;
    @media screen and (max-width: 768px) {
      font-size: 10px;
      line-height: 13px;
    }

    h5 {
      width: fit-content;
      position: relative;

      &:after {
        position: absolute;
        content: "";
        bottom: -12px;
        right: 0;
        width: 100%;
        height: 3px;
        background: #AE7BB6;
      }
    }
  }
}

.subject-container {
  position: relative;

  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    background: #f4f4f4;
    width: 75%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }

  .subject-title {
    font-weight: 700;
    font-size: 24px;
    color: #5E2E66;
    line-height: 31.2px;
  }

  .subject-category {
    span {
      &:last-child {
        background: #fde981;
      }

      &:first-child {
        background: #c5a7c9;
      }
    }
  }

  .author-name {
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    color: rgba(96, 96, 96, 0.7);
  }

  .author-details {
    font-weight: 500;
    font-size: 10px;
    color: #c0c0c0;
    line-height: 13px;
  }
}

.same-content {
  .same-content-title {
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 15.6px;
    }
  }

  .card {
    img {
      width: clamp(83px, 100%, 227px);
    }

    font-size: 15px;
    font-weight: 700;
    line-height: 19.5px;
    color: #5E2E66;
    @media screen and (max-width: 768px) {
      font-size: 7px;
      line-height: 9.1px;
    }
  }
}
</style>
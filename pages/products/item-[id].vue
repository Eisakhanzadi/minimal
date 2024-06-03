<script setup lang="ts">
import {SwiperSlide} from "swiper/vue";
import sameOne from "public/image/offers/1.png";
import sameTwo from "public/image/offers/2.png";
import sameThree from "public/image/offers/3.png";
import sameFour from "public/image/offers/4.png";
import sameFive from "public/image/offers/5.png";
import sameSix from "public/image/offers/6.png";
const introductionContent = ref(null)
const infoContent = ref(null)
const commentsContent = ref(null)
const breadCrumb = [
  {
    name: 'محصولات',
    url: "/products"
  }, {
    name: "مبل تک نفره راحتی صدف"
  }
]
const colors = [
  "red",
  "blue",
  "yellow",
  "crimson",
  "gray",
  "black",
]
const introduction = `
<div class="flex flex-col gap-5 text-justify">
<p class="">
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
</p>
<p class="">
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
</p>
<p class="">
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
</p>
<p class="">
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
</p>
<p class="">
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
   تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده ش
</p>
</div>
`

const features = [
  {
    name: "نقرات مبل:",
    text: "یک نفره"
  },
  {
    name: "ویژگی های نطافتی:",
    text: "قابلیت شستوشو"
  },
  {
    name: "تراکم اسفنج :",
    text: "30 کیلوگرم"
  },
  {
    name: "وزن قابل تحمل :",
    text: "120 کیلوگرم"
  },
]
const details = [
  {
    name: "عرض ",
    text: "60 سانتیمتر"
  },
  {
    name: "عمق",
    text: "60 سانتیمتر"
  },
  {
    name: "ارتفاع",
    text: "80 سانتیمتر"
  },
  {
    name: "وزن",
    text: "20کیلوگرم"
  },
  {
    name: "جنس بدنه",
    text: "چوب"
  },
  {
    name: "جنس روکش",
    text: "چرم"
  },
  {
    name: "جنس کلاف",
    text: "چوب"
  },
  {
    name: "جنس لایه میانی",
    text: "اسفنج"
  },
  {
    name: "تراکم اسفنج",
    text: "35 کیلویی"
  },
  {
    name: "وزن قابل تحمل",
    text: "120کیلو گرم"
  },
  {
    name: "نفرات مبل",
    text: "یک نفره"
  },
  {
    name: "ویژگی های نظافتی",
    text: "فیلتز قابل شستشو"
  },
  {
    name: "سایر توضیحات",
    text: "توجه پارچه مبل به صورت ساده میباشد"
  },
]
const comments = [
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
  {
    name: "عیسی خانزادی",
    time: "دیروز نه پریروز",
    scoreNumber: 3.4,
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده "
  },
]
const commentsScore = [
  {
    text: "گیفیت مواد به کار رفته ",
    score: "4.8"
  },
  {
    text: "کیفیت دوخت ",
    score: "3.2"
  },
  {
    text: "راحتی",
    score: "3.6"
  },
  {
    text: "ارزش خرید نسبت به قیمت ",
    score: "4.5"
  },
]
// const y = element.getBoundingClientRect().top + window.scrollY;
// window.scroll({
//   top: y,
//   behavior: 'smooth'
// });
// var scrollDiv = document.getElementById("myDiv").offsetTop;
// window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
const sameContent = [
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameOne
  },
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameTwo
  },
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameThree
  },
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameFour
  },
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameFive
  },
  {
    title: "چگونه مبل خود را بشوریم ؟",
    img: sameSix
  },
]
function toContent(item){
  item.scrollIntoView({ behavior:"smooth" })
}
</script>

<template>
  <div class=" container mx-auto px-5">
    <div class="breadcrumb ">
      <lazy-bread-crumb :data="breadCrumb"/>
    </div>
    <header>
      <div class="header py-10">
        <div class="product grid grid-cols-12 gap-5" data-aos="fade-up">
          <div class="product-header col-span-12 md:col-span-5 "><img src="/public/image/product-item/1.png" alt=""></div>
          <div class="product-body col-span-12 md:col-span-7">
            <div class="product-title"><h1>مبل تک نفره راحتی صدف</h1></div>
            <div class="product-category mt-3"><span>مبل تک نفره</span></div>
            <div class="product-price flex gap-5 pb-3 mt-7 mb-3">
              <span class="old-price">23.500.000</span>
              <span class="new-price"> 20.000.000 تومان</span>
            </div>
            <div class="product-colors grid gap-3 mb-10">
              <div class="product-colors-title">رنگبندی</div>
              <div class="product-colors-list">
                <ul class="flex gap-3">
                  <li v-for="(item , index) in colors" :key="index" class=" inline-block w-6 h-6  md:w-11 md:h-11 rounded-full"
                      :style="{background:item }"></li>
                </ul>
              </div>
            </div>
            <div class="features grid gap-3 ">
              <div class="feature-title"><h5>ویژگی</h5></div>
              <ul class=" grid grid-cols-12 gap-2">
                <li class="col-span-6 flex items-baseline gap-1.5" v-for="(item , index) in features" :key="index">
                  <span class="name">{{ item.name }}</span>
                  <span class="text">{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <div class="description mt-7">
              <div class="description-title"><h5>توضیحات</h5></div>
              <div class="description-text">
                <p>
                  تک نفره مدرن مبل تک نفره چوبی با جدیدترین طراحی و با استفاده از بهترین متریال مصرفی ارائه میشود توجه
                  توجه پارچه مبل به صورت ساده میباشد کلاف استفاده شده .
                </p>
              </div>
            </div>
            <div class="buttons flex items-center justify-end gap-3 mt-7">
              <button class="py-2.5 px-7"> مشاوره خرید</button>
              <button class="py-2.5 px-2.5 ">
                <icons-heart/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="category my-5 " data-aos="fade-up">
        <div class="category-list flex gap-5 justify-start md:justify-center">
          <label for="Introduction">
            <input type="radio" class="hidden " name="category" checked id="Introduction">
            <nuxt-link class="hover:cursor-pointer " @click="toContent(introductionContent)" >معرفی محصول
            </nuxt-link>
          </label>
          <label for="details">
            <input type="radio" class=" hidden" name="category" id="details">
            <nuxt-link class="hover:cursor-pointer "  @click="toContent(infoContent)">مشخصات
            </nuxt-link>
          </label>
          <label for="comments">
            <input type="radio" class="hidden " name="category" id="comments">
            <nuxt-link class="hover:cursor-pointer " ref="" @click="toContent(commentsContent)">نظرات کاربران
            </nuxt-link>
          </label>
        </div>
      </div>
      <article class="flex flex-col gap-10">
        <div id="introduction-content " ref="introductionContent" data-aos="fade-up">
          <div class="introduction-title mb-5"><h3>معرفی محصول</h3></div>
          <div class="introduction-body"  v-html="introduction"></div>
        </div>
        <div id="details-content pb-5" data-aos="fade-up">
          <div class="details-title mb-5" ref="infoContent"><h3>مشخصات</h3></div>
          <div class="details-body mt-5" >
            <ul class=" flex flex-col gap-y-5">
              <li class="grid grid-cols-12  rounded" v-for="(item , index) in details" :key="index" data-aos="fade-up">
                <span class="col-span-1"></span>
                <span class="details-name col-span-4 md:col-span-4 lg:col-span-2 ">{{ item.name }}</span>
                <span class="details-text col-span-7 md:col-span-7 lg:col-span-9">{{ item.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div class="my-10 ">
        <div id="comments-content" data-aos="fade-up">
          <div class="comments-title mb-5 " ref="commentsContent"><h3>نظرات کاربران</h3></div>
          <div class="comments-body grid grid-cols-12 gap-5" >
            <div class="aside col-span-12  md:col-span-4 xl:col-span-3">
              <div></div>
              <div class="comments-score-info">
                <div class="total-score flex justify-center items-baseline gap-1.5 mb-3">
                  <icons-star :comments="true" class="relative top-0.5"/>
                  <span class="total-score-current">4.3</span>
                  <span class="total-score-standard">از 5</span>
                </div>
                <div class="create-comment flex flex-col gap-3 mb-7">
                  <button class="py-2 relative hover:cursor-pointer w-1/3 mx-auto md:w-full  "> ثبت نظر</button>
                  <p>با ارسال دیدگاه خود به انتخاب خریداران دیگر کمک کنید .</p>
                </div>
                <div class="comments-score px-5 py-7 grid grid-cols-12 md:flex flex-col gap-2 md:gap-10">
                  <lazy-comments-score class="col-span-6" v-for="(item , index) in commentsScore" :key="index"
                                       :data="item" :index="index"/>
                </div>
              </div>
            </div>
            <div class="comment-content col-span-12 md:col-span-8 xl:col-span-9 flex flex-col gap-2 md:gap-5">
              <lazy-comments-content data-aos="fade-up" v-for="(item , index) in comments" :key="index" :data="item"/>
            </div>
          </div>
        </div>
      </div>
      <div class="same-content container mx-auto mt-10">
        <div class="same-content-title"><h4>مظالب مشابه</h4></div>
        <div class="same-content-body">
          <swiper-basic class="">
            <swiperSlide v-for="(item , index) in sameContent" :key="index">
              <div class="card  flex flex-col items-center justify-center  hover:cursor-pointer">
                <img :src="item.img" :alt="item.title">
                <div class="card-body mt-3 ">
                  <h3>{{ item.title }}</h3>
                </div>
              </div>
            </swiperSlide>
          </swiper-basic>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.product-title {
  font-size: clamp(12px , 100% , 24px);
  font-weight: 700;
  line-height: 27.5px;
  color: #000;
  @media screen and (max-width: 768px) {
    line-height: 13.5px;
  }
}

.product-colors {
  .product-colors-title {
    font-size: 15px;
    font-weight: 400;
    line-height: 44px;
    color: #606060;
  }

  .product-colors-list {
    ul > li {
      border: 7px solid #c7c7c7;
      @media screen and (max-width: 768px) {
        border: 3.5px solid #c7c7c7;
      }
    }
  }
}

.features {
  .feature-title {
    font-size: 15px;
    font-weight: 400;
    line-height: 32px;
    color: #606060;
  }

  .name {
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    color: #606060;
  }

  .text {
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    color: #000;
  }
  li{
    &:before{
      content: "";
      background: #606060;
      width: 7px;
      height: 7px;
      border-radius: 5px;
    }
  }
}

.description {
  .description-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 37px;
    color: #000;
  }

  .description-title {
    font-size: 15px;
    font-weight: 400;
    line-height: 32px;
    color: #606060;
  }
}

.product-category {
  font-size: 15px;
  font-weight: 400;
  line-height: 27.5px;
  color: #c0c0c0;
  @media screen and (max-width: 768px) {
    font-size: 7.5px;
    line-height: 13.5px;
  }
}

.product-price {
  border-bottom: 1px solid #d9d9d9;

  .new-price {
    font-size: 22px;
    font-weight: 700;
    line-height: 27.5px;
    color: #ff0000;
  }

  .old-price {
    font-size: 15px;
    font-weight: 400;
    line-height: 27.5px;
    color: #606060;
    text-decoration: line-through;
  }

  @media screen and (max-width: 768px) {
    font-size: 7.5px;
    line-height: 13.5px;
  }
}


.buttons {
  button:first-child {
    color: #fff;
    background: #AE7BB6;
    font-size: 15px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 10px;
      line-height: 13px;
    }
  }

  button:last-child {
    border: 1px solid #EAD1EE;
  }
}

.category {
  border-bottom: 1px solid #d9d9d9;

  label {
    position: relative;

    a {
      position: relative;
      font-size: 20px;
      line-height: 60px;
      color: #000;

      &:after {
        position: absolute;
        bottom: -18px;
        right: 50%;
        transform: translate(50%);
        content: "";
        width: 0;
        height: 4px;
        transition: 0.5s;
        background: #AE7BB6;
        transform-origin: center;
      }
    }

    input[type='radio']:checked + a {
      &:after {
        width: 100%;
      }
    }
  }
}

.introduction-title, .details-title, .comments-title {
  font-size: 24px;
  font-weight: 700;
  color: #5E2E66;
  line-height: 60px;
}

.details-body {
  ul {
    li {
      background: #F8F2F9;
      font-size: 16px;
      line-height: 66px;
      font-weight: 400;
      color: #000;
    }
  }
}

.comments-score {
  background: rgba(246, 246, 246, 1);
  border-radius: 10px;
}

.create-comment {
  button {
    border: 1px solid #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    @media screen and (max-width: 768px){
      line-height: 12px;
      font-size: 7.5px;
    }
    &:hover {
      background: #AE7BB6;
      border-color: transparent;
      color: #FFFFFF;

      &:after, &:before {
        background: transparent;
      }
    }

    &:after {
      content: "";
      background: #fff;
      width: 10px;
      height: 35px;
      position: absolute;
      transform: translate(0,-50%);
      top: 50%;
      left: -5px;
      @media screen and (max-width: 768px){
        height: 15px;
      }
    }

    &:before {
      content: "";
      background: #fff;
      width: 10px;
      height: 35px;
      top: 50%;
      position: absolute;
      transform: translate(0 , -50%);
      right: -5px;
      @media screen and (max-width: 768px){
        height: 15px;
      }
    }
  }

  p {
    color: #606060;
    font-size: 14px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    @media screen and (max-width: 768px){
      font-size: 7px;
      line-height: 18px;
    }
  }
}

.total-score {
  .total-score-current {
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    color: #5E2E66;
    @media screen and (max-width: 768px){
      font-size: 15px;
      line-height: 15.6px;
    }
  }

  .total-score-standard {
    font-weight: 600;
    font-size: 32px;
    line-height: 41px;
    color: #F6ECF8;
    @media screen and (max-width: 768px){
      font-size: 12px;
      line-height: 15.6px;
    }
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
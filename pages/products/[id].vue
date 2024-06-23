<script setup lang="ts">
// import {SwiperSlide} from "swiper/vue";
// import imageEight from "public/image/offers/8.png";
// import imageSeven from "public/image/offers/7.png";
// import imageThree from "public/image/offers/3.png";
// import imageFour from "public/image/offers/4.png";
// import imageFive from "public/image/offers/5.png";
// import imageSix from "public/image/offers/6.png";
// import imageOne from "public/image/offers/9.png";
// import imageTwo from "public/image/offers/10.png";
const introductionContent = ref(null)
const infoContent = ref(null)
const commentsContent = ref(null)
const messageCommentModal = ref(false)
const buyAdvisor = ref(false)

const route = useRoute()
function toContent(item){
  item.scrollIntoView({ behavior:"smooth" })
}
function closeMessage(){
  messageCommentModal.value = false
}
function closeBuyAdvisor(){
  buyAdvisor.value = false
}
const {
  data,
  error,
  status
} = await useAsyncData('products-item', () => $fetch(`https://minimal.foodavaran.com/api/products/${route.params.id}`))
if (error.value) {
  console.log(error.value)
}
if (status.value === 'success') {
  console.log('success')
}
const productItem = computed(()=>data.value.data)
const breadCrumb = [
  {
    name: 'محصولات',
    url: "/products"
  }, {
    name: productItem.value.product.title
  }
]
</script>

<template>
  <div class=" container mx-auto px-5">
    <div class="breadcrumb ">
      <lazy-bread-crumb :data="breadCrumb"/>
    </div>
    <header>
      <div class="header py-10">
        <div class="product grid grid-cols-12 gap-5" data-aos="fade-up">
          <div class="product-header col-span-12 md:col-span-5 " v-if="productItem.product.image.url && productItem.product.title"><img :src="productItem.product.image.url" :alt="productItem.product.title"></div>
          <div class="product-body col-span-12 md:col-span-7">
            <div class="product-title" v-if="productItem.product.title"><h1>    {{productItem.product.title}}</h1></div>
            <div class="product-category mt-3"><span>مبل تک نفره</span></div>
            <div class="product-price flex gap-5 pb-3 mt-7 mb-3">
              <span class="old-price" v-if="productItem.product.price != productItem.product.final_price && productItem.product.price">{{productItem.product.price.toLocaleString()}}</span>
              <span class="new-price" v-if="productItem.product.final_price" >{{productItem.product.final_price.toLocaleString()}}</span>
            </div>
            <div class="product-colors grid gap-3 mb-10">
              <div class="product-colors-title">رنگبندی</div>
              <div class="product-colors-list">
                <ul class="flex gap-3">
                  <li v-for="(item , index) in productItem.product.colors" :key="index" class=" inline-block w-6 h-6  md:w-11 md:h-11 rounded-full"
                      :style="{background:item.code }"></li>
                </ul>
              </div>
            </div>
            <div class="features grid gap-3 " v-if="productItem.product.specifications && productItem.product.specifications.length">
              <div class="feature-title"><h5>ویژگی</h5></div>
              <ul class=" grid grid-cols-12 gap-2">
                <li class="col-span-6 flex items-baseline gap-1.5" v-if="productItem.product.specifications&&productItem.product.specifications.length" v-for="(item , index) in productItem.product.specifications.reverse().slice(0,4)" :key="index">
                  <span class="name  text-nowrap" v-if="item.name">{{ item.name }} :</span>
                  <span class="text" v-if="item.pivot.value">{{ item.pivot.value }}</span>
                </li>
              </ul>
            </div>
            <div class="description mt-7">
              <div class="description-title"><h5>توضیحات</h5></div>
              <div class="description-text">
                <p v-if="productItem.product.description.length">
                  {{productItem.product.description.substr(0,200)+'...'}}
                </p>
              </div>
            </div>
            <div class="buttons flex items-center justify-end gap-3 mt-7">
              <button class="py-2.5 px-7" @click=" buyAdvisor=true "> مشاوره خرید</button>
              <transition name="transition">
                <lazy-buy-advisor @closeBuyAdvisor="closeBuyAdvisor" :productId="productItem.product.id" v-if="buyAdvisor"/>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="category my-5 pb-1.5 md:pb-3.5 pb " data-aos="fade-up">
        <div class="category-list flex gap-5 justify-start md:justify-center">
          <label for="Introduction" v-if="productItem.product.description&&productItem.product.description.length">
            <input type="radio" class="hidden " name="category" checked id="Introduction">
            <nuxt-link class="hover:cursor-pointer " @click="toContent(introductionContent)" >معرفی محصول
            </nuxt-link>
          </label>
          <label for="details" v-if="productItem.product.specifications&&productItem.product.specifications.length">
            <input type="radio" class=" hidden" name="category" id="details">
            <nuxt-link class="hover:cursor-pointer "  @click="toContent(infoContent)">مشخصات
            </nuxt-link>
          </label>
          <label for="comments">
            <input type="radio" class="hidden " name="category" id="comments">
            <nuxt-link class="hover:cursor-pointer "  @click="toContent(commentsContent)">نظرات کاربران
            </nuxt-link>
          </label>
        </div>
      </div>
      <article class="flex flex-col gap-10">
        <div id="introduction-content " v-if="productItem.product.description&&productItem.product.description.length" ref="introductionContent" data-aos="fade-up">
          <div class="introduction-title mb-5"><h3>معرفی محصول</h3></div>
          <div class="introduction-body" v-if="productItem.product.description&&productItem.product.description.length" v-html="productItem.product.description"></div>
        </div>
        <div id="details-content pb-5" data-aos="fade-up" v-if="productItem.product.specifications&&productItem.product.specifications.length">
          <div class="details-title mb-5" ref="infoContent"><h3>مشخصات</h3></div>
          <div class="details-body mt-5" >
            <ul class=" flex flex-col gap-y-5">
              <li class="grid grid-cols-12  rounded" v-if="productItem.product.specifications&&productItem.product.specifications.length" v-for="(item , index) in productItem.product.specifications.reverse()" :key="index" data-aos="fade-up">
                <span class="col-span-1"></span>
                <span class="details-name col-span-4 md:col-span-4 lg:col-span-2 " v-if="item.name">{{ item.name }}</span>
                <span class="details-text col-span-7 md:col-span-7 lg:col-span-9" v-if="item.pivot.value">{{ item.pivot.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div class="my-10 ">
        <div id="comments-content" data-aos="fade-up">
          <div class="comments-title mb-5 " ref="commentsContent"><h3>نظرات کاربران</h3></div>
          <div :class="`comments-body ${ productItem.comments ?'grid' : 'flex justify-center'} grid-cols-12 gap-5 `" >
            <div class="aside col-span-12  md:col-span-4 xl:col-span-3 ">
              <div></div>
              <div class="comments-score-info">
                <div class="total-score flex justify-center items-baseline gap-1.5 mb-3" v-if="productItem.averageStar">
                  <icons-star :comments="true" class="relative top-0.5"/>
                  <span class="total-score-current" >{{Math.floor(productItem.averageStar)}}</span>
                  <span class="total-score-standard">از 5</span>
                </div>
                <div class="create-comment flex flex-col gap-3 mb-7">
                  <button @click="messageCommentModal=true" class="py-2 relative hover:cursor-pointer w-1/3 mx-auto md:w-full  "> ثبت نظر</button>
                  <p>با ارسال دیدگاه خود به انتخاب خریداران دیگر کمک کنید .</p>
                </div>
              </div>
            </div>
            <div v-if="productItem.comments&&productItem.comments.length" class="comment-content col-span-12 md:col-span-8 xl:col-span-9 flex flex-col gap-2 md:gap-5" >
              <lazy-comments-content  data-aos="fade-up" v-for="(item , index) in productItem.comments" :key="index" :data="item"/>
            </div>
          </div>
        </div>
      </div>
      <div class="same-content container mx-auto mt-10" v-if="productItem.moreProducts && productItem.moreProducts.length">
        <div class="same-content-title"><h4>مطالب مشابه</h4></div>
        <div class="same-content-body mt-5">
          <swiper-basic class="">
            <swiperSlide v-for="(item , index) in productItem.moreProducts" :key="index">
              <card-product :data="item" :price="true" />
            </swiperSlide>
          </swiper-basic>
        </div>
      </div>
    </main>
    <div>
      <transition name="transition">
      <comments-write @closeMessage="closeMessage" :id="productItem.product.id" v-if="messageCommentModal"/>
      </transition>
    </div>
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
      //line-height: 60px;
      color: #000;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 15px;
      }
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
        @media screen and (max-width: 768px) {
          bottom: -12px;
        }
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
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }
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
.transition-enter-active {
  transition: 0.5s ease;
}

.transition-leave-active {
  transition: 0.8s ease;
}

.transition-enter-from, .transition-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
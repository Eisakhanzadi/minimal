<script setup lang="ts">
import table from '@/public/svg/table.svg'
import sofa from '@/public/svg/sofa-svg.svg'
import commode from '@/public/svg/commode.svg'
import chair from '@/public/svg/chair.svg'
import studyLight from '@/public/svg/study-light.svg'
import furniture from '@/public/svg/furniture.svg'
/* start offer image */
import imageOne from "@/public/image/offers/9.png"
import imageTwo from "@/public/image/offers/10.png"
import imageThree from "@/public/image/offers/3.png"
import imageFour from "@/public/image/offers/4.png"
import imageFive from "@/public/image/offers/5.png"
import imageSix from "@/public/image/offers/6.png"
import imageSeven from "@/public/image/offers/7.png"
import imageEight from "@/public/image/offers/8.png"
/*feedback image*/
import person from '@/public/image/feedback/img.png'
/*weblog image*/
import weblogOne from '@/public/image/weblog/Rectangle 17 (1).png'
import weblogTwo from '@/public/image/weblog/Rectangle 18 (1).png'
/*   brands */
import brandOne from '@/public/image/brands/1.png'
import brandTwo from '@/public/image/brands/2.png'
import brandThree from '@/public/image/brands/3.png'
import brandFour from '@/public/image/brands/4.png'
import  {getCurrentInstance} from "vue"
import {useHomeStore} from "~/store/home";
const store = useHomeStore()
store.fetchHomeData()
var products=ref([])
const instanc=getCurrentInstance()
const home = computed(()=>store.getHomeData)
const activeFilterOffers = ref(0)
const newProducts = {
  title: "محصولات جدید",
  sub: "محصولاتی برای کمک به چیدمانی زیباتر برای منزل گرم و زیبای شما",
}
const weblog = {
  title: "آخرین بلاگ ها",
  subTitle: "موضوعاتی درباره مبل ها و چیدمان آنها که جذاب است",
  content: [
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogOne,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogTwo,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogOne,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogTwo,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogOne,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
      title: "چگونه مبل خود را بشوییم",
      image: weblogTwo,
      author: "عیسی خانزادی",
      time: `${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDay()}`,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
  ]
}
const brands = [
  {
    image: brandOne
  },
  {
    image: brandTwo
  },
  {
    image: brandThree
  },
  {
    image: brandFour
  },
]

const homeData = ref()
onMounted(()=>{
  const width = ref(screen.width)
  console.log(width.value)
  watch(()=>screen.width , ()=>{
    width.value = screen.width
    console.log(width.value)
  })
  filterOffers(0)
})


function filterOffers(index){
  activeFilterOffers.value = index
  products.value=[];
  instanc?.proxy?.$forceUpdate()
  setTimeout(
      ()=>{
        console.log(products.value)
        products.value=home.value.categories[index].products

      },1
  )
}

</script>

<template>
  <div>

    <section >
      <HomeBanner v-if="home.sliders" :data="home.sliders" />
    </section>
    <section class="container mx-auto py-10" data-aos="fade-up">
      <home-swiper v-if="home.countCategories" :data="home.countCategories" theme="category"/>
    </section>
    <section>
      <div class="container offers mx-auto my-3 md:my-10 overflow-hidden px-5 sm:px-10 md:px-2" data-aos="fade-up">
        <div
            class="header-offers flex flex-col gap-3 md:flex-row  md:gap-0 md:justify-between md:items-center mb-5 md:mb-10">
          <div class="title"><h3>پیشنهاد مینیمال</h3></div>
          <div class="filter-offers" v-if="home.categories.length&&home.categories">
            <navbar-filters @filterActive="filterOffers" :index="activeFilterOffers" :data="home.categories.slice(0,4)" />
          </div>
        </div>
        <div v-if="home&&products.length" class="body-offers grid grid-cols-12 p-6 gap-3 md:gap-10 overflow-hidden">
            <card-product :price="true" v-for="(item , index) in home.categories[activeFilterOffers].products" :key="index"
                          class="col-span-6 md:col-span-3 lg:col-span-3   w-full " :data="item" data-aos="fade-up"/>

        </div>
      </div>
    </section>
    <section>
      <div class="feedback flex items-center my-7 md:my-10 lg:my-20" data-aos="fade-up">
        <home-feed-back :data="home.customerReview"/>
      </div>
    </section>
    <section>
      <div class="container new-product mx-auto my-10 px-5" data-aos="fade-up">
<!--        <home-card-swiper :data="newProducts"/>-->
      </div>
    </section>
    <section>
      <div class="my-20 last-weblog" data-aos="fade-up">
          <home-weblog :data="home.posts"/>
      </div>
    </section>
<!--    <section class="brands-border-top">-->
<!--      <div class="container mx-auto py-16 " data-aos="fade-up">-->
<!--        <home-swiper :data="brands" theme="brands"/>-->
<!--      </div>-->
<!--    </section>-->
  </div>
</template>
<style scoped lang="scss">
.offers {
  .title {
    h3 {
      line-height: var(--home-filter-offer-line-height-title);
      color: var(--home-filter-offer-color-title);
      font-size: var(--home-filter-offer-font-size-title);
      font-weight: var(--home-filter-offer-font-weight-title);
      font-family: var(--home-filter-offer-font-family-title);
      @media screen and (max-width: 768px) {
        font-size: var(--home-filter-offer-font-size-title-resposive);
      }
    }
  }
}

.brands-border-top {
  border-top: var(--home-brands-outline-border-color);
}

@media screen and (max-width: 768px) {

}
</style>
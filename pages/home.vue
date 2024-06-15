<script setup>
import Video from "~/components/header/video.vue";

definePageMeta({
  layout:"custom"
})
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
const category = ref(null)
const offers = [
  {
    name: "مبل راحتی تک نقره",
    info: 1500000,
    img: imageEight,
    url: "/products/item-3"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 2000000,
    img: imageSeven,
    url: "/products/item-3"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 5000000,
    img: imageThree,
    url: "/products/item-3"
  },
  {
    name: "مبل راحتی تک نقره ",
    info: 3300000,
    img: imageFour,
    url: "/products/item-3"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageFive,
    url: "/products/item-3"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageSix,
    url: "/products/item-3"
  },
  {
    name: "مبل راحتی تک نقره",
    info: 5600000,
    img: imageOne,
    url: "/products/item-3"
  },
  {
    name: " مبل راحتی تک نقره",
    info: 2500000,
    img: imageTwo,
    url: "/products/item-3"
  },
]
const productSwiper = [
  {
    name: "آینه و کنسول",
    info: "15",
    img: table,
    url: "/"
  },
  {
    name: "اکسسوری",
    info: 20,
    img: studyLight,
    url: "/"
  },
  {
    name: "سرویس خواب",
    info: 50,
    img: sofa,
    url: "/"
  },
  {
    name: "صندلی اداری",
    info: 33,
    img: chair,
    url: "/"
  },
  {
    name: "مبلمان",
    info: 56,
    img: furniture,
    url: "/"
  },
  {
    name: "کمد لباس",
    info: 25,
    img: commode,
    url: "/"
  },
]
const feedback = [
  {
    image: person,
    name: "عیسی خانزادی",
    location: "گرگان",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  },
  {
    image: person,
    name: "عیسی خانزادی",
    location: "گرگان",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  },
  {
    image: person,
    name: "عیسی خانزادی",
    location: "گرگان",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  },
  {
    image: person,
    name: "عیسی خانزادی",
    location: "گرگان",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  },
]
const newProducts = {
  title: "محصولات جدید",
  sub: "محصولاتی برای کمک به چیدمانی زیباتر برای منزل گرم و زیبای شما",
  products: [
    {
      name: "مبل راحتی تک نقره",
      info: 1500000,
      img: imageEight,
      url: "/products/item-1"
    },
    {
      name: "مبل راحتی تک نقره",
      info: 2000000,
      img: imageSeven,
      url: "/products/item-2"
    },
    {
      name: "مبل راحتی تک نقره ",
      info: 5000000,
      img: imageThree,
      url: "/products/item-3"
    },
    {
      name: "مبل راحتی تک نقره ",
      info: 3300000,
      img: imageFour,
      url: "/products/item-4"
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
      url: "/products/item-6"
    },
    {
      name: "مبل راحتی تک نقره",
      info: 5600000,
      img: imageOne,
      url: "/products/item-7"
    },
    {
      name: " مبل راحتی تک نقره",
      info: 2500000,
      img: imageTwo,
      url: "/products/item-8"
    },
  ]
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
const filter = [
  {
    name: "سرویس خواب",
    url: "/"
  },
  {
    name: "مبلمان اداری",
    url: "/"
  },
  {
    name: "مبلمان خانگی",
    url: "/"
  },
  {
    name: "صندلی رستورانی",
    url: "/"
  },
]

if (process.client) {
  const width = ref(screen.width)
  console.log(width.value)
  watch(() => screen.width, () => {
    width.value = screen.width
    console.log(width.value)
  })
}
function scrollToCategory(){
  category.value.scrollIntoView({ behavior:"smooth"})
}
</script>

<template>
  <div>
    <section>
      <div class=" video-container relative top-[-66px] w-full h-[100vh]">
        <video ref="video" id="video"  muted loop  autoplay
               src="@/assets/HBxV1bYERoUAfPUEkrdbavc_Rebranding%20VideoClip%20-%20Final.mp4" playsinline preload="auto">
        </video>
        <div class="text-xl md:text-3xl lg:text-5xl text-white absolute bottom-3 lg:bottom-10  w-full ">
          <div class="link flex flex-col gap-2 lg:gap-5 cursor-pointer justify-center items-center" @click="scrollToCategory">
            قدرت انتخاب
            <icons-arrow color="#fff" class="transform rotate-180 scale-105 lg:scale-150"/>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-10" data-aos="fade-up" ref="category">
      <home-swiper :data="productSwiper"/>
    </section>
    <section>
      <div class="container offers mx-auto my-3 md:my-10 overflow-hidden px-5 sm:px-10 md:px-2" data-aos="fade-up">
        <div
            class="header-offers flex flex-col gap-3 md:flex-row  md:gap-0 md:justify-between md:items-center mb-5 md:mb-10">
          <div class="title"><h3>پیشنهاد مینیمال</h3></div>
          <div class="filter-offers  ">
            <navbar-filters :data="filter" :theme="2"/>
          </div>
        </div>
        <div class="body-offers grid grid-cols-12  gap-3 md:gap-10 overflow-hidden">
          <card-product v-for="(item , index) in offers" :key="index" :price="true"
                        class="col-span-6 md:col-span-3 xl:col-span-3 w-full " :data="item" data-aos="fade-up"/>
        </div>
      </div>
    </section>
    <section>
      <div class="feedback flex items-center my-7 md:my-10 lg:my-20" data-aos="fade-up">
        <home-feed-back :data="feedback"/>
      </div>
    </section>
    <section>
      <div class="container new-product mx-auto my-10 px-5" data-aos="fade-up">
        <home-card-swiper :data="newProducts"/>
      </div>
    </section>
    <section>
      <div class="my-20 last-weblog" data-aos="fade-up">
        <home-weblog :data="weblog"/>
      </div>
    </section>
    <section class="brands-border-top">
      <div class="container mx-auto py-16 " data-aos="fade-up">
        <home-swiper :data="brands" theme="brands"/>
      </div>
    </section>

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

.video-container{
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    inset: 0;
    z-index: 0;
  }
  video{
    height: 100%;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    outline: none !important;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  .link{
    position: relative;
    z-index: 2;
  }
}
</style>
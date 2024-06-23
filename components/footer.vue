<script setup lang="ts">
import {useFooterStore} from "~/store/footer";

const text = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
const scrollTo = ref(null)
const footer = {
  popularProduct: [
    {
      name: "مبلمان",
      url: ""
    },
    {
      name: "صندلی راحتی",
      url: ""
    },
    {
      name: "سرویس خواب",
      url: ""
    },
    {
      name: "آینه و کنسول",
      url: ""
    },
  ],
  practicalLink: [
    {
      name: "محصولات",
      url: ""
    },
    {
      name: "پیشنهادات روز",
      url: ""
    },
    {
      name: "تخفیف ها",
      url: ""
    },
    {
      name: "قوانین و مقررات",
      url: ""
    },
  ],
  contactUs: [
    {
      info: " 09118738301",
      name: "شماره تماس : ",
      icon: "fa-phone-volume rotate-[-100deg]"
    },
    {
      info: "esakhanzadi@gmail.com",
      icon: "fa-envelope"
    },
    {
      info: "گرگان خیابان بهشتی بین بهشت 12 و 14",
      icon: "fa-location-dot"
    },
  ],
  socialMedia: [
    {
      name: "اینستاگرام",
      icon: "fa-instagram",
      url: "",
    },
    {
      name: "ایمیل",
      icon: "fa-envelope",
      url: "",
    },
    {
      name: "تلگرام",
      icon: "fa-telegram",
      url: "",
    },
  ]
}
function scroll(){
  window.scrollTo({top:0 , behavior:"smooth"})
}
const store = useFooterStore()
store.fetchFooterNavbar()
store.fetchFooterData()
const footerSettings = computed(()=> store.getFooterData.filter(item => item.group === 'general' ))
const footerContactUs = computed(()=> store.getFooterData.filter(item => item.group === 'contact' ))
const footerSocialApp = computed(()=> store.getFooterData.filter(item => item.group === 'social' ))
const footerNavbar = computed(()=> store.getFooterNavbar)


</script>

<template>
  <footer class="py-10 px-5 mt-10" v-if="footerSettings" >
    <div class="footer container mx-auto ">
      <div class="footer-content my-3 p-5   grid items-center grid-cols-12 gap-3 md:gap-10">
        <div
            class="footer-title gap-5  col-span-6 lg:col-span-2 text-center relative w-[52px] h-3 md:w-[180px] md:h-[40px]">
          <figure>
            <img class="w-full h-full" :src="footerSettings.filter(item=>item.name==='minimal-image')[0].value" :alt="footerSettings.filter(item=>item.name==='minimal-image')[0].label">
          </figure>
          <span class=" text-center hidden md:block">گالری مبل</span>
        </div>
        <div class="md:hidden col-span-6 flex items-center justify-end">
          <ul class="flex gap-x-3 items-center">
            <li class="social-app ">
              <nuxt-link to="">
                <lazy-icons-message/>
              </nuxt-link>
            </li>
            <li class="social-app ">
              <nuxt-link to="">
                <lazy-icons-telegram/>
              </nuxt-link>
            </li>
            <li class="social-app ">
              <nuxt-link to="">
                <lazy-icons-instagram/>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-description col-span-12 lg:col-span-10 text-justify">
          <p v-if="footerSettings.filter(item => item.name === 'minimal-dascription')[0].value">
            {{ footerSettings.filter(item => item.name === 'minimal-dascription')[0].value.substring(0, 250) + '...' }}
          </p>
<!---->
        </div>
      </div>
      <div class="footer-body px-5 lg:px-10 pb-3 pt-5 md:pt-10 ">
        <div class="nav relative grid grid-cols-12 gap-y-7 md:gap-0 items-center  ">
          <div class="popular-product col-span-6 md:col-span-2  flex flex-col gap-2 md:gap-5">
            <div class="popular-title">
              <h4>محصولات پرطرفدار</h4>
            </div>
            <ul class="nav flex flex-col gap-2">
              <li class="nav-item flex items-baseline gap-1.5" v-if="footerNavbar && footerNavbar.length" v-for="(item , index) in footerNavbar.slice(0,4)"
                  :key="index">
                <nuxt-link :to="{path:`/products/` , query:{category:item.id}}" class="nav-link">{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="practical-link col-span-6 md:col-span-2 flex flex-col gap-2 md:gap-5">
            <div class="practical-title">
              <h4>لینک های کاربردی</h4>
            </div>
            <ul class="nav flex flex-col gap-2">
              <li class="nav-item flex items-baseline gap-1.5 ">
                <nuxt-link to="/weblog" class="nav-link">وبلاگ</nuxt-link>
              </li>
              <li class="nav-item flex items-baseline gap-1.5 ">
                <nuxt-link to="/products" class="nav-link">محصولات</nuxt-link>
              </li>
              <li class="nav-item flex items-baseline gap-1.5 ">
                <nuxt-link to="/about-us" class="nav-link">درباره ما</nuxt-link>
              </li>
              <li class="nav-item flex items-baseline gap-1.5 ">
                <nuxt-link to="/contact-us" class="nav-link">تماس یا ما</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="contact-us-product col-span-12 md:col-span-4  lg:col-span-3 flex flex-col  gap-4 md:gap-5">
            <div class="contact-us-title ">
              <h4 class="flex bg-white ">ارتباط با ما </h4>
            </div>
            <ul class="nav flex flex-col sm:flex-row md:flex-col gap-2 ">
              <li class="nav-item ">
                <nuxt-link v-if="footerContactUs.filter(item => item.name === 'phone-number')[0].value" :to="`tel:${footerContactUs.filter(item => item.name === 'phone-number')[0].value}`" class="nav-link flex items-center gap-1">
                  <div class="flex gap-1.5 items-center">
                    <span class="icon"> <lazy-icons-phone/></span>
                    <span class="name">{{ footerContactUs.filter(item => item.name === 'phone-number')[0].label}}</span>
                  </div>
                  <span class="info">{{ footerContactUs.filter(item => item.name === 'phone-number')[0].value }}</span>
                </nuxt-link>
              </li>
              <li class="nav-item hidden md:block ">
                <nuxt-link v-if="footerContactUs.filter(item => item.name === 'email')[0].value" :to="`mailto:${footerContactUs.filter(item => item.name === 'email')[0].value}`" class="nav-link flex items-center gap-1">
                  <div class="flex gap-1.5 items-center">
                    <span class="icon"> <lazy-icons-message/> </span>
                    <span class="name">{{ footerContactUs.filter(item => item.name === 'email')[0].value }}</span>
                  </div>
                  <span class="info"></span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link flex gap-1" v-if="footerContactUs.filter(item => item.name === 'address')[0].value">
                  <div class="flex gap-1.5 items-center">
                    <span class="icon self-start"><lazy-icons-location/></span>
                    <span class="name">{{ footerContactUs.filter(item => item.name === 'address')[0].value }}</span>
                  </div>
                </nuxt-link>
              </li>
              <li>
                <ul class="  hidden md:flex gap-x-3 items-center mt-2">
                  <li class="social-app">
                    <nuxt-link v-if="footerSocialApp.filter(item => item.name === 'telegram')[0].value" :to="footerSocialApp.filter(item => item.name === 'telegram')[0].value">
                      <lazy-icons-telegram/>
                    </nuxt-link>
                  </li>
                  <li class="social-app">
                    <nuxt-link v-if="footerSocialApp.filter(item => item.name === 'instagram')[0].value" :to="footerSocialApp.filter(item => item.name === 'instagram')[0].value">
                      <lazy-icons-instagram/>
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="image hidden md:block col-span-3">
            <figure><img :src="footerSettings.filter(item=>item.name==='footer-image')[0].value" class="w-full" :alt="footerSettings.filter(item=>item.name==='footer-image')[0].label"></figure>
          </div>
          <div class="icon-top w-fit h-fit absolute left-0 bottom-[-10%] lg:right-7 lg:top-[-15%]  ">
            <button class=" lg:px-5 lg:py-2 lg:pt-3 " ref="scrollTo" @click ="scroll">
              <icons-arrow/>
            </button>
          </div>
        </div>
        <div class="footer-end flex justify-between border-t mt-5 py-4">
          <div class="roles"><span>تمامی حقوق مادی و معنوی برای مجموعه مینیمال محفوظ میباشد </span></div>
          <nuxt-link to="https://shetabit.com/" target="_blank" class="creator"><span>طراحی شده توسط گروه شتاب</span></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--footer-background-color);
  .icon-top {
    @media screen and (min-width: 1028px){
    background: var(--footer-background-color);
    }
  }

  .footer {
    .footer-content {
      .footer-title {
        max-width: 140px;
      }
    }

    .footer-body {
      background: var(--footer-content-background-color);

    }

    .footer-title {
      color: var(--footer-title-color);
      font-weight: var(--footer-title-font-weight);
      font-size: var(--footer-title-font-size);
      font-family: var(--footer-title-font-family);
      line-height: var(--footer-title-line-height);
    }
  }
}

.contact-us-title,
.practical-title,
.popular-title {
  color: var(--footer-nav-title-color);
  font-weight: var(--footer-title-font-weight-bold);
  font-size: var(--footer-nav-title-font-size);
  font-family: var(--footer-nav-title-font-family);
  @media screen and (max-width: 768px) {
    font-size: var(--footer-nav-title-font-size-responsive);
  }
}

.nav-item {
  position: relative;
  color: var(--footer-nav-item-info-color);
  font-weight: var(--footer-nav-item-info-font-weight);
  font-size: var(--footer-nav-item-info-font-size);
  font-family: var(--footer-nav-item-info-font-family);
  @media screen and (max-width: 768px) {
    font-size: var(--footer-nav-item-info-font-size-responsive);
  }
}

.popular-product {
  .nav-item {
    &:before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 5px;
      background: #AE7BB6;
      @media screen and (max-width: 768px) {
        width: 4px;
        height: 4px;
      }
    }
  }
}

.practical-link {
  .nav-item {
    &:before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 5px;
      background: #AE7BB6;
      @media screen and (max-width: 768px) {
        width: 4px;
        height: 4px;
      }
    }
  }
}

.footer-description {
  @media screen and (max-width: 768px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-align: justify;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

figure {
  overflow: hidden;
  max-height: 300px;
  max-width: 400px;

  img {
    object-fit: cover;
    object-position: center;
  }
}

.roles {
  color: var(--footer-alert-title-color);
  font-size: var(--footer-alert-title-font-size);
  font-family: var(--footer-alert-title-font-family);
  @media screen and (max-width: 768px) {
    font-size: var(--footer-alert-title-font-size-responsive);
  }
}

.creator {
  color: var(--footer-make-title-color);
  font-size: var(--footer-make-title-font-size);
  font-family: var(--footer-make-title-font-family);
  @media screen and (max-width: 768px) {
    font-size: var(--footer-make-title-font-size-responsive);
  }
}
</style>
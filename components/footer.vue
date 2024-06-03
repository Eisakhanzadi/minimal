<script setup lang="ts">
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
</script>

<template>
  <footer class="py-10 px-5 mt-10">
    <div class="footer container mx-auto ">
      <div class="footer-content my-3 p-5   grid items-center grid-cols-12 gap-3 md:gap-10">
        <div
            class="footer-title gap-5  col-span-6 lg:col-span-2 text-center relative w-[52px] h-3 md:w-[180px] md:h-[40px]">
          <figure>
            <img class="w-full h-full" src="/svg/navbar-brand.svg" alt="minimal">
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
          <p>
            {{ text.substring(0, 250) + '...' }}
          </p>
        </div>
      </div>
      <div class="footer-body px-10 pb-3 pt-5 md:pt-10 ">
        <div class="nav relative grid grid-cols-12 gap-y-7 md:gap-0 items-center ">
          <div class="popular-product col-span-6 md:col-span-2  flex flex-col gap-2 md:gap-5">
            <div class="popular-title">
              <h4>محصولات پرطرفدار</h4>
            </div>
            <ul class="nav flex flex-col gap-2">
              <li class="nav-item flex items-baseline gap-1.5" v-for="(item , index) in footer.popularProduct"
                  :key="footer">
                <nuxt-link :to="item.url" class="nav-link">{{ item.name }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="practical-link col-span-6 md:col-span-2 flex flex-col gap-2 md:gap-5">
            <div class="practical-title">
              <h4>لینک های کاربردی</h4>
            </div>
            <ul class="nav flex flex-col gap-2">
              <li class="nav-item flex items-baseline gap-1.5 " v-for="(item , index) in footer.practicalLink"
                  :key="index">
                <nuxt-link :to="item.url" class="nav-link">{{ item.name }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="contact-us-product col-span-12 md:col-span-4  lg:col-span-3 flex flex-col  gap-4 md:gap-5">
            <div class="contact-us-title ">
              <h4 class="flex bg-white ">ارتباط با ما </h4>
            </div>
            <ul class="nav flex md:flex-col gap-2 ">
              <li class="nav-item ">
                <nuxt-link :to="`tel:${footer.contactUs[0].info}`" class="nav-link flex gap-1">
                  <div class="flex gap-1.5">
                    <span class="icon"> <lazy-icons-phone/></span>
                    <span class="name">{{ footer.contactUs[0].name }}</span>
                  </div>
                  <span class="info">{{ footer.contactUs[0].info }}</span>
                </nuxt-link>
              </li>
              <li class="nav-item hidden md:block ">
                <nuxt-link :to="`mailto:${footer.contactUs[1].info}`" class="nav-link flex gap-1">
                  <div class="flex gap-1.5 items-center">
                    <span class="icon"> <lazy-icons-message/> </span>
                    <span class="name">{{ footer.contactUs[1].info }}</span>
                  </div>
                  <span class="info"></span>
                </nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link flex gap-1">
                  <div class="flex gap-1.5 items-center">
                    <span class="icon"><lazy-icons-location/></span>
                    <span class="name">{{ footer.contactUs[2].info }}</span>
                  </div>
                </nuxt-link>
              </li>
              <li>
                <ul class="  hidden md:flex gap-x-3 items-center mt-2">
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
              </li>
            </ul>
          </div>
          <div class="image hidden md:block col-span-3">
            <figure><img src="/image/footer/Rectangle%2045%20(1).png" class="w-full" alt=""></figure>
          </div>
          <div class="icon-top w-fit h-fit absolute left-0 bottom-[-10%] lg:right-7 lg:top-[-15%]  ">
            <button class=" lg:px-5 lg:py-2 lg:pt-3" ref="scrollTo" @click ="scroll">
              <icons-arrow/>
            </button>
          </div>
        </div>
        <div class="footer-end flex justify-between border-t mt-5 py-4">
          <div class="roles"><span>تمامی حقوق مادی و معنوی برای مجموعه مینیمال محفوظ میباشد </span></div>
          <div class="creator"><span>تهیه شده در شرکت شتاب</span></div>
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
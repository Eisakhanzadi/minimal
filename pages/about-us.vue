<script setup>
/*minimal team image*/
import mohamad from 'public/image/minimal-team/mohmad.png'
import ati from 'public/image/minimal-team/ati.png'
import najme from 'public/image/minimal-team/najme.png'
import ebi from 'public/image/minimal-team/ebi.png'
import fati from 'public/image/minimal-team/fati.png'
import mehdi from 'public/image/minimal-team/mehdi.png'
/* career-opportunities */
import imageOne from 'public/image/career-opportunities/1.png'
import imageTwo from 'public/image/career-opportunities/2.png'

const showModal = ref(false)
const breadCrumb = [
  {
    name: 'درباره ما'
  }
]
const data = {
  text: `
  تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی
و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده در ساخت این محصول تماما چوب مرغوب و مستحکم روس می باشد.در پایه های این محصول از چوب خودرنگروس استفاده شده که علاوه بر نمای چوبی زیبا دوام بالایی نیز دارد.اسفنج مصرفی در قسمت نشیمن محصول اسفنج 35 کیلویی ویژه که مرغوب ترین نوع اسفنج است استفاده شده
 که نشیمنی راحت و با دوام را به ارمغان می اورد.
پارچه ی انتخاب شده برای این محصول پارچه ی مرغوب بوده که در سبک مدرن کاربرد زیادی دارد که ضمن زیبایی با ویژگی قابلیت شست و شوی انتخابی مناسب محسوب می شود.در مجموع این محصول با نمایی ساده و جذاب,نشیمنی راحت و کیفیتی بالا,انتخابی ایده ال برای دوستداران مبلمان مدرن می باشد.
  تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده در ساخت این محصول تماما چوب مرغوب و مستحکم روس می باشد.در پایه های این محصول از چوب خودرنگروس استفاده شده که علاوه بر نمای چوبی زیبا دوام بالایی نیز دارد.اسفنج مصرفی در قسمت نشیمن محصول اسفنج 35 کیلویی ویژه که مرغوب ترین نوع اسفنج است استفاده شده که نشیمنی راحت و با دوام را به ارمغان می اورد.پارچه ی انتخاب شده برای این محصول پارچه ی مرغوب بوده که در سبک مدرن کاربرد زیادی دارد
  `,
  team: [
    {
      name: "محمد کتولی",
      role: "رئیس هیئت مدیره",
      image: mohamad
    },
    {
      name: "محمد ابراهیمی",
      role: "هیئت مدیره",
      image: ebi
    },
    {
      name: "نجمه حیسنی",
      role: "مدیر داخلی",
      image: najme
    },
    {
      name: "مهدی حسینی",
      role: "طراح گرافیک",
      image: mehdi
    },
    {
      name: "عاطمه احمدی ",
      role: "حسابدار",
      image: ati
    },
    {
      name: "فاطمه رهبر",
      role: "مسئول فروش",
      image: fati
    },
  ],
  frequentlyAskedQuestion: [
    {
      name: "جنس کف مبلمان از چیست؟",
      text: "قطعا با توجه به فضای منزلتان، خودتان بهتر می‌توانید نظر بدهید اما به طور معمول مبل‌های راحتی برای هر متراژی مناسب است. مبل‌های کلاسیک برای منازلی با متراژهای نسبتا بالا و مبل های ال برای منازل کوچک می‌تواند گزینه‌ی مناسبی باشد."
    },
    {
      name: "جنس کلاف مبلمان از چیست؟",
      text: "قطعا با توجه به فضای منزلتان، خودتان بهتر می‌توانید نظر بدهید اما به طور معمول مبل‌های راحتی برای هر متراژی مناسب است. مبل‌های کلاسیک برای منازلی با متراژهای نسبتا بالا و مبل های ال برای منازل کوچک می‌تواند گزینه‌ی مناسبی باشد."
    },
    {
      name: "مبلمان راحتی ، کلاسیک یا ال کدام مناسب تر است ؟",
      text: "قطعا با توجه به فضای منزلتان، خودتان بهتر می‌توانید نظر بدهید اما به طور معمول مبل‌های راحتی برای هر متراژی مناسب است. مبل‌های کلاسیک برای منازلی با متراژهای نسبتا بالا و مبل های ال برای منازل کوچک می‌تواند گزینه‌ی مناسبی باشد."
    },
    {
      name: "آماده سازی مبلمان چه مقدار زمان میبرد؟",
      text: "قطعا با توجه به فضای منزلتان، خودتان بهتر می‌توانید نظر بدهید اما به طور معمول مبل‌های راحتی برای هر متراژی مناسب است. مبل‌های کلاسیک برای منازلی با متراژهای نسبتا بالا و مبل های ال برای منازل کوچک می‌تواند گزینه‌ی مناسبی باشد."
    },
    {
      name: "آیا امکان تغییر رنگ چوب وجود دارد؟",
      text: "قطعا با توجه به فضای منزلتان، خودتان بهتر می‌توانید نظر بدهید اما به طور معمول مبل‌های راحتی برای هر متراژی مناسب است. مبل‌های کلاسیک برای منازلی با متراژهای نسبتا بالا و مبل های ال برای منازل کوچک می‌تواند گزینه‌ی مناسبی باشد."
    },
  ],
  careerOpportunities: {
    text: "تک نفره ی مدرن مبل تک نفره چوبی با جدید ترین طراحی و با استفاده از بهترین متریال مصرفی ارائه می شود. توجه توجه پارچه مبل بصورت ساده میباشد کلاف استفاده شده در ساخت این محصول تماما چوب مرغوب و مستحکم روس می باشد.در پایه های این محصول از چوب خودرنگروس استفاده شده که علاوه بر نمای چوبی زیبا دوام بالایی نیز دارد.اسفنج مصرفی در قسمت نشیمن محصول اسفنج 35 کیلویی ویژه که مرغوب ترین نوع اسفنج است استفاده شده که نشیمنی راحت و با دوام را به ارمغان می اورد.پارچه ی انتخاب شده برای این محصول پارچه ی مرغوب بوده که در سبک مدرن کاربرد زیادی دارد"
    ,
    image: {
      one: imageOne,
      two: imageTwo
    }
  },
  roles: [
    {
      title: "کارشناس بخش روابط عمومی",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: "یک هفته قبل"
    },
    {
      title: "طراح گرافیک",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: ""
    },
    {
      title: "مدیر فروش",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: "یک هفته قبل"
    },
    {
      title: "نماینده فروش ",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: ""
    },
    {
      title: "حسابدار",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: "یک هفته قبل"
    },
    {
      title: "کارشناس تولید محتوا",
      promise: "تمام وقت",
      work: "6الی 14 - 17 الی 22",
      write: ""
    },
  ]


}


function showForm() {
  showModal.value = !showModal.value
}
</script>

<template>
  <div>
    <div class="container px-5 mx-auto">
      <lazy-bread-crumb :data="breadCrumb"/>
    </div>
    <div class="container mx-auto py-5 hidden md:block">
      <div class="about-us-title">
        <h1>درباره مینیمال</h1>
      </div>
    </div>
    <div class="image-container ">
      <div class="grid grid-cols-10 container px-5 mx-auto pt-5 pb-10 md:py-10">
        <div class="col-span-12 container mx-auto pb-5 md:hidden ">
          <div class="about-us-title">
            <h1>درباره مینیمال</h1>
          </div>
        </div>
        <div class="md:col-span-2"></div>
        <div class="image col-span-12 md:col-span-8"><img class="w-full" src="/public/image/about-us/1.png" alt=""></div>
      </div>
    </div>
    <div class="container px-5 mx-auto mt-10">
      <p v-html="data.text"></p>
    </div>
    <main class=" flex flex-col gap-10 mb-10">
      <div class="minimal-team container px-5 mx-auto mt-10">
        <div class="minimal-team-title my-10">
          <h2>تیم ما</h2>
        </div>
        <ul class="grid grid-cols-12 gap-5">
          <li class=" col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2" v-for="(item , index) in data.team"
              :key="index">
            <div class="card flex flex-col gap-5">
              <img :src="item.image" alt="item.name">
              <div class="body text-center py-2 flex flex-col gap-1.5">
                <h3>{{ item.name }}</h3>
                <span>{{ item.role }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <article class="flex flex-col gap-5">
        <fsq :data="data.frequentlyAskedQuestion"/>
        <div class="career-opportunities my-10">
          <h3 class="career-opportunities-title my-7 container px-5 mx-auto">فرصت های شغلی</h3>
          <div class="career-opportunities-body after:w-[65%] lg:after:w-[66%]  px-1 py-5  relative ">
            <div class="container mx-auto grid grid-cols-12 gap-5 h-full px-5 ">
              <div class="text col-span-6 lg:col-span-6  text-justify"><p>{{data.careerOpportunities.text}}</p></div>
              <div class="col-span-6 flex flex-col-reverse lg:justify-between lg:flex-row gap-5 lg:gap-8 pe-5 lg:pe-0   ">
                <div class="w-full my-auto h-full lg:w-fit lg:h-fit lg:ms-auto mb-auto   "><img class="w-full h-full  " :src="data.careerOpportunities.image.one" alt=""></div>
                <div class=" md:self-end my-auto h-full lg:w-fit lg:h-fit lg:ms-auto self-end "><img class="w-full h-full" :src="data.careerOpportunities.image.two" alt=""></div>
              </div>
            </div>
          </div>
        </div>
        <div class="roles container px-5 mx-auto ">
          <div class="grid grid-cols-12 gap-5">
            <card-role @show-modal="showForm" class=" col-span-6 lg:col-span-4 xl:col-span-3"
                       v-for="(item , index) in data.roles" :data="item" :key="index"/>
          </div>
        </div>
      </article>
      <div>
        <transition name="form">
          <Form v-if="showModal" @close="showForm" theme="modal"/>
        </transition>
      </div>
    </main>
  </div>
</template>

<style scoped>
.about-us-title {
  h1 {
    color: #000;
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 15.6px;
    }
  }
}

.image-container {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: #f4f4f4;
    top: 0;
    right: 0;
    height: 100%;
    width: 65%;
    z-index: -1;
  }
}

.minimal-team {
  .minimal-team-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 31.2px;
    color: #000000;
  }

  .body {
    background: #f4f4f4;

    h3 {
      font-size: 16px;
      font-weight: 700;
      color: #000000;
      line-height: 27px;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      color: #606060;
      line-height: 27px;
    }
  }
}


.career-opportunities-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 31.2px;
  color: #000;
}

.career-opportunities-body {
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 37px;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 30px;
    }
    @media screen and (max-width: 500px) {
      font-size: 10px;
      line-height: 15px;
    }
  }

  &:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    height: 100%;
    background: #f4f4f4;
    z-index: -1;
  }
}

/* transition show form */
.form-enter-active,
.form-leave-active {
  transition: all 0.4s;
}

.form-enter-from,
.form-leave-to {
  opacity: 0;
}
</style>
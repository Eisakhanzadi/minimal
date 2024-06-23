<script setup lang="ts">
import {useContactUsStore} from "~/store/contactUs";
import {useToast} from "vue-toastification";
const config = useRuntimeConfig()
const formData = new FormData()
const data = {
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت ...",
  info: {
    support: 'از 9 الی 17',
    call: "01732356051",
    work: "10 الی 22",
    socialMedia: [
      {
        name: "instagram"
      },
      {
        name: "telegram"
      },
      {
        name: ""
      },
    ],
    address: "گلستان - گرگان - خیابان بهشتی بین بهشت 12 و 14"
  }
}
const breadcrumb = [
  {
    name: 'تماس با ما'
  }
]
const store = useContactUsStore()
store.fetchContactUsData()
const contactUs = computed(()=>store.getContactUsData.filter(item=>item.group === 'contact'))
const socialApp = computed(()=>store.getContactUsData.filter(item=>item.group === 'social'))

async function sendData(form){
  console.log(config.public.baseUrl)
  formData.append('name',form.name)
  formData.append('mobile',form.mobile)
  formData.append('description',form.description)
  formData.append('email',form.email)
  const {status , error , pending} = await useFetch(()=>`https://minimal.foodavaran.com/api/tickets` , {
    method:'POST',
    body:formData
  })
  if (error.value){
    console.log(error.value)
    useToast().error (error.value.data.message?error.value.data.message:null)
  }
  if (status.value === 'success'){
    console.log('success')
   useToast().success ('از اینکه مارا در خدمات رسانی بهتر یاری کردید متشکریم. ')

  }
}
</script>

<template>
  <div class="container mx-auto my-10">
    <div>
      <bread-crumb :data="breadcrumb"/>
    </div>
    <div class="contact-us flex flex-col gap-5 md:gap-10 lg:gap-20 pt-5">
      <div class="contact-us-text px-5 md:px-0 ">
        <div class="contact-us-title"><h1>تماس با ما </h1></div>
        <div class="grid grid-cols-12 items-start text-justify gap-7">
          <div class="col-span-12 lg:col-span-6 mt-7">
            <p v-if="contactUs.filter(item => item.name === 'contactUs-text')[0] " >{{ contactUs.filter(item => item.name === 'contactUs-text')[0].value }}</p>
          </div>
          <div class="image col-span-12 lg:col-span-6">
            <img v-if="contactUs.filter(item => item.name === 'contactUs-image')[0]"  :src="contactUs.filter(item => item.name === 'contactUs-image')[0].value" class="w-full h-full" :alt="contactUs.filter(item => item.name === 'contactUs-image')[0].label">
          </div>
        </div>
      </div>
      <div class="contact-us-info px-5 md:px-0">
        <ul class=" grid grid-cols-12 gap-4">
          <li class="col-span-6 py-3 px-3 flex gap-1.5 items-center">
            <h5> پشتیبانی وبسایت :</h5>
            <span v-if="contactUs.filter(item => item.name === 'support-time')[0]" >{{ contactUs.filter(item => item.name === 'support-time')[0].value }}</span>
          </li>
          <li class="col-span-6 py-3 px-3 flex gap-1.5 items-center">
            <h5>شماره تماس :</h5>
            <a v-if="contactUs.filter(item => item.name === 'phone-number')[0]"  :href="`tel:${contactUs.filter(item => item.name === 'phone-number')[0].value}`">{{ contactUs.filter(item => item.name === 'phone-number')[0].value }}</a>
          </li>
          <li class="col-span-6 py-3 px-3 flex gap-1.5 items-center">
            <h5>ساعت کاری حضوری فروشگاه :</h5>
            <span v-if="contactUs.filter(item => item.name === 'work-time')[0]" >{{ contactUs.filter(item => item.name === 'work-time')[0].value }}</span>
          </li>
          <li class="col-span-6 py-3 px-3 flex gap-1.5 items-center">
            <h5> شبکه های اجتماعی :</h5>
            <ul class="social-app flex items-center gap-4 mx-2">
              <li>
                <nuxtLink v-if="socialApp.filter(item=>item === 'telegram')[0]"  :to="socialApp.filter(item=>item === 'telegram')[0].value"><icons-telegram/></nuxtLink>
              </li>
              <li>
                <nuxtLink v-if="socialApp.filter(item=>item === 'instagram')[0]"  :to="socialApp.filter(item=>item === 'instagram')[0].value"><icons-instagram/></nuxtLink>
              </li>
            </ul>
          </li>
          <li class="col-span-12 py-3 px-3 flex gap-1.5 items-center">
            <h5> آدرس فروشگاه مرکزی :</h5>
            <span v-if="contactUs.filter(item => item.name === 'address')[0]" >{{ contactUs.filter(item => item.name === 'address')[0].value }}</span>
          </li>
        </ul>
      </div>
      <Form :theme="true" @sendData="sendData"  />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-us-title {
  h1 {
    font-weight: 700;
    color: #161616;
    line-height: 31.2px;
    font-size: 24px;
  }
}

.contact-us-text {
  p {
    font-size: 16px;
    line-height: 52px;
    font-weight: 400;
    color: #161616;
    font-family: yekan-regular;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
      line-height: 40px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 24px;
    }
  }
}

.ticket {
  background: #F6ECF8;

  input, textarea {
    border-radius: 3px;

    &::placeholder {
      font-size: 12px;
      font-weight: 400;
      line-height: 36px;
      color: #606060;
    }

    &:focus {
      outline: 0;
      border: 1px solid #AE7BB6;
      box-shadow: #EAD1EE 0 0 10px;
    }
  }
}

button {
  position: relative;
  border: 1px solid black;
  padding: 6px 25px;

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 20px;
    background: #F6ECF8;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 20px;
    background: #F6ECF8;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }

  &:hover {
    background: #AE7BB6;
    border-color: transparent;
    color: white;

    &:after, &:before {
      display: none;
    }
  }
}

ul {
  li {
    background: #F6ECF8;

    h5 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20.8px;
      @media screen and (max-width: 1024px) {
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
      }
    }

    span, a {
      font-weight: 400;
      font-size: 16px;
      line-height: 20.8px;
      @media screen and (max-width: 1024px) {
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
      }
    }
  }
}
</style>
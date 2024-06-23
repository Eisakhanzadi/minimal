<script setup>
import {useAboutUsStore} from "~/store/aboutus.js";
import {useToast} from "vue-toastification";
const formId = ref(null)
const showModal = ref(false)
const breadCrumb = [
  {
    name: 'درباره ما'
  }
]
const store = useAboutUsStore()
store.fetchAboutUsData()
store.fetchTeamsData()
store.fetchFaqData()
store.fetchJobOffersData()
function showForm(id) {
  console.log(id)
  formId.value = id
  showModal.value = !showModal.value
}
async function closeForm(form){
  console.log(form)
  const formData = new FormData()
  formData.append( 'name', form.name)
  formData.append( 'description', form.description)
  formData.append( 'mobile', form.mobile)
  formData.append( 'file', form.file)
  formData.append( 'job_id', form.job_id)
  const {data , status , error } = await useFetch(()=>`https://minimal.foodavaran.com/api/resumes` , {
    method:'POST',
    body:formData
  })
  if (status.value === 'success'){
    showModal.value = !showModal.value
    console.log(data.value)
    useToast().success ('رزومه شما با موفقیت ارسال شد. ')

  }
  if (error.value){
    console.log(formData)
    console.log(error)
    useToast().error ( error.value.data.message !=  "!شما یک بار رزومه برای این شغل ارسال کردید "? 'ارسال رزمه با خظا مواجه شد لطفا لحظاتی دیگر مجددا تلاش کنید .' : error.value.data.message )
    showModal.value = !showModal.value
  }
}
const aboutUs = computed(()=>store.getAboutUSData.filter(item=>item.group==='about'))
const teams = computed(()=>store.getTeamData)
const faq = computed(()=>store.getFaqData)
const jobOffers = computed(()=>store.getJobOffersData)
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
        <div class="image col-span-12 md:col-span-8"><img class="w-full" :src="aboutUs.filter(item=>item.name === 'aboutUs-image-primary')[0].value" :alt="aboutUs.filter(item=>item.name === 'aboutUs-image-primary')[0].label"></div>
      </div>
    </div>
    <div class="container px-5 mx-auto mt-10">
      <p class="text-justify" v-if="aboutUs">{{aboutUs.filter(item=>item.name === 'about-minimal')[0].value}}</p>
    </div>
    <main class=" flex flex-col gap-10 mb-10">
      <div class="minimal-team container px-5 mx-auto mt-10">
        <div class="minimal-team-title my-10">
          <h2>تیم ما</h2>
        </div>
        <ul class="grid grid-cols-12 gap-5">
          <li  class=" col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2" v-if="teams.length" v-for="(item , index) in teams"
              :key="index">
            <div class="card flex flex-col gap-5" >
              <img v-if="item.image.url" :src="item.image.url" alt="item.name">
              <div class="body text-center py-2 flex flex-col gap-1.5">
                <h3 v-if="item.name">{{ item.name }}</h3>
                <span v-if="item.role">{{ item.role }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <article class="flex flex-col gap-5">
        <fsq v-if="faq" :data="faq"/>
        <div class="career-opportunities my-10">
          <h3 class="career-opportunities-title my-7 container px-5 mx-auto">فرصت های شغلی</h3>
          <div class="career-opportunities-body after:w-[65%] lg:after:w-[66%] px-1 py-5 relative ">
            <div class="container mx-auto grid grid-cols-12 gap-5 h-full px-5">
              <div class="text col-span-6 lg:col-span-6  text-justify"><p>{{aboutUs.filter(item=>item.name === 'about-minimal')[0].value}}</p></div>
              <div class="col-span-6 flex flex-col-reverse lg:justify-between lg:flex-row gap-5 lg:gap-8 pe-5 lg:pe-0   ">
                <div class="w-full my-auto h-full lg:w-fit lg:h-fit lg:ms-auto mb-auto"><img class="w-full h-full" :src="aboutUs.filter(item=>item.name === 'aboutUs-imageOne')[0].value" :alt="aboutUs.filter(item=>item.name === 'aboutUs-imageOne')[0].label"></div>
                <div class=" md:self-end my-auto h-full lg:w-fit lg:h-fit lg:ms-auto self-end "><img class="w-full h-full" :src="aboutUs.filter(item=>item.name === 'aboutUs-imageTwo')[0].value" :alt="aboutUs.filter(item=>item.name === 'aboutUs-imageTwo')[0].label"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="roles container px-5 mx-auto ">
          <div class="grid grid-cols-12 gap-5" v-if="jobOffers&&jobOffers.length">
            <card-role @show-modal="showForm" class=" col-span-6 lg:col-span-4 xl:col-span-3"
                       v-for="(item , index) in jobOffers" :data="item" :key="index"/>
          </div>
        </div>
      </article>
      <div>
        <transition name="form">
          <Form v-if="showModal" @close="showModal = false" @sendData="closeForm"  theme="modal" :id="formId"/>
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
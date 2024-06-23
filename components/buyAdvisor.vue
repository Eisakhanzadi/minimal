<script setup lang="ts">
import {useToast} from "vue-toastification";
const toast = useToast()
const emit = defineEmits(['closeBuyAdvisor'])
const props = defineProps(['productId'])
const formData = new FormData()
const form =reactive({
  name:"",
  mobile :"",
  product_id:props.productId
})
async function handleForm() {
  formData.append('name',form.name)
  formData.append('mobile',form.mobile)
  formData.append('product_id',form.product_id)
  const {status, error, pending} = await useFetch('https://minimal.foodavaran.com/api/advisors', {
    method: "POST",
    body:formData
  })
  if (status.value === "success"){
    emit('closeBuyAdvisor')
    toast.success('از انتخاب شما خرسندیم ، مشاوران ما در اولین فرصت با شما تماس میگیرند')
  }
  if (error.value ){
    toast.success(error.value.data.error ==  "این شماره موبایل قبلا درخواست مشاوره داده!"
        ? 'دوست عزیز شما قبلا درخواست مشاوره داده اید' : 'سیستم قادر به پاسخگویی نمیباشد لطفا مجددا تلاش کنید.' )
  }
}
</script>

<template>
  <div class="backdrop fixed inset-0 flex justify-center px-10 z-10" @click.self="emit('closeBuyAdvisor')">
    <div class="message-content mt-[15vh] h-fit p-10 rounded w-full md:w-1/2 lg:w-1/3">
      <form action="" @submit.prevent="handleForm">
        <div class="grid grid-cols-12 gap-2">
          <div class=" col-span-12 flex flex-col gap-3">
            <input type="text" class="py-2 px-2 w-full" v-model="form.name" placeholder="نام و نام خانوادگی">
            <input type="text" class="py-2 px-2 w-full" v-model="form.mobile" placeholder="شماره تماس ">
          </div>
          <div class="col-span-12 flex justify-end btn relative mt-2">
            <button class=" w-full py-1 px-5">ارسال</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  background: rgba(0, 0, 0, 0.3);
}

.message-content {
  opacity: 0;
  scale: 0.85;
  background: #F6ECF8;
  animation: show 0.5s ease 0.5s 1 forwards;
}

input, textarea {
  font-size: 0.7rem;
  outline: 0;

  &:focus {
    border: 1px solid #AE7BB6;
    box-shadow: 0 0 1px #AE7BB6;
  }
}

.btn {
  button {
    border: 1px solid #000;
    font-size: 0.7rem;;
    font-weight: 600;
    text-align: center;
    @media screen and (max-width: 768px) {
      line-height: 12px;
      font-size: 12px;
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
      background: #F6ECF8;
      width: 10px;
      height: 15px;
      position: absolute;
      transform: translate(0, -50%);
      top: 50%;
      left: -5px;
      @media screen and (max-width: 768px) {
        height: 15px;
      }
    }

    &:before {
      content: "";
      background: #F6ECF8;
      width: 10px;
      height: 15px;
      top: 50%;
      position: absolute;
      transform: translate(0, -50%);
      right: -5px;
      @media screen and (max-width: 768px) {
        height: 15px;
      }
    }
  }
}

@keyframes show {
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>
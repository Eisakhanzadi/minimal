<script setup lang="ts">
const props = defineProps(['theme', 'id' ])
const emit = defineEmits(['close', 'sendData'])
const file = ref(null)
const errorName = ref(null)
const errorMobile = ref(null)

const errorEmail = ref(null)
const form = reactive({
  name: "",
  description: "",
  mobile: '',
  file: "",
  job_id:  props.id ? props.id :null,
  email:""
})


function formFile() {
  form.file = file.value.files[0]
}

function handleForm() {
  emit("sendData", form)
  form.name = ""
  form.mobile = ""
  form.file = ""
  form.description = ""
  form.email = ""
}
</script>

<template>
  <div @click.self="emit('close')"
       :class="`${theme !=='modal' ? '' :'backdrop pt-[15vh] fixed w-full h-full z-20 inset-0 backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.1)]'}`">
    <div class="ticket p-10 w-full container mx-auto rounded">
      <form @submit.prevent="handleForm" action="" class="flex flex-col gap-y-4 lg:w-2/3 mx-auto lg:mt-10">
        <section class="input-group  flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="input-group w-full">
            <input placeholder="نام و نام خانوادگی" type="text" v-model.trim="form.name" class="w-full px-3 py-3.5"
                   name="name"
                   id="">
            <span class="error error-name hidden" ref="errorName"> لطفا نام و نام خانوادگی خود را وارد کنید </span>
          </div>
          <div class="input-group w-full">
            <input placeholder="شماره تماس" v-model.trim="form.mobile" type="text" class="w-full px-3 py-3.5" name="mobile"
                   id="">
            <span class="error error-mobile hidden" ref="errorMobile">لطفا شماره تماس خود را وارد کنید .</span>
          </div>
          <div class="input-group w-full" v-if="theme===true">
            <input placeholder="آدرس ایمیل" type="text" class="w-full px-3 py-3.5" v-model="form.email" name="email" >
            <span class="error error-email  hidden" ref="errorEmail">لطفا ایملی خود را وارد کنید </span>
          </div>
          <div class="input-group w-full flex flex-col justify-center gap-1.5" v-else>
            <label for="file"
                   class="w-full flex justify-between items-center bg-white rounded cursor-pointer px-3 py-2">
              <span>فایل رزومه</span>
              <span class="text-red-500" v-if="form.file.length">{{ form.file.name }}</span>
              <span><icons-pin/></span>
              <input type="file" id="file" class="hidden " name="file" ref="file" @change="formFile"
                     accept=".pdf,.txt,.jpg ,.png">
            </label>
            <span class="error error-file hidden">برای ادامه لطفا فایل رزومه خود را وارد کنید .</span>
          </div>
<!---->
        </section>
        <div class="input-group">
          <textarea placeholder="متن شما" class="px-3 py-2 w-full h-52 resize-none"
                    v-model.ti.trim="form.description"></textarea>
          <span class="error error-description hidden">لطفا درباره ررومه خود توضیح دهید.</span>
        </div>
        <div class="flex justify-center">
          <button >{{ !theme ? "ارسال رزومه" : "ارسال پیام" }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ticket {
  background: #F6ECF8;
  animation: comeIn ease 0.5s forwards 0.3s;
  transform: translateY(-200px);
  opacity: 0;

  input, textarea {
    border-radius: 3px;
    outline: 0;

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

label {
  font-size: 12px;
  font-weight: 400;
  line-height: 36px;
  color: #606060;
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
span.error{
  font-size: 10px ;
  font-weight:600 ;
  color: red;
}
@keyframes comeIn {
  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
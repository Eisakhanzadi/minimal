<script setup lang="ts">
const props = defineProps(['theme'])
const emit = defineEmits(['close'])
</script>

<template>
<div @click.self="emit('close')" :class="`${theme !=='modal' ? '' :'backdrop pt-[15vh] fixed w-full h-full z-20 inset-0 backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.1)]'}`">
  <div class="ticket p-10 w-full container mx-auto rounded">
    <form @submit.prevent="" action="" class="flex flex-col gap-y-4 lg:w-2/3 mx-auto lg:mt-10">
      <div class="input-group  flex flex-col lg:flex-row justify-between gap-4">
        <input placeholder="نام و نام خانوادگی" type="text" class="w-full px-3 py-3.5" name="" id="">
        <input placeholder="شماره تماس" type="text" class="w-full px-3 py-3.5" name="" id="">
        <input v-if="theme===true" placeholder="آدرس ایمیل" type="text" class="w-full px-3 py-3.5" name="" id="">
        <label for="file" class="w-full flex justify-between items-center bg-white rounded cursor-pointer px-3 py-3.5" v-else>
          <span>فایل رزومه</span>
          <span><icons-pin/></span>
          <input type="file" id="file" class="hidden ">
        </label>
      </div>
      <div class="text-body">
        <textarea placeholder="متن شما" class="px-3 py-2 w-full h-52 resize-none"></textarea>
      </div>
      <div class="flex justify-center">
        <button >{{ !theme ? "ارسال رزومه" :"ارسال پیام"}} </button>
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
    &::placeholder{
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
label{
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
@keyframes comeIn {
  from{
    transform: translateY(-200px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
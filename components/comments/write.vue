<script setup lang="ts">
const emit = defineEmits(['closeMessage'])
import DynamicStar from "~/components/icons/dynamicStar.vue";
</script>

<template>
  <div class="backdrop fixed inset-0 flex justify-center px-10" @click.self="emit('closeMessage')">
    <div class="message-content mt-[15vh] h-fit p-10 rounded w-full lg:w-3/4 xl:w-1/2">
      <form action="" @submit.prevent="">
        <div class="grid grid-cols-12 gap-2">
          <div class=" col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-3">
            <input type="text" class="py-2 px-2 w-full" placeholder="نام و نام خانوادگی">
            <input type="text" class="py-2 px-2 w-full" placeholder="شماره تماس (در سایت نمایش داده نمیشود)">
            <div class="flex gap-3 items-center justify-evenly md:justify-stretch">
              <span>امتیاز :</span>
              <dynamic-star/>
            </div>
          </div>
          <div class="col-span-12 md:col-span-7 lg:col-span-8">
            <textarea type="text" class="  py-1 px-2 w-full h-32 md:h-full" placeholder="متن پیام"/>
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
input , textarea{
  font-size: 0.7rem;
  outline: 0;
&:focus{
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
    @media screen and (max-width: 768px){
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
      transform: translate(0,-50%);
      top: 50%;
      left: -5px;
      @media screen and (max-width: 768px){
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
      transform: translate(0 , -50%);
      right: -5px;
      @media screen and (max-width: 768px){
        height: 15px;
      }
    }
  }
}
@keyframes show {
  to{
    opacity: 1;
    scale: 1;
  }
}
</style>
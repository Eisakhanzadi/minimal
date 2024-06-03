<script setup lang="ts">
const props = defineProps(['data'])
const {data:object} = props
const emit = defineEmits(['showModal'])
</script>

<template>
<div class="card flex flex-col gap-y-3 px-6 py-8">
  <div class="card-body flex flex-col items-center gap-1.5 md:gap-3">
    <div  class="title"><h4>{{data.title}}</h4></div>
    <div class=" promise flex gap-1.5">
      <span>قرارداد : </span>
      <span> {{data.promise}} </span>
    </div>
    <div class="work-time flex gap-1.5">
      <span>ساعت کاری : </span>
      <span> {{data.work}} </span>
    </div>
  </div>
  <div class="card-footer flex justify-between items-center mt-5">
    <div class="write">{{data.write}}</div>

    <button class="ms-auto border px-6 py-1" @click="emit('showModal' , data )">ارسال رزومه</button>
  </div>
</div>
</template>

<style scoped lang="scss">
  .card{
    border: 1px solid #c7c7c7;
    .title{
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      //&:after {
      //  content: "";
      //  background: #AE7BB6;
      //  height: 40px;
      //  width: 25px;
      //}
      //&:before {
      //  content: "";
      //  position: absolute;
      //  left: 0;
      //  bottom: 0;
      //  background: #fff;
      //  height: 25px;
      //  width: 25px;
      //  transform: rotate(45deg) translate(50%,50%);
      //}
    }
    .promise , .work-time{
      font-weight: 400;
      font-size: 16px;
      line-height: 32.24px;
      color: #606060;
    }
    .write{
      font-weight: 400;
      font-size: 12px;
      line-height: 15.6px;
      color: #606060;
    }
    button{
      font-weight: 400;
      font-size: 13px;
      line-height: 32px;
      color: #000;
      position: relative;
      &:hover{
        background: #AE7BB6;
        border-color: #AE7BB6;
        color: #FFFFFF;
        &:after , &:before{
          display: none;
        }
      }
      &:after{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 10px;
        height: 20px;
        background: #fff;
        transform: translate(50% , -50%);
      }
      &:before{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 10px;
        height: 20px;
        background: #FFFFFF;
        transform: translate(-50% ,-50%);
      }
    }
  }
</style>
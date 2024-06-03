<script setup lang="ts">
const props = defineProps(['data'])
</script>

<template>
<div class="card flex flex-col gap-3 ps-10 pe-7 pb-7 pt-5">
  <div class="card-header flex items-center justify-between">
    <div class=" flex items-center gap-5">
      <div class="name">{{data.name}}</div>
      <div class="score flex gap-1">
        <span>{{data.scoreNumber}}</span>
        <icons-star/>
      </div>
    </div>
    <div class="time"><span> {{data.time}} </span></div>
  </div>
  <div class="card-body"><p>{{data.text}}</p></div>
</div>
</template>

<style scoped lang="scss">
.card{
  background: rgba(244 , 244 , 244 , 0.87);
  border-radius: 5px;
}
  .name{
    color: #5E2E66 ;
    line-height: 26px ;
    font-size:20px ;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      line-height: 11.61px ;
      font-size:8.93px ;
    }
  }
  .score > span{
      color: #606060 ;
      line-height: 31.2px ;
      font-size:24px ;
      font-weight: 400;
      @media screen and (max-width: 768px) {
        line-height: 13.93px ;
        font-size:10.71px ;
      }
    }
  .time{
      color: #606060 ;
      line-height: 19.5px ;
      font-size:15px ;
      font-weight: 400;
      @media screen and (max-width: 768px) {
        line-height: 8.7px ;
        font-size:6.7px ;
      }
    }
  .card-body{
    text-align: justify;
      color: #000000 ;
      line-height: 37px ;
      font-size:16px ;
      font-weight: 400;
      @media screen and (max-width: 768px) {
        line-height: 16px ;
        font-size:7px ;
      }
    }
</style>
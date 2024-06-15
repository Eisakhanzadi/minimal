<script setup lang="ts">

</script>

<template>
<div class="card">
  <div class="card-header">
    <img src="/public/image/weblog/best-1.png"  alt="">
  </div>
  <div class="card-body px-3 py-1 md:p-3 grid gap-2">
    <div class=" flex flex-col xl:flex-row md:justify-between md:items-baseline gap-1.5">
      <div class=" col-span-12 flex justify-between items-baseline">
        <nuxt-link to="/weblog/item-5" class="card-title  ">
          <h3>چگونه مبل خود را بشوییم ؟</h3>
        </nuxt-link>
      </div>
    </div>
    <div class="card-text">
      <p>با استفاده از بهترین متریال مصرفی توجه توجه پارچه مبل مستحکم</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.card{
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  .card-header{
    overflow: hidden;
    img{
      object-fit: cover;
      width: 100%;
    }
  }
  .author{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    -webkit-line-clamp: 1;
  }
  .card-title{
    font-size: 16px;
    line-height: 23px;
    font-weight: 700;
    color: #5E2E66;
    @media screen and (max-width: 768px) {
      font-size: 8px;
      line-height: 10px;
      font-weight: 700;
    }
  }
  .card-text{
    font-size: 14px;
    line-height: 28px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    @media screen and (max-width: 768px) {
      font-size: 8px;
      line-height: 12px;
      font-weight: 400;
    }
  }
  .category {
    color:#AE7BB6 ;
    font-size: 10px;
    line-height: 13px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 5px;
      line-height: 6.5px;
      font-weight: 400;
    }
  }
   .info{
    color: rgba(96, 96, 96, 0.7);
    font-size: 10px;
    line-height: 13px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 5px;
      line-height: 6.5px;
      font-weight: 400;
    }
  }

}
.info{
  font-size: 10px;
}
.more{
a{
  display: block;
  position: relative;
  &:after{
    content: "";
    position: absolute;
    background: #AE7BB6;
    width:40px;
    height: 2px;
    left: 0;
    bottom: 0;
  }
  &:before{
    content: "";
    position: absolute;
    border: 2px solid #AE7BB6;
    border-right: 0;
    border-bottom: 0;
    width: 10px;
    height: 10px;
    bottom: -4px;
    left: 0;
    transform: rotate(-45deg);
  }
}
}
</style>
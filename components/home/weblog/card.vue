<script setup lang="ts">
const props = defineProps(['data'])
const {data} = props
</script>

<template>
  <div class="card grid grid-cols-12 mx-auto gap-5">
    <div class="card-header col-span-12 md:col-span-7">
      <figure>
        <img :src="data.image.url" class="w-full " :alt="data.title">
      </figure>
    </div>
    <div class="card-body col-span-12 md:col-span-5 flex flex-col gap-2 md:gap-5">
      <div class="title"><h2>{{ data.title }}</h2></div>
      <div class="info flex gap-5">
        <div class="author flex gap-2">
          <span class="icon"><i class="fa-solid fa-user"/></span><span class="name">{{ data.writer }}</span>
        </div>
        <div class="date"><span class="icon"><i class="fa-solid fa-calender"/></span><span v-if="data.created_at" class="time">{{ data.created_at.split(' ')[0] }}</span></div>
      </div>
      <div class="card-text text-justify"><p>{{ data.summary.substr(0,300)+'...' }}</p></div>
      <div class="more ms-auto">
        <button>مشاهده بیشتر</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
figure {
  position: relative;
  max-height: 303px !important;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(96, 96, 96, 0.71);

  img {
    object-fit: cover;
    object-position: center;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5%;
    right: 2%;
    bottom: 5%;
    left: 2%;
    background: rgba(255, 255, 255, 0.3);
  }

}
.info{
  color: var(--home-weblog-info-color);
  font-size: var(--home-weblog-info-font-size);
  font-family: var(--home-weblog-info-font-family);
  font-weight: var(--home-weblog-info-font-weight);
}
.title{
  color: var(--home-weblog-item-title-color);
  font-size: var(--home-weblog-item-title-font-size);
  font-family: var(--home-weblog-item-title-font-family);
  font-weight: var(--home-weblog-item-title-font-weight);
  @media screen and (max-width: 768px) {
  font-size: var(--home-weblog-item-title-font-size-responsive);

  }

}
.card-text {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: var(--home-weblog-text-color);
  font-size: var(--home-weblog-text-font-size);
  font-family: var(--home-weblog-text-font-family);
  font-weight: var(--home-weblog-text-font-weight);
}

button {
  border: 1px solid black;
  padding: 5px 20px;
  position: relative;
  color: var(--home-weblog-button-color);
  font-size: var(--home-weblog-button-font-size);
  font-family: var(--home-weblog-button-font-family);
  font-weight: var(--home-weblog-button-font-weight);
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 18px;
    background: var(--home-weblog-background-color);
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 18px;
    background: var(--home-weblog-background-color);
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
  &:hover{
    background: var(--home-weblog-button-backgroun-hover);
    border: none;
    color: white;
    &:after,&:before{
      display: none;
    }
  }
}
</style>
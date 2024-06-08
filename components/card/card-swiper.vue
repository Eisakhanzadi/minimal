<script setup lang="ts">
const props = defineProps(['data'])
const {data} = props
</script>

<template>
  <div class="card grid grid-cols-12 mx-auto gap-5">
    <div class="card-header col-span-6">
      <figure>
        <img :src="data.image" class="w-full " :alt="data.title">
      </figure>
    </div>
    <div class="card-body col-span-6 flex flex-col gap-1 md:gap-2.5">
      <div class="title"  ><h2>{{ data.title }}</h2></div>
      <div class="info">
        <div class="date"><span class="icon"><i class="fa-solid fa-calender"/></span><span class="time">{{
            data.time
          }}</span></div>
      </div>
      <div class="card-text text-justify"><p>{{ data.text }}</p></div>
      <nuxt-link :to="data.url" class="more  ms-auto mt-auto lg:mb-3">
        <button>مشاهده بیشتر</button>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

figure {
  position: relative;
  max-height: 303px !important;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(96, 96, 96, 0.71);

  img {
    object-fit: cover;
    object-position: center;
  }
}

.info {
  color: #606060;
  font-size: 15px;
  line-height: 19.5px;
  @media screen and (max-width: 1024px) {
    font-size: 7.5px;
    line-height: 9.75px;
  };
}

.title {
  color: #5E2E66;
  font-size: 24px;
  font-weight: 31.2px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 15.6px;
  };
}

.card-text {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #000;
  font-size: 16px;
  line-height: 37px;
  @media screen and (max-width: 1024px) {
    font-size: 8px;
    line-height: 15px;
  };
}

button {
  border: 1px solid black;
  padding: 5px 20px;
  position: relative;
  color: var(--home-weblog-button-color);
  font-size: var(--home-weblog-button-font-size);
  font-family: var(--home-weblog-button-font-family);
  font-weight: var(--home-weblog-button-font-weight);
  @media screen and (max-width: 1024px) {
    padding: 3px 16px;
    font-size: 6.5px ;
    line-height: 16px;
  };
  @media screen and (max-width: 768px) {
    padding: 1px 8px;
  };

  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 18px;
    background: var(--home-weblog-background-color);
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    @media screen and (max-width: 768px) {
      padding: 1px 8px;
      height: 10px;
    };
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
    @media screen and (max-width: 768px) {
      padding: 1px 8px;
      height: 10px;
    };
  }

  &:hover {
    background: var(--home-weblog-button-backgroun-hover);
    border: none;
    color: white;

    &:after, &:before {
      display: none;
    }
  }
}
</style>
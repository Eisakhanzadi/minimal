<template>
  <swiper
      :pagination="{
      dynamicBullets: true,
    }"
      :modules="[Pagination]"
      class="p-0"
  >
    <swiper-slide class=" flex items-center justify-center my-10 lg:my-16 xl:my-24 " v-for="(item , index) in data" :key="index">
      <div
          class="card py-5 mx-auto flex justify-between gap-2 md:gap-5 lg:gap-8 xl:gap-16 w-full  px-3 md:py-10 md:px-10 relative">
        <div class="card-header flex flex-col text-nowrap gap-1 lg:gap-2 items-center">
          <div class="image-customer">
            <figure class="w-6 h-6 lg:w-20 lg:h-20">
              <img :src="item.image" class="w-full h-full rounded-full" alt="user">
              <span class="play w-3.5 h-3.5  md:w-4 md:h-4 lg:w-7 lg:h-7  "></span>
            </figure>
          </div>
          <div class="title text-center">
            <div class="name">{{ item.name }}</div>
            <div class="area mt-1 lg:mt-3">{{ item.location }}</div>
          </div>
          <span class="border-right "></span>
          <span class="border-left "></span>
        </div>
        <div class="card-body  flex items-center ">
          <div class="text-content">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
const props = defineProps(['data'])
const {data} = props
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

</script>
<style scoped lang="scss">
.swiper {
  position: relative;
  width: 100%;
  padding:  20px;

  &:after {
    position: absolute;
    content: "";
    width: 75%;
    right: 0;
    top: 0;
    height: 100%;
    background: var(--home-feedback-background-color);
  }

  .card {
    max-width: var(--home-feedback-card-size);

    .card-header {
      figure {
        position: relative;

        span {
          height: 33%;
          width: 33%;
          &:after {
            content: "";
            position: absolute;
            transform: translate(-50%, -45%);
            top: 50%;
            left: 63%;
            width: 30%;
            border-bottom:7px solid transparent ;
            border-top:7px solid transparent ;
            border-right:5px solid transparent ;
            border-left:10px solid #5E2E66 ;
            @media screen and (max-width: 1024px) {
              border-bottom:2px solid transparent ;
              border-top:2px solid transparent ;
              border-right:2px solid transparent ;
              border-left:3px solid #5E2E66 ;
              left: 82%;
            }
          }

          position: relative;
          bottom: 50%;
          border: #AE7BB6 1px solid;
          background: #d9d9d9;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          right: 21%;
          transform: translate(50% , 50%);


        }
      }

      .title {
        .name {
          font-size: var(--home-feedback-title-font-size);
          font-family: var(--home-feedback-title-font-family);
          font-weight: var(--home-feedback-title-font-weight);
          color: var(--home-feedback-title-color);
          @media screen and (max-width: 1024px) {
            font-size: var(--home-feedback-title-font-size-responsive);
          }
        }

        .area {
          font-size: var(--home-feedback-area-font-size);
          font-family: var(--home-feedback-name-font-family);
          font-weight: var(--home-feedback-name-font-weight);
          color: var(--home-feedback-name-color);
          @media screen and (max-width: 1024px) {
            font-size: var(--home-feedback-area-font-size-responsive);
          }
        }
      }

    }

    .card-body {
      &:after {
        content: url("/public/image/feedback/qute.svg");
        position: absolute;
        bottom: 87%;
        transform: rotate(-180deg) translate(-50% , -50%);
        @media screen and (max-width: 1024px) {
          scale: 0.6;
        }
        @media screen and (max-width: 768px) {
          scale: 0.3;
        }
      }

      &:before {
        content: url("/public/image/feedback/qute.svg");
        position: absolute;
        top: 85%;
        right: 40%;
        transform: translate(-50%, -50%);
        @media screen and (max-width: 1024px) {
          scale: 0.6;
        }
        @media screen and (max-width: 768px) {
          scale: 0.3;
        }
      }

      .text-content {
        font-size: var(--home-feedback-text-font-size);
        font-family: var(--home-feedback-text-font-family);
        font-weight: var(--home-feedback-text-font-weight);
        color: var(--home-feedback-text-color);
        line-height: var(--home-feedback-title-line-height);
        text-align: justify;
        display: -webkit-box;
        line-clamp: 5;
        -webkit-line-clamp: 5;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        @media screen and (max-width: 1024px) {
          font-size: var(--home-feedback-text-font-size-responsive);
          line-height: var(--home-feedback-area-line-height-responsive);
        }
      }
    }

    .border-right {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 55px;
        height: 55px;
        border: 1px solid #000;
        border-left: 0;
        border-bottom: 0;
        @media screen and (max-width: 768px) {
          width: 15px;
          height: 15px;
        }
      }

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 55px;
        height: 55px;
        border: 1px solid #000;
        border-left: 0;
        border-top: 0;
        @media screen and (max-width: 768px) {
          width: 15px;
          height: 15px;
        }
      }
    }

    .border-left {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 55px;
        height: 55px;
        border: 1px solid #000;
        border-right: 0;
        border-bottom: 0;
        @media screen and (max-width: 768px) {
          width: 15px;
          height: 15px;
        }
      }

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 55px;
        height: 55px;
        border: 1px solid #000;
        border-right: 0;
        border-top: 0;
        @media screen and (max-width: 768px) {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}
</style>

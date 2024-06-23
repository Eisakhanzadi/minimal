// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      baseUrl:'https://minimal.foodavaran.com'
    }
  },
  app:{
    head:{
      htmlAttrs:{
        dir:"rtl"
      }
    }
  },
  features:{
    inlineStyles:false
  },
  css:['@/assets/style/main.scss'],
  modules: ["@nuxtjs/tailwindcss","@pinia/nuxt",'nuxt-aos','nuxt-swiper'],
  aos:{
    offset:100,
    duration:800,
    easing:'ease',
    once:true,
  },
  swiper: {
  }
})
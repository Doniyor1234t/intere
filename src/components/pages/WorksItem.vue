<script>

import { Navigation, Pagination, Controller} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
// import 'swiper/scss/pagination';
// import "swiper/css/thumbs";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      controlledSwiper: null,
      controlledSwiper2: null
    };
  },
  methods: {
      setControlledSwiper(swiper) {
        this.controlledSwiper = swiper;
      },
      setControlledSwiper2(swiper) {
        this.controlledSwiper2 = swiper;
      },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Controller],
    };
  },

}
</script>

<template>
  <div class="works">
    <div class="container">
      <h2 class="works__title">Our best works</h2>
      <div class="row">
        <div class="col-5 col-lg-12 pos">
          <swiper
          @swiper="setControlledSwiper2"
          :modules="modules"
          :watchSlidesProgress="true" 
          :controller="{ control: controlledSwiper }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            '1024': {
              pagination: {
                type: 'fraction',
                clickable: true,
                el: '.content__pagin',
              },
            },
          }"
          class="works__content content"
          >
            <swiper-slide v-for="item in 5" :key="item" class="content__item">
              <div class="content__name">Project 1</div>
              <div class="content__text">
                <p>
                Studio INTERE is a team of oreative thinkers. with a deep and varied set of skills, each one of us brings a unique  perspective to our work.
We believe that Great Design makes a difference.
From the biggest gestures to the smallest of details – it is all important.
We believe in the Big Picture.
Our design is always aligned with your goals.
We believe in building a relationship with you that doesn’t end when your project is complete. Trust is everything.
              </p>
              <p>
                In our studio—creativity knows no boundaries, and it never looks the same.
We are masters at translating our clients’ brand into meaningful, impactful and distinct interior spaces.
We take the time to fully understand culture, values and goals—creating highly functional environments that truly reflect your business.
              </p>
              </div>
            </swiper-slide>
            <div class="content__pagin  swiper-pagination"></div>
          </swiper>
          <div class="content__pagination">
            <button class="content__button swiper-button-prev">
              <svg width="81" height="10" viewBox="0 0 81 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.575737 5.42426C0.341423 5.18995 0.341423 4.81005 0.575737 4.57574L4.39411 0.757359C4.62843 0.523045 5.00832 0.523045 5.24264 0.757359C5.47696 0.991674 5.47696 1.37157 5.24264 1.60589L1.84853 5L5.24264 8.39411C5.47696 8.62843 5.47696 9.00833 5.24264 9.24264C5.00832 9.47696 4.62843 9.47696 4.39411 9.24264L0.575737 5.42426ZM81 5.6H1V4.4H81V5.6Z"/>
              </svg>
            </button>
            <button class="content__button swiper-button-next">
              <svg width="81" height="10" viewBox="0 0 81 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.4243 5.42426C80.6586 5.18995 80.6586 4.81005 80.4243 4.57574L76.6059 0.757359C76.3716 0.523045 75.9917 0.523045 75.7574 0.757359C75.523 0.991674 75.523 1.37157 75.7574 1.60589L79.1515 5L75.7574 8.39411C75.523 8.62843 75.523 9.00833 75.7574 9.24264C75.9917 9.47696 76.3716 9.47696 76.6059 9.24264L80.4243 5.42426ZM0 5.6H80V4.4H0V5.6Z"/>
              </svg>
            </button>
          </div>
        </div>
        <swiper 
          @swiper="setControlledSwiper"
          :controller="{ control: controlledSwiper2 }"
          :modules="modules"
          :space-between="100"
          :breakpoints="{
            '1024': {
              pagination: false,
            },
            '320': {
              pagination: {
                type: 'bullets',
                clickable: true,
                el: '.gallery__pagin'
              },
            },
          }"
          class="col-7 col-lg-12 gallery">
          <swiper-slide v-for="item in 5" :key="item" class="works__gallery gallery__body">
            <div class="gallery__main">
              <img src="@/assets/img/images/works1.png" alt="">
            </div>
            <div class="content__text">
                <p>
                Studio INTERE is a team of oreative thinkers. with a deep and varied set of skills, each one of us brings a unique  perspective to our work.
We believe that Great Design makes a difference.
From the biggest gestures to the smallest of details – it is all important.
We believe in the Big Picture.
Our design is always aligned with your goals.
We believe in building a relationship with you that doesn’t end when your project is complete. Trust is everything.
              </p>
              <p>
                In our studio—creativity knows no boundaries, and it never looks the same.
We are masters at translating our clients’ brand into meaningful, impactful and distinct interior spaces.
We take the time to fully understand culture, values and goals—creating highly functional environments that truly reflect your business.
              </p>
              </div>
            <div class="gallery__next">
              <div class="col-7">
                <img src="@/assets/img/images/works2.png" alt="">
              </div>
              <div class="col-5">
                <img src="@/assets/img/images/works3.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <div class="gallery__pagin"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style>

</style>

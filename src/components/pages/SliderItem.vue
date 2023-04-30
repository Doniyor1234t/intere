
<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
export default {
  data() {
    return {
      slides: [
          {
            img:'slide1.png',
            title: "About us"
          },
          {
            img:'slide2.png',
            title: "About us"
          },
          {
            img:'slide3.png',
            title: "About us"
          },
          {
            img:'slide1.png',
            title: "About us"
          },
          {
            img:'slide2.png',
            title: "About us"
          },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>

<template>
  <div class="slide">
    <swiper 
      :modules="modules"
      :space-between="100"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :pagination="{
        clickable: true,
        el: '.slide__pagin'
      }"
      :breakpoints="{
        '1024': {
          slidesPerView: 'auto',
          spaceBetween: 100,
          centeredSlides: true,
        },
        '768': {
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
        },
        '320': {
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
        },
      }"
    >
      <swiper-slide v-for="(item) in slides" :key="item" class="slide__body">
        <div class="slide__item">
          <div class="slide__image">
            <img src="@/assets/img/images/slide1.png"/>
          </div>
          <div class="slide__content">
            <h2 class="slide__title">{{ item.title }}</h2>
            <div class="slide__text">
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
          </div>
        </div>
      </swiper-slide>
      <div class="slide__pagin"></div>
    </swiper>
  </div>
</template>

<style>

</style>
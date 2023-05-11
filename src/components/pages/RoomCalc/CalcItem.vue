<template>
  <div class="calcform">
    <h1 class="calcing__title top">Calculator</h1>
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-12">
          <div class="calcform__view">
            <div class="calcform__roomset">
              <button class="calcform__button">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                </svg>
                <span>Add room</span>
              </button>
              <div class="calcform__room">
                <button class="calcform__button">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                  </svg>
                </button>
                <div class="calcform__roomBox">
                  <div class="room">
                    <div class="room__title">Living room</div>
                    <div class="room__size">600 x 500 cm</div>
                  </div>
                </div>
                <button class="calcform__button">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                  </svg>
                </button>
              </div>
              <button class="calcform__button">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                </svg>
                <span>Add room</span>
              </button>
            </div>
            <div class="calcform__preview">
              <button class="calcform__save">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3104 16.54L7.58037 12.82C7.42221 12.6624 7.33331 12.4483 7.33331 12.225C7.33331 12.0017 7.42221 11.7876 7.58037 11.63C7.913 11.3113 8.43773 11.3113 8.77037 11.63L11.0604 13.93V3.84C11.0604 3.37608 11.4364 3 11.9004 3C12.3643 3 12.7404 3.37608 12.7404 3.84V13.93L15.0304 11.63C15.363 11.3113 15.8877 11.3113 16.2204 11.63C16.3785 11.7876 16.4674 12.0017 16.4674 12.225C16.4674 12.4483 16.3785 12.6624 16.2204 12.82L12.4904 16.54C12.3364 16.7009 12.123 16.7913 11.9004 16.79C11.6772 16.7937 11.4629 16.7029 11.3104 16.54ZM17.1204 8.42H18.3304C20.8466 8.47468 22.845 10.5536 22.8004 13.07V16.88C22.845 19.3964 20.8466 21.4753 18.3304 21.53L5.47038 21.45C2.95413 21.3953 0.955723 19.3164 1.00037 16.8V12.99C0.970866 11.7762 1.42562 10.6005 2.26425 9.72245C3.10289 8.84442 4.25647 8.33621 5.47038 8.31H6.68038C7.14429 8.31 7.52037 8.68608 7.52037 9.15C7.52037 9.61392 7.14429 9.99 6.68038 9.99H5.47038C4.70103 10.0134 3.97305 10.3437 3.44888 10.9074C2.9247 11.471 2.64795 12.221 2.68037 12.99V16.77C2.64795 17.539 2.9247 18.289 3.44888 18.8526C3.97305 19.4163 4.70103 19.7466 5.47038 19.77L18.3304 19.91C19.0997 19.8866 19.8277 19.5563 20.3519 18.9926C20.876 18.429 21.1528 17.679 21.1204 16.91V13.1C21.1528 12.331 20.876 11.581 20.3519 11.0174C19.8277 10.4537 19.0997 10.1234 18.3304 10.1H17.1204C16.6565 10.1 16.2804 9.72392 16.2804 9.26C16.2804 8.79608 16.6565 8.42 17.1204 8.42Z"/>
                </svg>
                <span>Save</span>
              </button>
              <button class="calcform__viewing">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62598 12.148C9.62598 10.6036 10.8183 9.35168 12.2891 9.35168C13.76 9.35168 14.9523 10.6036 14.9523 12.148C14.9523 13.6924 13.76 14.9443 12.2891 14.9443C10.8183 14.9443 9.62598 13.6924 9.62598 12.148ZM11.3628 12.148C11.3628 12.6852 11.7775 13.1206 12.2891 13.1206C12.8007 13.1206 13.2154 12.6852 13.2154 12.148C13.2154 11.6108 12.8007 11.1754 12.2891 11.1754C11.7775 11.1754 11.3628 11.6108 11.3628 12.148Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7425 7.00519L22.5825 11.0659C22.8955 11.329 23.0776 11.7271 23.0776 12.148C23.0776 12.5689 22.8955 12.967 22.5825 13.23L17.7425 17.2908C14.5525 19.9643 10.0251 19.9643 6.83513 17.2908L1.99513 13.23C1.68217 12.967 1.5 12.5689 1.5 12.148C1.5 11.7271 1.68217 11.329 1.99513 11.0659L6.83513 7.00519C10.0251 4.3316 14.5525 4.3316 17.7425 7.00519ZM7.91197 15.9291C10.4737 18.0699 14.1039 18.0699 16.6657 15.9291L21.0888 12.148L16.6657 8.42766C14.1039 6.28685 10.4737 6.28685 7.91197 8.42766L3.48881 12.148L7.91197 15.9291Z"/>
                </svg>
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-12">
          <div class="calcform__calcing calcing">
            <h3 class="calcing__title">Calculator</h3>
            <div class="calcing__settings">
              <div class="calcing__head">
                <div class="calcing__name">Rooms (<span>4</span>)</div>
                <button class="calcing__type">
                  <span>Flats</span>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 17.2498C11.8008 17.2508 11.6097 17.1715 11.4698 17.0298L3.46985 9.02985C3.19449 8.73434 3.20261 8.27384 3.48823 7.98823C3.77384 7.70261 4.23434 7.69449 4.52985 7.96985L11.9998 15.4398L19.4698 7.96985C19.7654 7.69449 20.2259 7.70261 20.5115 7.98823C20.7971 8.27384 20.8052 8.73434 20.5298 9.02985L12.5298 17.0298C12.39 17.1715 12.1989 17.2508 11.9998 17.2498Z"/>
                  </svg>
                </button>
              </div>
              <div class="calcing__boxs box">
                <button class="calcing__nav prev">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8806 2.70015C11.7373 2.69947 11.5997 2.75657 11.499 2.85855L5.73898 8.61855C5.52841 8.82938 5.52841 9.17092 5.73898 9.38175L11.499 15.1418C11.7117 15.34 12.0433 15.3342 12.2489 15.1285C12.4546 14.9229 12.4604 14.5913 12.2622 14.3786L6.88378 9.00015L12.2622 3.62175C12.4727 3.41092 12.4727 3.06938 12.2622 2.85855C12.1615 2.75657 12.0239 2.69947 11.8806 2.70015Z"/>
                  </svg>
                </button>
                <swiper
                  :modules="modules"
                  :slidesPerView= "3"
                  :space-between="20"
                  :navigation="{
                    nextEl: '.next',
                    prevEl: '.prev',
                  }"
                  :breakpoints="{
                    '1025': {
                      spaceBetween: 20,
                      slidesPerView: 3
                    },
                    '769': {
                      spaceBetween: 16,
                      slidesPerView: 4
                    },
                    '320': {
                      spaceBetween: 16,
                      slidesPerView: 2
                    },
                  }"
                  class="row">
                  <swiper-slide>
                    <div class="box__item">
                      <div class="box__name">Living room</div>
                      <div class="box__area"><span>15</span> m<sup>2</sup></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="box__item">
                      <div class="box__name">Living room</div>
                      <div class="box__area"><span>15</span> m<sup>2</sup></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="box__item box__add">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                      </svg>
                      <div class="box__name">Add room</div>
                    </div>
                  </swiper-slide>
                </swiper>
                <button class="calcing__nav next">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.1204 15.2999C6.26372 15.3005 6.40128 15.2434 6.502 15.1414L12.262 9.38145C12.4726 9.17062 12.4726 8.82908 12.262 8.61825L6.502 2.85825C6.28923 2.65999 5.95767 2.66584 5.75203 2.87148C5.54639 3.07712 5.54054 3.40868 5.7388 3.62145L11.1172 8.99985L5.7388 14.3782C5.52823 14.5891 5.52823 14.9306 5.7388 15.1414C5.83951 15.2434 5.97707 15.3005 6.1204 15.2999Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="calcing__settings">
              <div class="calcing__head">
                <div class="calcing__name">Furniture (<span>4</span>)</div>
                <button class="calcing__type">
                  <span>Modern</span>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 17.2498C11.8008 17.2508 11.6097 17.1715 11.4698 17.0298L3.46985 9.02985C3.19449 8.73434 3.20261 8.27384 3.48823 7.98823C3.77384 7.70261 4.23434 7.69449 4.52985 7.96985L11.9998 15.4398L19.4698 7.96985C19.7654 7.69449 20.2259 7.70261 20.5115 7.98823C20.7971 8.27384 20.8052 8.73434 20.5298 9.02985L12.5298 17.0298C12.39 17.1715 12.1989 17.2508 11.9998 17.2498Z"/>
                  </svg>
                </button>
              </div>
              <div class="calcing__boxs box">
                <button class="calcing__nav __prev">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8806 2.70015C11.7373 2.69947 11.5997 2.75657 11.499 2.85855L5.73898 8.61855C5.52841 8.82938 5.52841 9.17092 5.73898 9.38175L11.499 15.1418C11.7117 15.34 12.0433 15.3342 12.2489 15.1285C12.4546 14.9229 12.4604 14.5913 12.2622 14.3786L6.88378 9.00015L12.2622 3.62175C12.4727 3.41092 12.4727 3.06938 12.2622 2.85855C12.1615 2.75657 12.0239 2.69947 11.8806 2.70015Z"/>
                  </svg>
                </button>
                <swiper 
                  :modules="modules"
                  :slidesPerView= "3"
                  :space-between="20"
                  :navigation="{
                    nextEl: '.__next',
                    prevEl: '.__prev',
                  }"
                  :breakpoints="{
                    '1025': {
                      spaceBetween: 20,
                      slidesPerView: 3
                    },
                    '769': {
                      spaceBetween: 16,
                      slidesPerView: 4
                    },
                    '320': {
                      spaceBetween: 16,
                      slidesPerView: 2
                    },
                  }"
                  class="row">
                  <swiper-slide>
                    <div class="box__item rowed">
                      <img src="@/assets/img/icons/furniture/tv.svg" alt="">
                      <div class="box__area">TV</div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="box__item rowed">
                      <img src="@/assets/img/icons/furniture/tv.svg" alt="">
                      <div class="box__area">Closet</div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="box__item rowed">
                      <img src="@/assets/img/icons/furniture/tv.svg" alt="">
                      <div class="box__area">Bed</div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="box__item box__add">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.25 11H13V3.75C13 3.33579 12.6642 3 12.25 3C11.8358 3 11.5 3.33579 11.5 3.75V11H4.25C3.83579 11 3.5 11.3358 3.5 11.75C3.5 12.1642 3.83579 12.5 4.25 12.5H11.5V19.75C11.5 20.1642 11.8358 20.5 12.25 20.5C12.6642 20.5 13 20.1642 13 19.75V12.5H20.25C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11Z"/>
                      </svg>
                      <div class="box__name">Add room</div>
                    </div>
                  </swiper-slide>
                </swiper>
                <button class="calcing__nav __next">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.1204 15.2999C6.26372 15.3005 6.40128 15.2434 6.502 15.1414L12.262 9.38145C12.4726 9.17062 12.4726 8.82908 12.262 8.61825L6.502 2.85825C6.28923 2.65999 5.95767 2.66584 5.75203 2.87148C5.54639 3.07712 5.54054 3.40868 5.7388 3.62145L11.1172 8.99985L5.7388 14.3782C5.52823 14.5891 5.52823 14.9306 5.7388 15.1414C5.83951 15.2434 5.97707 15.3005 6.1204 15.2999Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="calcform__total cost">
            <div class="cost__title">Total cost</div>
            <div class="cost__view">
              <button class="cost__price calcform__save">
                <span>2000 $</span>
              </button>
              <button class="cost__review calcform__viewing">
                <span>Discuss Price</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
  // import 'swiper/scss/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>

<style lang="scss">
@import "@/style/components/calculator/calculator.scss";
</style>
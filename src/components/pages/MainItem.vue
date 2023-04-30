<script>
export default {
  data() {
    return {
      slide: document.getElementsByClassName("slide")
    }
  },
  methods: {
    scrolling(){
      let rect = this.slide[0].getBoundingClientRect()
      console.log(rect.top);
      window.scrollTo(0,1020)
    }
  },

}
</script>


<template>
  <section class="main__section">
    <div class="main__star-1">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0L28.5355 21.4645L50 25L28.5355 28.5355L25 50L21.4645 28.5355L0 25L21.4645 21.4645L25 0Z" fill="#FFB800"/>
      </svg>
    </div>
    <div class="main__star-2">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0L28.5355 21.4645L50 25L28.5355 28.5355L25 50L21.4645 28.5355L0 25L21.4645 21.4645L25 0Z" fill="#FFB800"/>
      </svg>
    </div>
    <div class="main__star-3">
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0L28.5355 21.4645L50 25L28.5355 28.5355L25 50L21.4645 28.5355L0 25L21.4645 21.4645L25 0Z" fill="#FFB800"/>
      </svg>
    </div>
    <div class="container">
      <div class="main__body">
        <div class="main__main-section">
          <h1 class="main__title"> Interior Design studio</h1>
          <div class="main__subtitle">Provides Construction and Consulting services to clients who value the highest levels of quality and services for their commercial.</div>
          <button class="main__btn">View projects<span></span></button>
        </div>
      </div>
      <div class="main__images-1 images-1">
        <div class="images-1__left">
          <div class="images-1__on">
            <img src="@/assets/img/images/main1.png" alt="">
            <img src="@/assets/img/images/main2.png" alt="">
          </div>
          <button class="images-1__arrow">
            <svg width="81" height="10" viewBox="0 0 81 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.4243 5.42426C80.6586 5.18995 80.6586 4.81005 80.4243 4.57574L76.6059 0.757359C76.3716 0.523045 75.9917 0.523045 75.7574 0.757359C75.523 0.991674 75.523 1.37157 75.7574 1.60589L79.1515 5L75.7574 8.39411C75.523 8.62843 75.523 9.00833 75.7574 9.24264C75.9917 9.47696 76.3716 9.47696 76.6059 9.24264L80.4243 5.42426ZM0 5.6H80V4.4H0L0 5.6Z"/>
            </svg>
          </button>
        </div>
        <div class="images-1__right">
          <img src="@/assets/img/images/main3.png" alt="">
          <span></span>
        </div>
      </div>
      <button class="main__scroll scroll" @click="scrolling">
        <span class="scroll__text">Scroll</span>
        <div class="scroll__arrows">
          <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99998 6.66666C6.84799 6.66732 6.70211 6.61156 6.59531 6.51197L0.487007 0.886863C0.27676 0.679079 0.282964 0.355284 0.50104 0.154459C0.719115 -0.046366 1.07072 -0.052079 1.29636 0.141536L6.99998 5.39398L12.7036 0.141536C12.9292 -0.052079 13.2808 -0.046366 13.4989 0.154459C13.717 0.355284 13.7232 0.679079 13.513 0.886863L7.40466 6.51197C7.29785 6.61156 7.15198 6.66732 6.99998 6.66666Z"/>
          </svg>
          <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99998 6.66666C6.84799 6.66732 6.70211 6.61156 6.59531 6.51197L0.487007 0.886863C0.27676 0.679079 0.282964 0.355284 0.50104 0.154459C0.719115 -0.046366 1.07072 -0.052079 1.29636 0.141536L6.99998 5.39398L12.7036 0.141536C12.9292 -0.052079 13.2808 -0.046366 13.4989 0.154459C13.717 0.355284 13.7232 0.679079 13.513 0.886863L7.40466 6.51197C7.29785 6.61156 7.15198 6.66732 6.99998 6.66666Z"/>
          </svg>
        </div>
      </button>
    </div>
  </section>
</template>


<style>

</style>
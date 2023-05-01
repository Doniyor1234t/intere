<script>
import TeamItem from '../components/pages/about/TeamItem.vue';
import BlogsItem from '../components/pages/BlogsItem.vue';
import CalculationItem from '../components/pages/CalculationItem.vue';

export default {
    components: { TeamItem, BlogsItem, CalculationItem },
  data() {
    return {
      experiences:[
        {
          id: 1,
          name: 'Bright modern project of a country house',
          img: "experience/experience1.png",
          type:1
        },
        {
          id: 2,
          name: 'Bright modern project of a country house',
          img: "experience/experience3.png",
          type:4
        },
        {
          id: 3,
          name: 'Bright modern project of a country house',
          img: "experience/experience5.png",
          type:2
        },
        {
          id: 4,
          name: 'Bright modern project of a country house',
          img: "experience/experience7.png",
          type:3
        },
        {
          id: 5,
          name: 'Bright modern project of a country house',
          img: "experience/experience2.png",
          type:2
        },
        {
          id: 6,
          name: 'Bright modern project of a country house',
          img: "experience/experience4.png",
          type:5
        },
        {
          id: 7,
          name: 'Bright modern project of a country house',
          img: "experience/experience6.png",
          type:3
        },
        {
          id: 8,
          name: 'Bright modern project of a country house',
          img: "experience/experience8.png",
          type:1
        },
        {
          id: 9,
          name: 'Bright modern project of a country house',
          img: "experience/experience9.png",
          type:5
        },
      ]
    }
  },
  computed:{
    halfed(){
      return this.experiences.splice(0,Math.floor(this.experiences.length / 2))
    },
  }

}
</script>

<template>
  <div>
    <div class="experience">
      <div class="main__star-1">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 0L28.5355 21.4645L50 25L28.5355 28.5355L25 50L21.4645 28.5355L0 25L21.4645 21.4645L25 0Z" fill="#FFB800"></path>
        </svg>
      </div>
      <div class="container">
        <h1 class="experience__title">
          Our best works
        </h1>
        <div class="experience__types">
          <ul class="experience__list">
            <li><a href="#" class="experience__link active">All works</a></li>
            <li><a href="#" class="experience__link">Furniture</a></li>
            <li><a href="#" class="experience__link">House</a></li>
            <li><a href="#" class="experience__link">Flat</a></li>
            <li><a href="#" class="experience__link">Office</a></li>
            <li><a href="#" class="experience__link">Buildings</a></li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <TeamItem v-for="item in halfed" :key="item" :className="`lighted`" :member="item"/>
          </div>
          <div class="col-6">
            <TeamItem v-for="item in experiences" :key="item" :className="`lighted`" :member="item"/>
          </div>
        </div>
        <div class="experience__pagination pagination">
          <div class="pagination__body">
            <div class="pagination__direct">
              <button class="pagination__word">First</button>
              <button class="pagination__icon">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.875169 6.99992C0.874498 6.84792 0.931131 6.70205 1.03228 6.59524L6.74528 0.486946C6.95631 0.276699 7.28516 0.282903 7.48912 0.500979C7.69309 0.719054 7.69889 1.07066 7.50225 1.2963L2.16774 6.99992L7.50225 12.7035C7.69889 12.9292 7.69309 13.2808 7.48912 13.4989C7.28516 13.7169 6.95631 13.7231 6.74528 13.5129L1.03228 7.40459C0.931131 7.29779 0.874498 7.15191 0.875169 6.99992Z"/>
                  <path d="M10.3542 6.99992C10.3535 6.84792 10.4101 6.70205 10.5113 6.59524L16.2243 0.486946C16.4353 0.276699 16.7642 0.282903 16.9681 0.500979C17.1721 0.719054 17.1779 1.07066 16.9813 1.2963L11.6467 6.99992L16.9813 12.7035C17.1779 12.9292 17.1721 13.2808 16.9681 13.4989C16.7642 13.7169 16.4353 13.7231 16.2243 13.5129L10.5113 7.40459C10.4101 7.29779 10.3535 7.15191 10.3542 6.99992Z"/>
                </svg>
              </button>
            </div>
            <div class="pagination__numbers">
              <button class="pagination__pageNum">1</button>
              <button class="pagination__pageNum">2</button>
              <button class="pagination__pageNum">3</button>
              <button class="pagination__pageNum">4</button>
            </div>
            <div class="pagination__direct">
              <button class="pagination__icon">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1248 7.00008C17.1255 7.15208 17.0689 7.29795 16.9677 7.40476L11.2547 13.5131C11.0437 13.7233 10.7148 13.7171 10.5109 13.499C10.3069 13.2809 10.3011 12.9293 10.4978 12.7037L15.8323 7.00008L10.4978 1.29646C10.3011 1.07083 10.3069 0.719216 10.5109 0.501142C10.7148 0.283066 11.0437 0.276863 11.2547 0.487109L16.9677 6.59541C17.0689 6.70221 17.1255 6.84809 17.1248 7.00008Z"/>
                  <path d="M7.64583 7.00008C7.6465 7.15208 7.58987 7.29795 7.48872 7.40476L1.77572 13.5131C1.56469 13.7233 1.23583 13.7171 1.03187 13.499C0.82791 13.2809 0.822107 12.9293 1.01875 12.7037L6.35326 7.00008L1.01875 1.29646C0.822107 1.07083 0.82791 0.719216 1.03187 0.501142C1.23584 0.283066 1.56469 0.276863 1.77572 0.487109L7.48872 6.59541C7.58987 6.70221 7.6465 6.84809 7.64583 7.00008Z"/>
                </svg>
              </button>
              <button class="pagination__word">Last</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CalculationItem />
    <BlogsItem />
  </div>
</template>

<style lang="scss">
@import "@/style/components/experience/experience.scss";
@import "@/style/components/about/about.scss";
</style>
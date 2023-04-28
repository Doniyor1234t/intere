<template>
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
    </div>
  </div>
</template>

<script>
import TeamItem from '@/components/pages/about/TeamItem.vue';
import BlogsItem from '../components/pages/BlogsItem.vue';

export default {
    components: { TeamItem, BlogsItem },
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

<style lang="scss">
@import "@/style/components/experience/experience.scss";
@import "@/style/components/about/about.scss";
</style>
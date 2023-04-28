<template>
  <div class="about">
    <div class="main__star-1">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0L28.5355 21.4645L50 25L28.5355 28.5355L25 50L21.4645 28.5355L0 25L21.4645 21.4645L25 0Z" fill="#FFB800"></path>
      </svg>
    </div>
    <div class="container">
      <div class="about__top">
        <h1 class="about__title">
          About us
        </h1>
        <div class="about__text">
          <p>Studio INTERE IS A TEAM OF CREATIVE THINKERS. WITH A DEEP AND VARIED SET OF SKILLS, EACH ONE OF US BRINGS A UNIQUE PERSPECTIVE TO OUR WORK.
We believe that Great Design makes a difference.
From the biggest gestures to the smallest of details – it is all important.
We believe in the Big Picture.
Our design is always aligned with your goals.
We believe in building a relationship with you that doesn’t end when your project is complete. Trust is everything.</p>
          <p>In our studio—creativity knows no boundaries, and it never looks the same.
We are masters at translating our clients’ brand into meaningful, impactful and distinct interior spaces.
We take the time to fully understand culture, values and goals—creating highly functional environments that truly reflect your business.</p>
          <p>Each interior design we carefully create, investing their experience and knowledge, endowing the space with the personality of the owner. Like a flower your interior is transformed, revealing all the attractiveness and coziness.</p>
        </div>
      </div>
      <div class="about__members">
        <h2 class="about__title">About our team</h2>
        <div class="row">
          <TeamItem v-for="item in members" :key="item" :className="`col-4 col-sm-6`" :member="item"/>
        </div>
      </div>
      <BlogsItem />
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
        members:[
          {
            id:1,
            name:"Jack Paul",
            job:"Founder and CEO",
            img:"team/member1.png"
          },
          {
            id:2,
            name:"Jack Paul",
            job:"Art director",
            img:"team/member2.png"
          },
          {
            id:3,
            name:"Jack Paul",
            job:"Designer",
            img:"team/member3.png"
          },
          {
            id:4,
            name:"Jack Paul",
            job:"Executive Director",
            img:"team/member4.png"
          },
          {
            id:5,
            name:"Jack Paul",
            job:"Architect Designer",
            img:"team/member5.png"
          },
        ]
      }
    },
}
</script>

<style lang="scss">
@import "@/style/components/about/about.scss";
</style>
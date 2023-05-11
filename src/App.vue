
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => {
    console.log(t);
    Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from '@/components/lib/FooterItem.vue';
export default  {
  components : {HeaderItem,FooterItem},
  data() {
    return {
      dark:false
    }
  },
  methods: {
    darking(v){
      this.dark = v
      console.log(v);
    },
    lighting(v){
      this.dark = v
      console.log(v);
    }
  },
}
</script>

<template>
    <div class="wrapper" :style="`--dark:${dark?'#FFFCF2':'#222222'}; --light: ${dark?'#222222':'#FFFCF2'};`">
      <HeaderItem @darked="darking" @lighted="lighting"/>
      <main class="main">
        <router-view />
      </main>
      <footerItem />
    </div>
</template>

<style lang="scss">
@import '@/style/app.scss';
</style>

<script>
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
  <div id="app">
    <div class="wrapper" :style="`--dark:${dark?'#FFFCF2':'#222222'}; --light: ${dark?'#222222':'#FFFCF2'};`">
      <HeaderItem @darked="darking" @lighted="lighting"/>
      <main class="main">
        <router-view />
      </main>
      <footerItem />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/style/app.scss';
</style>
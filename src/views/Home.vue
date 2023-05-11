
<script>
import MainItem from "@/components/pages/MainItem.vue";
import SliderItem from "@/components/pages/SliderItem.vue";
import ServicesItem from "@/components/pages/ServicesItem.vue";
import WorksItem from "@/components/pages/WorksItem.vue";
import AdvantagesItem from "@/components/pages/AdvantagesItem.vue";
import ConectionItem from "@/components/pages/ConectionItem.vue";
import ProcessItem from "@/components/pages/ProcessItem.vue";
import CalculationItem from "@/components/pages/CalculationItem.vue";
import FaqsItem from "@/components/pages/FaqsItem.vue";
import BlogsItem from "@/components/pages/BlogsItem.vue";
export default {
  components:{
    MainItem,
    SliderItem,
    ServicesItem,
    WorksItem,
    AdvantagesItem,
    ConectionItem,
    ProcessItem,
    CalculationItem,
    FaqsItem,
    BlogsItem
},
  data() {
    return {
      services: [
        {
          img: 'services/icon1.svg',
          title: "Architectural design",
          text: 'You will receive guarantees of proper quality and on-time performance'
        },
        {
          img: 'services/icon2.svg',
          title: "Houses",
          text: 'You will receive guarantees of proper quality and on-time performance'
        },
        {
          img: 'services/icon3.svg',
          title: "Office premises",
          text: 'You will receive guarantees of proper quality and on-time performance'
        },
        {
          img: 'services/icon4.svg',
          title: "Furniture",
          text: 'You will receive guarantees of proper quality and on-time performance'
        },
        {
          img: 'services/icon5.svg',
          title: "Flats",
          text: 'You will receive guarantees of proper quality and on-time performance'
        },
        {
          img: 'services/icon6.svg',
          title: "Office premises",
          text: 'You will receive guarantees of proper quality and on-time performance'
        }
      ]
    }
  },
}
</script>

<template>
    <MainItem />
    <SliderItem />
    <ServicesItem  :array="services"/>
    <WorksItem />
    <AdvantagesItem />
    <ConectionItem />
    <ProcessItem />
    <CalculationItem />
    <FaqsItem />
    <BlogsItem />
</template>

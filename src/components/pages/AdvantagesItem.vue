<template>
  <div class="advantages">
    <services-item :array="advantages" />
    <div class="container">
      <button class="advantages__btn">Get Advice<span></span></button>
    </div>
  </div>
</template>

<script>
import ServicesItem from "./ServicesItem.vue";
export default {
  components:{
    ServicesItem
  },
  data() {
    return {
      advantages: [
        {
          img:"advantages/img1.svg",
          title:"Work under the contract",
          text:"You will receive guarantees of proper quality and on-time performance"
        },
        {
          img:"advantages/img2.svg",
          title:"Stage-by-stage payment",
          text:"You have the opportunity to pay for the work in stages"
        },
        {
          img:"advantages/img3.svg",
          title:"Free Consultation",
          text:"Free online consultation in Skype or Zoom until the end of the questions"
        },
        {
          img:"advantages/img4.svg",
          title:"Author supervision",
          text:"Confidence in the strict compliance of work performed in accordance with the decisions of the design project"
        },
        {
          img:"advantages/img5.svg",
          title:"Multiple design options",
          text:"The designer will prepare for you several options for room layout and subsequent design"
        },
        {
          img:"advantages/img6.svg",
          title:"A team of professionals",
          text:"We employ only qualified professionals designers and architects, with experience over 5 years"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.advantages{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__btn{
    margin-top: 60px;
    @media (max-width:768px) {
      margin-top: calc(((60 - 40)*(100vw - 320px))/(768 - 320) + 40px);
    }
  }
}
</style>
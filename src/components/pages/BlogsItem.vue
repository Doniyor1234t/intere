<template>
  <div class="blog">
    <div class="container">
      <h2 class="blog__title">Blog</h2>
      <div class="row">
        <div class="col-4 col-sm-12" v-for="i of blog" :key="i">
          <div class="blog__item">
            <div class="blog__img">
              <img :src="`/src/assets/img/blog/${i.img}`" alt="">
            </div>
            <div class="blog__name">{{ i.name }}</div>
            <div class="blog__text">{{ i.text }}</div>
            <button class="blog__about">
              <span class="blog__link">Read More</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99993 20.7498C8.19899 20.7508 8.39004 20.6715 8.52993 20.5298L16.5299 12.5298C16.8224 12.237 16.8224 11.7627 16.5299 11.4698L8.52993 3.46985C8.23442 3.19449 7.77392 3.20261 7.48831 3.48823C7.20269 3.77384 7.19457 4.23434 7.46993 4.52985L14.9399 11.9998L7.46993 19.4698C7.17747 19.7627 7.17747 20.237 7.46993 20.5298C7.60981 20.6715 7.80086 20.7508 7.99993 20.7498Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button class="blog__btn">Show more <span></span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: [
        {
          id: 1,
          img: 'blog1.png',
          name:"D For Design Film & Furniture",
          text: "Ever been watching a movie and love the decor of  wanted to know how to recreate it in your own home. Well you need Film & Furniture in your..."
        },
        {
          id: 2,
          img: 'blog2.png',
          name:"Brick wall in the interior: brutal accent",
          text: "The popular brick wall in apartment interiors is a tribute to industrial fashion and a graceful accent from the world of New York manufactures..."
        },
        {
          id: 3,
          img: 'blog3.png',
          name:"My Warehouse Home Soonafternoon",
          text: "There are not many people I know that truly understand colour as well as Leslie. And she has built a thriving design practise off the back..."
        },
      ]
    }
  },

}
</script>

<style>

</style>
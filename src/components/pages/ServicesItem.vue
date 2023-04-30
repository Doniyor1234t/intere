<script>
export default {
  props:['array'],
}
</script>
<template>
  <div class="services">
    <div class="container">
      <div class="services__body">
        <h2 class="services__title">Our Services</h2>
        <div class="services__content">
          <div v-for="(item, i) in array" :key="i" class="services__item">
            <div class="services__img">
              <img src="@/assets/img/icons/advantages/img1.svg" alt="">
            </div>
            <div class="services__name">{{ item.title }}</div>
            <div class="services__text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

</style>
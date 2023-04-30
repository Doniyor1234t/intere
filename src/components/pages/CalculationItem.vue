<script>
export default {
  data() {
    return {
      toggle:false
    }
  },
}
</script>


<template>
  <div class="calculation">
    <div class="calc">
      <div class="calc__1">÷</div>
      <div class="calc__2">+</div>
      <div class="calc__3">-</div>
      <div class="calc__4">=</div>
      <div class="calc__5">×</div>
    </div>
    <div class="container">
      <h3 class="calculation__title">Calculate the cost</h3>
      <div class="calculation__block">
        <div class="calculation__text">You can calculate the cost of the design project with the online calculator</div>
        <div class="calculation__select">
          <button class="calculation__input" @click="toggle = !toggle">
            <span  class="design">Design of house</span>
            <img src="@/assets/img/icons/arrow.svg" alt="Arrow">
          </button>
          <ul :class="`calculation__list ${toggle?'active':''}`">
            <li class="calculation__item">Design</li>
            <li class="calculation__item">Design</li>
            <li class="calculation__item">Design</li>
            <li class="calculation__item">Design</li>
          </ul>
        </div>
        <button type="submit" class="calculation__btn __dark-mode">Leave a request <span></span></button>
      </div>
    </div>
  </div>
</template>


<style>

</style>
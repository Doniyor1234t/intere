<script>
export default {
  data() {
    return {
      title:true
    }
  },
}
</script>
<template>
  <div class="project">
    <h3 class="project__title">Let's talk about your project</h3>
    <div class="project__block">
      <div class="project__image">
        <img src="@/assets/img/images/Img.png" alt="Project">
      </div>
      <div class="project__column">
        <div class="container">
          <div class="project__body">
            <div class="project__text">Leave a request and we <pre></pre> will contact you shortly</div>
            <form action="" class="project__form">
              <div class="project__input">
                <input type="text" placeholder="Name">
                <input type="number" placeholder="Phone">
              </div>
              <button class="project__btn __dark-mode">Leave a request<span></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

</style>
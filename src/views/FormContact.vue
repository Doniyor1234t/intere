<template>
  <div class="form">
    <div class="container">
      <div class="form__head">
        <h1 class="form__title">Contact us</h1>
        <div class="form__subtitle">Any question or remarks? Just write us a message!</div>
      </div>
      <div class="row">
        <div class="col-6 col-lg-12">
          <form action="" class="form__form">
            <div class="form__content">
              <div class="form__input">
                <input tabindex="1" id="name" type="text" name="name">
                <label for="name">First name</label>
              </div>
              <div class="form__input">
                <input tabindex="2" id="lastN" type="text">
                <label for="lastN">Last name</label>
              </div>
              <div class="form__input">
                <input tabindex="3" id="email" type="e-mail">
                <label for="mail">Mail</label>
              </div>
              <div class="form__input">
                <input tabindex="4" id="phone" type="text">
                <label for="phone">Phone</label>
              </div>
              <div class="form__input">
                <input tabindex="5" type="text" id="message" placeholder="Write your message...">
                <label for="message">Message</label>
              </div>
            </div>
            <button class="form__btn" type="submit">
              Send message
              <span></span>
            </button>
          </form>
        </div>
        <div class="col-6">
          <div class="form__image">
            <img src="@/assets/img/form/form.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="form__contact">
      <div class="form__info infoContact">
        <h3 class="infoContact__title">Contact information</h3>
        <div class="infoContact__contacts">
          <a href="mailto:orinbaev1910@mail.ru" class="infoContact__link">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2812 4H6.09375C3.85009 4 2.03125 5.79086 2.03125 8V17C2.03125 19.2091 3.85009 21 6.09375 21H18.2812C20.5249 21 22.3438 19.2091 22.3438 17V8C22.3438 5.79086 20.5249 4 18.2812 4ZM6.09375 5.59H18.2812C19.3636 5.59204 20.315 6.29663 20.6172 7.32L12.9594 12.91C12.7495 13.112 12.4649 13.221 12.1716 13.2115C11.8782 13.2021 11.6015 13.0751 11.4055 12.86L3.77813 7.33C4.07444 6.30973 5.01607 5.60216 6.09375 5.59ZM3.64609 17C3.64609 18.331 4.74195 19.41 6.09375 19.41H18.2812C19.6291 19.4045 20.7188 18.3271 20.7188 17V8.97L13.8125 13.97C13.3711 14.3746 12.7905 14.5997 12.1875 14.6C11.5606 14.5902 10.9598 14.3514 10.5016 13.93L3.64609 8.93V17Z"/>
            </svg>
            <span>orinbaev1910@mail.ru</span>
          </a>
          <a href="tel:+998(90)022-36-64" class="infoContact__link">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2648 17.2124L21.2648 17.2124C21.6527 17.5943 21.7039 18.3218 21.2452 18.8543L19.3413 20.7288L19.8675 21.2633L19.3413 20.7289C19.0145 21.0506 18.5119 21.2487 17.7829 21.25C17.0487 21.2513 16.1385 21.0502 15.0993 20.6302C13.0234 19.7914 10.5729 18.1364 8.24514 15.8445C5.91956 13.5547 4.26525 11.1444 3.42667 9.10375C3.00686 8.08218 2.80545 7.1872 2.80276 6.4657C2.80011 5.75305 2.9888 5.26233 3.29204 4.94423L5.208 3.05775C5.60274 2.66908 6.36085 2.61955 6.90863 3.07706L9.72369 5.8488C10.3488 6.46429 10.0707 7.46039 9.32376 7.6867L9.31554 7.68919L9.30737 7.69187C8.08685 8.0924 7.16902 9.45108 7.60499 10.8047C7.91298 12.037 8.82693 13.3146 9.8663 14.325C10.9159 15.3453 12.2193 16.2157 13.4115 16.5091L13.4209 16.5114L13.4304 16.5135C14.6714 16.7851 16.0884 16.1248 16.5284 14.8252L16.5312 14.8168L16.5338 14.8084C16.7582 14.0904 17.7857 13.7868 18.4302 14.4213L21.2648 17.2124Z" stroke-width="1.5"/>
            </svg>
            <span>+998(90)022-36-64</span>
          </a>
          <a href="#" class="infoContact__link">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0828 15.4849C16.7122 15.3016 16.2608 15.4438 16.0672 15.8049C15.8883 16.1728 16.0362 16.6142 16.4023 16.8049C17.2961 17.2549 17.8039 17.8049 17.8039 18.3349C17.8039 19.4649 15.407 20.7249 12.1977 20.7249C8.98828 20.7249 6.58125 19.4749 6.58125 18.3749C6.58125 17.8549 7.08906 17.2949 7.98281 16.8449C8.25084 16.7391 8.43505 16.4932 8.45853 16.2098C8.48201 15.9264 8.34072 15.6543 8.09366 15.5071C7.84659 15.3599 7.53624 15.363 7.29219 15.5149C6.05911 15.9725 5.19947 17.083 5.07812 18.3749C5.07812 20.5949 8.125 22.2649 12.1875 22.2649C16.25 22.2649 19.2969 20.5949 19.2969 18.3749C19.1867 17.0718 18.3252 15.9472 17.0828 15.4849V15.4849Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4258 18.815V14.495C8.0812 14.0982 5.62911 11.2053 5.83095 7.89433C6.03279 4.58336 8.81873 2 12.1875 2C15.5562 2 18.3422 4.58336 18.544 7.89433C18.7458 11.2053 16.2938 14.0982 12.9492 14.495V18.815C12.9492 19.2292 12.6082 19.565 12.1875 19.565C11.7668 19.565 11.4258 19.2292 11.4258 18.815ZM16.6808 6.44113C15.9268 4.65406 14.1529 3.49094 12.1875 3.49498C9.51423 3.50048 7.34853 5.63287 7.34295 8.26498C7.33884 10.2001 8.52014 11.9468 10.3351 12.6892C12.1501 13.4316 14.2407 13.0233 15.6304 11.6549C17.0201 10.2866 17.4348 8.2282 16.6808 6.44113Z"/>
              <path d="M9.74025 9.37492C10.1609 9.37492 10.502 9.03914 10.502 8.62492C10.502 7.47617 11.4478 6.54492 12.6145 6.54492C13.0352 6.54492 13.3762 6.20914 13.3762 5.79492C13.3762 5.38071 13.0352 5.04492 12.6145 5.04492C11.6475 5.04757 10.7211 5.42834 10.0393 6.10348C9.35739 6.77861 8.97583 7.69279 8.97853 8.64492C8.98121 8.84119 9.06297 9.02837 9.20582 9.16527C9.34867 9.30218 9.54092 9.37759 9.74025 9.37492V9.37492Z"/>
            </svg>
            <span>Tashkent, 28 A. Temur Street  </span>
          </a>
        </div>
      </div>
      <div class="form__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d911.9013344688221!2d69.57237376740379!3d41.46714389296833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1683735574014!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/style/components/form/form.scss";
</style>
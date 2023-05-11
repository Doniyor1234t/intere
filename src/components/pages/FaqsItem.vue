<script>
export default {
  data() {
    return {
      faqs: [
        {
          id: 1,
          title: 'What are the 7 elements of design?',
          answer: "Studio INTERE designs are warm, deliberate, and collected, with a hint of history and a nod to the future. A property designed by Studio INTERE targets all of the desired touchpoints while elevating the entire experience of the space. Studio INTERE designs celebrate culture, travel, innovation, and excitement, while making the interior design experience simple and specifically tailored to meet the client's wishes. Clients return time and time again for consistent and always uniquely tailored designs to each project, and to a process which is detailed, effective, and purposefully exceeds expectations."
        },
        {
          id: 2,
          title: 'What are design?',
          answer: "Studio INTERE designs are warm, deliberate, and collected, with a hint of history and a nod to the future. A property designed by Studio INTERE targets all of the desired touchpoints while elevating the entire experience of the space. Studio INTERE designs celebrate culture, travel, innovation, and excitement, while making the interior design experience simple and specifically tailored to meet the client's wishes. Clients return time and time again for consistent and always uniquely tailored designs to each project, and to a process which is detailed, effective, and purposefully exceeds expectations."
        },
        {
          id: 3,
          title: 'What are the of interior design?',
          answer: "Studio INTERE designs are warm, deliberate, and collected, with a hint of history and a nod to the future. A property designed by Studio INTERE targets all of the desired touchpoints while elevating the entire experience of the space. Studio INTERE designs celebrate culture, travel, innovation, and excitement, while making the interior design experience simple and specifically tailored to meet the client's wishes. Clients return time and time again for consistent and always uniquely tailored designs to each project, and to a process which is detailed, effective, and purposefully exceeds expectations."
        },
        {
          id: 4,
          title: 'What is the golden ratio in interior design?',
          answer: "Studio INTERE designs are warm, deliberate, and collected, with a hint of history and a nod to the future. A property designed by Studio INTERE targets all of the desired touchpoints while elevating the entire experience of the space. Studio INTERE designs celebrate culture, travel, innovation, and excitement, while making the interior design experience simple and specifically tailored to meet the client's wishes. Clients return time and time again for consistent and always uniquely tailored designs to each project, and to a process which is detailed, effective, and purposefully exceeds expectations."
        },
        {
          id: 5,
          title: 'What is monochromatic?',
          answer: "Studio INTERE designs are warm, deliberate, and collected, with a hint of history and a nod to the future. A property designed by Studio INTERE targets all of the desired touchpoints while elevating the entire experience of the space. Studio INTERE designs celebrate culture, travel, innovation, and excitement, while making the interior design experience simple and specifically tailored to meet the client's wishes. Clients return time and time again for consistent and always uniquely tailored designs to each project, and to a process which is detailed, effective, and purposefully exceeds expectations."
        },
      ]
    }
  },
  methods: {
    clicked(){
      for(let i = 0; i < document.getElementsByClassName("faqs__block").length ; i++){
        if(document.getElementsByClassName("faqs__block")[i].classList.contains("active")){
        }
        document.getElementsByClassName("faqs__block")[i].classList.remove("acitve")
        event.target.closest(".faqs__block").classList.toggle("active")
      }
    }
  },
  mounted() {
  },
}
</script>

<template>
  <div class="faqs">
    <div class="container">
      <div class="row">
        <h2 class="faqs__title">FAQ's</h2>
        <div class="faqs__body" >
          <div class="faqs__block" v-for="item in faqs" :key="item" @click="clicked()">
            <button class="faqs__question" >
              <div class="faqs__name">{{item.title}}</div>
              <div class="faqs__plus"> 
                <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.81254 10.2498C9.61037 10.2508 9.41633 10.1715 9.27426 10.0298L1.14926 2.02985C0.8696 1.73434 0.877852 1.27384 1.16793 0.988225C1.458 0.702613 1.9257 0.694488 2.22582 0.969847L9.81254 8.43985L17.3993 0.969847C17.6994 0.694488 18.1671 0.702613 18.4572 0.988225C18.7472 1.27384 18.7555 1.73434 18.4758 2.02985L10.3508 10.0298C10.2088 10.1715 10.0147 10.2508 9.81254 10.2498Z"/>
                </svg>
              </div>
            </button>
            <div class="faqs__answer"> 
              <p>{{item.answer}}</p>
            </div>
          </div>
        </div>
        <router-link to="/intere/form" class="faqs__btn">Ask a question <span></span></router-link>
      </div>
    </div>
  </div>
</template>


<style>

</style>
<template>
  <div :class="className">
    <div class="team__member">
      <div class="team__pic">
        <img :src="`src/assets/img/${member.img}`" alt="">
      </div>
      <div class="team__desc">
        <div class="team__name">{{ member.name }}</div>
        <div class="team__job" v-if="member.job">{{ member.job }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["className","member"]

}
</script>

<style>

</style>
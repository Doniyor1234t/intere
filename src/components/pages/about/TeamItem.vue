<script>
export default {
  props: ["className","member"]
}
</script>

<template>
  <div :class="className">
    <div class="team__member">
      <div class="team__pic">
        <img src="@/assets/img/team/member1.png" alt="">
      </div>
      <div class="team__desc">
        <div class="team__name">{{ member.name }}</div>
        <div class="team__job" v-if="member.job">{{ member.job }}</div>
      </div>
    </div>
  </div>
</template>

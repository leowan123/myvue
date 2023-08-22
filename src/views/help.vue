<template>
  <div class="user">
    助手
  </div>
</template>

<script>
// import Info from './components/Info'
// import Star from './components/Star'
// import Map from './components/Map'
import { userChallengeScore } from '@/api/user.js'
export default {
  name: 'User',
  components: {
    // Info,
    // Star,
    // Map
  },
  data() {
    return {
      starCount: {
        challengeResidueScore: 0,
        useScore: 0
      }
    }
  },
  mounted() {
    // this.getStarCount()
  },
  methods: {
    getStarCount() {
      userChallengeScore().then(res => {
        const { code, data } = res
        if (code === 200 && data) {
          this.starCount = data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  background: #fff;
}
</style>

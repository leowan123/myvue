<template>
  <div class="nav-compoment">
    <van-nav-bar
      class="nav"
      :title="title"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '请输入标题'
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" >
@import "@/styles/variables.scss";

// reset vant-nav-bar style
// .nav-compoment {
//   .van-nav-bar {
//     .van-icon {
//       color: $black;
//     }
//     .van-nav-bar__text {
//       color: $black;
//     }
//   }
// }
</style>

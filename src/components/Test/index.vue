<template>
  <div class="test">
    <div class="test-header">
      <p class="test-title">测一测</p>
    </div>

    <div class="test-content">
      <template v-if="!whether">
        <div class="text">
          <p>{{ title }}</p>
          <van-button class="text-btn" @click="handleClick">去测评</van-button>
          <i class="iconfont icon-next translate-y" />
        </div>
        <div class="test-img">
          <slot />
        </div>
      </template>
      <template v-else>
        <div class="text">
          <p>{{ title }}</p>
          <van-button class="text-btn" @click="handleClick">重新测评</van-button>
          <i class="iconfont icon-next translate-y" />
        </div>
        <p class="score">{{ score }} <span class="small">分</span> </p>
        <div class="test-img">
          <slot />
        </div>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    routerName: {
      type: String,
      required: true
    },
    whether: {
      type: Boolean,
      default: false
    },
    score: {
      type: Number
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'Questionnaire',
        query: {
          routerName: this.routerName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  padding: 0 16px;
  margin-top: 22px;
  .test-header {
    .test-title {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .test-content {
    width: 382px;
    height: 80px;
    margin-top: 8px;
    background: linear-gradient(180deg, #427594 0%, #1F4A67 100%);
    border-radius: 4px;
    padding: 0 14px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      color: #fff;
      font-size: 14px;
      &-btn {
        // width: 61px;
        height: 30px;
        margin-top: 11px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #072A41 100%);
        border-radius: 13px;
        border: none;
        color: #fff;
        // padding: 0;
        margin-right: 4px;
        vertical-align: middle;
      }
      .translate-y {
        transform: translateY(10px);
        display: inline-table;
      }
    }
    .score {
      color: #fff;
      font-size: 30px;
      .small {
        font-size: 12px;
      }
    }

    .test-img {
      width: 89px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

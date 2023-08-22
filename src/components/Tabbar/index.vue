<template>
  <div>
    <div class="tabbar" style="z-index: 9999">
      <van-tabbar v-model="active" :active-color="variables.theme" :fixed="false" route>
        <van-tabbar-item v-for="item in icon" :key="item.path" :to="item.path">
          <span>{{ item.name }}</span>
          <template #icon="props">
            <img :src="props.active ? item.active : item.inactive">
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="tabbar--placeholder" style="width:100%;height:50px" />
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      active: 0,
      icon: [
        {
          active: require('@/assets/image/common/work01.png'),
          inactive: require('@/assets/image/common/w02.png'),
          path: '/home',
          name: '工作'
        },
        {
          active: require('@/assets/image/common/y02.png'),
          inactive: require('@/assets/image/common/y01.png'),
          path: '/hello',
          name: '助手'
        },
        {
          active: require('@/assets/image/common/challenge-active.png'),
          inactive: require('@/assets/image/common/challenge-inactive.png'),
          path: '/challenge',
          name: '常用'
        },
        {
          active: require('@/assets/image/common/health-active.png'),
          inactive: require('@/assets/image/common/health-inactive.png'),
          path: '/health-activity',
          name: '分析'
        },
        {
          active: require('@/assets/image/common/user-active.png'),
          inactive: require('@/assets/image/common/user-inactive.png'),
          path: '/user',
          name: '我'
        }
      ]
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid #f5f5f5;
}
</style>

<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

    <tabbar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'

export default {
  components: {
    Tabbar
  },
  data() {
    return {
      include: []
    }
  },
  computed: {
    // key() {
    //   return this.$route.fullPath
    // },
  },
  watch: {
    $route(to, from) {
      // 如果要to(进入)的页面是需要keepAlive缓存的，把name push进include数组中
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
      }
      // 如果 要 form(离开) 的页面是 keepAlive缓存的，
      // 再根据 deepth 来判断是前进还是后退
      // 如果是后退：
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        const index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index, 1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #app{
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
</style>

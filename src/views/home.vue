<template>
  <div class="user">
    <van-nav-bar style="background: #272a3b">
      <template #title>
        <span style="color: #78bd00">早上好，张三先生</span>
      </template>
      <template #right>
        <van-badge :content="77">
          <div class="tab-right">
            <img :src="noticeUrl" alt="">
          </div>
        </van-badge>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="swipebox">
      <van-swipe class="swipe-box" :autoplay="2000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="height: 200px; width: 100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="funcs">
      <li v-for="(item, j) in list" :key="j">
        <van-icon :name="item.name" size="30" :color="item.color" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <ul class="morefunc">
      <li v-for="(item, j) in list2" :key="j" @click="clickfun(item)">
        <van-icon :name="item.name" size="30" :color="item.color" />
        <span>{{ item.title }}</span>
      </li>
      <!-- <van-row>
        <van-col v-for="(item,j) in list2" :key="j" span="6">
          <div v-for="(item,j) in list2" :key="j">
            <van-icon :name="item.name" size="30" :color="item.color" />
            <span>{{item.title}}</span>
          </div>
        </van-col>
    </van-row> -->
    </ul>
    <van-dialog v-model="showModal" :close-on-click-overlay="true" :show-confirm-button="false">
      <template #title>
        <div style="color: #78bd00 ">功能{{ title }}</div>
      </template>
      <ul class="morefunc">
        <li v-for="(item, j) in list2" :key="j">
          <van-icon :name="item.name" size="30" :color="item.color" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
// import Info from './components/Info'
// import Star from './components/Star'
// import Map from './components/Map'
// import { userChallengeScore } from '@/api/user.js'
export default {
  name: 'User',
  components: {
    // Info,
    // Star,
    // Map
  },
  data() {
    return {
      title: '',
      noticeUrl: require('@/assets/image/common/notice.png'),
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      showModal: false,
      list: [
        {
          title: '功能1',
          name: 'cart-o',
          color: '#1989fa'
        },
        {
          title: '功能2',
          name: 'cart-o',
          color: '#1989fa'
        },
        {
          title: '功能3',
          name: 'cart-o',
          color: '#1989fa'
        },
        {
          title: '功能4',
          name: 'cart-o',
          color: '#1989fa'
        },
        {
          title: '功能5',
          name: 'cart-o',
          color: '#1989fa'
        }
      ],
      list2: [
        // {
        //   title:'功能1',
        //   name: 'cart-o',
        //   color: '#1989fa'
        // },
        // {
        //   title:'功能2',
        //   name: 'cart-o',
        //   color: '#1989fa'
        // },
        // {
        //   title:'功能3',
        //   name: 'cart-o',
        //   color: '#1989fa'
        // },
        // {
        //   title:'功能4',
        //   name: 'cart-o',
        //   color: '#1989fa'
        // },
        // {
        //   title:'功能5',
        //   name: 'cart-o',
        //   color: '#1989fa'
        // },
      ]
    }
  },
  mounted() {
    // this.getStarCount()
    // 模拟数据
    this.list2 = new Array(10).fill(null).map((d, i) => {
      const obj = {
        title: '功能' + (i + 1),
        name: 'fire-o',
        color: '#ee0a24'
      }
      const empty = {
        title: '',
        name: '',
        color: ''
      }
      return i < 10 ? obj : empty
    })
    console.log(999, this.list2)
  },
  methods: {
    // getStarCount() {
    //   userChallengeScore().then(res => {
    //     const { code, data } = res
    //     if (code === 200 && data) {
    //       this.starCount = data
    //     }
    //   })
    // }
    clickfun(item) {
      console.log(item)
      this.showModal = true
      this.title = item.title
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  background: #fff;
  .tab-right {
    img {
      width: 28px;
      height: 28px;
    }
  }
  .swipebox {
    padding: 1em;
    box-sizing: border-box;
  }
  .funcs {
    display: flex;
    justify-content: space-around;
    background: #272a3b;
    padding: 10px 0;
    box-sizing: border-box;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: aliceblue;
        font-size: 7px;
        margin-top: 5px;
      }
    }
  }
  .morefunc {
    display: flex;
    padding: 10px 0;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-top: 10px;
    border-top: 1px solid #eee;
    // border-bottom: 1px solid #eee;

    li {
      box-sizing: border-box;
      padding: 10px 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:calc((100% - 4px) / 4 );
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      &:nth-child(4n){
        border-right: none;
      }
      span {
        font-size: 7px;
        margin-top: 5px;
      }
    }
  }
}

::v-deep .van-dialog__header{
  padding: 10px 0;
  background:#272a3b;
}
</style>

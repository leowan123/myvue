<template>
  <div class="my-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <router-link :to="{name: 'NewsDetail', params: {id: item.id}}">
          <img :src="item.imgUrl" alt="">
          <h2 class="text-container">{{ item.bannerText }}</h2>
        </router-link>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        // spaceBetween: 10,
        loopAdditionalSlides: 0, // 轮播个数，默认为0 ，最大不超过当前轮播slide个数
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.my-swiper{
  overflow: hidden;
  width: 414px;
  position: relative;
  /* text-container */
  .text-container {
    width: 382px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    background: #000000;
    box-shadow: 0px 6px 10px 0px rgba(177, 177, 177, 0.5);
    border-radius: 0px 0px 10px 10px;
    opacity: 0.49;
    line-height:40px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }
}
/* container */
.swiper-container {
  margin: 0;
  margin-top: 20px;
  width: 414px;
  height: 180px;
  margin-bottom: 12px;
  overflow: visible !important;
}

/* img */
.swiper-container .swiper-wrapper .swiper-slide{ width: 382px; border-radius: 4px;}
.swiper-container .swiper-wrapper .swiper-slide img{width: 382px; height: 150px; border-radius: 4px;}
.swiper-container .swiper-wrapper .swiper-slide-prev{ margin-top: 12px; height: 128px!important;}
.swiper-container .swiper-wrapper .swiper-slide-prev img{ height: 128px!important;}
.swiper-container .swiper-wrapper .swiper-slide-prev .text-container{ display:none;}
.swiper-container .swiper-wrapper .swiper-slide-next{ margin-top: 12px; height: 128px!important;}
.swiper-container .swiper-wrapper .swiper-slide-next img{ height: 128px!important;}
.swiper-container .swiper-wrapper .swiper-slide-next .text-container{ display:none;}

/* pagination */
::v-deep {
  .swiper-pagination{
     .swiper-pagination-bullet {
      width: 15px;
      height: 3px;
      border-radius: 0 !important;
      &.swiper-pagination-bullet-active {
        background-color: $theme;
      }
    }
  }
}

</style>

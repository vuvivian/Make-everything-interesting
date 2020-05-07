<!--
 * @Author: your name
 * @Date: 2020-04-27 22:42:31
 * @LastEditTime: 2020-05-01 22:29:30
 * @LastEditors: vuvivian
 * @Description: In User Settings Edit
 * @FilePath: /Make-everything-interesting/src/pages/home/home.vue
 -->
<template>
  <div class="home-container">
    <HeaderCard title="家庭" />
    <div class="home-weather">
      <img src="../../../static/images/home/home.jpg" alt="img" class="home-weather-img"/>
      <div class="weather-description">
        <div class="weather-img">
          <div class="iconsun">
            <img src="../../../static/images/home/sun.png" />
          </div>
          <span>晴</span>
        </div>
        <div class="weather-text">
          <p class="temperature">16.7℃</p>
          <p class="temperature-txt">室内温度</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from '../../components/headerCard.vue'
import '../../../static/images/home/font/iconfont.css'
export default {
  name: 'Home',
  components: {
    HeaderCard,
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 0 0.4rem;
  .home-weather {
    position: relative;
    width: 100%;
    height: 4rem;
    .home-weather-img {
      height: 100%;
      width: 100%;
    }
    .weather-description {
      position: absolute;
      top: 0.5rem;
      left: 0.2rem;
      .weather-img {
        margin-bottom: 0.5rem;
        .iconsun {
          width: 20px;
          height: 20px;
        }
      }
      .weather-text {
        .temperature {
          color: #55b3a9;
        }
        .temperature-txt {
          font-size: 0.3rem;
        }
      }
    }

  }
}
</style>
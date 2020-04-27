<!--
 * @Author: your name
 * @Date: 2020-04-26 23:21:59
 * @LastEditTime: 2020-04-27 21:16:39
 * @LastEditors: Please set LastEditors
 * @Description: 设备
 * @FilePath: /Make-everything-interesting/src/pages/devices/deviceItem.vue
 -->
<template>
  <div class="device-card">
    <div class="device-card-left">
      <i-icon type="computer_fill" class="left-img" size="65"/>
      <div class="left-text">
        <p class="device-name">电视机</p>
        <span class="device-place">位置: 客厅</span>
      </div>
    </div>
    <div class="device-card-right">
      <i-icon type="lock_fill" size="45" color="#fff" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviceItem'
}
</script>

<style lang="scss" scoped>
.device-card {
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdd998;
  margin: 0.1rem;
  .device-card-left {
    display: flex;
    justify-content: center;
    align-items: center;
    .left-img {
      flex: 1;
    }
    .left-text {
      .device-place {
        font-size: 14px;
      }
    }
  }
  .device-card-right {
  }
}
</style>
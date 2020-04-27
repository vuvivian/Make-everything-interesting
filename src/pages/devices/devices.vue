<!--
 * @Author: your name
 * @Date: 2020-04-25 18:32:23
 * @LastEditTime: 2020-04-27 00:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Make-everything-interesting/src/pages/devices/devices.vue
 -->
<template>
  <div class="device-container">
    <DeviceItem />
    <DeviceItem />
    <div class="add-device-container">
      新增设备
    </div>
  </div>
</template>

<script>
import DeviceItem from './deviceItem.vue'

export default {
  name: 'Devices',
  components: {
    DeviceItem
  }
}
</script>

<style lang="scss" scoped>
.device-container {
  .add-device-container {
    margin: 0.1rem;
    height: 2rem;
    border: 1px dotted #ccc;
    text-align: center;
    line-height: 2rem;
  }
}

</style>
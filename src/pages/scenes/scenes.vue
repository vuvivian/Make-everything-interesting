<!--
 * @Author: your name
 * @Date: 2020-04-25 18:22:28
 * @LastEditTime: 2020-04-27 00:09:23
 * @LastEditors: Please set LastEditors
 * @Description: 情景页面
 * @FilePath: /Make-everything-interesting/src/pages/scenes/scenes.vue
 -->
<template>
  <div class="scenes-container">
    <SceneItem></SceneItem>  
    <SceneItem></SceneItem>
    <div class="add-scene-container">
      开始新建一个情景吧
    </div>    
  </div>
 
</template>

<script >
import SceneItem from './sceneItem.vue'

export default {
  name: 'Scenes',
  components: {
    SceneItem
  }
}
</script>

<style lang="scss">
.add-scene-container {
  height: 2rem;
  padding: 0.1rem;
  border: 1px dotted #ccc;
  text-align: center;
  line-height: 2rem;
}
</style>

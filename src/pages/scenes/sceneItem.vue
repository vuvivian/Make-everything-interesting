<!--
 * @Author: your name
 * @Date: 2020-04-25 18:38:00
 * @LastEditTime: 2020-04-26 23:53:41
 * @LastEditors: Please set LastEditors
 * @Description: 情景卡片
 * @FilePath: /Make-everything-interesting/src/pages/scenes/sceneItem.vue
 -->
<template>
  <div class="scene-card">
    <div class="scene-card-left">
      <img src="../../../static/images/scene/door.jpg" alt="情景图片" class="scene-left-img">
      <p class="scene-left-tip" >打开卧室的灯。</p>
    </div>
    <div class="scene-card-right">
      <div>启用</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SceneItem',
}
</script>

<style lang="scss" scoped>
.scene-card {
  display: flex;
  justify-content: center;
  height: 4rem;
  text-align: center;
  margin: 0.1rem;
  .scene-card-left {
    flex: 5;
    position: relative;
    .scene-left-img {
      width: 100%;
      height: 100%;
    }
    .scene-left-tip {
      position: absolute;
      bottom: 0rem;
      left: 0rem;
      padding: 0.1rem;
      background: #54493f;
      color: #988c7f;
    }
  }
  .scene-card-right {
    flex: 1;
    color: #fff;
    line-height: 4rem;
    background-color: #c5b5a8;
  }
}
</style>
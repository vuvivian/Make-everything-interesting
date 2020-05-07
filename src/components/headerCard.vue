<!--
 * @Author: vuvivian
 * @Date: 2020-04-27 22:21:47
 * @LastEditTime: 2020-04-27 23:36:44
 * @LastEditors: Please set LastEditors
 * @Description: 头部控件
 * @FilePath: /Make-everything-interesting/src/components/header.vue
 -->
<template>
  <div class="header-card">
    <div>{{title}}</div>
    <div>语音</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.header-card {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
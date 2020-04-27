/*
 * @Author: your name
 * @Date: 2020-01-11 22:32:29
 * @LastEditTime: 2020-04-26 00:14:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Make-everything-interesting/src/main.js
 */
import Vue from 'vue'
import App from './App'

// 设置vue的提示功能 关闭
Vue.config.productionTip = false
// 声明当前组件的类型
App.mpType = 'app'

// 生成应用的实例
const app = new Vue(App)
// 挂载整个应用
app.$mount()

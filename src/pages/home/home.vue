<template>
  <div>
    <div class="show">
      <button open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="login">
        授权登陆
      </button>
      <div class="mark-text">当前分数</div>
      <div class="mark">{{mark}}</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(1)">+1</div>
      <div class="button left" @click="addMark(-1)">-1</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(5)">+5</div>
      <div class="button left" @click="addMark(-5)">-5</div>
    </div>
  </div>
 
</template>

<script >
import config from "@/config"
import qcloud from "wafer2-client-sdk"
export default {
  data(){
    return {
      mark: 0
    }
  },
  methods: {
    addMark(add){
      this.mark = this.mark + add;
    },
    login(){
      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
          success: userInfo => {
              console.log('登录成功', userInfo);
              this.loginSuccess(userInfo);
          },
          fail: err => {
              console.log('登录失败', err);
          }
      });
    },
    loginSuccess(userInfo){
      wx.setStorageSync("userInfo", userInfo)
    }
  }
}
</script>

<style lang="css">
  .show {
    background: #EA5149;
    text-align: center;
    color: #fff;
    font-weight: bold;
   
  }
   .mark-text {
      font-size: 20px;
      padding: 28px;
    }
    .mark {
      font-size: 88px;
    }
  .row {
      margin: 40px 56px;
      
  }
  .button {
        height: 70px;
        width: 70px;
        line-height: 70px;
        color: #fff;
        border-radius: 20%;
        font-size: 25px;
        font-weight: bold;
        text-align:center;
      }
      .right {
        background: #EA5149;
        float: right;
      }
      .left {
        background: #feb600;
        margin-right: 80px;
      }
</style>

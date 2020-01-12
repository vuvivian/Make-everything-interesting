<template>
  <div>
    <div class="show">
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
export default {
  data(){
    return {
      mark: 0
    }
  },
  methods: {
    addMark(add){
      this.mark = this.mark + add;
    }
  }
}
</script>

<style lang="scss">
  .show {
    background: #EA5149;
    text-align: center;
    color: #fff;
    font-weight: bold;
    .mark-text {
      font-size: 20px;
      padding: 28px;
    }
    .mark {
      font-size: 88px;
    }
  }
  .row {
      margin: 40px 56px;
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
  }
</style>

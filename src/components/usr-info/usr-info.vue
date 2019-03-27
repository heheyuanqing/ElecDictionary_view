<template>
  <div>
    <div class="center" style="position: relative;">
      <img src="../../assets/avatar.png" alt="avatar" width="200" height="200" @mouseover="changeImg">
      <div class="change" v-show="isImg">
        <input id="file" type="file" @click="upFile">
        <label for="file">修改头像</label>
      </div>
    </div>
    <div class="center">
      <ul>
      <li>姓名</li>
      <li>学习方式</li>
      <li>个人介绍</li>
      <li>退出登录</li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        isImg:false
      }
    },
    methods:{
      changeImg(){
        this.isImg=true;
      },
      upFile(){

      }
    }
}
</script>
<style>
img{
  border-radius: 50%;
}
.change{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  font-weight: bolder;
  background-color: rgba(0,0,0,0.3)
}
.center{
    display:flex;
    justify-content:center
}
</style>
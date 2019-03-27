<template>
  <div>
    <div class="center" style="position: relative;">
<<<<<<< HEAD:src/components/usr-info/usr-info.vue
      <img src="../../assets/avatar.png" alt="avatar" width="200" height="200" @mouseover="changeImg">
=======
      <img src="../assets/avatar.png" alt="avatar" width="200" height="200" @mouseover="choose">
>>>>>>> de43bd18404f56f4aa976179e24e260b10831dbd:src/components/usr-info.vue
      <div class="change" v-show="isImg">
        <label for="file" style="margin-left:5px;">修改头像</label>
        <input id="file" type="file" @click="upFile" style="opacity:0">
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
      choose(){
        this.isImg = true;
      },
      noChoose(){
        this.isImg = false;
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
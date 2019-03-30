<template>
  <div>
    <div class="center" style="position: relative;" @mouseover="changeImg" @mouseout="nochangeImg">
      <img src="../../assets/avatar.png"
           alt="avatar"
           width="200"
           height="200"/>
      <div class="change" v-show="isImg">
        <label for="file" style="margin-left:250px;">修改头像</label>
        <input id="file" type="file" @click="upFile" style="opacity:0">
      </div>
    </div>
    <div>
      <div class="infoList">
        <div>姓名</div>
        <div>heyuanqing </div>
      </div>
      <div class="infoList">
        <div>学习方式</div>
        <div>heyuanqing </div>
      </div>
      <div class="infoList">
        <div>个人介绍</div>
        <div>heyuanqing </div>
      </div>     
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        isImg: false
      }
    },
    methods: {
      changeImg() {
        this.isImg = true
      },
      nochangeImg() {
        this.isImg = false
      },
      upFile() {

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
.infoList{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f8e48d
}

</style>
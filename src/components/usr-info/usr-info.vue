<template>
  <div>
    <div class="center" style="position: relative;" @mouseover="changeImg" @mouseout="nochangeImg">
      <img src="../../assets/avatar.png"
           alt="avatar"
           width="200"
           height="200"/>
      <div class="change" v-show="isImg">
        <label for="file" class="changeIcon"><img src="../../assets/reload.png" width="16" height="16" alt=""></label>
        <input id="file" type="file" @click="upFile" style="opacity:0">
      </div>
    </div>
    <div class="info-list-wrapper">
      <div class="infoList">
        <div>姓名</div>
        <div v-if="isShowInput">
          <input type="text" class="updateInfo"/>
          <span><img src="../../assets/checked.png" alt="确认" width="16" height="30" @click="onConfirm"></span>
          <span><img src="../../assets/close.png" alt="取消" width="16" height="30" @click="onCancel"></span>
        </div>
        <div @click="showInput" v-else>heyuanqing</div>
      </div>
      <div class="infoList">
        <div>个人介绍</div>
        <div v-if="isShowInput">
          <input type="text" class="updateInfo"/>
          <span><img src="../../assets/checked.png" alt="确认" width="16" height="16" @click="onConfirm"></span>
          <span><img src="../../assets/close.png" alt="取消" width="16" height="16" @click="onCancel"></span>
        </div>
        <div @click="showInput" v-else>heyuanqing</div>
      </div>
      <div class="infoList">
        <div>学习方式设置</div>
        <div v-if="isShowInput">
          <input type="text" class="updateInfo"/>
          <span><img src="../../assets/checked.png" alt="确认" width="16" height="16" @click="onConfirm"></span>
          <span><img src="../../assets/close.png" alt="取消" width="16" height="16" @click="onCancel"></span>
        </div>
        <div @click="showInput" v-else>heyuanqing</div>
      </div>     
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        isImg: false,
        isShowInput: false
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

      },
      showInput() {
        this.isShowInput = true
      },
      onConfirm() {
        this.isShowInput = false
      },
      onCancel() {
        this.isShowInput = false
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
  position: absolute;
  align-items: center;
  background-color: rgba(0,0,0,0.3)
}
.changeIcon{
  padding: 10px;
  background-color: white;
  border-radius: 50%;
  margin-left: 250px;
}
.center{
    display:flex;
    justify-content:center
}
.info-list-wrapper{
  width: 50%;
  margin: 0 auto;
}
.updateInfo{
  border:none;
  border-bottom: 1px solid;
  outline: none;
}
.infoList{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f8e48d;
  margin-top:20px;
}

</style>
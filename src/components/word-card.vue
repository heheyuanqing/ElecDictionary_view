<template>
  <div>
    <div class="card">
      <div class=title>word</div>
      <div class="pho">音标<span @click="getSound"><img width="20" height="20" src="../assets/pho.png" alt="小喇叭"></span></div>
      <div class="mean">翻译</div>
      <button @click="addList" v-if="isShow">加入我的词库</button>
    </div>
  </div>
</template>
<script>
export default {
  props:['isShow']
}
</script>
<style scoped>
.card{
  border:1px solid #ffe057;
  padding: 10px;
  width: 180px;
  position: relative;
}
.title{
  font-size:20px;
  font-weight: 500;
}
.pho{
    position: relative;
    color:#d4d4d4;
}
.pho img{
  position: absolute;
  top:3px;
  background: transparent;
}
.mean{
  margin-top: 10px;
  border:1px solid #adad1b;
  padding: 15px;
}
button{
  margin-top: 10px;
  margin-left: 50%
}
</style>

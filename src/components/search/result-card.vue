<template>
  <div>
    <div class="card" >
      <div class=title>word</div>
      <div class="pho">音标<span @click="getSound"><img width="20" height="20" src="../../assets/pho.png" alt="小喇叭"></span></div>
      <ul v-if="process">
        <li>1</li><li>2</li><li>3</li>
      </ul>
      <div class="mean">翻译</div>
      <button @click="addList">{{btnContent}}</button>
    </div>
  </div>
</template>

<script>
export default {
 props:['btnContent','process'],
  data(){
    return {
      num:0
    }
  }
}
</script>

<style scoped>
.card{
  width:650px; 
  border:1px solid #ffe057;
  padding: 10px;   
}
.title{
    float: left;
}
.pho{
    position: relative;
    color:#d4d4d4;
    margin-left: 100px
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
  margin-left: 80%;
}
</style>

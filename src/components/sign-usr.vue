<template>
  <div class="main">
    <div class="title">{{title}}</div>
    <div class="input-part">
      <input type="text" :value="value">
      <input type="text" :value="value">
      <input type="text" :value="value">
    </div>
    <div class="btn-part">
      <button @click="signIn">登陆</button>
      <button style="margin-left:10px;">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    sigIn(){

    }
  }
}
</script>
<style>
.main{
  width: 100%;
}
.title{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
.input-part,.btn-part{
  width:100%;
  display:flex;
  justify-content:center;
}
input{
  width: 40%;
  height: 30px;
  border:1px solid #dddddd;
  border-radius: 6px;
}
button{
  margin-top: 15px;
  width: 100px;
  height:30px;
  border:0;
  border-radius: 4px;
  background-color: #ffe057;
}
</style>


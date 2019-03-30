<template>
  <div class="main">
    <div class="logo"><img width="200" height="100" src="../assets/youyong.png" alt="logo"></div>
    <div class="input-part">
      <input type="text" :value="value">
    </div>
    <div class="btn-part">
      <button @click="searchWord">搜索</button>
      <button style="margin-left:10px;">我的词库</button>
    </div>
    <div class="word-part">
       <div class="result">
        <word-result :btnContent="btnContent" :process="false"></word-result>
      </div>
    </div>
    <div class="word-part">   
      <div class="content">
        <word-card :btnContent="btnContent" :process="false"></word-card>
        <word-card :btnContent="btnContent" :process="false"></word-card>
        <word-card :btnContent="btnContent" :process="false"></word-card>
        <word-card :btnContent="btnContent" :process="false"></word-card>
        <word-card :btnContent="btnContent" :process="false"></word-card>
        <word-card :btnContent="btnContent" :process="false"></word-card>
      </div>
    </div>
  </div>
</template>
<script>
import wordCard from './word-card.vue';
import wordResult from './result-card';
export default {
  components:{
    wordCard,
    wordResult
  },
  data(){
    return {
      word:"",
     btnContent:"加入我的词库"
    }
  },
  methods:{
    searchWord(){
      const word = this.word;
      this.word="";
      //请求后台搜索
      alert(111);
    }
  }
}
</script>
<style>
.main{
  width: 100%;
}
.logo{
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
.word-part{
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.result{
  width: 80%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.result >div{
  margin-top: 15px;
}

.content{
  width:70%;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content > div{
  width:30%;
  margin-top: 15px;
}
</style>

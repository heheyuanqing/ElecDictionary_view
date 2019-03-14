<template>
  <div>
    <div class="center-box">
      <div class="usr-info">
        <div class="avatar"><img width="100" height="100" src="../assets/avatar.png" alt="头像"></div>
        <div class="usr-name">{{name}}</div>
        <div class="everyday-word">
          <div>{{msg}}</div>
        </div>
     </div>
    </div>
    <div class="center-box"  >
      <div style="width:70%" v-if="haveWord">
        <div class="sel-words"> 我的单词库<button>进入词库</button></div>
        <div class="words-info">
           <word-card :btnContent="btnContent" :process="true"></word-card>
           <word-card :btnContent="btnContent" :process="true"></word-card>
           <word-card :btnContent="btnContent" :process="true"></word-card>
           <word-card :btnContent="btnContent" :process="true"></word-card>
           <word-card :btnContent="btnContent" :process="true"></word-card>
           <word-card :btnContent="btnContent" :process="true"></word-card>
        </div>
      </div>
      <div class="sel-words"  v-else>
         你还没有开通个人词库，请选择<button>开通个人词库</button>
      </div>
    </div>
  </div>
</template>
<script>
import wordCard from './word-card';
export default {
    components:{
      wordCard
    },
    data(){
      return {
        name:"gsjdh",
        msg:"每天一个单词",
        haveWord:true,
        btnContent:"删除"
      }
    }
}
</script>
<style>
.center-box{
  display:flex;
  justify-content:center;
  margin-top: 30px;
}
.usr-info{
  width: 70%;
  padding: 15px;
  border:1px solid #cacccd;
  display: flex;
  flex-direction: row;
}
.usr-info img{
  border-radius: 50%;
}
.usr-name{
  margin-left: 50px;
  flex-basis: 50%;
}
.everyday-word{
  padding-left:15px; 
  flex-basis: 20%;
  border-left:1px solid #cacccd;
}
.sel-words{
  /* width:70%; */
  border-left: 5px solid #f1d96b;
  padding-left: 20px;
}
.words-info{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.words-info > div{
  width:30%;
  margin-top: 15px;
}
button{
  width: 100px;
  height:30px;
  border:0;
  margin-left: 5px;
  border-radius:4px;
  background-color: #f8e48d;
  color:rgb(10, 10, 9);
}
</style>

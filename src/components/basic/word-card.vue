<template>
  <div>
    <div class="card" >
      <div class="title">word</div>
      <ul v-if="process">
        <li>1</li><li>2</li><li>3</li>
      </ul>
      <img class="advice" width="20" height="20" src="../../assets/chat.png" alt="对这个单词有什么建议呢？">
      <div class="sound">音标<span @click="getSound">
        <img width="20" height="20" src="../../assets/speak.png" alt="小喇叭" v-if="isSound">
        <img width="20" height="20" src="../../assets/speaked.png" alt="小喇叭" v-else>        
      </span></div>
      <div class="mean">翻译</div>
      <button @click="addList" class="word-btn">{{btnContent}}</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['btnContent', 'process'],
  data() {
    return {
      num: 0,
      isSound: true
    }
  },
  methods: {
    getSound() {
      this.isSound = false
    }
  }
}
</script>
<style scoped>
.card{
  border:1px solid #ffe057;
  padding: 10px 10px 50px 10px;
  position: relative;
}
.title{
  font-size:20px;
  font-weight: 500;
}
ul li{
  display: inline-block;
  margin-left:5px;
}
.advice{
  position: absolute;
  right: 5px;
  top: 5px;
}
.sound{
  position: relative;
  color:#d4d4d4;
}
.sound img{
  position: absolute;
  top:3px;
  margin-left: 5px;
  background: transparent;
}
.mean{
  margin-top: 10px;
  border:1px solid #adad1b;
  padding: 15px;
}
.word-btn{
  position: absolute;
  bottom:10px;
  right: 10px;
  width: 100px;
  height:30px;
  border:0;
  margin-left: 5px;
  border-radius:4px;
  background-color: #ffe057;
  color:rgb(10, 10, 9);
}
</style>

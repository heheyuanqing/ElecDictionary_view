<template>
 <div>
    <div class="card" >
      <div class="title">{{word.en}}</div>
      <div class="process">
        <ul v-if="isProcess">
          <li  v-for="i in 4" :key="i"><img width="20" height="20" src="../../assets/star.png" alt=""></li>
        </ul>
        <ul v-if="word.process>0">
          <li v-for="i in +word.process" :key="i"><img width="20" height="20" src="../../assets/filledstar.png"></li>
        </ul>
      </div>
      <img class="advice" width="20" height="20" src="../../assets/chat.png" alt="对这个单词有什么建议呢？"/>
      <div class="pho" id="ukRadio">{{word.uk}}<img  width="20" height="20" src="../../assets/pho.png" alt="小喇叭" @click="getUkSound" v-if="ukRadio"></div>
      <div class="pho" id="usRadio">{{word.us}}<img width="20" height="20" src="../../assets/pho.png" alt="小喇叭" @click="getUsSound" v-if="usRadio"></div>
      <div class="mean">{{word.cn}}</div>
      <button @click="addList" class="word-btn">{{btnContent}}</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['btnContent', 'isProcess','word'],
  data() {
    return {
      num: 0,
      isSound: true,
      ukRadio:'',
      usRadio:'',
      startUkRadio:false,
      startUsRadio:false
    }
  },
  methods: {
    getSound() {
      this.isSound = false
      this.axios.get('/mp3/api/dictionary.php' ,{
        params:{
          w:this.word.en,
          key:'0E071C0058A7891531E32BDB7BAC76B1',
          type:'json'
        }
      }).then(res => {
        this.ukRadio = res.data.symbols[0].ph_en_mp3
        this.usRadio = res.data.symbols[0].ph_am_mp3
      }).catch(err => {
        console.log(err)
      })
    },
     getUkSound(){
      let ukRadio = document.getElementById("ukRadio")
      let audio = document.createElement("AUDIO")
      audio.setAttribute("src",this.ukRadio)
      audio.setAttribute("autoplay","autoplay")
      audio.setAttribute("style","display:none")
      ukRadio.appendChild(audio)
    },
    getUsSound(){
      let usRadio = document.getElementById("usRadio")
      let audio = document.createElement("AUDIO")
      audio.setAttribute("src",this.usRadio)
      audio.setAttribute("autoplay","autoplay")
      audio.setAttribute("style","display:none")
      usRadio.appendChild(audio)
    },
    addList(){
      if(!this.$cookies.get('name')){
        this.$router.push({path:'/usr/login'})
      }
      if(this.btnContent === "删除"){
         this.axios.post('/api/deleteSeleWord',{
        en:this.word.en,
        name:this.$cookies.get('name')
      }).then(res=> {
       if(res.data.status === 200){
           alert('删除成功，请刷新')
       }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      }
      else{
        this.axios.post('/api/addSelWord',{
        word:this.word.en,
        name:this.$cookies.get('name')
      }).then(res=> {
       if(res.data.status === 200){
          alert(res.data.msg)
       }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      }
    }
  },
  mounted(){
    this.getSound()
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
.card .process{
  position: relative;
  height: 60px;
}
.process ul{
  position: absolute;
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
.delete{
  position: absolute;
  right: 35px;
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
.pho img{
  top: 5px;
  position: relative;
  left: 5px;
}
</style>

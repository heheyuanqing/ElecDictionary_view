<template>
  <div>
    <div class="card" >
      <div class=title>{{word.en}}</div>
      <div class="pho" id="ukRadio">{{word.uk}}<img  width="20" height="20" src="../../assets/pho.png" alt="小喇叭" @click="getUkSound" v-if="ukRadio"></div>
      <div class="pho" id="usRadio">{{word.us}}<img width="20" height="20" src="../../assets/pho.png" alt="小喇叭" @click="getUsSound" v-if="usRadio"></div>
      <div class="mean">{{word.cn}}</div>
      <button @click="addList">{{btnContent}}</button>
    </div>
  </div>
</template>

<script>
export default {
 props:[ 'btnContent' ,'process','word' ],
  data() {
    return {
      num: 0,
      ukRadio:'',
      usRadio:'',
      startUkRadio:false,
      startUsRadio:false
    }
  },
  methods:{
    getSound(){
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
  },
  mounted(){
    this.getSound()
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
    margin-top: 15px;
    font-size: 20px;
}
.pho{
    position: relative;
    color:#d4d4d4;
    margin-left: 100px;
    margin-top: 5px;
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

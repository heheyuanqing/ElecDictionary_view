<template>
  <div>
    <div class="center-box">
      <div class="usr-info">
        <div class="avatar" @click="gotoSelInfo"><img width="100" height="100" src="../../assets/avatar.png" alt="头像"></div>
        <div class="usr-name">{{name}}</div>
      </div>
    </div>
    <div class="center-box"><back-btn text="进入单词测试" style="width:300px" @on-click="toUsrTest" /></div>
    <div class="center-box">
      <div style="width:70%" v-if="isShowSelWords">
        <div class="sel-words"> 我的单词库<button @click="gotoSelWords">进入词库</button>  <back-btn :text="backContent" @on-click="backToIndex"/></div>
        <div class="words-info" v-if="selWord.length>0">
          <word-card :btnContent="btnContent" :isProcess="true" v-for="word in selWord" :key="word.id" :word="word"></word-card>
        </div>
        <div v-else style="margin-top:20px">{{createSelWordText}}<button @click="backToIndex">去首页</button></div>
      </div>
      <div class="no-sel-words" v-else>
        你还没有开通个人词库，请选择<button @click="openSelWord">开通个人词库</button>
      </div>
    </div>
  </div>
</template>
<script>
import BackBtn from '../basic/btn'
import wordCard from '../basic/word-card'
export default {
    components: {
      wordCard,
      BackBtn
    },
    data() {
      return {
        name: '',
        createSelWordText:'',
        avatar:'',
        selWord: [],
        isShowSelWords:false,
        btnContent: '删除',
        backContent:'回主页'
      }
    },
    created(){
      this.$cookies.isKey('name') ? this.name = this.$cookies.get('name') :  this.$router.push({ path: '/usr/login' })
    },
    methods: {
      backToIndex(){
        this.$router.push({path:'/'})
      },
      toUsrTest(){
        this.$router.push({path:'/usr-test'})
      },
      getUsrInfo() {
        this.axios.get('/api/usr', {
          params: {
            name:this.name
          }
        }).then(res => {
          const data = res.data
          data.info.stu_flag === 1 ? this.$store.commit('changeIsStartStu',true) :  this.$store.commit('changeIsStartStu',false)
          data.info.flag === 1 ? this.$store.commit('changeIsHaveSelWords',true) :  this.$store.commit('changeIsHaveSelWords',false)      
          if(data.info.flag === 1){
            this.getSelWord()
            this.isShowSelWords = true
          }
          this.avata = data.info.head_path
        }).catch(err => {
          console.log(err)
        })
      },
      openSelWord(){
        this.axios.post('/api/createSelWord',{
          name:this.name
        }).then(res => {
          if(res.data.status === 200){
            alert("创建成功～")
            this.isShowSelWords = true
            this.createSelWordText="正在加载中……"
          }
        }).then(() => {
          this.axios.post('/api/alreadyCreateSelWord',{
            name:this.name
          }).then(res => {
            console.log(res)
            if(res.data.status === 200){
              this.createSelWordText="你的词库还没有单词，快去添加吧～"
            }
          })
        }).catch(err => {
          console.log(err)
        })
      },
      getSelWord() {
        this.axios.get('/api/getAllSelWord', {
          params: {
            name: this.name
          }
        }).then(res => {
          console.log(res)
          if(res.data.word.length <= 0){
            this.createSelWordText="你的词库还没有单词，快去添加吧～"
          }
          this.selWord = res.data.word || []
          this.$store.commit('changeSelWords',res.data.word)
          if(this.selWord.length>6){
            this.selWord = this.selWord.slice(0,6)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      gotoSelWords() {
        this.$router.push({ path: '/sel-words' })
      },
      gotoSelInfo() {
        this.$router.push({ path: '/usr/info' })
      }
    },
    mounted() {
      this.getUsrInfo()
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
.no-sel-words{
  padding-left: 20px;
}
.words-info{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.words-info > div{
  width: 30%;
  margin-top: 15px;
}
button{
  width: 100px;
  height:30px;
  border:0;
  margin-left: 5px;
  border-radius:4px;
  background-color: #ffe057;
  color:rgb(10, 10, 9);
}
</style>

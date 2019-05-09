<template>
  <div>
    <div class="name">我的词库<btn @on-click="startStu" :text="btnText" class="start-stu"/><btn @on-click="back" :text="backText" class="start-stu"/></div>
    <div v-if="false">
      <div>你可能想了解的单词</div>
       <word-card
        :btnContent="addContent"
        class="list"
        v-for="word in recommend"
        :key="word.id"
        :word="word"/>
    </div>
    <div class="words-list">
      <word-card
        :btnContent="btnContent"
        :isProcess="true"
        class="list"
        v-for="word in selWords"
        :key="word.id"
        :word="word"/>
    </div>
  </div>
</template>
<script>
import wordCard from '../basic/word-card'
import Btn from '../basic/btn'
import recommendJs from '@/methods/recommend.js'
export default {
  components: {
    wordCard,
    Btn,  
  },
  data() {
    return {
      name:'',
      addContent:'加入我的词库',
      btnContent: '删除',
      btnText: '进入学习',
      backText:'返回',
      selWords:[]
    }
  },
  created(){
    this.$cookies.isKey('name') ? this.name = this.$cookies.get('name') :  this.$router.push({ path: '/usr/login' })
  },
  computed:{
    recommend(){
      let arr=[]
      // this.axios.get()
      return arr
    }
  },
  methods:{
    back(){
      this.$router.push({ path: '/usr' })
    },
    startStu() {
     this.$store.state.is_start_stu ? this.$router.push({ path: '/test-page' }) : 
     this.$router.push({ path: '/stu-page' })
    },
    getAllSelWord() {
      this.$store.state.selWords.length>0 ?
      this.selWords = this.$store.state.selWords :
        this.axios.get('/api/getAllSelWord', {
          params: {
            name: this.name
          }
        }).then(res => {
          this.$store.commit('changeSelWords',res.data.word)
          this.selWords = res.data.word
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted(){
    this.getAllSelWord()  
  }
}
</script>
<style>
.name{
  margin-left: 50px;
  margin-top: 20px;
  font-size: 24px;
  border-left: 5px solid #f1d96b;
  padding-left: 10px;
}
.start-stu{
  margin-left: 100px;
}
.words-list{
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.list{
  width: 30%;
  margin-top: 20px;
  margin-left: 20px;
}
</style>

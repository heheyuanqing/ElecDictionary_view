<template>
  <div class="test-page">
    <div class="begin-notice" v-if="showNotice">
      <div>{{time}}学习测试题</div>
      <begin-btn :text="beginText" @on-click="showTest"/>  
    </div>
    <div v-else>
      <test-subject
        v-model="wordId"
        :word="word"
        :choices="choices"
        @on-answer="getUsrAnswer"
      />
    </div>
    <div v-if="over">
      <div>测试结束</div>
      <ul v-if="testId.length !== 0">
        <li v-for="id in testId" :key="id">
          <div>{{testWord[id].en}}</div>
          <div>{{testWord[id].cn}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BeginBtn from '../basic/btn'
import TestSubject from './test-subject'
import diffRandom from '@/methods/create-diff-random.js'
import random from '@/methods/random-subject.js'

export default {
  components:{
    BeginBtn,
    TestSubject
  },
  data(){
    return{
      beginText:"进入测试",
      showNotice:true,
      errChoices:[],
      wordId:0,
      over:false,
      answer:0,
      testId:[]
    }
  },
  computed:{
     testWord(){
      let arr = this.$store.state.testWords || []
      let word=[],i=0
      const order = random(0,arr.length)
      while(i <= arr.length){
        word.push(arr[order[i]])
        i++
      }
      return word
    },
    word(){
      return this.testWord[this.wordId]
    },
    choices(){
      const index = Math.floor(Math.random()*(3-0)+0)
      let arr = [0,0,0,0]
      arr[index] = this.word
      this.answer = index
      let i=0
      arr.map((val,index) => {
        if(val === 0){
          this.$set(arr,index,this.errChoices[i])
          i++
        }
      })
      return arr
    },
    time(){
      let curDate = new Date()
      let date = new Date(curDate.getTime() - 24*60*60*1000)
      return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()
    }
  },
  watch:{
    wordId(val){
      val > this.testWord.length ? this.over = true :this.wordId = val
      this.getRadomChoice() 
    },
    over(val){
      if(val){
         this.axios.post('/api/updateTestSelwords',{
          name:this.$cookies.get('name'),
          words:this.stuWords,
        }).then(res => {
          if(res.status === 200){
            console.log('复习结束')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  methods:{
    showTest(){
      debugger
      this.showNotice = false
    },
    getUsrAnswer(val){
      if(this.answer !== val){
        this.word.wrong_time += 1
        this.testId.push(val)
      }
    },
    getRadomChoice(){
      const errArrId = diffRandom(3)
      errArrId.forEach((id,index) => {
        this.axios.get('/api/getWordById',{ params:{id}}).then( res =>{
          if(res.status === 200){
            this.$set(this.errChoices,index,res.data.msg)
          }      
        }).catch(err => {
          console.log(err)
        })  
      })
    },
    getTestWords(){
      this.axios.get('/api/testSubject', {
          params: {
            name: this.$cookies.get('name')
          }
        }).then(res => {
          this.$store.commit('changeTestWord',res.data.data)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted(){
    this.getTestWords()
  }
}
</script>

<style>
.begin-notice{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}
</style>

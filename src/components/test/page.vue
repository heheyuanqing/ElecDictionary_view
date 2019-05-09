<template>
  <div class="usr-test-page">
    <div>
      <test-subject
        v-model="wordId"
        :word="word"
        :choices="choices"
        :answer="answer"
        :right="right"
        @on-right="getTimes"
      />
    </div>
    <div v-if="over"  class="over-wrapper">
      <div class="content">
        <div>测试结束</div>
        <div>您正确个数为{{right}}/{{recommend.length}}</div>
        <div style="margin-bottom:100px"><button @click="back">返回</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import BeginBtn from '../basic/btn'
import TestSubject from './subject'
import diffRandom from '@/methods/create-diff-random.js'
import random from '@/methods/random-subject.js'

export default {
  components:{
    BeginBtn,
    TestSubject
  },
  data(){
    return{
      errChoices:[],
      wordId:0,
      over:false,
      answer:0,
      right:0
    }
  },
  computed:{
    recommend(){
      let arr = this.$store.state.recommend || []
      let word=[],i=0
      const order = random(0,arr.length-1)
      while(i < arr.length){
        word.push(arr[order[i]])
        i++
      }
      return word
    },
    word(){
      return this.recommend[this.wordId]
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
    }
  },
  watch:{
    wordId(val){
      val >= this.recommend.length ? this.over = true :this.wordId = val
      this.getRadomChoice() 
    }
  },
  methods:{
    back(){
      this.$router.push({path:'/usr'})
    },
    getTimes(val){
      debugger
      this.right = val
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
    getRecommendWords(){
      this.axios.post('/api/recommend', {name: this.$cookies.get('name')}).then(res => {
          this.$store.commit('getRecommend',res.data.data)
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted(){
    this.getRecommendWords()
    this.getRadomChoice()
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
.over-wrapper{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom:0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.over-wrapper .content{
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  margin-top: 10px;
}
</style>

<template>
  <div>
   <word-subject
     v-model="wordId"
     :word="word"
     :choices="choices"
     :answer="answer"
   />
    <div v-if="isOver" class="over-wrapper">
      <div class="content">
        <div>今天学习结束啦～</div>
        <div><button @click="back">返回</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import WordSubject from '@/components/stu/choose-right.vue'
import random from '@/methods/random-subject.js'
import diffRandom from '@/methods/create-diff-random.js'
import ConfirmBtn from '../basic/btn'

export default {
  components:{
    WordSubject
  },
  data(){
    return {
      wordId:0,
      isOver:true,
      answer:0,
      errChoices:[]
    }
  },
  computed:{
    stuWords(){
      let arr = this.$store.state.stuWords || []
      let word=[],i=0
      const order = random(0,arr.length-1)
      while(i <= arr.length-1){
        word.push(arr[order[i]])
        i++
      }
      return word
    },
    word(){
      return this.stuWords[this.wordId]
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
      if(val >= 5){
        let index = 0,isEnd = 0
        while(index < this.stuWords.length){
          if(this.stuWords[index].process!==3){
            val = index
            isEnd = 1
            break
          }
          index++
        }
        isEnd === 0 ? this.isOver=true :this.wordId = val
      } else {
        this.wordId = val
      }
      this.getRadomChoice() 
    },
    isOver(val){
      if(val){
        // 将单词数据更新到个人词库中
        this.axios.post('/api/updateStuSelwords',{
          name:this.$cookies.get('name'),
          words:this.stuWords,
        }).then(res => {
          if(res.status === 200){

          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  methods:{
    back(){
      this.$router.push({path:"/usr"})
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
     getStuWords(){
      this.axios.get('/api/stuSubject', {
        params: {
          name: this.$cookies.get('name')
        }
      }).then(res => {
        this.$store.commit('changeStuWord',res.data.data)
        this.$store.commit('changeIsStartStu',true)
      }).catch(err => {
        console.log(err)
      })
    } 
  },
  mounted(){
    this.getStuWords()
    this.getRadomChoice()
  }
}
</script>

<style>
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
}
.content div{
  margin-top: 10px;
}
</style>

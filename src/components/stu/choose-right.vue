/**
*  错误选项哪里来？ 随机生成三个ID请求单词
**/

<template>
  <div>
    <div class="choose-right-wrapper" v-if="isShowSubject && word.process===-1">
     <div class="word-info">
        <div class="word">
          <div class="word">{{word.en}}</div>
          <div class="mean">{{word.cn}}</div>
        </div>  
      </div>
      <ul class="word-example">
        <li v-for="(p,index) in section" :key="index">
          <div v-html="p.en"></div>
          <div v-html="p.cn"></div>
        </li>
      </ul>
      <div class="understand-btn"><confirm-btn text="知道了" style="width:500px" @on-click="start"/></div>
    </div>
    <div class="choose-right-wrapper" v-else-if="isShowSubject && word.process === 0">
      <div class="word" v-html="section[index].en"></div>
      <div class="mean" v-html="section[index].cn"></div>
      <div class="choice-list">
        <ul @click="getAnswer($event)" >
          <li v-for="(choice,index) in choices" :key="index" :class="{choosed:index === myAnswer}">{{choice.en}}</li>  
        </ul>
      </div>
      <div class="understand-btn"><confirm-btn text="选好了" style="width:500px" @on-click="judgeAnswer"/></div>
    </div>
    <div class="choose-right-wrapper" v-else-if="isShowSubject && word.process === 1">
      <div class="prompt">{{word.en}}</div>
      <div class="choice-list">
        <ul @click="getAnswer($event)">
          <li v-for="(choice,index) in choices" :key="index" :class="{choosed:index === myAnswer}">{{choice.cn}}</li>  
        </ul>
      </div>
      <div class="understand-btn"><confirm-btn text="选好了" style="width:500px" @on-click="judgeAnswer"/></div>
    </div>
    <div class="choose-right-wrapper" v-else-if="isShowSubject && word.process===2">
      <div class="prompt">{{word.cn}}</div>
      <div class="choice-list">
        <ul @click="getAnswer($event)">
          <li v-for="(choice,index) in choices" :key="index" :class="{choosed:index === myAnswer}">{{choice.en}}</li>  
        </ul>
      </div>
      <div class="understand-btn"><confirm-btn text="选好了" style="width:500px" @on-click="judgeAnswer"/></div>
    </div>
    <div v-else class="right-wrapper">
      <div  class="choose-right-wrapper">
        <div>{{rightContent.title}}</div>
        <div class="right">{{rightContent.con}}</div>
        <div class="understand-btn"><confirm-btn text="知道了" style="width:500px" @on-click="next"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmBtn from '../basic/btn'
import random from '@/methods/random-subject.js'

export default {
  model:{prop:'id',event:'next'},
  props:['word','id','choices','answer'],
  components:{
    ConfirmBtn
  },
  data(){
    return {
      wordId:this.id%5,
      mainWord:this.word,
      isShowSubject:true,
      myAnswer:'',
      rightContent:{title:'',con:''},
      recommendContent:'',
      section:[]
    }
  },
  computed:{
    index(){
      return random(0,2)[0]
    }
  },
  methods:{
    back(){
      this.$router.push({path:'/usr'})
    },
    getAnswer(event){
      const target = event.target
      this.myAnswer = Array.prototype.slice.call(target.parentNode.childNodes).indexOf(target) 
    },
    judgeAnswer(){
      if(this.myAnswer === this.answer){
        this.word.process += 1
        this.next()
      } else {
        this.word.wrong_times += 1
        if(this.word.process === 1 || this.word.process === 0){
          this.rightContent = {title:this.word.en,con:this.word.cn}
        }
        if( this.word.process === 2){
          this.rightContent = {title:this.word.cn,con:this.word.en}
        }
        this.isShowSubject = false
      }
    },
    next(){  
      this.isShowSubject = true
      this.myAnswer = ''
      this.$emit('next',++this.wordId)
    },
    start(){
      this.word.process +=1
      console.log(this.word)
    },
    getSection(){
      console.log(this.word.en)
      this.axios.get('/api/jinshan',{
        params:{
          word:this.word.en
        }
      }).then(res => {
        this.section = res.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  watch:{
    word(){
      this.getSection()
    }
  },
  mounted(){
    this.getSection()
  }
}
</script>

<style>

.choose-right-wrapper{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eceaea;
  padding-bottom: 20px;
}
.right-wrapper{
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  background-color: rgb(252, 253, 253);
}
.word{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.word-example{
  list-style: circle;
}
.word-example li{
  margin-top: 20px;
  background-color: #f8e695;
}
.right{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: #f8e695;
  margin-bottom: 20px;
}
.choose-right-wrapper .choice-list  .choosed{
  background-color: #f7d84f;
}
.choose-right-wrapper .choice-list li{
  background-color: #f8e695;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
  padding: 5px;
}
.choose-right-wrapper .choice-list ul{
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>

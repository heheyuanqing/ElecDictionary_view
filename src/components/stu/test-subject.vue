<template>
  <div>
    <div class="test-subject-wrapper">
      <div class="prompt">{{word.en}}</div>
      <div>
        <ul @click="getAnswer($event)">
          <li v-for="(choice,index) in choices" :key="index" :class="{choosed:index === myAnswer}">{{choice.cn}}</li>  
        </ul>
      </div>
      <div class="understand-btn"><confirm-btn text="选好了" style="width:600px" @on-click="judgeAnswer"/></div>
    </div>
  </div>
</template>

<script>
import ConfirmBtn from '../basic/btn'
export default {
  model:{prop:'id',event:'next'},
  props:['word','id','choices'],
  components:{
    ConfirmBtn,
  },
  data(){
    return {
      wordId:this.id,
      isShowSubject:true,
      myAnswer:'',
      rightContent:{title:'',con:''},
      recommendContent:''
    }
  },
  methods:{
    back(){
      this.$router.push({path:'/usr'})
    },
    getAnswer(event){
      const target = event.target
      this.myAnswer =Array.prototype.slice.call(target.parentNode.childNodes).indexOf(target) 
    },
    judgeAnswer(){
      this.$emit('on-answer',this.myAnswer)
    },
    next(){  
      this.isShowWordInfo = false
      this.myAnswer = ''
      this.$emit('next',++this.wordId)
    },
   
  }
}
</script>

<style>

.test-subject-wrapper{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eceaea;
  padding-bottom: 20px;
}
.right{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: #f8e695;
  margin-bottom: 20px;
}
.test-subject-wrapper .choosed{
  background-color: #f7d84f;
}
.test-subject-wrapper li{
  background-color: #f8e695;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
}
.test-subject-wrapper ul{
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>

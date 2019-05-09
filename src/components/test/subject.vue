<template>
  <div>
    <div class="usr-test-subject-wrapper" v-if="isShowSubject">
      <div class="prompt">{{word.en}}</div>
      <div>
        <ul @click="getAnswer($event)">
          <li v-for="(choice,index) in choices" :key="index" :class="{choosed:index === myAnswer}">{{choice.cn}}</li>  
        </ul>
      </div>
      <div class="understand-btn"><confirm-btn text="选好了" style="width:600px" @on-click="judgeAnswer"/></div>
    </div>
    <div v-else class="right-wrapper">
      <div  class="choose-right-wrapper">
        <div>{{rightContent.title}}</div>
        <div class="right">{{rightContent.con}}</div>
        <div class="understand-btn"><confirm-btn text="下一个" style="width:500px" @on-click="next"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmBtn from '../basic/btn'
export default {
  model:{prop:'id',event:'next'},
  props:['word','id','choices','answer','right'],
  components:{
    ConfirmBtn,
  },
  data(){
    return {
      wordId:this.id,
      isShowSubject:true,
      myAnswer:'',
      rightContent:{title:'',con:''},
      recommendContent:'',
      times:this.right
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
      if(this.myAnswer === this.answer){
        this.next()
        this.$emit('on-right',++this.times)
      } else {
        this.isShowSubject = false
      }
    },
    next(){  
      this.isShowWordInfo = false
      this.myAnswer = ''
      this.$emit('next',++this.wordId)
    }
  }
}
</script>

<style>

.usr-test-subject-wrapper{
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
.right{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: #f8e695;
  margin-bottom: 20px;
}
.usr-test-subject-wrapper .choosed{
  background-color: #f7d84f;
}
.usr-test-subject-wrapper li{
  background-color: #f8e695;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
}
.usr-test-subject-wrapper ul{
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>

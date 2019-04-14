<template>
  <div>
    <div class="name">我的词库<btn @click="startStu" :text="btnText" class="start-stu"/></div>
    <div class="words-list">
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
      <word-card :btnContent="btnContent" :process="true" class="list"></word-card>
  </div>
  </div>
</template>
<script>
import wordCard from '../basic/word-card'
import Btn from '../basic/btn'
export default {
  components: {
    wordCard,
    Btn,
   
  },
  data() {
    return {
      btnContent: '删除',
      btnText: '进入学习'
    }
  },
  methods: {
    startStu() {
      this.$router.push({ path: '/stu_page' })
    }
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

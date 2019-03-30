<template>
  <div class="words">
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
    <word-card :btnContent="btnContent" :process="true"></word-card>
  </div>
</template>
<script>
import wordCard from '../word-card'
export default {
  components:{
    wordCard
  },
  data(){
    return{
      btnContent:"删除"
    }
  }
}
</script>
<style>
.words{
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.words > div{
  margin-left:15px;
  margin-top: 10px;
}
</style>

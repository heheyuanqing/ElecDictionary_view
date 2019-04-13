<template>
  <div class="main">
    <div class="title"><img width="200" height="100" src="../../assets/youyong.png" alt="logo"></div>
    <div class="input-part">
      <input type="text" v-model="name" placeholder="姓名">
    </div>
    <div class="input-part">
      <input type="password" v-model="psw" placeholder="密码">
    </div>
    <div class="btn-part">
      <button @click="login">登陆</button>
      <button style="margin-left:10px;" @click="logup">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      psw: '',
    }
  },
  methods: {
    login() {
      this.axios.get('/user', {
        params: {
          name: this.name,
          psw: this.psw
        }.then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      })
    },
    logup() {
      this.$router.push({ path: '/usr/logup' })
    }
  }
}
</script>
<style>
.main{
  width: 100%;
}
.title{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
.input-part,.btn-part{
  width:100%;
  display:flex;
  justify-content:center;
  margin-top: 15px;
}
input{
  width: 30%;
  height: 30px;
  border:1px solid #dddddd;
  border-radius: 6px;
  padding-left: 10px;
  outline: none;
}
button{
  margin-top: 15px;
  width: 100px;
  height:30px;
  border:0;
  border-radius: 4px;
  background-color: #ffe057;
}
</style>


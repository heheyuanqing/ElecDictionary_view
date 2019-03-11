<template>
  <div class="header">
    <div class="logo"></div>
    <div v-if="isSearchPage">
      <input class="searchInput"/>
    </div>
    <div class="usr" v-if="isHost">
        <button>登录/注册</button>
    </div>
    <div v-else>{{usrname}}</div>
  </div>
</template>
<script>
  exports.default={
    data(){
      usrname:"heheyuanqing"
    }
  }
</script>
<style>
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

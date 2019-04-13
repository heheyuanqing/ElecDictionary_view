<template>
  <div>
    <div class="center-box">
      <div class="usr-info">
        <div class="avatar"><img width="100" height="100" src="../assets/avatar.png" alt="头像"></div>
        <div class="usr-name">{{name}}</div>
      </div>
    </div>
    <div class="center-box">
      <div style="width:70%">
        <div class="sel-words">报错信息</div>
        <div v-if="errMsg" class="err-msg">暂时没有人报错哦～</div>
        <div class="sel-words">词库管理</div>
        <div class="handle-words-part">
          <input type="text" placeholder="请输入单词" class="search-word"/>
          <button>查询</button>
          <button>添加</button>
          <div class="word-list">
            <div>word</div>
            <div>mean</div>
            <div>
              <img src="../assets/reload.png" alt="更新" width="20" height="20" @click="handleWord">
              <img src="../assets/garbage.png" alt="删除" width="20" height="20" @click="handleWord" class="icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        name: '管理员',
        errMsg: []
      }
    }
}
</script>
<style>
.icon{
  margin-left: 20px;
}
.center-box{
  display:flex;
  justify-content:center;
  margin-top: 30px;
}
.usr-info{
  width: 70%;
  padding: 15px;
  border:1px solid #cacccd;
  display: flex;
  flex-direction: row;
}
.usr-info img{
  border-radius: 50%;
}
.usr-name{
  margin-left: 50px;
  flex-basis: 50%;
}
.sel-words{
  border-left: 5px solid #f1d96b;
  padding-left: 20px;
  margin-top: 20px;
}
.err-msg{
  text-align: center;
  margin-top: 10px;
  border-bottom: 1px solid #f1d96b;
}
.handle-words-part{
  margin-top: 20px;
}
.search-word{
  width: 200px;
  height: 20px;
  padding: 5px;
  outline: none;
}
.word-list{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1d96b;
}
button{
  width: 100px;
  height:30px;
  border:0;
  border-radius: 4px;
  background-color: #ffe057;
}
</style>

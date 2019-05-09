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
          <input type="text" placeholder="请输入单词" class="search-word" v-model="inputVal"/>
          <button @click="searchWord">查询</button>
          <button @click="addWord">添加</button>
          <div class="word-list" v-if="targetW.en">
            <div>{{targetW.en}}</div>
            <div>{{targetW.cn}}</div>
            <div>
              <img src="../assets/reload.png" alt="更新" width="20" height="20" @click="updateWord">
              <img src="../assets/garbage.png" alt="删除" width="20" height="20" @click="deleteWord" class="icon">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-box" v-if="isShowHandleWord && action">
      <div class="content">
        <div v-if="action==='delete'">{{targetW.en}}</div>
        <div v-if="action==='delete'">{{targetW.cn}}</div>
        <div v-if="action==='update'"><input type="text" :placeholder="targetW.en" class="change-word" v-model="en"/></div>
        <div v-if="action==='update'"><input type="text" :placeholder="targetW.en" class="change-word" v-model="cn"/></div>
        <div v-if="action==='add'"><input type="text" placeholder="英语单词" class="change-word" v-model="en"/></div>
        <div v-if="action==='add'"><input type="text" placeholder="中文释义" class="change-word" v-model="cn"/></div>
        <div class="confirm-btn">
          <button @click="postUpdatInfo">确定</button>
          <button @click="onCancel">取消</button>
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
      isShowHandleWord: false,
      inputVal:'',
      errMsg: [],
      targetW:{},
      action:'',
      en:'',
      cn:''
    }
  },
  methods: {
    updateWord() {
      this.isShowHandleWord = true
      this.action = "update"
    },
    onCancel() {
      this.isShowHandleWord = false
    },
    addWord() {
      this.isShowHandleWord = true
      this.action = "add"
    },
    deleteWord() {
      this.isShowHandleWord = true
      this.action = "delete"
    },
    postUpdatInfo() {
      switch (this.action) {
        case 'add': this.axios.post('/api/addIntoWords', {
                      word:{en:this.en,cn:this.cn}
                    }).then(res => {
                      console.log(res)
                      this.isShowHandleWord=false
                      alert(res.data.msg)
                    }).catch(err => {
                      console.log(err)
                    });break;
        case 'delete':this.axios.post('/api/deleteWords', {
                      word:this.inputVal
                    }).then(res => {
                      this.isShowHandleWord=false
                      alert(res.data.msg)
                    }).catch(err => {
                      console.log(err)
                    });break;
        case 'update':this.axios.post('/api/updateWord', {
                      word:{en:this.en,cn:this.cn}
                    }).then(res => {
                      this.isShowHandleWord=false
                      alert(res.data.msg)
                    }).catch(err => {
                      console.log(err)
                    });break;
      }
     

    },
    searchWord() {
      this.axios.get(`/api/search`,{
        params:{
          word:this.inputVal
        }
      }).then( res =>{
        if(res.status === 200){
          this.targetW =res.data.msg
        }      
      }).catch(err => {
        console.log(err)
      })
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
.confirm-box{
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
.content{
  position: relative;
  width: 500px;
  height: 300px;
  background-color:white;
  margin-top: 50px;
}
.content > div{
  text-align: center;
  margin-top: 38px;
}
.change-word{
  padding-left: 8px;
  height: 40px;
  width: 70%;
  border-radius: 10px;
  outline: none;
}
.confirm-btn{
  position: absolute;
  bottom: 20px;
  left: 30%;
}
button{
  width: 100px;
  height:30px;
  border:0;
  border-radius: 4px;
  background-color: #ffe057;
}
</style>

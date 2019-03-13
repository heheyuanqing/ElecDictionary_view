<template>
  <div class="main">
    <div class="logo">LOGO</div>
    <div class="input-part">
      <input type="text">
    </div>
    <div class="btn-part">
        <button>搜索</button>
        <button style="margin-left:10px;">更多单词</button>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input-part,.btn-part{
  width:100%;
  display:flex;
  justify-content:center;
}
input{
  width: 40%;
  height: 30px;
  border:1px solid #dddddd;
  border-radius: 6px;
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

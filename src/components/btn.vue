<template>
    <div>
        <button>{{value}}</button>
    </div>
</template>
<script>
export default {
    data(){
      return {
        value:this.props.value  
      }
    }
}
</script>
<style>
button{
  width: 100px;
  height:30px;
  border:0;
  border-radius: 4px;
  background-color: #ffe057;
}
</style>

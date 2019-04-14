<template>
  <button>
    <span>{{text}}</span>
  </button>
</template>
<script>
export default {
    props: ['text'],
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

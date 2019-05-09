
const diffRandom = (n) => {
  let arr = [],index=0

  while(index < n){
    let num= Math.floor(Math.random()*(84658-1)+1);
    if(arr.indexOf(num) == -1){
      arr.push(num)
      index++
    }
  }
  return arr
}

module.exports = diffRandom
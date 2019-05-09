/** 将原有顺序打乱 */

const random = (min,max) => {
    let arr =[]
  
    while(min <= max){
      arr.push(min)
      min++
    }
  
    let k = arr.length;
    while (k) {
        let j = Math.floor(Math.random() * k--);
        [arr[j], arr[k]] = [arr[k], arr[j]];
    }
    return arr;
}

module.exports = random
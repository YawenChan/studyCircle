// Mika
// Submitted
// [Sum of Digits / Digital Root from Mika](https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript)
function digitalRoot(n) {
    if(n === 0){
        return 0
    }
    const initValue = n.toString()
    let numArr = [...initValue]
    let numLen = n.toString().length; // 轉str type 和計算str長度
    
    if(numLen === 1) return numLen[1];
    
    let sum = 0;
    
    function countArrSum(){
      sum = 0;
      numArr.forEach((value)=>{
        sum += parseInt(value,10);
      })
      numLen = sum.toString().length;
      const newValue = sum.toString();
      numArr = [...newValue];
    }
  
    while(numLen > 1){
      countArrSum()
    }
    
    return sum
    
  }
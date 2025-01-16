//function1.js

// function addNumer() {
//   let num1 = 2;
//   let num2 = 3;
//   let sum = num1 + num2;
//   alert(`결과값: ${sum}`);
// }

// addNumer();

let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

//기능정의. 함수의 정의구문에서는 변수. 
function arraySum(numAry=[]) {
  let sum = 0;
  for (let i = 0; i < numAry1.length; i++) {
    sum = sum + numAry[i];
  }
  console.log('합계:' + sum);
} 


arraySum([10, 20, 30]); //함수를 호출헤서 실행할때는 값.
arraySum(numAry2); 
arraySum(numAry3);





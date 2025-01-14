//basic5.js

// 두 숫자를 입력받아서 두수의 곱을 출력
// 첫번째 값에 5의 값을 더하고, 두번째 3의 값을 빼서 두수의 차를 구해보세요

let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "))
let secondValue = parseInt(prompt("두번째 값을 입력하세요: "))

firstValue += 5;
secondValue -= 3;

let result = firstValue - secondValue;
console.log(`${firstValue}와 ${secondValue}의 차는 ${result}입니다.`)
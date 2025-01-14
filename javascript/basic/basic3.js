//basic3.js

// 두 숫자를 입력받아서 두수의 곱을 출력

let Number1 = prompt("값을 입력하세요");
let Number2 = prompt("값을 입력하세요");
Number1 = ++Number1;
Number2 = --Number2;
console.log(Number1,Number2)
let result = Number(Number1) * Number(Number2);
console.log(`${Number1}과 ${Number2}의 곱은 ${result} 입니다.`)





//basic2.js

let anyVal = prompt("값을 입력하세요: "); //문자 리터럴(숫자를 넣어도 문자열로 나옴)
let anyVal2 = prompt("값을 입력하세요: ");
let anyVal3 = prompt("값을 입력하세요: "); 
let anyVal4 = prompt("값을 입력하세요: "); 

let result = anyVal + anyVal2 //문자열이라서 문자+문자로 나옴(예: 12+12=1212)
let result2 = Number(anyVal3) + parseInt(anyVal4); //숫자열로 바꿈 



console.log(typeof anyVal);
console.log(`두수의 합은 ${result} 입니다. `);
console.log(`두수의 합은 ${result2} 입니다. `);
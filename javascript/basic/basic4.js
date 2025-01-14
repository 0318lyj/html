// 278 시간 => 11일 몇시간 입니다. 

// let firstValue = parseInt(prompt("시간을 입력하세요: " ));
// let result = parseInt(firstValue/24);
// let result2 = parseInt(firstValue%24);

// console.log(`${result}일 ${result2}시간 입니다`)

// 89345분 => ?일 ?시간 ?분 입니다

// let firstValue = parseInt(prompt("분을 입력하세요: "))
// let result = parseInt(firstValue/1440);
// let secondValue = parseInt(firstValue%1440);
// let result2 = parseInt(secondValue/60);
// let result3 = parseInt(result2/60);

// console.log(`${result}일 ${result2}시간 ${result3}분 입니다.`)

//수정된 부분

let firstValue = parseInt(prompt("분을 입력하세요: "));
let result = parseInt(firstValue / 1440); // 일 계산
let secondValue = parseInt(firstValue % 1440); // 남은 분 계산
let result2 = parseInt(secondValue / 60); // 시간 계산
let result3 = parseInt(secondValue % 60); // 분 계산

console.log(`${firstValue}분은 ${result}일 ${result2}시간 ${result3}분 입니다.`);


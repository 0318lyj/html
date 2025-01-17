//연습1. exe1.js
//문제1번 사람이름만 출력하게 
// let myFriends = [];
// myFriends.push({name: "홍길동", escore: 70});
// myFriends.push({name: "신현욱", escore: 80});
// myFriends.push({name: "김민식", escore: 90});
// myFriends.push({name: "석지욱", escore: 95});

// //forEach: 콘솔출력
// myFriends.forEach(function (item, idx, ary) {
//   console.log(`${idx + 1}: ${item.name}`);
// });

//문제2번 영어점수가 90점이상인 사람만 출력하게 만든다
// let myFriends = [];
// myFriends.push({name: "홍길동", escore: 70});
// myFriends.push({name: "신현욱", escore: 80});
// myFriends.push({name: "김민식", escore: 90});
// myFriends.push({name: "석지욱", escore: 95});

// //forEach: 콘솔출력
// myFriends.forEach(function (item, idx, ary) {
//   if (item.escore >= 90) {
//     console.log(`${item.name}`)
//   }
// });

//문제 3번 forEach: 콘솔출력 평균점수가 80이상
// let myFriends = [];
// myFriends.push({name: "홍길동", escore: 70, kscore: 78, gender:'Female'});
// myFriends.push({name: "신현욱", escore: 80, kscore: 88, gender:'Female'});
// myFriends.push({name: "김민식", escore: 90, kscore: 70, gender:'Male'});
// myFriends.push({name: "석지욱", escore: 95, kscore: 55, gender:'Female'});


// myFriends.forEach(function (item, idx, ary) {
//   if ((item.escore + item.kscore)/2 >= 80) {
//     console.log(item.name)
//   }
// });

//문제 4번 여학생의 영어 평균을 구하라 
// let myFriends = [];
// myFriends.push({name: "홍길동", escore: 70, kscore: 78, gender: 'Female'});
// myFriends.push({name: "신현욱", escore: 80, kscore: 88, gender: 'Female'});
// myFriends.push({name: "김민식", escore: 90, kscore: 70, gender: 'Male'});
// myFriends.push({name: "석지욱", escore: 95, kscore: 55, gender: 'Female'});

// let totalEscore = 0; // 여학생 영어 점수 총합
// let femaleCount = 0; // 여학생 수

// myFriends.forEach(function (item) {
//   if (item.gender === 'Female') { // 여학생인지 확인
//     totalEscore += item.escore; // 영어 점수 누적
//     femaleCount++; // 여학생 수 증가
//   }
// });

// // 여학생 평균 영어 점수 계산
// let averageEscore = femaleCount > 0 ? totalEscore / femaleCount : 0;

// console.log("여학생의 영어 평균 점수는" + averageEscore + "점입니다.");

//filter: 여학생의 영어평균 미만인 학생을 출력 => underAvgAry 저장.

let myFriends = [];
myFriends.push({name: "홍길동", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name: "신현욱", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name: "김민식", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name: "석지욱", escore: 95, kscore: 55, gender: 'Female'});

let totalEscore = 0; 
let femaleCount = 0; 


myFriends.forEach(function (item) {
  if (item.gender === 'Female') { 
    totalEscore += item.escore; 
    femaleCount++; 
  }
});


let averageEscore = femaleCount > 0 ? totalEscore / femaleCount : 0;


let underAvgAry = myFriends.filter(function (item) {
  return item.gender === 'Female' && item.escore < averageEscore;
});


console.log("여학생의 영어 평균 점수는 " + averageEscore + "점입니다.");
console.log("여학생의 영어 평균 미만인 학생:", underAvgAry);



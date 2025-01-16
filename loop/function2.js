//function2.js

// 함수이름 : getMAx
// 매개변수: 배열(numAry)
// 기능 배열의 요소중에서 제일 큰값을 콘솔출력 

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}


//매개변수로 받은 값중에서 제일 큰 요소를 출력 
function getMAx(numAry = []) {
  let max = 0;                              //제일 큰 값을 담아 놓을 변수 선언
  for (let i = 0; i < numAry.length; i++){  //배열을 받 비교하도록 반복문
    //제일 큰 값을 max에 저장하기 
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
  console.log(`제일큰값은 ${max}`);
}

getMAx(ary1);
getMAx(ary2);
getMAx(ary3);
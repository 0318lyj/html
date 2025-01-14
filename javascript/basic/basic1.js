//basic1.js
/*
  변수 선언: 이름, 연락처, 주소 선언.
  console 출력.
*/
//변수 선언
let myName = "이용진"
myName = "김길동"; //변수 초기화
let myPhone = "010-3554-6979"
let myHome =  "대구광역시 수성구 고산로 162 한일유앤아이 102동 801호"

let largeNumber = 10000000000000000000000000000000000n;//n은 숫자 그대로 출력 
console.log(largeNumber);

const bloodType = "o형";//const는 상수(변하지 않는 수)
const PI = 3.14; // 만들고 있는 프로그램에서 변하지 않는 값으로 선언 

let myInfo = {    //복합형태의 변수를 담고있는 것 
  name: "홍길동",
  age: 20
};

let scores = [10, 20, 30]; //배열
let specialType; //변수를 선언만 하면 undefined 상태
let speCial = null;//변수를 null로 하면 object 상태

//출력
console.log("내 이름은" + myName + "입니다.");
console.log(`연락처는` + myPhone + `입니다.`);
console.log(`주소는 ${myHome} 입니다.`);
console.log(bloodType)
console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI} 입니다.`);

console.log(typeof myName); //변수의 자료형을 출력(변수가 문자인지 숫자인지 확인할 수 있음 숫자=int, 문자=string)
console.log(typeof (PI == 3)); // 변수가 true인지 false인지 확인시켜준다.
console.log(myInfo);
console.log(scores);
console.log(specialType);
console.log(speCial);
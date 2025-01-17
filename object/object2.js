//object2.js

let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2); // concat(배열요소 합치는 용어 .을 붙여 쓴다)

console.log(resultAry.join('-').split('-')); 
//join은 지금 resultAry에 -을 붙여주는 용어. split은 자주 쓴다.
//join => 배열 -> 문자열
//split => 문자열 -> 배열 

let result = resultAry.join('-').split('-');
result.push('60'); //unshift
console.log(result.pop()); //shift 

console.log(result, result.indexOf('200')); //요소의 인덱스 반환 

console.clear(); //위의 콘솔에 나온 결과물을 지워준다 
result = ["홍길동" , "김민수", "허성식", "박창식"]

if (result.indexOf('김민수') != -1) {
  console.log("찾는 이름이 존재합니다.");
} else {
  console.log("찿는 이름이 없습니다.");
}

console.log(result.at(1)); //인덱스에 해당하는 값을 변환 

result.sort().reverse().join(); // sort 정렬 reverse 역순 정렬 join 문자열로 바꿔주는 함수  
console.log(result);



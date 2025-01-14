//condition2.js
//입력받은 숫자 => 2의 배수, 3의 배수인지?
//6 => 2 와 3의 배수입니다.
//4 => 2의 배수입니다. 9 =? 3의 배수입니다.


let firstValue = parseInt(prompt("값을 입력하세요"))


  if (firstValue % 2 == 0 && firstValue % 3 ==0) {
    console.log("2와 3의 배수입니다.");
  } else if (firstValue % 3 ==0) {
    console.log("3의 배수입니다.");
  } else if (firstValue % 2 == 0){ 
    console.log("2의 배수입니다.");
  } 





//다음 코드는 두 숫자 num1과 num2를 비교하여, 두 숫자의 크기 관계를 출력합니다. 
// 아래 조건에 따라 코드를 완성하세요.

// 조건

// num1과 num2를 입력합니다.
// 두 숫자가 같으면 "두 숫자는 같습니다."를 출력합니다.
// num1이 더 크면 "첫 번째 숫자가 더 큽니다."를 출력합니다.
// 그렇지 않으면 "두 번째 숫자가 더 큽니다."를 출력합니다.

let num1 = parseInt(prompt("값을 입력: "))
let num2 = parseInt(prompt("값을 입력: "))

if (num1 == num2) {
  console.log("두 숫자는 같습니다")
} else if (num1 > num2) {
  console.log("첫번째 숫자가 더 큽니다.")
} else if  (num2 > num1) {
  console.log("두번째 숫자가 더 큽니다.")
}


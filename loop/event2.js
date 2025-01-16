function outer() {
  const secret = "비밀 메시지!"; // 비밀 창고 안에 있는 물건

  function inner() {
    // 창고 열쇠(Inner 함수) - secret에 접근 가능
    console.log("inner가 secret을 가져옴:", secret);
  }

  return inner; 
}

const getSecret = outer(); 
// getSecret은 outer의 inner 함수를 가리킵니다.
// 하지만 outer 실행이 끝났는데도 secret에 접근할 수 있어요!

getSecret(); 
// 콘솔 출력: "inner가 secret을 가져옴: 비밀 메시지!"



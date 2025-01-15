while (true) {
  let searchName = prompt("찾을 친구 입력: ");
  if(searchName ='stop'){
    break; // while 반복문 종료.
  }
  let exists = false; //존재여부를 담아놓기
  for(let i = 0; i < members.length; i++){
    //배열의 이름 속성 중에서 searchName과 같으면 포인트를 콘솔 출력.
    if (members[i].member_name == searchName) {
      console.log(`${searchName}의 포인트는 ${members[i].point}`);
      exists = true;
      break;
    }
  }
  if (!exists) {
    alert("찾는 친구이름이 없습니다.");
  }
}// end of while.
console.log(`end of program.`);



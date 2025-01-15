// let members = [];
// members[0] = {member_id: "user01", member_name: "홍길동", point: 80};
// members[1] = {member_id: "user02", member_name: "신현욱", point: 90};
// members[2] = {member_id: "user03", member_name: "김민식", point: 85};

// let searchName = prompt("찾을 친구 이름 입력: ");
// for (let i = 0; i<members.length; i++) {
//   //배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔 출력.
//   if (members[i].member_name == searchName) {
//     console.log(`${searchName}의 포인트는 ${members[i].point}`);
//   }
// }




//수정된 부분 
let members = [];
members[0] = {member_id: "user01", member_name: "홍길동", point: 80};
members[1] = {member_id: "user02", member_name: "신현욱", point: 90};
members[2] = {member_id: "user03", member_name: "김민식", point: 85};

let searchName = prompt("찾을 친구 이름 입력: ");
let found = false; // 검색 결과를 표시하기 위한 플래그

for (let i = 0; i < members.length; i++) {
  if (members[i].member_name === searchName) { // 이름이 같은 경우
    console.log(`${searchName}님의 포인트는 ${members[i].point}점입니다.`);
    found = true;
    break; // 검색이 끝났으니 반복문 종료
  }
}

if (!found) {
  console.log("해당 이름의 회원을 찾을 수 없습니다.");
}






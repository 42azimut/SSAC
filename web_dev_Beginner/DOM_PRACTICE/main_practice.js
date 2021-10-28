// 1 반복문
let arr = [2,4,5,6,7,9,12];

for (e in arr) {
    if (e & 2 === 1) {
        console.log(object);
    }
}


// 2 반복문 제어 
let num = 0;
if (num < 1 || num > 9) {
    console.log("1-9 사이 정수만 입력 가능");
}

while (num<1 || num > 9) {
    num = prompt("1~9사이의 정수를 입력하시요 : ");
}

for (let i=1; i < 10; i++) {
    console.log(num, "*", i, "=", num*i ) ;
}


// 함수
function double(n) {
    return n * 2;
}
console.log(double(5));

// 성적 결산 프로그램 만들기
const userId = "hello";
const userPwd = "world";
const dataSet = { 홍길동: 90, 홍길순: 88, 김철수: 60, 정보미: 100, 박민식: 90 };

function login() {
  const inputId = prompt("아이디를 입력하세요");
  const inputPwd = prompt("비밀번호를 입력하세요");
  return userId == inputId && userPwd == inputPwd;
}

function settlement(score) {
  if (100 >= score && score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function program(dataSet) {
  // 회원 검증
  if (!login()) {
    return alert("로그인 정보를 확인하세요.");
  }

  // 실행 여부 확인
  const isStarted = confirm("성적 결산을 시작할까요?");
  if (!isStarted) {
    return alert("프로그램을 종료합니다.");
  }

  // 결산
  for (data in dataSet) {
    const result = settlement(dataSet[data]);
    dataSet[data] = result;
  }

  return alert("결산이 완료되었습니다. \n" + JSON.stringify(dataSet));
}

program(dataSet);
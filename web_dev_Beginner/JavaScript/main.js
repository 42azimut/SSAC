// 할당
let box = 0;
console.log(box);

// 재할당
box = 2222
console.log(box);

// let & constant
let myName = 'Jayden'
console.log(myName);

myName = 'Michell'
console.log(myName);


const myName2 = 'Brian'
console.log(myName2);

// const myName2 = "Google"   // 에러 발생! 
// console.log(myName2);


let bl = true;
console.log(bl);

let t = 100 === '100'
console.log(t);

console.log(typeof bl, typeof 2);


// 배열 조작! crud
let arr = [1, 2, 3, 4, 5]
console.log(arr[0]);
console.log(arr.slice(1, 3));
console.log(arr.splice(-1));
console.log(arr);
arr[5] = 100
console.log(arr);

console.log(arr.length);

// 구조분해 할당
const arr2 = [6, 7, 8]
const [first, second, third] = arr2;
console.log(first, second, third);


// JSON 
let userInfo = {
    email: 'azim.gmail.com',
    password: 'a1234'
}
console.log(userInfo);  // { email: 'azim.gmail.com', password: 'a1234' }

// 위 콘솔과 차이점!!! 키 확인!!!
const json_usr = JSON.stringify(userInfo); 
console.log(json_usr);  // {"email":"azim.gmail.com","password":"a1234"}

console.log(userInfo.email);
console.log(json_usr.email);  //undefiend

userInfo.email = 'updated_email'
console.log(userInfo);

console.log(json_usr);


// JSON 연습문제
// 1. title, date, users 세가지 키값을 가지는 json 객체를 선언합니다.
// 2. title에는 "코하전자"
// 3. date에는 "2020-10-10"
// 4. users에는 빈 배열을 선언합니다.
// 5. users 속성에 json 객체로 `email: "dummy@dummy.com", password: "a123"` 을 추가합니다.

let object = {
    title: "",
    date: "",
    users: ""
}
object.title = '코하전자';
object.date = "2020-10-25";
object.users = []
console.log(object);

object.users.push({
        email: "dummy@dummy.com", 
        password: "a123"})

console.log(object);

// 연산자와 조건문!!

// ## 중간정리 실습: 적정체중 계산 코딩

// — 브라우저 함수 간단 소개할 것 (confirm, prompt, alert)

// `적정체중 = (키 - 100) * 0.9` 라고 합니다.

// 1. 본인의 키를 변수에 저장하세요.
// 2. 본인의 적정체중을 변수에 저장하세요
// 3. 아래 문자열을 콘솔창에 반환하세요.

// `당신의 키는 -cm이며 적정체중은 -kg입니다.`

// const isValidReq = confirm('페이지를 벗어날꺼요?')
// console.log(isValidReq);

// const height = prompt('본인의 키를 입력하세요')
// const weight = prompt('체중을 입력하세요!')

// const fit = (height - 100) * 0.9
// //console.log("당신의 키는", height, "cm이며 적정 체중은 ", weight, "입니다.");
// //템플릿 리터럴!
// console.log(`당신의 키는 ${height}센티 이며, 현체중은 ${weight} 이며,  적정 체중은 ${fit}kg 입니다`);

// //조건문
// let score = 89;

// if (score > 90) {
//     console.log("A");
// } else if (score >= 80 && score <= 90) {
//     console.log("B");
// } else {
//     console.log("C");
// }


// 연습문제
// - num이라는 변수에 원하는 숫자형 자료를 대입하세요.
// - num을 2로 나누었을 때 나머지가 1이라면 홀수, 0이라면 짝수입니다.
// - 홀수일때는 `console.log("홀수");` 짝수일때는 `console.log("짝수");` 를 출력하세요.
// - if, else문을 사용하여 해결해보면 됩니다.

num = 77
if (num % 2 === 1) {
    console.log("홀수");
} else {
    console.log(짝수);
}

// 삼항 연산자! 
let result = 10 > 2 ? 1 : 2;
console.log(result);

// while  반복문
let i = 0;
while (i < 10) {
    console.log(`${i} 반복문 증가!`);
    i++;
}

// while문 실습
// 1~50까지 숫자중 5의 배수만 출력!
let k = 1;
while (k <= 50) {
    if (k % 5 === 0) {
        console.log(k);
    }
    k++;
}

// // 실습 : 두번쨰로 큰 숫자는?
// const [first, second, third] = [5, 3, 4];

// // first 가 두번쨰로 큰 수라 가정하는 조건문!
// const firstAnswer =  (first > second && first < third) || (first > third && first < second)

// // second가 두번째로 큰 수라 가정
// const secondAnswer = (...)

// // third가 두번째로 큰수라 가정
// const thirdAnswer = (...)

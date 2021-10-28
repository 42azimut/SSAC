// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementById("hi"));
// console.log(document.getElementsByClassName("welcome")[0]);
// console.log(document.querySelector("div.welcome"));
// console.log(document.querySelectorAll("div"));

const selector = document.querySelector("#hi")
const inner = document.querySelector("#inner")

selector.innerHTML = "<h1> how are you</h1>"

inner.innerText = "my contents with innerText"

///  중첩된 태크게엇 선택!
const container = document.querySelector(".container")
console.log(container);
// 부모 태그
console.log(container.parentElement);
// 자식 태그
console.log(container.children);
// 형제 태그
console.log(container.children[0].children[0].nextElementSibling);

// 노드 방식 번거로움
// 다음은 div.inner 태그 내부에 `<div>hello</div>`를 추가하는 예제입니다.
let inner2 = document.querySelector(".inner2")
// <div>태그 생성
let element = document.createElement('div');
// text 노드 hello 생성
let hello = document.createTextNode("hello");
// div.innner2에  element 추가
inner2.appendChild(element);
// <div> hello </div>로 만들기
element.appendChild(hello);


// 리터럴 방식
//const app = document.querySelector("div#app");
//const productsData = { title: "감자칩", weight: 300 };
//app.innerHTML = `<div>상품명: ${productsData.title}, weight: ${productsData.weight}</div>`;

// 14:20 영상 자료 참고!
const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];

for (product of productsData) {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    app.innerText = `상품명: ${product.title}, weight: ${product.weight}`
}

// 14:30 영상시작
// DOM Event 
const pTag = document.querySelector("p");
pTag.addEventListener("click", changeText);

function changeText(event) {
    event.target.innerHTML = "문자열의 내용이 바뀌었습니다!";
}


// 메소드에 이벤트 리스너 전달 방법
const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

      showBtn.addEventListener("click", function () {
					document.getElementById("text").innerHTML =
          "짜잔~!! 텍스트가 나타났어요!!";
      }); // 선택한 요소에 click 이벤트 리스너를 등록함.





// const div = document.getElementById("container");
// const input = document.getElementById("input-tag");
// const button = document.getElementById("button-tag");

// div.addEventListener("click", function (event) {
// console.log("div에서 클릭이벤트 감지");
// });
// input.addEventListener("click", function (event) {
// console.log("input에서 클릭이벤트 감지");
// });
// button.addEventListener("click", function (event) {
// console.log("button에서 클릭이벤트 감지");
// });


const div11 = document.getElementById("container11");
const input11 = document.getElementById("input-tag");
const button11 = document.getElementById("button-tag");

div11.addEventListener(
  "click",
  function (event) {
    console.log("div에서 클릭이벤트 감지");
  },
  true
);
input11.addEventListener(
  "click",
  function (event) {
    console.log("input에서 클릭이벤트 감지");
  },
  true
);
button11.addEventListener(
  "click",
  function (event) {
    console.log("button에서 클릭이벤트 감지");
  },
  true
);


const inputs = document.querySelectorAll("input");
for (input of inputs) {
  input.addEventListener("click", function (event) {
    alert("clicked");
  });
}
// 새로운 li 요소가 들어온다고 아래와 같이 가정
// const itemList = document.querySelector("ul.itemList");

const newItem = `
<li>
    <input type="checkbox" id="item3">
    <label for="item3">새로운 아이템</label>
</li>
`;

itemList.innerHTML = itemList.innerHTML + newItem;

// 위 문제를 해결하기 위해 이벤트 위임으로 가능!
//const itemList = document.querySelector("ul.itemList");

// const newItem = `
// <li>
//     <input type="checkbox" id="item3">
//     <label for="item3">새로운 아이템</label>
// </li>
// `;

// itemList.innerHTML = itemList.innerHTML + newItem;

const itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function(event) {
	alert('clicked');
});
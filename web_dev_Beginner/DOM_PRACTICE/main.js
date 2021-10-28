// // 1. 생성하기
// const createButton = document.querySelector("#create");
// const ul = document.querySelector("ul");
// // console.log(createButton);
// createButton.addEventListener("click", createLi);

// function createLi(e) {
//     //1.  입려값 받기
//     const content = prompt("값을 입력하세요")

//     // 2. li 태그 만들기
//     let li = document.createElement("li");
//     li.innerHTML = `
//         <div class="content">${content}</div>
//         <div class="buttons">
//           <button class="update">수정</button>
//           <button class="delete">삭제</button>
//         </div>
//     `;

//     //3. ul 태그 자식 요소로 추가하기
//     ul.appendChild(li);
// }

// // 생성기능 끝!


// // 수정 기능
// ul.addEventListener("click", eventController);

// function eventController(e) {
//   const type = e.target.className;

//   if (type === "update") {
//     // update logic
//     updateLi(e.target);
//   } else if (type === "delete") {
//     // delete logic
//     deleteLi(e.target);
//   }
// }

// // 수정 함수
// function updateLi(target) {
//   //console.log(target);
//   const content = prompt("수정할 내용 입력 : ");
//   target.parentElement.previousElementSibling.innerText = content;
// }

// // 삭제 함수
// function deleteLi(target) {
//   ul.removeChild(target.closest("li"))
// }

// localStorage를 이용핵 데이터를 
// 프론트 크롬 브라우저 로컬에 저장하여 새로고침시 지속적으로 데이터를 사용할수 있다.
localStorage.setItem("로컬스토리지 테스트", "테스트")
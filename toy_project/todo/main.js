// 일정 생성기능 구현
// main-input 태그 선택하기
const mainInput = document.querySelector(".main-input");

// 생성 이벤트 리스너 연결하기
mainInput.addEventListener("keypress", createTodo);

function createTodo(event) {
  if (event.key !== "Enter") {
    return false;
  }

  // 일정 생성 로직

  // dom 추가

  // content값, date 값 받아오기

  const mainInputContent = document.querySelector(".main-input-content");
  const mainInputDate = document.querySelector(".main-input-date");

  let currentContent = mainInputContent.value;
  let currentdate = mainInputDate.value;

  if (!currentContent) {
    alert("내용이 비어있습니다.");
    return false;
  }

  // 로컬스토리지 추가

  // 로컬스토리지 검사
  const currentTodoDataSet = JSON.parse(localStorage.getItem("todoDataSet"));
  console.log(currentTodoDataSet);

  // 로컬스토리지에 todoDataSet이 비어있다면 빈 배열로 초기화
  if (!currentTodoDataSet) {
    localStorage.setItem("todoDataSet", JSON.stringify([]));
  }

  // 현재 새로 만든 todo 데이터
  // 컨텐츠, 날짜, 완료여부

  const todoIdx = getNextTodoIdx();

  const todoData = {
    todoIdx: todoIdx,
    content: currentContent,
    date: dateTransform(currentdate),
    isDone: false,
  };
  currentTodoDataSet.push(todoData);

  // 로컬스토리지 업데이트
  localStorage.setItem("todoDataSet", JSON.stringify(currentTodoDataSet));

  // main-list 자식 요소 추가

  const mainListItem = document.createElement("li");
  mainListItem.setAttribute("class", "main-list-item");
  mainListItem.setAttribute("id", todoIdx);
  mainListItem.innerHTML = `
  <div class="done-content-container">
      <input type="checkbox" class="done" />
      <div class="content">
          ${currentContent}
      </div>
  </div>

  <div class="date-update-delete-container">
      <div class="date">${dateTransform(currentdate)}</div>
      <i class="update fas fa-pencil-alt"></i>
      <i class="delete far fa-trash-alt"></i>
  </div>
`;

  // 초기화
  mainInputContent.value = "";
  mainInputDate.value = "";

  const mainList = document.querySelector(".main-list");
  mainList.appendChild(mainListItem);
}

// todoIdx 결정함수
function getNextTodoIdx() {
  const currentTodoDataSet = JSON.parse(localStorage.getItem("todoDataSet"));

  // todoIdx 최댓값 뽑아내기

  // 만약 첫번째 요소라면 1을 반환
  if (currentTodoDataSet.length < 1) {
    return 1;
  }

  // 현재 존재하는 최대 todoIdx 가져오기
  let max = 1;
  for (let item of currentTodoDataSet) {
    if (max < item.todoIdx) {
      max = item.todoIdx;
    }
  }
  return max + 1;
}

// 날짜 형식 변환 함수
function dateTransform(date) {
  // date가 비어있다면 false return
  if (!date) {
    return "";
  }

  // YYYY-MM-DD -> YY.MM.DD
  let year = date.substring(2, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8);
  return year + "." + month + "." + day;
}

// 일정 조회 기능 구현하기

function readTodo() {
  // 1. 로컬스토리지에서 todoDataSet 가져오기
  const currentTodoDataSet = JSON.parse(localStorage.getItem("todoDataSet"));
  // 초기 접속시 빈 배열로 설정
  if (!currentTodoDataSet) {
    localStorage.setItem("todoDataSet", JSON.stringify([]));
  }

  const mainList = document.querySelector(".main-list");

  // 2. todoDataSet에 있는 값 가져와서 DOM에 적용하기
  for (item of currentTodoDataSet) {
    console.log(item);
    const mainListItem = document.createElement("li");
    mainListItem.setAttribute("class", "main-list-item");
    mainListItem.setAttribute("id", item.todoIdx);
    mainListItem.innerHTML = `
      <div class="done-content-container">
          <input type="checkbox" class="done" ${item.isDone ? "checked" : ""}/>
          <div class="content">
              ${item.content}
          </div>
      </div>
      <div class="date-update-delete-container">
          <div class="date">${item.date}</div>
          <i class="update fas fa-pencil-alt"></i>
          <i class="delete far fa-trash-alt"></i>
      </div>
    `;
    mainList.appendChild(mainListItem);
  }
}

readTodo();

// 일정 update 기능 구현하기
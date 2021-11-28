/*
Math.random();
// 진짜 랜덤한 숫자가 나옴
// 소수 (0.369567721580369)

Math.floor();
// () 안에 있는 수를 내림해서 나타냄

Math.random() * 9;
// 0~8까지 수 중에 랜덤한 숫자가 나옴

Math.random() * 9 + 1;
// 1~9까지 수 중에 랜덤한 숫자가 나옴

Math.floor(Math.random() * 9) + 1;
// 1~9까지 수 중애 랜덤한 숫자가 나옴
*/

var 숫자1 = Math.cell(math.random() * 9);
var 숫자2 = Math.cell(math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement("div");
단어.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
document.body.append(단어);

var 폼 = document.createElement("form");
document.body.append(폼);
var 입력창 = document.createElement("input");
폼.append(입력창);
var 버튼 = document.createElement("button");
버튼.textContent = "입력";
폼.append(버튼);
var 결과창 = document.createElement("div");
document.body.append(결과창);

폼.addEventListener("submit", function 콜백함수(e) {
  e.preventDefault();
  console.log(결과, 입력창.value);
  if (결과 === Number(입력창.value)) {
    결과창.textContent = "딩동댕";
    숫자1 = Math.ceil(Math.random() * 9);
    숫자2 = Math.ceil(Math.random() * 9);
    결과 = 숫자1 * 숫자2;
    단어.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
    입력창.value = "";
    입력창.focus();
  } else {
    결과창.textContent = "땡";
    입력창.value = "";
    입력창.focus();
  }
});

// while (true) {
//   var 숫자1 = Math.floor(Math.random() * 9) + 1;
//   var 숫자2 = Math.floor(Math.random() * 9) + 1;
//   var 결과 = 숫자1 * 숫자2;
//   var 조건 = true;
//   while (조건) {
//     var 답 = prompt(String(숫자1) + "곱하기" + String(숫자2) + "는?");
//     if (결과 === Number(답)) {
//       alert("딩동댕");
//       조건 = false;
//     } else {
//       alert("땡");
//     }
//   }
// }

// 이때, 취소를 누르면 null 값이 들어가는데
// number(null);은
// 0 이기 때문에
// promt에 0이 들어감

// ****주의 한 번 실행하면 멈출 수 없게 되므로 ctrl + t 를 누르고 새 창에서 실행 바람

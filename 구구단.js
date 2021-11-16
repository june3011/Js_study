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

while (true) {
  var 숫자1 = Math.floor(Math.random() * 9) + 1;
  var 숫자2 = Math.floor(Math.random() * 9) + 1;
  var 결과 = 숫자1 * 숫자2;
  var 조건 = true;
  while (조건) {
    var 답 = prompt(String(숫자1) + "곱하기" + String(숫자2) + "는?");
    if (결과 === Number(답)) {
      alert("딩동댕");
      조건 = false;
    } else {
      alert("땡");
    }
  }
}

// 이때, 취소를 누르면 null 값이 들어가는데
// number(null);은
// 0 이기 때문에
// promt에 0이 들어감

// ****주의 한 번 실행하면 멈출 수 없게 되므로 ctrl + t 를 누르고 새 창에서 실행 바람

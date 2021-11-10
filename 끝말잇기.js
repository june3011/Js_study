// chrome 창 콘솔에 치면 끝말잇기를 할 수 있습니다.
// chrome 창 콘솔에 치면 끝말잇기를 할 수 있습니다.

// var word = "사사사과과";
// while (true) {
//   var answer = prompt(word);
//   if (word[word.length - 1] === answer[0]) {
//     //  맞았을 때
//     alert("딩동댕");
//     word = answer;
//   } else {
//     alert("땡");
//   }
// }

for (var word = "사사사과과"; true; ) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    //  맞았을 때
    alert("딩동댕");
    word = answer;
  } else {
    //  틀렸을 때
    alert("땡");
    // 틀렸다고 알려주고 다시 입력
  }
}

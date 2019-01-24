
function factorial(num) {
  var start = 1;
  for (var i = 1;  i < num+1; i++) {
    // console.log("this is start: " + start);
    start *= i;
    // console.log("this is i: " + i);
    // console.log("this is start: " + start);
  }
  // console.log("this is start: " + start);
  return start;
}

factorial(26);

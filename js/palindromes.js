function palin(text) {
  var splitString = text.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  if (text === joinArray) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(joinArray);
  console.log(text);
}

palin("anna");

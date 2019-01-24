function fizzbizz(num) {
  for(var i=0; i<num+1; i++) {
    if (i !== 0){
      if (i%3 === 0 && i%5 === 0) {
        console.log("fizzbizz");
      } else if (i%5 === 0) {
        console.log("bizz");
      } else if (i%3 === 0) {
        console.log("fizz");
      }
      console.log(i);
    }
  }
}

fizzbizz(15);

function checkNumber(number) {
  if (number < 0) {
    console.log("negative");

    if (number < -100) {
      console.log("super negative");
    }
  } else if (number > 0) {
    console.log("positive");
  } else {
    console.log("0");
  }
}

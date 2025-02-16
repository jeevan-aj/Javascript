function debounce(func) {
  let timer = 0;
  return function () {
    console.log(timer)

    if (timer < Date.now()) {
      func();
      timer = Date.now()+5000
      return;
    } else {
      return;
    }
  };
}


function testing() {
  console.log("booop");
}



let debouncedFunction = debounce(testing);
debouncedFunction()
setInterval(debouncedFunction,1000)

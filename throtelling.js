function throttle(func) {
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
  
  
  
  let throttledFunction = throttle(testing);
  throttledFunction()
  setInterval(throttledFunction,1000)
  

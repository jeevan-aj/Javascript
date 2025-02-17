function debounce(func,delay=2000) {
  let timer = 0
  return function () {
    clearTimeout(timer)
    timer = setTimeout(()=> {
        func()
    },delay)
    
  };
}

function testing() {
  console.log("booop");
}

let debouncedFunction = debounce(testing);
debouncedFunction();



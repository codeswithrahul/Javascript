// debounce is technique to reduce api call.
// if we are using react then we can wrap the debounce() function inside useMemo.


const input = document.querySelector("input");

const handleInput = (e) => {
  console.log(e.target.value, "value");
};

const debounce = (func, wait) => {
  let timerID;
  return (e) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func(e);
    }, wait);
  };
};

const debouceCallAPI = debounce(handleInput, 500);

input.addEventListener("input", debouceCallAPI);

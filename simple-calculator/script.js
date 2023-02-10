const result = document.querySelector(".result");
const clear = document.getElementById("clear");
let evaluatedResult 
let arr = [];

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (button.id === "clear") {
      arr = [];
      result.textContent = 0;
    } else if (button.id === "equals") {
      evaluatedResult = eval(arr.join(''))
      result.textContent = evaluatedResult
    } else {
      arr.push(button.textContent);
      result.textContent = arr.join("");
    }
  });
});
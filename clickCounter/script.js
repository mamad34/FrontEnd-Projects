const btnClick = document.getElementById("click");
let result = document.getElementById("result");
const reset = document.getElementById("reset");
let i = 0;
btnClick.addEventListener("click", () => {
  console.log(i++);
  result.innerHTML = i;
});

reset.onclick = () => {
  i = 0;
  result.innerHTML = "<span>the counter reset</span>";
};

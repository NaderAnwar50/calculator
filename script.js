let outputElement = document.querySelector(".output output");
let output = outputElement.innerHTML;

document.querySelector("#plus-btn").addEventListener("click", () => {
  output = output + "+";
  outputElement.innerHTML = output;
});
document.querySelector("#seven-btn").addEventListener("click", () => {
  output = output + "7";
  outputElement.innerHTML = output;
});
document.querySelector("#eight-btn").addEventListener("click", () => {
  output = output + "8";
  outputElement.innerHTML = output;
});
document.querySelector("#nine-btn").addEventListener("click", () => {
  output = output + "9";
  outputElement.innerHTML = output;
});
document.querySelector("#minus-btn").addEventListener("click", () => {
  output = output + "-";
  outputElement.innerHTML = output;
});
document.querySelector("#four-btn").addEventListener("click", () => {
  output = output + "4";
  outputElement.innerHTML = output;
});
document.querySelector("#five-btn").addEventListener("click", () => {
  output = output + "5";
  outputElement.innerHTML = output;
});
document.querySelector("#six-btn").addEventListener("click", () => {
  output = output + "6";
  outputElement.innerHTML = output;
});
document.querySelector("#multiply-btn").addEventListener("click", () => {
  output = output + "x";
  outputElement.innerHTML = output;
});
document.querySelector("#one-btn").addEventListener("click", () => {
  output = output + "1";
  outputElement.innerHTML = output;
});
document.querySelector("#two-btn").addEventListener("click", () => {
  output = output + "2";
  outputElement.innerHTML = output;
});
document.querySelector("#three-btn").addEventListener("click", () => {
  output = output + "3";
  outputElement.innerHTML = output;
});
document.querySelector("#divide-btn").addEventListener("click", () => {
  output = output + "÷";
  outputElement.innerHTML = output;
});
document.querySelector("#zero-btn").addEventListener("click", () => {
  output = output + "0";
  outputElement.innerHTML = output;
});
document.querySelector("#dot-btn").addEventListener("click", () => {
  output = output + ".";
  outputElement.innerHTML = output;
});
document.querySelector("#equal-btn").addEventListener("click", () => {
  let result = calculate(output);
  output = String(result);
  outputElement.innerHTML = output;
});
document.querySelector("#c-btn").addEventListener("click", () => {
  output = "";
  outputElement.innerHTML = "0";
});

function calculate(expression) {
  try {
    let safeExpr = expression.replace(/x/g, "*").replace(/÷/g, "/");
    let result = eval(safeExpr);
    return result;
  } catch {
    return "Error";
  }
}

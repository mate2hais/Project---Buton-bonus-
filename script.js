let indexColor = 0;
const color = ["yellow", "green", "red"];
const THOUSAND = 1000;
const TEN = 10;

function changeColor() {
  document.getElementById("myButton").style.backgroundColor = color[indexColor];
  indexColor = (indexColor + 1) % color.length;
}
setInterval(changeColor, THOUSAND * TEN);

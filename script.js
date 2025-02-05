let i = 0;
function changeColour() {
  let color = ["yellow", "green", "red"];
  document.getElementById("myButton").style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(changeColour, 1000 * 10);
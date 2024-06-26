var element = document.getElementById("animpath");
var pathLength = element.getTotalLength();
element.style.strokeDasharray = pathLength;
element.style.strokeDashoffset = pathLength;

function animateRoute(e) {
  e.style.strokeDashoffset = e.style.strokeDashoffset - 100;
}

for (i = 0; i < 100; i++) {
  animateRoute(element);
}

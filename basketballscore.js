let Point1 = document.getElementById("point1");
let Point2 = document.getElementById("point2");

let num = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

let num10 = 0;
let num4 = 1;
let num5 = 2;
let num6 = 3;

function add1() {
  result = num + num1;
  console.log(result);
  Point1.innerHTML = result;
}
function add2() {
  result = num + num2;
  console.log(result);
  Point1.innerHTML = result;
}
function add3() {
  result = num + num3;
  console.log(result);
  Point1.innerHTML = result;
}
function reset() {
  Point1.innerHTML = num;
}

function add4() {
  result = num10 + num4;
  console.log(result);
  Point2.innerHTML = result;
}
function add5() {
  result = num10 + num5;
  console.log(result);
  Point2.innerHTML = result;
}
function add6() {
  result = num10 + num6;
  console.log(result);
  Point2.innerHTML = result;
}

function reset2() {
  Point2.innerHTML = num10;
}

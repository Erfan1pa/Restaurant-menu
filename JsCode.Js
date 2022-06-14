function minusburger() {
  var X = document.getElementById("inputburger").value;
  X = Number(X);
  if (X > 0) {
    X -= 1;
    document.getElementById("inputburger").value = X;
  }
}
function plusburger() {
  var X = document.getElementById("inputburger").value;
  X = Number(X);
  X += 1;
  document.getElementById("inputburger").value = X;
}

function minuspizza() {
  var X = document.getElementById("inputpizza").value;
  X = Number(X);
  if (X > 0) {
    X -= 1;
    document.getElementById("inputpizza").value = X;
  }
}
function pluspizza() {
  var X = document.getElementById("inputpizza").value;
  X = Number(X);
  X += 1;
  document.getElementById("inputpizza").value = X;
}

function minussandwich() {
  var X = document.getElementById("inputsandwich").value;
  X = Number(X);
  if (X > 0) {
    X -= 1;
    document.getElementById("inputsandwich").value = X;
  }
}
function plussandwich() {
  var X = document.getElementById("inputsandwich").value;
  X = Number(X);
  X += 1;
  document.getElementById("inputsandwich").value = X;
}

function minusfries() {
  var X = document.getElementById("inputfries").value;
  X = Number(X);
  if (X > 0) {
    X -= 1;
    document.getElementById("inputfries").value = X;
  }
}
function plusfries() {
  var X = document.getElementById("inputfries").value;
  X = Number(X);
  X += 1;
  document.getElementById("inputfries").value = X;
}

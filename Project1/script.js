let celsius = document.getElementById("celsius");
let fahrenherit = document.getElementById("fahrenheit");
console.log("celsius = " + celsius + " fahrenherit = " + fahrenherit);

function calculateTemp() {
  let output = parseFloat(celsius.value) * (9 / 5) + 32;

  fahrenheit.value = parseFloat(output.toFixed(2));
}

function calculateFah() {
  let output = parseFloat(fahrenherit.value - 32) * (5 / 9);
  celsius.value = parseFloat(output.toFixed(2));
}

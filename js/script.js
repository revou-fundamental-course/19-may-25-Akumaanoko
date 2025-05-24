function convert() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    alert("Masukkan angka suhu Celsius yang valid.");
    return;
  }
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("formula").value = `S(°F) = (S(°C) × 9/5) + 32\nS(°F) = (${celsius} × 9/5) + 32\nS(°F) = ${fahrenheit.toFixed(2)}`;
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("formula").value = "";
}

function reverse() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan angka suhu Fahrenheit yang valid.");
    return;
  }
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById("formula").value = `S(°C) = (S(°F) − 32) × 5/9\nS(°C) = (${fahrenheit} − 32) × 5/9\nS(°C) = ${celsius.toFixed(2)}`;
}

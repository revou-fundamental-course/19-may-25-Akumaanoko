// Fungsi untuk memvalidasi input hanya angka
function validateNumberInput(input) {
    const value = input.value;
    if (value === '' || isNaN(value)) {
        input.classList.add('error');
        return false;
    } else {
        input.classList.remove('error');
        return true;
    }
}

// Fungsi konversi
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Fungsi untuk menampilkan langkah kalkulasi
function showCalculationSteps(type, inputValue, result) {
    const calculationDiv = document.getElementById('calculationSteps');
    let steps = '';

    if (type === 'celsiusToFahr') {
        steps = `Konversi: ${inputValue}°C ke Fahrenheit

Rumus: °F = (°C × 9/5) + 32

Langkah-langkah:
1. °F = (${inputValue} × 9/5) + 32
2. °F = (${inputValue} × 1,8) + 32
3. °F = ${(inputValue * 1.8).toFixed(2)} + 32
4. °F = ${result.toFixed(2)}

Hasil: ${inputValue}°C = ${result.toFixed(2)}°F`;
    } else if (type === 'fahrToCelsius') {
        steps = `Konversi: ${inputValue}°F ke Celsius

Rumus: °C = (°F - 32) × 5/9

Langkah-langkah:
1. °C = (${inputValue} - 32) × 5/9
2. °C = ${(inputValue - 32).toFixed(2)} × 5/9
3. °C = ${(inputValue - 32).toFixed(2)} × 0,556
4. °C = ${result.toFixed(2)}

Hasil: ${inputValue}°F = ${result.toFixed(2)}°C`;
    }

    calculationDiv.textContent = steps;
}

// Event listener untuk Celsius ke Fahrenheit
document.getElementById('celsiusInput').addEventListener('input', function() {
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    fahrenheitInput.value = ''; // Clear other input
    document.getElementById('fahrenheitResult').textContent = 'Hasil akan muncul di sini';

    if (validateNumberInput(this)) {
        const celsius = parseFloat(this.value);
        const fahrenheit = celsiusToFahrenheit(celsius);
        document.getElementById('celsiusResult').textContent = 
            `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        showCalculationSteps('celsiusToFahr', celsius, fahrenheit);
    } else {
        document.getElementById('celsiusResult').textContent = 
            'Masukkan angka yang valid';
        document.getElementById('calculationSteps').textContent = 
            'Pilih salah satu konverter dan masukkan nilai untuk melihat cara kalkulasinya secara detail.';
    }
});

// Event listener untuk Fahrenheit ke Celsius
document.getElementById('fahrenheitInput').addEventListener('input', function() {
    const celsiusInput = document.getElementById('celsiusInput');
    celsiusInput.value = ''; // Clear other input
    document.getElementById('celsiusResult').textContent = 'Hasil akan muncul di sini';

    if (validateNumberInput(this)) {
        const fahrenheit = parseFloat(this.value);
        const celsius = fahrenheitToCelsius(fahrenheit);
        document.getElementById('fahrenheitResult').textContent = 
            `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
        showCalculationSteps('fahrToCelsius', fahrenheit, celsius);
    } else {
        document.getElementById('fahrenheitResult').textContent = 
            'Masukkan angka yang valid';
        document.getElementById('calculationSteps').textContent = 
            'Pilih salah satu konverter dan masukkan nilai untuk melihat cara kalkulasinya secara detail.';
    }
});

// Mencegah input non-numerik
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        // Izinkan: backspace, delete, tab, escape, enter, dan .
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Izinkan: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Izinkan: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        // Pastikan itu adalah angka dan hentikan keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
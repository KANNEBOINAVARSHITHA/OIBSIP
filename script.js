document.getElementById('convert-btn').addEventListener('click', function () {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const output = document.getElementById('output');
  
    if (isNaN(temperature)) {
      output.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    switch (unit) {
      case 'celsius':
        result = `${((temperature * 9) / 5 + 32).toFixed(2)} °F (Fahrenheit), ${(
          temperature + 273.15
        ).toFixed(2)} K (Kelvin)`;
        break;
      case 'fahrenheit':
        result = `${(((temperature - 32) * 5) / 9).toFixed(2)} °C (Celsius), ${(
          ((temperature - 32) * 5) / 9 +
          273.15
        ).toFixed(2)} K (Kelvin)`;
        break;
      case 'kelvin':
        result = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${(
          ((temperature - 273.15) * 9) / 5 +
          32
        ).toFixed(2)} °F (Fahrenheit)`;
        break;
      default:
        result = "Invalid unit selected.";
    }
  
    output.textContent = result;
  });
  
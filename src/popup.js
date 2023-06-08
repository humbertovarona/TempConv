document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const clearBtn = document.getElementById("clearBtn");

    clearBtn.addEventListener("click", function () {
        clearInputFields([celsiusInput, kelvinInput, fahrenheitInput]);
    });
  
    celsiusInput.addEventListener("input", function () {
      clearInputFields([kelvinInput, fahrenheitInput]);
    });
  
    kelvinInput.addEventListener("input", function () {
      clearInputFields([celsiusInput, fahrenheitInput]);
    });
  
    fahrenheitInput.addEventListener("input", function () {
      clearInputFields([celsiusInput, kelvinInput]);
    });
  
    const convertBtn = document.getElementById("convertBtn");
  
    convertBtn.addEventListener("click", function () {
      let celsius = celsiusInput.value ? parseFloat(celsiusInput.value) : NaN;
      let kelvin = kelvinInput.value ? parseFloat(kelvinInput.value) : NaN;
      let fahrenheit = fahrenheitInput.value ? parseFloat(fahrenheitInput.value) : NaN;
  
      if (!isNaN(celsius)) {
        kelvin = celsius + 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
      } else if (!isNaN(kelvin)) {
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
      } else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * (5 / 9);
        kelvin = celsius + 273.15;
      }
  
      celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
      kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
      fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
    });
  
    function clearInputFields(inputs) {
      inputs.forEach(function (input) {
        input.value = "";
      });
    }
  });
  
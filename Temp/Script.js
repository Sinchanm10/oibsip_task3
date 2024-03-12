function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (fromUnit === "C") {
        if (toUnit === "F") {
            result = (temperature * 9 / 5) + 32;
        } else if (toUnit === "K") {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    } else if (fromUnit === "F") {
        if (toUnit === "C") {
            result = (temperature - 32) * 5 / 9;
        } else if (toUnit === "K") {
            result = (temperature - 32) * 5 / 9 + 273.15;
        } else {
            result = temperature;
        }
    } else if (fromUnit === "K") {
        if (toUnit === "C") {
            result = temperature - 273.15;
        } else if (toUnit === "F") {
            result = (temperature - 273.15) * 9 / 5 + 32;
        } else {
            result = temperature;
        }
    }

    resultElement.innerText = result.toFixed(2);
}

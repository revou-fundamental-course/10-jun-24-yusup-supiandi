//script.js

//"°C is " + fahrenheit + "°F"
function convertTemp() {

    var inputTemp = parseFloat(document.getElementById('inputTemp').value);

    var fahrenheit = (inputTemp * 9/5) + 32;

    var resultFahrenheit = document.getElementById('resultFahrenheit');
    resultFahrenheit.innerHTML =`${fahrenheit.toFixed(2)}`;

    var resultCalculate = document.getElementById('resultCalculate');
    resultFahrenheit.innerHTML =`fahrenheit : (${inputTemp.toFixed(2)}&degC * 9/5) + 32 = 
    ${fahrenheit.toFixed(2)}&degF` ;

}

function reset() {
    document.getElementById('inputTemp').value = ' ' ;
    document.getElementById('resultFahrenheit').innerHTML = ' ' ;
    document.getElementById('resultCalculate').innerHTML = ' ' ;
}

function reverse() {
    var resultCalculate = document.getElementById('resultCalculate');
    var inResult = resultCalculate.innerHTML;

    if (inResult.includes('Fahrenheit')) {
        var celsius = parseFloat(document.getElementById('inputTemp').value);
        var fahrenheit = parseFloat(document.getAnimations('resultFahrenheit').value);
        resultCalculate.innerHTML = ` celsius : (${fahrenheit.toFixed(2)} °F - 32 ) * 5/9 = 
        ${celsius.toFixed(2)} °C ` ;
    }
}
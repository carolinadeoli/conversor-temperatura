function Converter(){
    var valorTemperatura= document.getElementById("temperatura");
    var temperatura = valorTemperatura.value;
    var temperaturaCelsius =parseFloat(temperatura);
    var valorFahrenheit = [temperaturaCelsius * 1.8 + 32];
    var temperaturaConvertida = document.getElementById("valorFahrenheit");
    var valorFahrenheit = "A temperatura em Fahrenheit é:  " + valorFahrenheit + "°F";
    temperaturaConvertida.innerHTML = valorFahrenheit;
}
    
  
  
  
  
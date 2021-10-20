function ConverterTemperaturas(){
    let temperaturaEmCelsius= document.querySelector("#temperautaEmCelsius").value 
    let celsiusConvertido= parseFloat(temperaturaEmCelsius);

    let temperaturaEmKelvin= celsiusConvertido + 273
    let temperaturaEmFarenheit= 1.8 * celsiusConvertido + 32

    document.querySelector("#resultadoEmKelvin").innerHTML= "Kelvin: " + temperaturaEmKelvin
    document.querySelector("#resultadoEmFahrenheit").innerHTML= "Fahrenheit: " + temperaturaEmFarenheit
}
const kelvin = 294 ; //Constant variable- kelvin 294 
 let celsius = kelvin - 273 ; //Convert Kelvin in Celsius 
 let fahrenheit = celsius * (9/5) + 32 ; //Equation to calculate Fahrenheit. Convert Celsius in Fahrenheit
fahrenheit = Math.floor(fahrenheit); //Rounding down the Fahrenheit temperature
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`); 
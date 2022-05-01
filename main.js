const kelvin = 293; //This is a constant variable for kelvin, the value will remain the same

var celsius = kelvin - 273; //Variable celsius will store the conversion from kelvin to celsius

var farenheit = celsius * (9 / 5) + 32; //variable farenheit will store the results of the formula to convert to farenheit

var farFloor = Math.floor(farenheit); //for decimal numbers we use method math floor to get the integer close to the decimal number.

console.log(`The temperature is ${farFloor} degrees Farenheit`);

var newton = celsius * (33 / 100);

var newtonFloor = Math.floor(newton);

console.log(`The temperature is ${newtonFloor} degrees Newton`);

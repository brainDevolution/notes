var celciusInput = 60;
var farenheitInput = 45;

var farenheitOutput = (((9*celciusInput)/5)+32);
var celciusOutput = ((5*(farenheitInput-32))/9);

console.log(celciusInput + `C is ` + farenheitOutput + `F`);
console.log(farenheitInput + `F is ` + celciusOutput + `C`);
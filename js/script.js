function celsius(temp) {
  return (temp * (9/5))+32;
}

const temp = parseInt(prompt("Enter a temperature in Celsius:"));
const result = celsius(temp);
alert(result+" fahrenheit");

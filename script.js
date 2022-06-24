window.alert("HI, YOU'RE WELCOME TO EASY PROMPT CALCULATOR BUILT WITH JS.")
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// user inputs 
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// calculator conditions .  
if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') { 
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else if (operator == '/') { 
    result = number1 / number2;  
}
else {  
    window.alert("Please enter the correct operator");
}  
  
// display the result of the Calculator  
window.alert(" Result is" + result);  
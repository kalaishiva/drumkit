function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator (num1, num2);
}

console.log(calculator(8, 4, add));
console.log(calculator(8, 4, sub));
console.log(calculator(8, 4, mul));
console.log(calculator(8, 4, div));
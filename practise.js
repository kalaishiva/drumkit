/* function add(num1, num2){
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
console.log(calculator(8, 4, div)); */


function HouseKeeper(name, age, experience, language){
    this.name = name,
    this.age = age,
    this.experience = experience,
    this.language = language,
    this.cleaning = function(){
        alert('Cleaning in progress');
    }
}

let HouseKeeper1 = new HouseKeeper('Kalai', 33, 5, 'English');

console.log(HouseKeeper1.cleaning());
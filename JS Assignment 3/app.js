// Question 1

var city = prompt("What's your city name");

if(city.toLowerCase() == "karachi"){
console.log("Welcome to City of Lights");
alert("Welcome to City of Lights");
}

// Question 1 end here
// Question 2

var gender = prompt("What's your gender","Male/Female");

if(gender.toLowerCase() == "male"){
console.log("Welcome Sir!");
alert("Welcome Sir!");
}
else{
    console.log("Welcome Ma'am");
    alert("Welcome Ma'am"); 
}


// Question 2 end here
// Question 5

var hiddennum=7;
alert("I have a game for you, you have to guess a number in between 1-10")

var guess=prompt("guess your number from 1-10")

if (guess==hiddennum){
    alert("Bingo! Correct Answer");
}
if (guess==hiddennum + 1){
    alert("You are close enough");
}

// Question 5 ends here

// Question 3
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));


if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
}
// Question 3 ends here

// Question 6

let userInput = prompt("Enter a number:");


let number = parseInt(userInput);


function isDivisibleByThree(number) {
    return number % 3 === 0;
}

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (isDivisibleByThree(number)) {
        console.log(number + " is divisible by 3.");
    } else {
        console.log(number + " is not divisible by 3.");
    }
}

// Question 6 ends here
// Question 7

var usernumber = prompt("Enter a number:");


var usernumber = parseInt(usernumber);

// Check if the number is divisible by 2
function isEven(usernumber) {
    return usernumber % 2 === 0;
}

if (isNaN(usernumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (isEven(usernumber)) {
        console.log(usernumber + " is an even number.");
    } else {
        console.log(usernumber + " is a odd number");
    }
}
// Question 7 ends here
// Question 8

var temp=prompt("Whats the temperature today?")

if (temp > 40){
    alert("Its too hot outside");
}else{
    if (temp > 30){
        alert("Its normal outside");    
    }
else{
    if (temp > 20){
        alert("Today's weather is cool");    
    }
else{
    if (temp > 10){
        alert("OMG today's weather is too cool");    
    }
}
}
}
// Question 8 ends here

// Question 9

var num1 = parseFloat(prompt("Input first number"));
var num2 = parseFloat(prompt("Input Second number"));
var operator = prompt("What you wanna do", "+-*/%");

var result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else if (operator === '%') {
    result = num1 % num2;
} else {
    result = "Invalid operator";
}

alert(num1 + " " + operator + " " + num2 + " = " + result);

// Question 9 ends here
// Question 4

var alerts = "Following alerts will be successful \n"
// a.
var a = 4;
if (++a === 5){
  alerts =  alerts + "given condition for variable a is true\n";
}else{
    alerts =  alerts + "given condition for variable a is false\n"
}

// b.
var b = 82;
if (b++ === 83){
    alerts =  alerts + "given condition for variable b is true\n";
}else{
    alerts =  alerts + "given condition for variable b is false\n";
}

// c.
var c = 12;
if (c++ === 13){
    alerts = alerts + "condition 1 is true for var C\n";
}
if (c === 13){
    alerts = alerts + "condition 2 is true for var C\n";
}
if (++c < 14){
    alerts = alerts + "condition 3 is true for var C\n";
}
if(c === 14){
    alerts = alerts + "condition 4 is true for var C\n";
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alerts = alerts + "The cost equals for condition D\n";
}else{
    alerts = alerts + "The cost is not equal for condition D\n";
}

// e.
if (true){
    alerts= alerts+"E is True\n";
} 
if (false){
    alerts= alerts+"E is false\n";
}

// f.
if("car" < "cat"){
   alerts = alerts + "car is smaller than cat due to lexicographical order";
}else{
   
}
alert(alerts)
// question 4 ends here
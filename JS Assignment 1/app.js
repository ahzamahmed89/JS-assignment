// Task 1: Greet website visitor using JS alert box
alert("Welcome to Our Website");

// Task 2: Display message on web page using alert box
alert("Error! Please Enter a valid password");

// Task 3: Display message on web page using alert box with line break
alert("Hello!\nWelcome to Our Website");

// Task 4: Display messages in sequence using alerts
alert("Message 1");
alert("Message 2");
alert("Message 3");

// Task 7: Declare a variable called username
var username;

// Task 8: Declare a variable called myName & assign to it a string that represents your Full Name
var myName = "Ahzam Ahmed";

// Task 9: Declare and display a message in an alert box
var message;
message = "Hello World";
alert(message);

// Task 10: Save student’s bio data in JS variables and show the data in alert boxes
var studentName = "Ahzam Ahmed";
var studentAge = 25;
var studentClass = "XII";
alert("Name: " + studentName + "\nAge: " + studentAge + "\nClass: " + studentClass);

// Task 11: Declare a variable called email and show in an alert box
var email = "ahmed_ahxam@yahoo.com";
alert("My email address is " + email);

// Task 12: Display a message in browser through JS
document.write("This is displayed using JavaScript.");

// Task 13: Show a string in alert and browser through JS
var stringToDisplay = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(stringToDisplay);

// Task 14: Declare a variable called age & show your age in an alert box
var age = 30;
alert("I am " + age + " years old.");

// Task 15: Declare & initialize a variable to keep track of number of visits
var numVisits = 5;
alert("You have visited this site " + numVisits + " times.");

// Task 16: Visitor's information in an online clothing store
var visitorName = "Ahzam Ahmed";
var productTitle = "T-shirt";
var quantity = 5;
alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// Task 18: Declare 3 variables in one statement
var var1, var2, var3;

// Task 19: Declare 5 legal & 5 illegal variable names
// Legal
document.write("<p><u><b>Legal var Name</b></u> <p></p><br>var myName <br>var _myName;<br>var $myName;<br>var myName123;<br>var my_Name;<br><br><b><u>Illegal</b></u><br>var 123myName;<br>var my-Name;<br>var my Name;<br>var var;<br>var function;</p>")

// Task 20: Display rules for naming JS variables
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

// Task 21: Add two numbers and show the result
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);

// Task 22: Repeat task 21 for subtraction, multiplication, division & modulus
var subtraction = num2 - num1;
var multiplication = num1 * num2;
var division = num2 / num1;
var modulus = num2 % num1;
alert("Subtraction: " + subtraction + "\nMultiplication: " + multiplication + "\nDivision: " + division + "\nModulus: " + modulus);

// Task 23: Do the following using JS Mathematic Expressions
var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
document.write("The remainder after dividing the variable's value by 3 is: " + (variable % 3) + "<br>");

// Task 24: Calculate cost of buying 5 tickets to a movie
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
alert("The cost of buying 5 tickets to a movie is " + totalCost + " PKR");

// Task 25: Display multiplication table of any number in your browser
var number = 7;
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

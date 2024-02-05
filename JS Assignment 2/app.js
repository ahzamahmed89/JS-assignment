// Question 3

var userName = prompt("Enter your name:");


alert("Hello, " + userName + "! Welcome to our website!");
// Question 3 ends here


// Question 4

var number = prompt("Enter a number to display its multiplication table:");

number = parseInt(number);

if (isNaN(number)) {
    number = 5;
}

var table = "<h2>Multiplication Table of " + number + "</h2>";
for (var i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}

document.write(table);

// Question 4 ends here

// Question 5

var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;


var resultTable = "<h2>Result</h2>";
resultTable += "<table border='1'>";
resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>";
resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>";
resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>";
resultTable += "</table>";

resultTable += "<br><h3>Total Obtained Marks: " + totalObtainedMarks + "</h3>";
resultTable += "<h3>Percentage: " + totalPercentage.toFixed(2) + "%</h3>";


document.write(resultTable);

// Question 5 ends here

// Question 2

var a = 2, b = 1
var result = --a - --b + ++b + b--;

--a;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b + ++b;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b + ++b + b--;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)

document.write(result)
// Question 2 ends here

// Question 1
var a = 10;
document.write("Value of a is "+ a)
document.write("<br> Value of a++ is "+a++)
document.write("<br> Value of a is "+a)

document.write("<br><br> Value of ++a is "+ ++a)

document.write("<br><br> Value of --a is "+ --a)
document.write("<br> Value of a is "+a)

document.write("<br><br> Value of a-- is "+ a--)
document.write("<br> Value of a is "+a)

// Question 1 ends here
// 1. Password Validation
var correctPassword = "Mypassword123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// 2. Fixing if/else statement
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 3. Arrays
// a.
var futureStudentNamesLiteral = [];
// b.
var futureStudentNamesObject = new Array();
// c.
var stringsArray = ["apple", "banana", "orange"];
// d.
var numbersArray = [1, 2, 3, 4, 5];
// e.
var booleanArray = [true, false, true];
// f.
var mixedArray = ["apple", 1, true];
// g.
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "BBA", "MS", "M. Phil.", "PhD"];

// 4. Array Manipulation
var colorNames = ["red", "green", "blue"];

// a.
var colorToAddAtBeginning = prompt("Enter color to add at the beginning:");
colorNames.unshift(colorToAddAtBeginning);
// b.
var colorToAddAtEnd = prompt("Enter color to add at the end:");
colorNames.push(colorToAddAtEnd);
// c.
colorNames.unshift("purple", "yellow");
// d.
colorNames.shift();
// e.
colorNames.pop();
// f.
var indexToAddColor = prompt("Enter index to add color:");
var colorToAdd = prompt("Enter color to add:");
colorNames.splice(indexToAddColor, 0, colorToAdd);
// g.
var indexToDeleteColor = prompt("Enter index to delete color(s):");
var numberOfColorsToDelete = prompt("Enter number of colors to delete:");
colorNames.splice(indexToDeleteColor, numberOfColorsToDelete);

// 5. Sorting Student Scores
var studentScores = [90, 75, 80, 95, 85];
studentScores.sort(function(a, b) {
    return a - b;
});

// 6. Phone Manufacturers Dropdown
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

// 7. Multiplication Table
var tableNumber = prompt("Enter the table number:");
var tableLength = prompt("Enter the table length:");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// 8. Generating Series
// a. Counting
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c. Even
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d. Odd
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e. Series
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br>");

// 9. Search in Array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === searchItem) {
        found = true;
        break;
    }
}
if (found) {
    alert("Yes, " + searchItem + " is found in the list.");
} else {
    alert("No, " + searchItem + " is not found in the list.");
}

// 10. Title Case Conversion
var userInputTitleCase = prompt("Enter text to convert to title case:");
var titleCaseText = userInputTitleCase.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ');
alert("Title Case: " + titleCaseText);

// 11. Capital Letters Conversion
var userInputCapitalLetters = prompt("Enter text to convert to capital letters:");

alert("Capital Letters: " + userInputCapitalLetters.toUpperCase());

// 12. String to Number Conversion
var stringNumber = "472";
var convertedNumber = Number(stringNumber);
document.write("Value: " + convertedNumber + "<br>");
document.write("Type: " + typeof convertedNumber);

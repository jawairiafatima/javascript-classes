var ch = prompt("Enter any character");
var ascii = ch.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
    console.log("It is an uppercase");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a lowercase");
}
else {
    alert("It is neither a number nor a letter");
}



//integers

var num1 = prompt("Enter first integer:");
var num2 = prompt("Enter second integer:");

if (num1 > num2) {
    alert("First number is larger: " + num1);
}
else if (num2 > num1) {
    alert("Second number is larger: " + num2);
}
else {
    alert("Both numbers are equal");
}


//positive or nagitive number


var num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is Positive");
}
else if (num < 0) {
    alert("The number is Negative");
}
else {
    alert("The number is Zero");
}




//vowel


var ch = prompt("Enter any single character");

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    alert("true");
}
else {
    alert("false");
}




//js password


var correctPassword = "javascript123";

var userPassword = prompt("Enter your password:");


if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}





var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

var time = prompt("Enter time in 24-hour  (e.g. 1900):");

if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid Time");
}
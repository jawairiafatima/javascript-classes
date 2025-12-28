//city name

var city = prompt("enter your city name");
var city = "karachi"

if (city.toLowerCase() == "karachi") {

    alert("welcome to city of light");

}

//gender

var gender = prompt("Enter your gender (male / female): ");
if (gender.toLowerCase() == "male") {

    alert("GOOD MORNING SIR!");
}
else if (gender.toLowerCase() == "female") {

    alert("GOOD MORNING MADAM!");
}


//trafic signal

var traficSignal = prompt("Enter trafic signal color (red / yellow / green");

document.write("<table border='3' cellpading='30'>");
document.write("<tr><th>signal color</th><th>messege</th></tr>");


if (traficSignal.toLowerCase() == "red") {

    alert("just stop")
}
document.write("<tr><td>red</td><td>just stop</td></tr>")

 if (traficSignal.toLowerCase() == "yellow") {

    alert("get ready")

}
document.write("<tr><td>yellow</td><td>get ready</td></tr>")

 if (traficSignal.toLowerCase() == "green") {

    alert("go")
   
}

 document.write("<tr><td>green</td><td>go</td></tr>")





 var fuel =  prompt("Enter remainig fuel in car (in liters)");
 if ( fuel < 0.25 ){

    alert("please refill the fuel in car");

 }



//                //output message

//   var a = 4
//   if (++a == 5) {
//     var  b =("5 == 5")
//     console.log("this condition is true");
    
//   }     



 // user se marks lena
    var sub1 = Number(prompt("Enter marks of subject 1"));
    var sub2 = Number(prompt("Enter marks of subject 2"));
    var sub3 = Number(prompt("Enter marks of subject 3"));
    var totalMarks = Number(prompt("Enter total marks"));

    // calculation
    var obtainedMarks = sub1 + sub2 + sub3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    var grade, remarks;

    // grade aur remarks
    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    }
    else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }
    else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    }
    else if (percentage >= 50) {
        grade = "C";
        remarks = "Satisfactory";
    }
    else {
        grade = "Fail";
        remarks = "Sorry";
    }

    // output table
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellpadding='10'>");

    document.write("<tr><td>Total Marks</td><td>" + totalMarks + "</td></tr>");
    document.write("<tr><td>Marks Obtained</td><td>" + obtainedMarks + "</td></tr>");
    document.write("<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
    document.write("<tr><td>Grade</td><td>" + grade + "</td></tr>");
    document.write("<tr><td>Remarks</td><td>" + remarks + "</td></tr>");

    document.write("</table>");




     // secret number (1 se 10 ke darmiyan)
    var secretNumber = 7;

    var userGuess = Number(prompt("Guess the secret number (1 to 10):"));

    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer");
    }
    else if (userGuess + 1 === secretNumber) {
        alert("Close enough to the correct answer");
    }
    else {
        alert("Sorry, try again");
    }



    var number = Number(prompt("Enter a number"));

    if (number % 3 === 0) {
        alert("The number is divisible by 3");
    } else {
        alert("The number is NOT divisible by 3");
    }


     var number = Number(prompt("Enter a number"));

    if (number % 2 === 0) {
        alert("The number is Even");
    } else {
        alert("The number is Odd");
    }


     var temp = Number(prompt("Enter temperature"));

    if (temp > 40) {
        alert("It is too hot outside.");
    }
    else if (temp > 30) {
        alert("The Weather today is Normal.");
    }
    else if (temp > 20) {
        alert("Today’s Weather is cool.");
    }
    else if (temp > 10) {
        alert("OMG! Today’s weather is so Cool.");
    }
    else {
        alert("It is very cold today.");
    }



    var num1 = Number(prompt("Enter first number"));
    var num2 = Number(prompt("Enter second number"));
    var operation = prompt("Enter operation (+, -, *, /, %)");

    var result;

    // calculator logic
    if (operation === "+") {
        result = num1 + num2;
    }
    else if (operation === "-") {
        result = num1 - num2;
    }
    else if (operation === "*") {
        result = num1 * num2;
    }
    else if (operation === "/") {
        result = num1 / num2;
    }
    else if (operation === "%") {
        result = num1 % num2;
    }
    else {
        alert("Invalid operation");
    }


    if (result !== undefined) {
        alert("Result is: " + result);
    }
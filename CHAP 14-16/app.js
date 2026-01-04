           //ARRAYS

var studentNames = [];
studentNames[0] = "ali";
studentNames[1] = "ahmed";

// string array

var fruits = ["Apple", "Banana", "Mango", "Orange"];

//number array

var numbers = [10, 20, 30, 40, 50];


//bolean array

var bolean = [true, false, true, true];


//mixed array

var mixedArray = ["Ali", 20, true, "Karachi", 85];


//qualification


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications <br><br>");
document.write("1) SSC <br>");
document.write("2) HSC <br>");
document.write("3) BCS <br>");
document.write("4) BS <br>");
document.write("5) BCOM <br>");
document.write("6) MS <br>");
document.write("7) M. Phil. <br>");
document.write("8) PhD");



// students marks

var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write( "Score of " + studentNames[0] + " is " + scores[0] +
". Percentage: " + (scores[0] / totalMarks * 100) + "% <br>");

document.write("Score of " + studentNames[1] + " is " + scores[1] +
". Percentage: " + (scores[1] / totalMarks * 100) + "% <br>");

document.write("Score of " + studentNames[2] + " is " + scores[2] +
". Percentage: " + (scores[2] / totalMarks * 100) + "%");



// Step 1: Store student scores in  array
var scores = [320, 450, 120, 500, 250];
document.write("Scores of Students: " + scores + "<br><br>");

// Step 2: the array in ascending order
scores.sort(function(a, b){
    return a - b;
});

document.write("Scores in Ascending Order: " + scores);



//  cities array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities Array: " + cities + "<br><br>");

// selectedCities
var selectedCities = cities.slice(0, 3);
document.write("Selected Cities: " + selectedCities);





var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join("");
document.write("Single String: " + singleString);




// Create an empty array
var fifo = [];

fifo.push("First");
fifo.push("Second");
fifo.push("Third");
fifo.push("Fourth");

document.write("Stored Values: " + fifo + "<br><br>");

document.write("Accessing values in FIFO order:<br>");
document.write(fifo.shift() + "<br>"); // First
document.write(fifo.shift() + "<br>"); // Second
document.write(fifo.shift() + "<br>"); // Third
document.write(fifo.shift() + "<br>"); // Fourth

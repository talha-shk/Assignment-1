// Chapter 1

//Task 1

alert("Welcome Visitor");

//Task 2

alert("Error! Please enter a valid password");

//Tast 3

alert("Welcome to JS land.. \nHappy coding");

//Task 4

alert("Welcome to JS land...");
alert("Happy Coding!");

//Task 5
var d = alert("Hello, I can run JS through my web browser's console");
console.log(d);



// Chapter 2

//Task 1

var username;

//Task 2

var myName = "Muhammad Talha";

//Task 3

var message = "Hello World";
alert(message);

//Task 4

var student_Name = "Talha Sheikh";
var student_Age = "22 years old";
var student_Certification = "Certified Mobile Application Development"

alert(student_Name);
alert(student_Age);
alert(student_Certification);


// Task 5
var pizza = "PIZZA \r\n PIZZ \r\n PIZ \r\n PI \r\n P";
        alert(pizza);

// Task 6
var email = "m.talha.shk@gmail.com";
alert("My email adress is " + email);

// Task 7
var book = "A Smarter way to learn Javascript";
alert("I am trying to learn from the book " + book);

// Task 8
var text = "Yah! I can write HTML content through javascript";
document.write(text);

// Task 9
var signs = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(signs);

// Chapter 3

// Task 1
var age = 22;
alert("I am " + age + " years old");

// Task 2
var visits = 18;
alert("You have visited this site " + visits + " times");

// Task 3
var birthYear = 1998;
document.write("My Birth year is " + birthYear);
document.write("<br> Data type of declared variable is " + typeof(birthYear));

// Task 4
var storeName = "Furor Clothing";
var customerName = "Ibrahim";
var productQuantity = "6";
var productTitle = "Jeans";
document.write(customerName + " Ordered " + productQuantity + " " + productTitle + "(s)" + " From " + storeName);

// Chapter 4

// Task 1
var name = "Talha", lastName = "Sheikh", age = 22;
document.write(name + lastName + age);

// Task 2
// Legal Variables
// var variable
// var $variable
// var _variable
// var Variable
// var Variable2;
// Illegal Variables
// var 2ndname
// var 'name'
// var this
// var my name
// var .name

// Task 3
document.write("<h2>Rules for naming JS variables</h2>")
document.write("<br>Variable names can only contain Numbers, Letters, $, and _  For example $my_1stVariable");
document.write("<br>Variables must begin with a $ , _ or letter  For example $name, _name or name");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS Keywords");

// Chapter 5

// Task 1
Addition
var num1 = 4;
var num2 = 7;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Task 2
// Subtraction
var num1 = 4;
var num2 = 7;
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);

// Multiplication

var num1 = 4;
var num2 = 7;
var mult = num1 * num2;
document.write("Multipliation of " + num1 + " and " + num2 + " is " + mult);


// Division

var num1 = 4;
var num2 = 7;
var div = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + div);


// Modulus

var num1 = 4;
var num2 = 7;
var mod = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

// Task 3
var number;
document.write("Value after variable declaration " + number);
number = 8;
document.write("<br> Initial value: " + number);
number++;
document.write("<br> value after Increment " + number);
number += 7;
document.write("<br> value after addition: " + number);
number--;
document.write("<br> value after decrement: " + number);
number %= 3;
document.write("<br> The remainder is: " + number);

// Task 4
var ticketPrice = 600;
var numberOfTickets = 7;
var totalCost = ticketPrice * numberOfTickets;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + "PKR");

// Task 5
var numOfTable = 9;
document.write("Table of " + numOfTable + "<br>");
document.write(numOfTable + " x 1 = " + numOfTable * 1 + "<br>" +
    numOfTable + " x 2 = " + numOfTable * 2 + "<br>" +
    numOfTable + " x 3 = " + numOfTable * 3 + "<br>" +
    numOfTable + " x 4 = " + numOfTable * 4 + "<br>" +
    numOfTable + " x 5 = " + numOfTable * 5 + "<br>" +
    numOfTable + " x 6 = " + numOfTable * 6 + "<br>" +
    numOfTable + " x 7 = " + numOfTable * 7 + "<br>" +
    numOfTable + " x 8 = " + numOfTable * 8 + "<br>" +
    numOfTable + " x 9 = " + numOfTable * 9 + "<br>" +
    numOfTable + " x 10 = " + numOfTable * 10 + "<br>"
);

// Task 6
var tempCel = 48;
var tempFar = 112;
var celTofar = (tempCel * 9 / 5) + 32;
var farTocel = (tempFar - 32) * 5 / 9;
document.write(tempCel + "°C is " + celTofar + "°F");
document.write("<br>");
document.write(tempFar + "°F is " + farTocel + "°C");

// Task 7
var priceItem1 = 300;
var quantityItem1 = 4;
var priceItem2 = 400;
var quantityitem2 = 3;
var shipping = 200;
var totalPrice1 = priceItem1 * quantityItem1;
var totalPrice2 = priceItem2 * quantityitem2;
var totalCost = totalPrice1 + totalPrice2 + shipping;
document.write("<h1>Shopping Cart</h1> <br>")
document.write("<br> Price of Item 1 is " + priceItem1);
document.write("<br> Quantity of Item 1 is " + quantityItem1);
document.write("<br> Price of Item 2 is " + priceItem2);
document.write("<br> Quantity of item 2 is " + quantityitem2);
document.write("<br> Shipping charges " + shipping);
document.write("<br>");
document.write("<br> Total cost of your order is " + totalCost);

// Task 8
var totalMark = 940;
var markObtained = 790;
var percent = markObtained / totalMark * 100;
document.write("Total Marks: " + totalMark);
document.write("<br> Marks Obtained: " + markObtained);
document.write("<br> Percacntage: " + percent);

// Task 9
var usd = 34;
var riyal = 22;
var usdTopkr = usd * 160;
var riyalTopkr = riyal * 44;
var totalCurrency = usdTopkr + riyalTopkr;
document.write("<h1>Currency Converter</h1>")
document.write("<br> Total currency in PKR: " + totalCurrency);

// Task 10
var num = 4;
num = ((num + 5) * 10) / 2;
document.write("value: " + num);

// Task 11
var currentYear = 2021;
var birthYear = 1998;
var age1 = currentYear - birthYear;
var age2 = (currentYear - birthYear) - 1;
document.write("<h1>Age Calculator</h1>")
document.write("<br> Current Year: " + currentYear);
document.write("<br> Birth Year: " + birthYear);
document.write("<br> Your age: " + age1 + " or " + age2);

// Task 12
var radius = 18;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("<h1>The Geometrizer</h1>");
document.write("<br> Radius of circle: " + radius);
document.write("<br> Circumference of circle: " + circumference);
document.write("<br> Area of circle: " + area);

// Task 13
var favDrink = "Sting";
var age = 23;
var maxAge = 80;
var drinkMax = 2;
var totalSupply = ((maxAge - age) * 365) * 2;
document.write("<h1>Lifetime Supply calculator</h1>");
document.write("<br> Favourite Drink: " + favDrink);
document.write("<br> Current Age: " + age);
document.write("<br> Estimated Maximum Age: " + maxAge);
document.write("<br> Drinks per day: " + drinkMax);
document.write("<br> You will need " + totalSupply + " drinks until old age of " + maxAge);


// Chapter 6-9 

// Task 1
var num = 10;
document.write("Result <br> Value of Number is " + num + " <br> ---------------------- <br>");
document.write("Value of ++Number is " + ++num + "<br> Now value of number is " + num + "<br>");
document.write("<br>");
document.write("Value of Number++ is " + num++ + "<br> Now value of number is " + num + "<br>");
document.write("<br>");
document.write("Value of --Number is " + --num + "<br> Now value of number is " + num + "<br>");
document.write("<br>");
document.write("Value of Number-- is " + num-- + "<br> Now value of number is " + num + "<br>");

// Task 2
var a = 2,
    b = 1;
document.write("Value of a: " + a + "<br> Value of b: " + b);
var result = --a - --b + ++b + b--;
document.write("<br> Value of result: " + result);
// Step 1 => --a pre-decrement --> it will decrease the value of a before asigning it to variable, therefore a will become 1
// Step 2 => --a - --b b also has pre-decrement, so value of b will become 0. now a=1 and b=0, so a-b = 1
// Step 3 => --a - --b + ++b here b is pre-incremented, so b will become 1. so (--a - --b) = 1 and ++b = 1, so --a - --b + ++b = 2
// Step 4 => --a - --b + ++b + b++ here b has post-decrement, so it will return 1. now (--a - --b) = 1  and (++b + b--) = 2, it become --a - --b + ++b + b-- = 3

// Task 3

var name = prompt("What is Your name?");
document.write("Hello " + name + " welcome to the Programming world.");

// Task4

// Didn't had any question

// Task 5
var numOfTable = prompt("Which multiplicatio table do you want?");
var numOfTable = parseInt(numOfTable) || 5;
document.write("Table of " + numOfTable + "<br>");
document.write(numOfTable + " x 1 = " + numOfTable * 1 + "<br>" +
    numOfTable + " x 2 = " + numOfTable * 2 + "<br>" +
    numOfTable + " x 3 = " + numOfTable * 3 + "<br>" +
    numOfTable + " x 4 = " + numOfTable * 4 + "<br>" +
    numOfTable + " x 5 = " + numOfTable * 5 + "<br>" +
    numOfTable + " x 6 = " + numOfTable * 6 + "<br>" +
    numOfTable + " x 7 = " + numOfTable * 7 + "<br>" +
    numOfTable + " x 8 = " + numOfTable * 8 + "<br>" +
    numOfTable + " x 9 = " + numOfTable * 9 + "<br>" +
    numOfTable + " x 10 = " + numOfTable * 10 + "<br>"

)

// Task 6
var sub1 = prompt("Enter Subject 1");
var sub2 = prompt("Enter Subject 2");
var sub3 = prompt("Enter Subject 3");
var subTotal = 100;
var sub1Marks = parseInt(prompt("Enter Marks of " + sub1));
var sub2Marks = parseInt(prompt("Enter Marks of " + sub2));
var sub3Marks = parseInt(prompt("Enter Marks of " + sub3));
var totalMarks = subTotal * 3;
var TotalObtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var overallPercent = Math.floor(TotalObtainedMarks / totalMarks * 100);
 document.write('<table border="0" cellspacing="0">');
document.write("<tr><td> <strong>Subject</strong> </td><td> <strong>Total Marks</strong> </td><td> <strong>Obtained Marks</strong> </td><td> <strong>Percentage</strong> </td></tr>" +
    "<tr><td>" + sub1 + "</td>" + "<td>" + subTotal + "</td>" + "<td>" + sub1Marks + "</td>" + "<td>" + (sub1Marks / subTotal) * 100 + "%" + "</td>" + "</tr>" +
    "<tr><td>" + sub2 + "</td>" + "<td>" + subTotal + "</td>" + "<td>" + sub2Marks + "</td>" + "<td>" + (sub2Marks / subTotal) * 100 + "%" + "</td>" +
    "<tr><td>" + sub3 + "</td>" + "<td>" + subTotal + "</td>" + "<td>" + sub3Marks + "</td>" + "<td>" + (sub2Marks / subTotal) * 100 + "%" + "</td>" +
    "<tr>" + "<td> </td>" + "<td>" + "<strong>" + totalMarks + "</strong>" + "</td>" + "<td>" + "<strong>" + TotalObtainedMarks + "</strong>" + "</td>" + "<td>" + "<strong>" + overallPercent + "%" + "</strong>" + "</td>");

// Chapter 9-11

// Task 1

var city = prompt("Enter city");
if (city === "karachi" || city === "Karachi") {
    document.write("Welcome to city of lights");
} else {
    document.write("Welcome to " + city);
}

// Task 2

var gender = prompt("Enter your Gender");
if (gender === "Male" || gender === "male" || gender === "MALE") {
    document.write("Welcome sir!");
} else if (gender === "Female" || gender === "female" || gender === "FEMALE") {
    document.write("Welcome Ma'am")
} else {
    document.write("Wrong input");
}

// Task 3
var color = prompt("Enter traffic signal color");
if (color === "Red") {
    document.write("Must Stop!");
} else if (color === "Yellow") {
    document.write("Ready to move");
} else if (color === "Green") {
    document.write("Move Now!");
} else {
    document.write("wrong input");
}

// Task 4
var fuel = prompt("Enter the remaining fuel in your car (in litres)");
if (fuel <= 0.25) {
    document.write("Please refill the fuel!");
} else {
    document.write("You are good to go");
}

// Task 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task 6
var sub1 = parseInt(prompt("Enter marks of subject 1"));
var sub2 = parseInt(prompt("Enter marks of subject 2"));
var sub3 = parseInt(prompt("Enter marks of subject 3"));
var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
document.write("<h1>Marks Sheet</h1> <br>");
document.write("<h2>Total Marks: </h2>" + "<h2>" + totalMarks + "</h2> <br>");
document.write("<h2>Obtained Marks: </h2>" + "<h2>" + obtainedMarks + "</h2>");
document.write("<h2>Percentage: </h2>" + "<h2>" + percentage + "%</h2>");
if (percentage >= 80) {
    grade = "A-one";
    document.write("<h2>Grade: </h2>" + "<h2>" + grade + "</h2>");
    document.write("Remarks: Excellent");
} else if (percentage >= 70) {
    grade = "A";
    document.write("<h2>Grade: </h2>" + "<h2>" + grade + "</h2>");
    document.write("Remarks: Good");
} else if (percentage >= 60) {
    grade = "B";
    document.write("<h2>Grade: </h2>" + "<h2>" + grade + "</h2>");
    document.write("Remarks: You need to improve");
} else if (percentage < 60) {
    grade = "Fail";
    document.write("<h2>Grade: </h2>" + "<h2>" + grade + "</h2>");
    document.write("<h2>Remarks: Sorry</h2>");
} else {
    document.write("wrong input");
}

// Task 7
var num = 5;
var guess = parseInt(prompt("GUess the number"));
if (guess === num) {
    document.write("<h1>Bingo! Correct answer</h1>");
} else if (guess + 1 === num) {
    document.write("<h1>Close enough</h1>");
} else if (guess - 1 === num) {
    document.write("<h1>Close enough</h1>");
} else {
    document.write("<h1>wrong guess.. try again</h1>");
}


// Chapter 12-13

// Task 1

var inp = prompt("Enter a character");
var index = 0;
var ascii = inp.charCodeAt(index);

if(ascii >= 48 && ascii <= 57){
    console.log("It's a number");
}
else if(ascii >=65 && ascii <= 90){
    console.log("It's an uppercase alphabet");
}
else if(ascii >=97 && ascii <= 122){
    console.log("It's a lower alphabet");
}
else{
    console.log("Not registered");
}

// Task 2

var num1 = prompt("Enter the first interger");
var num2 = prompt("Enter the second interger");

if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
}

else if(num2 > num1){
    console.log(num2 + " is greater than " + num1);
}

else {
    console.log("Both are equal");
}

// Task 3

var num3 = parseInt(prompt("Enter the Integer"));
if(num3 > 0){
    console.log("Its a positive integer");
}
else if(num3 < 0){
    console.log("Its a negative integer");
}
else{
    console.log("Its zero");
}

// Task 4

var char = prompt("Enter a character");

if(char.length == 1){

    if(char == "a" || char == "e"|| char == "i" || char == "o" || char == "u"){
        console.log(true);
    }
    else{
        console.log(false);
    }   
}
else{
    console.log("Enter only 1 character");
}

// Task 5

var user_pw = "smit123";
var pw = prompt("Enter your password:");
if(user_pw == pw){
    console.log("Correct! The password you enter matches your old password");
}
else{
    console.log("Incorrect password");
}

// Task 6

var hour = 13;
if (hour < 18) {
    console.log("Good Day");
}
else {
    console.log("Good Evening");
}

// Task 7

var time = prompt("Enter time in 24 hour format:")

if(time >= 0000 && time < 1200){
    console.log("Good Morning");
}
else if(time >= 1200 && time < 1700){
    console.log("Good Afternoon");
}
else if(time >= 1700 && time < 2100){
    console.log("Good Evening");
}
else if(time >= 2100 && time <= 2359){
    console.log("Good Night");
}
else{
    console.log("Invalid time");
}

// chapter 14-16

// Task 1

var students = [];

// Task2

var students2 = new Array();

// Task 3

var string_arr = ["SMIT", "Fazeel"];

// Task 4

var number_arr = [2, 21];

// Task 5

var bool_arr = [true,false];

// Task 6

var mixed_arr = [21, "Fazeel" , true];

// Task 7

var education = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "MS", "M.Phil.", "PhD."]

document.write("Qualifications: " + "<br>");
document.write("1) " + education[0] + "<br>");
document.write("2) " + education[1] + "<br>");
document.write("3) " + education[2] + "<br>");
document.write("4) " + education[3] + "<br>");
document.write("5) " + education[4] + "<br>");
document.write("6) " + education[5] + "<br>");
document.write("7) " + education[6] + "<br>");
document.write("8) " + education[7] + "<br>");

// Task 8

var names = ["Michael", "John", "Tony"];
var score = [200, 466 , 378];

document.write("The score of " + names[0] + " is " + score[0] + " Percentage: " + ((score[0]/500)*100) + "%<br>");
document.write("The score of " + names[1] + " is " + score[1] + " Percentage: " + ((score[1]/500)*100) + "%<br>");
document.write("The score of " + names[2] + " is " + score[2] + " Percentage: " + ((score[2]/500)*100) + "%<br>");

// Task 9

var color_names = ["red", "blue", "green", "black"];
document.write(color_names);

// Task 9a

var color_names = ["red", "blue", "green", "black"];
var start_color = prompt("Which color you want to add in the beginning:")
var insert = color_names.unshift(start_color);
document.write(color_names);

// Task 9b

var color_names = ["red", "blue", "green", "black"];
var start_color = prompt("Which color you want to add in the beginning:")
var insert = color_names.push(start_color);
document.write(color_names);

// Task 9c

var color_names = ["red", "blue", "green", "black"];
var insert = color_names.unshift("grey", "silver");
document.write(color_names);

// Task 9d

var color_names = ["red", "blue", "green", "black"];
color_names.shift();
document.write(color_names);

// Task 9e

var color_names = ["red", "blue", "green", "black"];
color_names.pop();
document.write(color_names);

// Task 9f

var color_names = ["red", "blue", "green", "black"];
var enter_color = prompt("Enter the color you desire:");
var enter_index = prompt("Enter the index you want your color to be at: ");
color_names.splice(enter_index, 0, enter_color);
document.write(color_names);

// Task 9g

var colors = ["red","green","pink"];
var choice_colorIndex = prompt("Enter the color index where you want to delete the color ");
var choice_colorNumber = prompt("How many color do you want to remove ");
colors.splice(choice_colorIndex,choice_colorNumber);
console.log(colors);


// Task 10

var student_scores = [320, 222, 412, 124, 400]
document.write("Student's Score: " + student_scores + "<br>");

var ordered = student_scores.sort();
document.write("Ordered student's score: " + ordered)

// Task 11

var cities = ["Karachi", "Lahore", "Hyderabad", "Islambad", "Queta", "Multan"]
document.write("Cities List<br>" + cities + "<br>");
var selected_cities = [];
selected_cities.push(cities[2],cities[3],cities[5]);

document.write("Selected Cities List <br>" + selected_cities);

// Task 12

var arr_join = ["This", "is", "my", "cat"];
document.write("Array: <br>" + arr_join + "<br>")
var new_arr = arr_join.join(" ");
document.write("String: <br>" + new_arr);

// Task 13

var tech = ["Keyboad", "Mouse", "Printer", "Monitor"]
document.write("Devices: <br>" + tech + "<br><br>")

var first = tech.shift();
var second = tech.shift()
var third = tech.shift()
var fourth = tech.shift()

document.write("Out <br>" + first + "<br>");
document.write("Out <br>" + second + "<br>");
document.write("Out <br>" + third + "<br>");
document.write("Out <br>" + fourth + "<br>");

// Task 14

var tech = ["Keyboad", "Mouse", "Printer", "Monitor"]
document.write("Devices: <br>" + tech + "<br><br>")

var first = tech.pop();
var second = tech.pop()
var third = tech.pop()
var fourth = tech.pop()

document.write("Out <br>" + first + "<br>");
document.write("Out <br>" + second + "<br>");
document.write("Out <br>" + third + "<br>");
document.write("Out <br>" + fourth + "<br>");

// Task 15

var phone_manufac = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];

document.write("<select><option>" + phone_manufac[0] + "</option><option>" + phone_manufac[1] + "</option><option>" + phone_manufac[2] + "</option><option>" + phone_manufac[3] + "</option><option>" + phone_manufac[4] + "</option><option>" + phone_manufac[5] + "</option></select>")


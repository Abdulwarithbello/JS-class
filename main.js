console.log("welcome to javaScript")
console.log("hello world")
// var let const
var user_name = 'bello'
let email = 'alahadhoriy@gmail.com'

console.log(user_name)
console.log(email)

var password = 'akinkunmi2000'
const gender = 'male'
var status = 'student'

console.log(password)
console.log(gender)

//var can be redeclare but let cannot
var user_name = 'Abdulwarith'
var password = 'bello123'
console.log(password)
console.log(user_name)
// reassignment
status = 'developer'
console.log(status)
email = 'bello222@gmail.com'
console.log(email)
var age = 25
console.log(age)
// data types
// var nam = "adewale"
// string
// number
// boolean
// object and arrays
// function
// null
// symbol
var firstName = ' Adewale '
var age = 16
var isOnline = true
var brain = null
var school
// to check data type use typeof(age)
console.log(typeof(age))
console.log(typeof(isOnline))
console.log(typeof(firstName))
console.log(typeof(brain))
console.log(typeof(school))
// strings methods
console.log(firstName.length)
console.log(firstName[2]);
console.log(firstName.charAt(1))
// trim Removes the leading and trailing white space and line terminator characters from a string.
var newfirstName = firstName.trim()
console.log(newfirstName.length)
// index
console.log(firstName.indexOf('e'))
console.log(firstName.lastIndexOf('e'))

let sentence = 'welcome to appclick'
console.log(sentence.search('appclick'))
console.log(sentence.toUpperCase())
console.log(sentence.indexOf('APPclick'.toLowerCase()))

var modifiedsentence = sentence.replace('welcome','go')
console.log(modifiedsentence);
//  combining - sting concatination
console.log("my \"name\" is" + firstName + "and i am \n" + age + " year's old");
// string interpolation
console.log(`my name is ${firstName} and i am ${age} year's old`);

var food = "Amala"
var car = "Benz"
var loc ='Ibadan'

console.log(`my favorite food is ${food} and i love driving ${car} \n currently based in ${loc}`);

var number1 = 65
var number2 = 32
// operators
// arithmetic operators addition-+, subtraction-, multiplication*, / division, % floor division, **exponential
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2);
console.log(3 ** number2);

// comparison operators

console.log(4==4);
console.log(4!=5);
console.log(4>5);
console.log(4<5);
console.log(4<=5);
console.log(5>=5);
// triple equal sign === check the value and data type
console.log(5==='5');
console.log(5=='5');
console.log('5'==='5');

// logical operators
var number_one = 2
var number_two = 3
//logical AND statement
console.log(number_one && number_two === 2); 
//logical OR statement
console.log(number_one || number_two === 2);
// logical NOT statement
console.log(!(number_two > number_one));
console.log(!false);
// increment and decrement operator
// (number_two++) , (number_two-)but firstly add it into function
 console.log(number_two+=1);
 console.log(number_two-=1);
var age = 18
age >= 18 ? console.log('you are eligible'):console.log('not eligible')
// '?' is if statement ':' is else statement
var age1 = 18.6372899
console.log(age1.toExponential());
console.log(age1.toFixed());
console.log(age1.toPrecision(4));
console.log(age1.toString());
console.log(age1.toLocaleString());
console.log(Math.PI);
console.log(Math.PI.toPrecision(4));
console.log(Math.sqrt(64));
console.log(Math.floor(3.142));
console.log(Math.round(3.142));
console.log(Math.random());
console.log(Math.random() *10);
console.log(Math.round(Math.random() *100));
console.log(Math.min(2,5,3,1));
console.log(Math.max(2,5,3,1));
console.log(Math.pow(2,3));
console.log(Math.E);
console.log(Math.round(age1));

var number3 = 2
number3 /= 2
console.log(number3)
// Alert and Prompt
// alert('welcome')
// var yourname = (prompt('what is your name'))
// alert(`welcome ${yourname}`)

// arrays
var ballers =[]
console.log(typeof(ballers));
var fav = ['amala', 'beans', 'rice', 23, false]
console.log(fav[0]);
console.log(fav.length);
// add at the end
fav.push('salad')
console.log(fav);
// remove at the end
fav.pop()
console.log(fav);
// remove at the beginning
fav.shift()
console.log(fav);
// add at the beginning
fav.unshift('eba')
console.log(fav);
// console.log(fav.find(23));
var drinks = ['coke','fanta','sprite','pepsi','mirinda','milk']
fav.concat(drinks)
console.log(fav.concat(drinks));
console.log(drinks.slice(1,5));
drinks.splice(2,1,'malt')
console.log(drinks);
// array can be add inside array
// use hackerrank to practice and prepare
var city = ['kano','yobe','taraba',['uyo','rivers','enugu',['ibadan','lagos','ilorin']]]
console.log(city[3][3][2]);
// city.reverse()
// console.log(city.reverse());
var arrays = ['a','b','e','c','A']
console.log(arrays.sort());

// object is not indexed key and values

var array = []
var objects = {
    name: 'Ali',
    occupation: 'developer',
    age: 18,
    isOnline:true,
    hobbies:['playing ball','cooking']

}
console.log(objects.hobbies[1],objects.age);

// date
// const date = new Date()

// console.log(date);

// var seconds = date.getSeconds()
// var minute = date.getMinutes()
// var hours = date.getHours()
// console.log(`${hours} : ${minute} : ${seconds}`);
// console.log(hours + ':' + minute + ':' + seconds);

// var year = date.getFullYear()
// console.log(year);

// conditionals
// if and else, switch operators

// var age = 40
// if(age>20){
//     alert('Your are eligible')
// }
// false '' 0 null undefined nan
// if(age>50){
//     console.log('Your are eligible');
// }else{
//     console.log('Your are not eligible'); 
// }
// admission score 180 age 18
// var age = prompt('enter your age')
// var score = prompt('enter your jamb score')
// if(age >= 18 && score >= 180){
//     alert('you are eligible for admission')
// }
// else if(score >= 150 && age >=16){
//     alert('private school admission')
// }
// else if(age > 18 || score >180){
//     alert('college of education')
// }
// else{
//     alert('your are not eligible')
// }

// qiuz app
// what is the capital city of oyo state
// longest river in the world nile

// var qiuz1 = prompt('what is the capital city of oyo state')
// var qiuz2 = prompt('what is the longest river in the world')
// var mark = 0
// if(qiuz1.toLowerCase() == 'ibadan' && qiuz2.toLowerCase() == 'nile'){
//     mark+=2
//     alert('correct your have' + mark + 'marks')
// }
// else if(qiuz1.toLowerCase() == 'ibadan' || qiuz2.toLowerCase() == 'nile'){
//     mark+=1
//     alert('you got' + mark + 'mark')
// }
// else{
//     alert('wrong')
// }




// const question_one = prompt("what is the capital of oyo state?")
// var mark = 0
// if(question_one.toLowerCase() == 'ibadan'){
//     mark+=2
//     alert(`correct you have ${mark} marks`)
// }
// else{
//     alert('wrong answer')
// }

// const question_two = prompt("what is the longest river in the world?")

// if(question_two.toLowerCase() == 'nile'){
//     mark+=2
//     alert(`correct you have ${mark} marks`)
// }
// else{
//     alert('wrong answer')
// }

// Assignment one
// var temperature = prompt("What is the temperature in your area")
// if(temperature < 0){
//     alert("It's freezing!");
// }else if(temperature >= 0 && temperature <= 15){
//     alert("It's cold!");
// }else if(temperature >= 16 && temperature <= 25){
//       alert("It's warm!");
// }else{
//     alert("It's hot!");
// }

// Assignment two
// let number = prompt("Input a number")
// if(number % 2 == 0){
//     alert("Even");
// }else{
//     alert("Odd");
    
// }

// Assignment three
// var username = prompt("enter your username")
// var password = prompt("enter your 11 digit password")

// if(username === "admin" && password === "password123"){
//     alert("Login Successful!")
// }else if(password !== "password123" && username === "admin"){
//     alert("incorrect password")
// }else if(username !== "admin" && password === "password123"){
//     alert("incorrect username")
// }else{
//     alert("Login failed! invalid credentials.")
// }

// var userName = "bello"
// var passkey = "akin2000"

// var inputuser = prompt("enter your username")
// var inputpass = prompt("enter your password")

// if(inputuser.trim().toLowerCase() == userName && inputpass.trim().toLowerCase() == passkey){
//     alert("login sucessful!")
// }else if(inputpass.length[8] !== passkey){
//     alert("password must be 8 digit")
// }
// else{
//     alert("invalid credentials")
// }

// password validation
// var passcode = prompt("enter password")

// if(passcode.length <= 8){
//     alert('password must be more than 8 characters')
// }
// else if(!passcode.includes('@')){
//     alert('password must have @')
// }

// regex
// minimum eight characters, at least one letter, one number and one special character

// var dayofweek = prompt('enter day of the week')

// switch (dayofweek) {
//     case 'friday':
//         alert('TGIF');
//         break;
//     case 'monday':
//         alert('monday blessing');
//         break;
//     case 'tuesday':
//         alert('its tuesday');
//         break;   
//     default:
//         alert('does of week does not exist');
//         break;
// }

// loop
for(number =1; number <= 10; number++){
    console.log('hello world' + number);
if(number == 6){
    break
}    
}
// for(number =1; number <= 10; number++){
// if(number == 6){
//     continue
// }  
// console.log('hello world' + number);  
// }

// print numbers divisible by 5 and 7 between 1500 to 3600
// for(num = 1500; num <= 3600; num++){
//     if (num % 5 === 0 && num % 7 === 0) {
//        if (num == 1750) {
//         continue;
//        } 
//     }
//     console.log(num);
// }

var array = ['jibola','quadri','rilex']
for(num = 0; num < array.length; num++){
    console.log(array[num] + '@gmail.com');
}

// var figure = 1
// while (figure < 10) {
    // console.log('hello world');
    // figure++
// }

// numbers divisible by 5 in 1 to 100
var fig = 1
while (fig <= 100) {
    if(fig%5 == 0){
        console.log(fig)
    }
  fig++  
}

// functions 
// function is a block of code that runs when you call it
function greet() {
    console.log("hello everyone");
}
greet()

function hello(user) {
    console.log(`hello ${user}`);
}
hello("akin")
// takes 2 number2
// function add(num,num2) {
//     console.log(num + num2);
// }
// add(3,4)

function add(num,num2) {
   return(
    num + num2
   )
}
console.log(add(3,4));
// var year1 = prompt("enter year of birth")
// var year2 =2024
// function age(year1,year2) {
//     return(
//         year2 - year1
//     )
// }
// console.log(age(2024,2000));

function calcYear(userYear) {
    var currentYear = new Date().getFullYear()
    return(
        `you are ${currentYear - userYear} year's old`
    )
}
console.log(calcYear(2015));

// 0 degrees celcius equals to 32 degrees fahrenheit
// (celcius * 9/5) + 32
function convertDegree(celciusNumber) {
    return(
        (celciusNumber * 9/5) + 32
    )
}
console.log(convertDegree(12));

// function degrees(convertedTemp) {
//     var celcius = 0
//     var fahrenheit = 32
//     return(
//         celcius + fahrenheit
//     )
// }
// console.log(degrees());

// DOM Document Object Model

var text = document.getElementById('text')
var text1 = document.getElementsByTagName("h2")
var text2 = document.getElementsByClassName("text3")
var all_text = document.querySelector(".text3")
// var all = document.querySelectorAll()

text.innerHTML = "hello world"
console.log(text);
text.style.color = "red"
all_text.textContent = "hello world"
console.log(all_text);

var btn = document.querySelector("button")
var body = document.querySelector(".body")

btn.addEventListener('click',function()
   {
    body.style.backgroundColor = "black"
    text.style.color = "green"
   }
)
// display current date on your html on click of the first icon it change to darkmode
// and on click of another icon it changes to lightmode
// auto darkmode

// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// current time



function displayTime() {
    var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
var timeString =  hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerText = timeString;
}
// displayTime()
setInterval(displayTime, 1000);

var moon = document.querySelector(".fa-moon")
var sun = document.querySelector(".fa-sun")
var body = document.querySelector(".body")

moon.addEventListener('click',function()
   {
    body.style.backgroundColor = "black"
   }
)
sun.addEventListener('click',function()
   {
    body.style.backgroundColor = "white"
   }
)










































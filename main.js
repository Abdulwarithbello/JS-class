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
const date = new Date()

console.log(date);

var seconds = date.getSeconds()
var minute = date.getMinutes()
var hours = date.getHours()
console.log(`${hours} : ${minute} : ${seconds}`);
console.log(hours + ':' + minute + ':' + seconds);

var year = date.getFullYear()
console.log(year);

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
var temperature = prompt("What is the temperature in your area")
if(temperature < 0){
    alert("It's freezing!");
}else if(temperature >= 0 && temperature <= 15){
    alert("It's cold!");
}else if(temperature >= 16 && temperature <= 25){
      alert("It's warm!");
}else{
    alert("It's hot!");
}

// Assignment two
let number = prompt("Input a number")
if(number % 2 == 0){
    alert("Even");
}else{
    alert("Odd");
    
}

// Assignment three
var username = prompt("enter your username")
var password = prompt("enter your 11 digit password")

if(username === "admin" && password === "password123"){
    alert("Login Successful!")
}else if(password !== "password123" && username === "admin"){
    alert("incorrect password")
}else if(username !== "admin" && password === "password123"){
    alert("incorrect username")
}else{
    alert("Login failed! invalid credentials.")
}





















































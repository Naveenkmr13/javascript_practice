 // alert('hahahah');
console.log("un nick name navi ya..");
// variable , dynamic type language
let n = 0; // let is a dynamic variable
const nam = "navi" //const is a static permenent value
// nam = 09
console.log(n);
console.log(nam);

// let age = prompt("what is your age");
// console.log("for this",age,"the amount is",age*20);
// console.log(Number(age)+10);


let mess = document.getElementById("message")
mess.innerHTML = "hi naveen"



//try in console
//rounding
Math.round(5.8) //result 6
Math.round(5.1) //result 5
//floor gives prev number
Math.round(5.8) //result 5
//ceil gives next number
Math.ceil(5.8) //result 6
Math.ceil(5.1) //result 6
//returns square root of the number
Math.sqrt(55) //result 7.416....
//absolute value returns positive value of the number
Math.abs(-9) //result 9
//power - Math.pow(base,exponent)
Math.pow(8,5)
32768
//min value from a set of values
Math.min(8,5,7,8) //result 5

//random - returns a value between 0 and 1
Math.random()
//dice roll - random number between 1 and 6
Math.floor(Math.random()*6) + 1
//random number between 1 and 100
Math.floor(Math.random()*100) + 1

//constants
Math.PI
Math.E

//string ===================================================================================================
let str = "Strive not to be a success, ";
let str2 = "but rather to be a value";
// try in console
//joining string - + and concat
str+str2 
str.concat(str2) //joins the two strings
str.concat("**", str2) 

/*
Partitioning String

slice(start, end)
substring(start, end)
substr(start, length)
*/
str2.slice(4,10) //result - 'rather'
str2.slice(4) //result - 'rather to be a value'
//negative index counts backwards. Last character is -1
str2.slice(-5) //result - 'value'

str2.substring(4,10) //result - 'rather'
str2.substr(4,10) //result - 10 is the length

//replace
str.replace('Strive','Aim') //result - 'Aim not to be a success, '
//  replaceAll is used to replace the all with the specifyed one
str.toUpperCase() //result - 'STRIVE NOT TO BE A SUCCESS, '
str.toLowerCase() //result - 'strive not to be a success, '

str.length //result - 28

let str1 = "  Strive not to be a success, ";
str.trim() //result - "Strive not to be a success,";

str.trimStart() //result - "Strive not to be a success, ";
str.trimEnd() //result - "S  trive not to be a success,";
	
let bill = 'Rs.10'
//padEnd - pads in the end until the length becomes 7
bill.padEnd(7,'0') //result-'Rs.1000'

str1[1] //result - 't'
str1.charAt(1) //result -'t'
//charCodeAt returns unicode value of character
str1.charCodeAt(1) //result - 116

//searching characters
str1.indexOf('e') //result - 5
str1.lastIndexOf('e') //result - 23
str1.indexOf('z') //result - -1

//searching words
str1.search('not') //result - 7
str1.search('nott') //result - -1

//check if a word is present or not
str1.includes('not') //result - true

str1.startsWith('S') //result - true

// Template Literals
// Introduced in 2015 with ECMAScript6 or ES6

let firstName = "Ramya";
let lastName = "Murali";
let city = "Chennai";

console.log(firstName + " " + lastName + " lives in " + city);

//string interpolation
console.log(`${firstName} ${lastName} lives in ${city}`);

//multiline string

let msg = `happy
birthday`;

console.log(msg)

//single and double quotes in string
msg = "cat's name is toto";

msg = `cat's name is "toto"`;

console.log(msg)

// exercise =========================================================================================================>>>>>

let names = "bharathi"
let a = names.length-1
let k = Math.floor(Math.random()*a)
console.log(names[k])

// --------------------------------------------------------------------------
let p = "5 items"
let j = "$95"

let rr = `you have ${p} in your card your bill amount is ${j} `
console.log(rr)

// --------------------------------------------------------------------------------->

let brr = [5,8,10,7,9,11]
brr.splice(3,3,17,19,111)
brr.unshift(100)
brr.splice(6,0,200)
brr.push(1000)
console.log(brr)
let kk = brr.length
console.log(kk)
let len = Math.round(kk/2)
console.log(len)
brr.splice(len,0,0)
console.log(brr)

// -------------------------------------------------------------------------------------->

//arrays
let num = 10;
let name = "vidhya";

let cities = ["Chennai", "Madurai", "Trichy"];

let marks = [78, 56, 67, 54, 98];

//length - total elements in the array
console.log(marks.length);

//access 2nd element from start - index starts with 0.
console.log(cities[1]);

//access 3rd element in array
console.log(cities[3]);

//last element
console.log(marks[marks.length - 1]);

//mix of int and string
let arr = [5, 6, 7, "a", "abc", [3, 4]];
console.log(arr);
console.log(arr[5][1]);

//2d array
let matrix = [
  [3, 4, 5],
  [4, 5, 7],
  [6, 7, 8],
];
console.log(matrix[2][1]);

//array methods
let array = ["a", "b", "c", "d", "e"];

//push - add element to the end and returns new length
array.push("f");
console.log(array);

//pop - removes element from the end and
//returns removed value
console.log(array.pop());

//shift - removes element from start of the array
//returns removed value
console.log(array.shift());
console.log(array);

//unshift - adds element to the start of the array
//returns new length
console.log(array.unshift("a"));
console.log(array);

//delete
// delete array[2]
// console.log(array[2])

//splice
//1st parameter - starting index
//2nd parameter - no. of elements to be deleted from starting index
//3rd(or more) parameter - values to be inserted from starting index
array.splice(2, 2); //deletes 2 elements starting at index 2
console.log(array);

array.splice(1, 1, "m"); // replace - deletes element at index 1 and inserts 'm'
console.log(array);

array.splice(1, 2, "x", "y"); //deletes elements at position 1 and 2 and inserts 'x','y'
console.log(array);

array.splice(1, 0, "b");
console.log(array);

//slice(starting index, ending index)
//ending index not included
console.log(array.slice(1, 2));

//reverse
array.reverse();
console.log(array);

//join - converts array to  string

let st = array.join();
console.log(str);

//split - converts string to array
let str3 = "g,t,r,e";
let arr3 = str3.split(",");
console.log(arr3);

//concat and spread operator
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let joinedArr = [firstArr,secondArr]
console.log(joinedArr)

joinedArr = firstArr.concat(secondArr)
console.log(joinedArr)

let joined = [...firstArr,...secondArr]
console.log(joined)


// ========================================================================================================>
//If else - conditional statement

let pwd_correct = false;

if (pwd_correct) {
  console.log("You are logged in");
} else {
  console.log("Incorrect password");
}

// Comparison Operators: ==  ===  !=  !==  >  <  >=  <=  ?: conditional/ternary
// Logical Operators: && || !

age = 65;
gender = "female";
if (age > 60 && gender === "female")
  console.log("You can avail special discount");

//max of two numbers
let ak = 40, b = 30;
let max

if(ak>b)
  max = ak
else
  max = b

max = ak>b?ak:b


console.log(max)


console.log("Bye");

//============================================>

let od ={
  name:"naveen",
  age:23,
  arr:[1,2,3],
  ev:{
    amma:"chitra",
    age:43

  },
  buy:function(){
    console.log("i am naveenkumar")
  },
  clock(){
    console.log("timie is 16.09")
  }
}
console.log(od.name)
console.log(od.name)
console.log(od.arr)
console.log(od.buy())
console.log(od.clock())
od.name = "kumar"
console.log(od.name)
od["name"] = "baahu"
console.log(od.name)
od.game = "cricket"
console.log(od)
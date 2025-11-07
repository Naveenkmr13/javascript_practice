//Functions - performs specific task
//            can be called multiple times
//            optionally takes input as 
//            parameters and optionally
//            returns value

//function declaration
function isPositive(num){//parameter
    return num>0
}

console.log(isPositive(-4))//argument

function sayHello(){
    console.log('hello')
}

sayHello()
//hoisting
// JavaScript Hoisting refers to the 
// process whereby the interpreter appears
// to move the declaration of functions, 
// variables or classes to the top of their
// scope, prior to execution of the code
console.log(findProduct(4,7)) 

function findProduct(a,b){
    return a*b
}


console.log(findProduct)
console.log(typeof findProduct)

//default parameters
function greet(name='there'){
    console.log('hi',name)
}

greet('Ram')
greet()

//recursion - function calling itself
//factorial - product of first n numbers
//5! = 5*4*3*2*1 = 5*4*3*2*1
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

//function expression
//assigned to a variable as object
let a = 100

let isEven = function(num){
    return num%2==0
}
console.log(isEven(5))
console.log(isEven)

let arr = [ 2, 3, 5, 6, 10]
let findSum = function(arr){
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}

console.log(findSum(arr))

// let volume = function(l,b,h){
//     return l*b*h
// }

//arrow function
let volume = (l,b,h) => l*b*h
console.log(volume(7,8,9))

let sumOfArr = arr =>{
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(sumOfArr(arr))

//area of circle
let area = r => Math.PI*r*r
console.log(area(5))

// console.clear()
//variable arguments - rest parameters
let prod = function(...args){
    let result = 1
    for(let val of args)
        result *= val
    return result 
}

let prod2 = function(){
    let result = 1
    for(i=0;i<arguments.length;i++)
      result *= arguments[i]
    return result 

}

console.log(prod2(7,6,5,4))

//Generators - generates value one by one

function* indexGenerator(){
    let index = 1
    while(true){
        yield index++
    }
}

const gen = indexGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// console.clear()
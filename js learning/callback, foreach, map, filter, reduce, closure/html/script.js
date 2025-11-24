// ================================================================================>
// callback is the method used as sending the function as parameter to another function
let add = (a,b) => {console.log(a+b)}

let sub = function(a,b){
    console.log(a-b)
}
function greeting(callback,a,b){
    callback(a,b)
}
greeting(sub,3,4)

//callback - Function passed as argument

function greetConsole(name){
    console.log('hello',name)
}

function greetHeading(name){
    const heading = document.querySelector('h1')
    heading.innerHTML = 'hello ' + name
}

function greet(callback){
    console.log(callback)
    callback('Ram')
}

greet(greetConsole)
// greet(greetHeading)


// greet(name => {
//     const heading = document.querySelector('h1')
//     heading.innerHTML = 'hello ' + name
// })
console.clear()


//Foreach  => used with function
// it cannot build an array only create the seperate value

arr = ['deepa','suresh','ramya']
arr.forEach(print)
console.log(arr)

function print(val){
    console.log(val.toUpperCase())
}

arr.forEach(val => console.log(val.toUpperCase()))
console.log(arr)

arr.forEach((val,index,arr)=>{
    arr[index] = val.toUpperCase()
})

console.log(arr)

// arr = ['ECE', 'IT', 'CSC', 'EEE']

// arr.forEach(val => {
//     const opt = document.createElement('option')
//     opt.textContent = val
//     opt.value = val
//     document.getElementById('branch').appendChild(opt)
// });

console.clear()


// ============================================================================>
// map is used to convert the inputs and also it generates the output as array where appear the current updated array

let brr = [1,2,3]

let val = brr.map(value => value*2)
console.log(val)

// diggerence btwwn then

let jk = brr.forEach(kl)
function kl(val){
    console.log(val*2)
}
//map - executes callback for each array
//      element and returns new array
let priceUSD = [20,35,13]
let priceINR = priceUSD.map(x => x *83)
console.log(priceINR)

priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}

console.log(priceINR)

const input = [ //array of objects
            {name:'John',age:15},
            {name:'Radha',age:45},
            {name:'Kaushik',age:12},
            {name:'Anu',age:21},
            {name:'Divya',age:26}
              ]

const ages = input.map( x => x.age)
console.log(ages)

// ===========================================================================================>
// it also provided updated array
//filter - returns new array by checking
//        each value of original arr using
//        call back fn

let cost = [35,234,12,34,54,123]

let lessThan100 = cost.filter( x => x<100)
console.log(lessThan100)

// =======================================================================================================>
// reduce is used to reduce the array into single element or making the arr for our self use
// ==== exercise ======
krr = [4,6,2,3,1,1,3,5,7,8,4,3]
let dr = krr.reduce((acc,ele) => {
    if(!acc.includes(ele))
        acc.push(ele)
    return acc
},[])
console.log(dr)

//reduce - executes reducer callback
//       and returns accumulated result
//arr.reduce(callback[, initialValue])
//reduce(function (accumulator, currentValue, currentIndex, array)) 

cost = [35,234,12,34,54,123]
let cartTotal = cost.reduce((total,el)=>total+el,1000) //1000 is the default value
console.log(cartTotal)

arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

//result = {a:1,b:1,c:2,d:2...}
let result = {'a':1,'b':2}
result['c'] = 1
console.log(result['d']) 

console.log(arr2d.flat())
let count = arr2d.flat().reduce(
    (accumulator,currVal) => {
        if(accumulator[currVal])
            accumulator[currVal]++
        else
            accumulator[currVal] = 1
        return accumulator
    }
    ,{});

console.log(count)


// ===============================================================================================================>
// closure means a function returning the another function
//  inner function can accesss the outer function this is called lexical function  


let s = (x)=>{
    let inner = (y) => {
        console.log(x+y)
    }
    return inner
}
let res = s(4)
res(9)

let a = 100

function func1(){
    let b,c
    console.log('a is',a)
}

func1()
a = 200
func1()

//returning functions - higher order function
//lexical scoping - inner scope can access parent scope variables

//A closure is the combination of a 
//function bundled together (enclosed) 
//with references to its surrounding state 
//(the lexical environment). 
//In other words, a closure gives you 
//access to an outer function's scope from
//an inner function.
function outer(name){
    let outerVariable = 'Bread'
    function inner(){
        let innerVariable = 'Butter'
        console.log('inner variable',innerVariable)
        console.log('outer variable',outerVariable)
        console.log('a is',a)
        console.log('hello',name)
    }
    return inner
}   

let call1 = outer('Vidya')
call1()

let call2 = outer('John')
call2()
call1()

function makeAdder(x){
    return function(y){
        return x+y
    }
}

let add5 = makeAdder(5)
console.log(add5(10))

let add100 = makeAdder(100)
console.log(add100(20))
console.log(add100(45))
console.log(add5(22))

console.clear()

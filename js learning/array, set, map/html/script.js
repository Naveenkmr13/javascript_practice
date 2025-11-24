// memory management
// primitive datatypes(pd) => str,number,bigint boolean symbol,null
// for primitive datatypes it has been stored only in stack memory
// reference types arrays,functions,all objects,math,date these are stored in heap but the address stores in stack
// so if we change the pd value it create the seperate address and seperate storage
// but in reference types we create seperate obj then consists of single storage in heap but in stack occur 2 address loc

let bigNum = 9007199254740991n

const bigNum2 = BigInt(9007199254740991)

let a = 100
a = 200
let b = a
b=300

console.log('a is ',a)
console.log('b is ',b)

let obj1 = {name:'Danya',age:24}
let obj2 = obj1

obj1.age = 25
obj2.name = 'ramya'

console.log('obj1',obj1)
console.log('obj2',obj2)

let arr1 = [2,3,4]
let ar = arr1
ar[0] = 10
console.log(arr1,ar)

// =================================================================================================>
//Set Object - Collection of values
//           - Values are unique   
let arr = [1,1,2,3,4,5,5,5,5,10,8]
let mySet1 = new Set(arr)
console.log(arr)
console.log(mySet1)

let mySet2 = new Set()
mySet2.add(4)
mySet2.add(5)
mySet2.add('pqr')
mySet2.add({'a':1,'b':2})
mySet2.add(4)

console.log(mySet2)
let obj = {'a':1,'b':2}
mySet2.add(obj)
console.log(mySet2)
console.log(mySet2.size)

console.log(mySet2.has(6))
console.log(mySet2.delete(4))

let arr2 = Array.from(mySet2)
console.log(arr2)
console.clear()

//Map
//Map objects are collections of 
//key-value pairs. 
//A key in the Map may only occur once
//key or value can be object

let map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('a',3)
console.log(map1)
console.log(map1.size)
console.log(map1.has('c'))
map1.delete('a')

map1.set('d',2)
map1.set('e',3)

for(let i of map1){
    console.log(i,"kk")
}

for(let [k,v] of map1){
    console.log(v)
}

for(let k of map1.keys()){
    console.log(k)
}

map1.forEach((v,k) => {
    console.log('key',k,'value',v)
})
   
//2d array to map
let kvArray = [['a',1],['b',1]]
let map2 = new Map(kvArray)
console.log(map2)
//map to 2d array using spread operator
console.log(...map2)
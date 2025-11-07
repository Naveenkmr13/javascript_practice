// object ==> stores data collection of data
//properties ==> insides the object which consists of key and value
//method ==> functions inside the object is consists of method
let item = {
  name:'phone',
  price:25000,
  quantity:1,
  categories:['electronics','phones'],
  dimensions:{
    length:7,
    breadth:3.5,
    height:.5
  }
}
console.log(item)
console.log(item.categories[0])
console.log(item.dimensions.length)

//another way to create object
let item2 = new Object();
item2.name = 'charger'
item2.price = 700
item2.quantity = 1
console.log(item2)

//accessing object
//dot notation
console.log(item.price)
item.price = 26000
console.log(item.price)
//adding new property
item.returnable = true
console.log(item)

//square bracket notation
console.log(item['price'])
item['returnable'] = false

let key = 'price'
item[key] = 27500
item.key = 28000 //doesn't work
console.log(item)

item = {
  name: "phone", 
  quantity:1,
  price:25000,
  buy: function(){
    console.log('item added to cart')
  },
  addToList(){
    console.log('item added to list')
  }
}
item.buy()
item.addToList()
item.buy()
item.addToList()
item.buy()
item.addToList()
item.buy()
item.addToList()

// ===================================================================================================>
  // loops

//for, while, do-while

for(let i=1;i<=5;i++){
  console.log('hello')
}

//print 1 to 5
let i
for(i=1;i<=5;i++){
  console.log(i)
}

console.log('outside loop ', i)

//print 10 to 1
for(i=10;i>=1;i--)
  console.log(i)

console.log('while loop')
i=0
while(i>=1){
  console.log(i)
  i--;
}

console.log('outside loop ', i)

console.log('do while loop')
i=0
do{
  console.log(i)
  i--;
}while(i>=1)

//break - stops the loop

// while(true){
//   let num = Number(prompt('enter a number'))
//   if(!isNaN(num))
//     break;
// }

console.log('continue demo')
//continue - skips the current iteration
for(i=1;i<=10;i++){
  if(i%3==0)
    continue
  console.log(i)
}

//for...of
let arr = ['apple','orange','grapes','mango']

for(i=0;i<arr.length;i++)
  console.log(arr[i].toUpperCase())


for(let fruit of arr)
  console.log(fruit)

//for..in
item = {
  name: "phone", 
  quantity:1,
  price:25000
}

for(let key in item){
  console.log(item[key])
}
// ==============================================================================================================>

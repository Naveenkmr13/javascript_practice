class New {
    static total = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
        New.total++
    }
    login(){
        console.log(`hi ${this.name}`)
    }
    std(){
        console.log(`dei ${this.name} un age ${this.age} tana`)
    }
    static total_user() { //statis method
        console.log(`total number of users(object is crested) is ${New.total++}`)
    }

}
let ob = new New("navee",23)
let ob1 = new New("kumar",23)
ob.login()
ob.std()
New.total_user()

// static method used to acces the variablt in tha class
// where as methods can be accesses through the object
// static method is defaultly created for ex math.square() here math is class sqrt is the static method
// overriding means if we create a method in parent class then it take in derived whereas if the method is in derived class then it must take derived class is called overriding
class Derived extends New {
    // this std is overriding already in parent class but we over riding 
    std(){
        console.log("overriding")
    }
}
let ok = new Derived("nav",32)
ok.std()
// =================================================================================>
let user1 = {
    name:'Ramya',
    age:22,
    login(){
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

let user2 = {
    name:'Vasanth',
    age:24,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

let user3 = {
    name:'John',
    age:21,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

user2.login()
user3.login()

//Class is a template of properties 
//   and methods
//static - common variables/methods for class
//       - accessed with className
//ES6
class User{ // base class, parent class, super class
    static numberOfUsers = 0;
    constructor(name,age){
        //instance variables
        this.name = name;
        this.age = age;   
        User.numberOfUsers++;
    }

    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
    logout(){
        console.log('You are logged out')
    }
    static displayTotalUsers(){
        console.log('Total number of Users is '+User.numberOfUsers++)
    }
}

let userOne = new User('Vidya',21)
let userTwo = new User('Ramesh',33)
let userThree = new User('Mano',32)
userOne.login()
userTwo.logout()
//console.log('Number of Users',User.numberOfUsers)
User.displayTotalUsers()

let movie = 'PS1'
let music = new String('ARR')

//inheritance - acquiring properties of
//            - a base class

//derived class, child class, sub class
class Paiduser extends User{
    constructor(name,age){
        super(name,age);
        this.storage = 100;
    }
    message(){
        console.log('You have 100GB free storage')
    }
    //overriding
    login(){
        console.log('Thank you for your support')
        return this
    }
}

let paidUser1 = new Paiduser('Dhana',22)
paidUser1.login()
paidUser1.message()

//method chaining

paidUser1.login().message()


function User(name,age){
    this.name = name;
    this.age = age;
}

User.prototype.login = function(){
    console.log('hi',this.name)
    console.log("You are logged in")
}

let use1 = new User('Abdul',34)
user1.login()

//get and set
class Temperature{
    constructor(temp){
        this._temp = temp
    }
    get temp(){
        return `${this._temp} deg celcius`
    }
    set temp(temp){
        if(temp>100)
            temp = 100
        this._temp = temp
    }
}

let temp1 = new Temperature(25)

temp1.temp = 150
console.log(temp1.temp)
// ====================================================================================================================================================================>
// modules => purpose of using the class in other folder 
// type="module" want ot put in html page script inside

//script.js

import C,{fillGas as fill,repair} from './car.js'

let car1 = new C()
car1.drive()
fill()

//car.js

//ES6 - modules
export default class Car{
    drive(){
        console.log("Driving")
    }
}

export function fillGas(){
    console.log('Filling Gas')
}

export function repair(){
    console.log('Repairing')
}

// export default Car
// export {fillGas,repair}

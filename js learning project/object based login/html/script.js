let user = {
    user_name : "naveen",
    password : "navi",
    login:function(){
        let a = prompt("enter the user name")
        let b = prompt("enter the password")
        if(a === this.user_name && b === this.password){
            console.log("succefully login")
        }else{
            console.log("failer to login")
        }
    }
}
let user2={
    user_name : "na",
    password : "nav",
    lo:user.login
}
user.login()
user2.lo()

//this => is used to re use the function with the current object properties
// with out this we want to write function in all time 
// if i did not put this then the user2 object doed not take their properties they take only user and if  you put user name as na it shows wrong 

//  so we can access the  function for all other object here "this" takes the role of """current object calling the function"""
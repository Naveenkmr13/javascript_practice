//creating a div in js
let result = document.createElement('div')
result.id='final'
document.querySelector("#btn").after(result) // div must be in after button
// document.getElementById("first").appendChild(result) //another method  to add the div into the html
function ana(){
    let city = document.querySelector('#selecting').value
    console.log(city)
    let pop = 0
    if(city == "india"){
        pop = 100
    }
    else if(city == "banglore"){
        pop = 200
    }
    else{
        pop = 300
    }
    let dis = `in chennai ${city} there were ${pop} population`
    document.getElementById("final").innerHTML= dis
}
//=======================================================================================================>

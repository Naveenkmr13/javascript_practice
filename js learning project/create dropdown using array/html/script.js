let dropdown = document.getElementById("dropdown")


let arr = ["ai","csc","ece","it","mech"]
for(let dep of arr){
    let option = document.createElement("option");
    dropdown.appendChild(option)
    option.text = dep
}
function come(){
    let res = document.getElementById("dropdown").value
    console.log(res)
}
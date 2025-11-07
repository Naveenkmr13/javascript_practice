let words = document.getElementById("words")
let btn = document.getElementById("btn")


let hexa_value= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// console.log(convert())
function convert(){
    let str ='';
    let i
    for (i=0;i<6;i++){
        let value = Math.floor(Math.random()*16)
        str+=hexa_value[value]
    }
    words.innerHTML=`#${str}`
    btn.style.backgroundColor = `#${str}`
    words.style.color = `#${str}`
    return str
}
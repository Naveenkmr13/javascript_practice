let result = document.createElement("div")
result.id = "final"
document.getElementById("last").after(result)
// document.getElementById("wrapper").appendChild(result)


function res(){
   let selected = document.querySelector('input[name="edu"]:checked');
   console.log(selected.value)
   if(selected.value == "high school" || selected.value == "ug"){
    document.getElementById("final").innerHTML=`this ${selected.value} is elegible`
   }
   else{
        document.getElementById("final").innerHTML=`this ${selected.value} is not elegible`

   }
   
}

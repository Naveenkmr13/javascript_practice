tot_amt = 0
let input = prompt("enter your units:")

function gene(){
  if(input<=50){
     tot_amt = input*0.75
  }
  else if(input>50 && input<=150){ //110-50 =>60
    tot_amt = 50*0.75
    let curr = input - 50  //60
    tot_amt+=curr
  }
  else if(input>150 && input<=250){ //170 -50 =>120
    tot_amt = 50*0.75 
    console.log(tot_amt)
    let curr = input-50 //120
    console.log(curr)
    let curr2 = curr-100 //20
    console.log(curr2)
    tot_amt+=100
    console.log(tot_amt)
    tot_amt+=curr2*1.30
    console.log(tot_amt)
  }
  else{
    tot_amt = input*1.50
  }
  return tot_amt
}
console.log(gene())


//====================================================================>


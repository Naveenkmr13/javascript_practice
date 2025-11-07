let a = prompt("enter the value:")
if(a.includes("+")){
    let v = a.split('+')
    let res = Number(v[0])+Number(v[1])
    console.log(res)
}else{
    let v = a.split("-")
    let res = Number(v[0])-Number(v[1])
    console.log(res)
}
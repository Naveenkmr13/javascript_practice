function converter(){
    let a = Number(document.getElementById("question").value)
    console.log(a)
    let convert = a*60
    let res = document.getElementById("result")
    console.log(res)
    res.innerHTML = convert
}


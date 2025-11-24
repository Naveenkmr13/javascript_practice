
// Frankfurter currency API

fetch("https://api.frankfurter.dev/v1/latest")
.then(res=>res.json())
.then(mes=>convert(mes))

let val = document.querySelectorAll(".dropdown")

function convert(mes){
    console.log(mes)
    
    console.log(val)
    l = Object.entries(mes)[3][1]
    va = Object.entries(l)
    // console.log(va)
    for(let i=0;i<va.length;i++){
        let opt = document.createElement("option")
        opt.text = va[i][0]

        let op1 = document.createElement("option")
        op1.text = va[i][0] 

        // `<option value="${va[i][0]}">${va[i][0]}</option>`
        // console.log(opt)
        
        val[0].appendChild(opt)
        val[1].appendChild(op1)

        // app.text = va[i][0]
    }
}


let btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    let oldErr = document.getElementById("errr");
    if (oldErr) {
        oldErr.remove();
    }

    let inp = document.getElementById("input").value
    let dp1 = val[0].value
    let dp2 = val[1].value
    // console.log(inp)
    let ne = document.createElement("div")
    ne.id="errr"
    ne.style.color="red"
    try{
        if(dp1 === dp2){
            throw "Same currency are not allowed"
        }
    }catch(err){
        ne.textContent = err;
        btn.after(ne);
    }
    return final(dp1,dp2,inp)

})

function final(from, to, amount) {
  fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      document.getElementById("result").value = convertedAmount
    });
  }

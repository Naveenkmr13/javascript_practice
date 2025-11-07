function convert(){
    let question = document.querySelector('#ques').value
    let calc = question.toLowerCase().replace(/[^a-z0-9]/g,"")
    let rem = calc.replaceAll(" ","")
    console.log(rem)
    let sp = rem.split('')
    console.log(sp)
    let final = sp.reverse().join('')
    console.log(final)
    if(question.length == 0){
        let r = document.getElementById('result')
        r.innerHTML = "please enter the sentence"
        // r.style.color = 'red'
        r.className = 'error';
    }
    else if(rem.length == final.length && rem == final){
        console.log("ji")
        let r = document.getElementById('result')
        r.innerHTML = "yes palandrome"
        r.style.color = 'green'
    }
    else{
        console.log("lp")
        let r = document.getElementById('result')
        r.innerHTML = "no palandrome"
    }

}
    
// Was it a car or a cat i saw
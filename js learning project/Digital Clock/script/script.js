let map = new Map()
map.set(0,"sunday")
map.set(1,"monday")
map.set(2,"tuesday")
map.set(3,"wednesday")
console.log(map)


function clock(){
    let dt = new Date()
    let hour = document.getElementById("hr").innerHTML = dt.getHours() > 12 ? initial(dt.getHours()-12) : dt.getHours()
    // let hour = dt.getHours()
    // let h = hour>12 ? hour-12:hour
    // document.getElementById("hr").innerHTML = initial(h)
    document.getElementById("min").innerHTML = initial(dt.getMinutes())
    document.getElementById("sec").innerHTML = initial(dt.getSeconds())
    document.getElementById("ampm").innerHTML = map.get(dt.getDay())//hour>=12 ?"PM":"AM"
}

function initial(num){
    let val = num<10 ? "0"+num : num
    return val
}
setInterval(clock,1000)

let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");



function update(){
    
    let time = new Date();
    
    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();
}
    
    
    setInterval(update,1000);
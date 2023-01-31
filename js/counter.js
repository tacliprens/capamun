var endDate = new Date("Apr 14, 2023 00:00:00").getTime();
var timer = setInterval(function(){
    let now = new Date().getTime();
    let t = endDate - now;
    if(t >= 0){
        let days = Math.floor(t / (1000*60*60*24));
        let hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((t % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((t % (1000*60)) / 1000);
        document.getElementById("timer-days").innerHTML = days + "<span class='label'> DAYS</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'> H</span>";
        document.getElementById("timer-minutes").innerHTML = minutes + "<span class='label'> MINS</span>";
        document.getElementById("timer-seconds").innerHTML = seconds + "<span class='label'> SECS</span>";
    }
    else{
        document.getElementById("timer").innerHTML = "Today is CAPAMUN";
    }

},1000);

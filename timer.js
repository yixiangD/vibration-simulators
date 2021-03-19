var elapsedTime = 0.0, formatTime = 0.0, pause = 0;
function cal_time() {
    elapsedTime += Date.now() - startTime;
    formatTime = (elapsedTime / 1000).toFixed(2);
    document.getElementById("timer").innerHTML = formatTime;
}

var mystart;
var startTime;
function start_count() {
    startTime = Date.now();
    mystart = setInterval(cal_time, 100);
}

var myreset;
function reset_count() {
    myreset = clearInterval(mystart);
    document.getElementById("timer").innerHTML = 0.0;
}

var mystop;
function stop_count() {
    pause = 1;
    document.getElementById("pause_moment").innerHTML = formatTime;
    mystop = clearInterval(mystart);
}

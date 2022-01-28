const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const textMinutes = document.getElementById('minutes');
const textSeconds = document.getElementById('seconds');
const header = document.getElementById('header');
const taskBtn = document.getElementById('task');
const breakBtn = document.getElementById('break');

let taskTime = '25';
let breakTime = '05';
let isTaskTime = true;


textMinutes.innerHTML = isTaskTime ? taskTime : breakTime;
textSeconds.innerHTML = '00';

taskBtn.addEventListener('click', function(){
    isTaskTime = true; 
    resetTimer();
    taskBtn.classList.add('timer-type-btn-selected');
    breakBtn.classList.remove('timer-type-btn-selected');
});

breakBtn.addEventListener('click', function(){
    isTaskTime = false; 
    resetTimer();
    taskBtn.classList.remove('timer-type-btn-selected');
    breakBtn.classList.add('timer-type-btn-selected');
});

startBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', resetTimer);

startBtn.addEventListener('mousedown', function(){
    startBtn.classList.add('selected');
});

startBtn.addEventListener('mouseup', function(){
    startBtn.classList.remove('selected');
});

resetBtn.addEventListener('mousedown', function(){
    resetBtn.classList.add('selected');
});

resetBtn.addEventListener('mouseup', function(){
    resetBtn.classList.remove('selected');
});

function resetTimer() {

    clearInterval(myInterval);

    textMinutes.innerHTML = isTaskTime ? taskTime : breakTime;
    textSeconds.innerHTML = '00';
    
    header.innerHTML = isTaskTime? 'Time to focus':'Take a break';

}

var myInterval;

function startTimer() {

    clearInterval(myInterval);
    
    var timer = addTime(new Date(), isTaskTime ? taskTime : breakTime).getTime();
    
    myInterval = setInterval(function() {
        
        var now = new Date().getTime();
        var distance = timer - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        textMinutes.innerHTML = String(minutes).length == 1? '0'.concat(minutes) : minutes;
        textSeconds.innerHTML = String(seconds).length == 1? '0'.concat(seconds) : seconds;

        if (distance < 0) {
            isTaskTime = !isTaskTime;

            if(isTaskTime) {
            taskBtn.classList.add('timer-type-btn-selected');
            breakBtn.classList.remove('timer-type-btn-selected');}else{
            breakBtn.classList.add('timer-type-btn-selected');
            taskBtn.classList.remove('timer-type-btn-selected');}
            resetTimer();
        }

    }, 1000);

}

function timer() {
    
}

function addTime (date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}


function selectTask(){
    if(type == 'task'){
        isTaskTime = true;
    } else if(type == 'break'){
        isTaskTime = false;
    }

    resetTimer();
}

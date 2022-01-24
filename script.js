const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const textMinutes = document.getElementById('minutes');
const textSeconds = document.getElementById('seconds');



startBtn.addEventListener('click', startTaskTimer);

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

    // startBtn.classList.remove('selected');
    

    clearInterval(myInterval);

    textMinutes.innerHTML = '25';
    textSeconds.innerHTML = '00';


}

var myInterval;

function startTaskTimer() {
    clearInterval(myInterval);
    // startBtn.classList.add('selected');
    // resetBtn.classList.remove('selected');
    console.log('button clicked');
    var timer = addTime(new Date(), 25).getTime();
    myInterval = setInterval(function() {
        console.log('timer started');
        var now = new Date().getTime();
        console.log('now '+now);
        
            
        var distance = timer - now;

        console.log('d' +distance);
        

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(minutes +' - '+ seconds);
        textMinutes.innerHTML = minutes;
        textSeconds.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(myInterval);
        }

    }, 1000);

}

function timer() {
    
}

function addTime (date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

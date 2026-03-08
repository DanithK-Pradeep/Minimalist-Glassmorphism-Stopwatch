
const display=document.getElementById('timer');

let timer=null;
let startTime=0;
let elapsedTime=0;  
let isRunning=false;

function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(updateTimer,10);
        isRunning=true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset(){
    stop();
    elapsedTime=0;
    display.textContent='00:00:00:00';
    
}

function updateTimer(){
    elapsedTime=Date.now()-startTime;
    const date=new Date(elapsedTime);
    
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor(elapsedTime % 1000/10);
    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(2, '0');
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

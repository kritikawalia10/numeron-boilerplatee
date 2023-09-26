// Iteration 2: Generate 2 random number and display it on the screen
const one = document.getElementById("number1");
var num1 = Math.round(Math.random()*100);
one.innerHTML = num1;

const two = document.getElementById("number2");
var num2 =  Math.round(Math.random()*100);
two.innerHTML = num2;

// Iteration 3: Make the options button functional
var score = 0;
const great = document.getElementById("greater-than");
great.onclick = ()=>{
    if(num1>num2){
       score++;
       resetTime(timerId);
    }else{
        location.href = "./gameover.html";
    }
     num1 = Math.round(Math.random()*100);
    one.innerHTML = num1;
      num2 =  Math.round(Math.random()*100);
     two.innerHTML = num2;
};
    const equal = document.getElementById("equal-to");
   equal.onclick = ()=>{
    if(num1=num2){
        score++;
        resetTime(timerId);
     }else{
         location.href = "./gameover.html";
     }
      num1 = Math.round(Math.random()*100);
     one.innerHTML = num1;
      num2 =  Math.round(Math.random()*100);
      two.innerHTML = num2;
};
     const less = document.getElementById("lesser-than");
      less.onclick = ()=>{
    if(num1<num2){
        score++;
        resetTime(timerId);
     }else{
         location.href = "./gameover.html";
     }
      num1 = Math.round(Math.random()*100);
     one.innerHTML = num1;
      num2 =  Math.round(Math.random()*100);
     two.innerHTML = num2;
};

// Iteration 4: Build a timer for the game
var timer = document.getElementById("timer");
var time= 5;
var timerId;
function startTimer(){
    time=5;
    timer.innerHTML = time;
    timerId= setInterval(()=>{
        time--;
        if(time==0){
            location.href = "./gameover.html";
        }
        timer.innerHTML=time;
    },1000);
    localStorage.setItem("score",score);
}
function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}

startTimer();

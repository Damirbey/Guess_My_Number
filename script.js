'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    var enteredValue = document.querySelector(".guess").value;

    if(secretNumber == enteredValue)
    {
        if(highScore<score)
        {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        displayMessage("🎉 Congratulations, you won the game!");
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
    }
    else if(score>1)
    {
        displayMessage(enteredValue > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
    }else{
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
    }
    
});

document.querySelector(".again").addEventListener("click",function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector(".number").textContent='?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = 20;
})
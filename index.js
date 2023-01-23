'use strict';
let secretNumber = Math.trunc(Math.random() *20) + 1;
let chance = 20;
let score=0;

const display_message = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

if(!guess){
    display_message("No Number!");
}
else if(guess>20){
    //alert("Number is Greater than 20, Please check the number");
    display_message("Number is Greater than 20, Please check the number");
}
else if(guess==secretNumber){
    display_message("Correct Number!");
    score+=2;
    document.querySelector('.score').textContent = "Score :" + " " + score;
    document.querySelector('.container').style.backgroundColor='green';
    document.querySelector('.digit').textContent = secretNumber;
}
else if(guess!=secretNumber){
    if(chance>1){
        display_message(guess>secretNumber ? "Too High!" : "Too Low!");
        chance--;
        document.querySelector('.chance').textContent = "Chance :" + " " + chance;
    }
    else{
        display_message("Your score is : " + score);
        document.querySelector('.chance').textContent = "Chance :" + " " + 0;
        document.querySelector('.container').style.backgroundColor = "red";
    }
}
});

document.querySelector('.again').addEventListener('click',function(){
    chance = 20;
    score=0;
    secretNumber=Math.trunc(Math.random()*20) + 1;
    document.querySelector('.container').style.backgroundColor="#666";
    document.querySelector('.message').textContent = "Start Guessing";
    document.querySelector('.chance').textContent = "Chance : " + " " + 20;
    document.querySelector('.digit').textContent = "?";
    document.querySelector('.guess').value = " ";
    document.querySelector('.score').textContent = "Score :" + " " + 0;
});

document.querySelector('.continue').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20) + 1;
    document.querySelector('.container').style.backgroundColor = "#666";
    display_message('Start Guessing');
    document.querySelector('.digit').textContent = "?";
    document.querySelector('.guess').value = " ";
    document.querySelector('.chance').textContent = "Chance : " + " " + chance;
    document.querySelector('.score').textContent = "Score : " + " " + score;
});

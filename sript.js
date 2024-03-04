let computerMove='';
let result ='';
let score=JSON.parse(localStorage.getItem('score'))
console.log(score);
if(!score){
    wins=0,
    tryAgain=0,
    ties=0
}
updateScore();

function getComputerMove(){
    let randomNumber=Math.random();
        console.log(randomNumber);
        if(randomNumber<=0.35){
            computerMove='rock';
        }else if(0.35<randomNumber && randomNumber<=0.65){
            computerMove='paper';
        }else if(0.65<randomNumber){
            computerMove='scissors';
        }

}
function playGame(playerMove){
    if(playerMove==='rock'){
        if(computerMove==='rock'){
            result = 'Tie';
            console.log(`You choosed Rock. Computer choosed ${computerMove}`);
        }else if(computerMove==='paper'){
            result = 'Try Again!';
            console.log(`You choosed Rock. Computer choosed ${computerMove}`);
        }else if(computerMove==='scissors'){
            result = 'You Win!';
            console.log(`You choosed Rock. Computer choosed ${computerMove}`);
        }
        
    }else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result = 'You Win!';
            console.log(`You choosed Paper. Computer choosed ${computerMove}`);
        }else if(computerMove==='paper'){
            result = 'Tie!';
            console.log(`You choosed Paper. Computer choosed ${computerMove}`);
        }else if(computerMove==='scissors'){
            result = 'Try Again!';
            console.log(`You choosed Paper. Computer choosed ${computerMove}`);
        }
    }else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result = 'Try Again!';
            console.log(`You choosed Scissor. Computer choosed ${computerMove}`);
        }else if(computerMove==='paper'){
            result = 'You Win!';
            console.log(`You choosed Scissor. Computer choosed ${computerMove}`);
        }else if(computerMove==='scissors'){
            result = 'Tie!';
            console.log(`You choosed Scissor. Computer choosed ${computerMove}`);
        }
    }    
        getScore();
        updateScore();  
        let showMove=document.querySelector('.js-move').innerHTML=`You picked ${playerMove}. Computer picked ${computerMove}.`;
}

function getScore(){
    if(result==='You Win!'){
        score.wins+=1;
    }else if(result==='Try Again!'){
        score.tryAgain+=1;
    }else if(result==='Tie!'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    
}
function updateScore(){
        let showResult=document.querySelector('.js-result').innerHTML=`${result}`;      
        let showScore=document.querySelector('.js-score').innerHTML=`Wins:${score.wins} Failed:${score.tryAgain} Ties:${score.ties}`;
        
}


    

 

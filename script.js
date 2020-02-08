let playerWinCount = 0;
let computerWinCount = 0;

//game();  


function game(){
  

    //for(i=0;i<5;i++){
      console.log(roundPlay(playerChoice(), computerChoice()));
    // }
    /* alert(`You won ${playerWinCount} 
      times and the computer won ${computerWinCount} times. Thanks for playing!`) */
}

function roundPlay(playerHand, computerHand){
  let winLoss;
  let beatTie = `beats`;
  let player = handConverter(playerHand);
  let computer = handConverter(computerHand);
  let winner; //computer or player
  let loser;

  switch (player - computer){
    case 0: 
    {winLoss = `TIE` 
    beatTie = `TIE`
    winner = playerHand;
    loser = computerHand;
    }
    break;
    case 1:
    case -2:{
      winLoss = `win`;
      winner = playerHand;
      loser = computerHand;
      playerWinCount++;
      UpdateScore(1,0);
      break;
    } 
    case -1:
    case  2:{
      winLoss = `lose`;
      winner = computerHand;
      loser = playerHand;
      computerWinCount++;
      UpdateScore(0,1);
      break;
    }
  }

  
  
  let finished =(`You ${winLoss}! ${winner} ${beatTie} ${loser}!`);
  updateResultsLog(finished);
  // alert(finished);
  return finished;
  
}

function computerChoice(){
  let computerPick = Math.floor(Math.random()*3) + 1;
  switch (computerPick){
    case 1: return `rock`; //rock
    case 2: return `paper`; //paper
    case 3: return `scissors`; //scissors
  }
}

function playerChoice(){
    let playerPick = prompt(`Please pick 'Rock', 
      'Paper', or 'Scissors'!`,`Rock, Paper, or Scissors`);
    textCheck = /^\b(rock|paper|scissors)\b$/i;

    if(textCheck.test(playerPick)){
      return playerPick.toLowerCase();
    }
    else{
      console.log(`WRONG`);
      playerChoice();
    }
    
}

function handConverter(handForm){
  return (handForm === `rock`) ? 1
            :(handForm === `paper`) ? 2
            :(handForm === `scissors`) ? 3
            :`error not right`;
}

function playGame(e) {
  console.log(`${e.target.id}`)
  console.log(handConverter(e.target.id));
  roundPlay(e.target.id,computerChoice());
}

function UpdateScore(playerScoreIncrease = 0, computerScoreIncrease = 0){
  const scores = document.querySelectorAll(`#score`);
  scores.forEach(score => {
    if(score.className === `scorePlayer` && playerScoreIncrease > 0){
      score.textContent = +score.textContent + playerScoreIncrease;
    }
    if(score.className === `scoreComputer` && computerScoreIncrease > 0){
      score.textContent = +score.textContent + computerScoreIncrease;
    }
  });
}

function updateResultsLog(inputString){
  const rLog = document.querySelector(`.results`);
  const newLog = document.createElement(`p`);
  newLog.textContent = inputString;
  rLog.prepend(newLog);
}

const btns = document.querySelectorAll(`.btn`);
btns.forEach(btn => btn.addEventListener(`click`, playGame));

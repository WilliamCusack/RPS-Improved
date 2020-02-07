let playerWinCount = 0;
      let computerWinCount = 0;

    game();  
    
    
    function game(){
     

        for(i=0;i<5;i++){
          console.log(roundPlay(playerChoice(), computerChoice()));
        }
        alert(`You won ${playerWinCount} 
          times and the computer won ${computerWinCount} times. Thanks for playing!`)
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
          break;
        } 
        case -1:
        case  2:{
          winLoss = `lose`;
          winner = computerHand;
          loser = playerHand;
          computerWinCount++;
          break;
        }
      }

      let finished =(`You ${winLoss}! ${winner} ${beatTie} ${loser}!`);
      alert(finished);
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

(function () {
     "use strict";
     console.log("reading js");
     // your code starts here

     //variables for DOM elements
     const startGame = document.querySelector('#startgame');
     const gameControl = document.querySelector('#gamecontrol');
     const game = document.querySelector('#game');
     const score = document.querySelector('#score');
     const actionArea = document.querySelector('#actions');
     

     //overlay begin game button
     document.querySelector('.beginGame').addEventListener('click', function(){
     document.querySelector('.hidden').removeAttribute('class');
     document.querySelector('.beginGame').className = 'hidden';
     });

     //obkect to keep track of data in the game
     const gameData = {
	 dice: ['die1.svg', 'die2.svg', 'die3.svg', 
		   'die4.svg', 'die5.svg', 'die6.svg'],
	 players: ['player 1', 'player 2'],
	 score: [0, 0],
	 roll1: 0,
	 roll2: 0, //could get rid of
	 rollSum: 0,
	 index: 0, //keeps track of which player is currently playing and will have a value of 0 or 1
	 gameEnd: 19 //sets the threshold for winning
     };

     //start Game :))
     startGame.addEventListener('click', function(){
        //randomly set the gameData.index here, which will choose player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        gameControl.innerHTML = `<p>${gameData.players[gameData.index]} starts!</p>`;
        //add quit button and instruction overlay here

        //add quit button event listener here
        //document.querySelector

        setUpTurn();
     });

     //This function sets the content of game <div> and adds an event handler for the button that will roll the dice
     function setUpTurn(){
        document.querySelector('#message').innerHTML = '';
        actionArea.innerHTML = '<button id = "roll">Roll</button>';;
        document.querySelector('#roll').addEventListener('click', function(){
            console.log('roll dice');
            throwDice();
        });
     }

     //throwing dice function - 4 steps:
     //clean out action area, record ONE roll of dice, sets a message and shows the die, totals roll(probably don't need)
     function throwDice(){
       gameControl.innerHTML = '';
       actionArea.innerHTML = '';
       gameData.roll1 = Math.floor(Math.random() *6) +1; //using ceil could result in 0
       
       //gamedata roll for second die
       game.innerHTML = `<p class= "player">${gameData.players[gameData.index]}'s turn</p>`;
       const dieImage = document.querySelector('#die');
       dieImage.innerHTML = `<img class= "imgdie" src = "images/${gameData.dice[gameData.roll1-1]}" height="400" width="400">`;//could add image for die 2 here 
       gameData.rollSum = gameData.roll1;// or add roll2

       //game rules

       //if a 1 is rolled
       if( gameData.rollSum === 1){
         console.log('roll 1: penalty');
         document.querySelector('#message').innerHTML = '<p>Oh no! Your turn has been skipped!</p>';
         //set score for current player
         gameData.score[gameData.index] = 0;

         gameData.index ? (gameData.index = 0) : gameData.index = 1;

         //wait 2 seconds
         setTimeout(setUpTurn, 2000);
         showCurrentScore();
       }

       //if die is 3
       else if( gameData.roll1 === 3){
         console.log('the die was a value of 3');
         gameData.index ? (gameData.index = 0) : (gameData.index = 1);
         document.querySelector('#message').innerHTML = `<p>Your rolled a 3, turn is given to ${gameData.players[gameData.index]}</p>`;
         setTimeout(setUpTurn, 2000);
       }
       else {
         console.log('game continues...');
         gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
         //main game buttons
         actionArea.innerHTML = '<button id = "rollagain">Roll</button> ';
         actionArea.innerHTML += '<button id = "pass">Pass</button> ';

         document.querySelector('#rollagain').addEventListener('click', function(){
            //setUpTurn or just throw dice again
            throwDice();
         });
         document.querySelector('#pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
         });

         checkWinningCondition();
       }

       //checkWinningCondition function
       function checkWinningCondition(){
         if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            //document.querySelector('#quit').innerHTML = 'Retry';//check for CSS condition of #quit
         } else {
            score.innerHTML = `<p>${gameData.players[0]}: ${gameData.score[0]}</p>`;
            score.innerHTML += `<p>${gameData.players[1]}: ${gameData.score[1]}</p>`;
            showCurrentScore();
         }
       }

       //show score function
       function showCurrentScore(){
         score.innerHTML = `<p>${gameData.players[0]}: ${gameData.score[0]}</p>`;
         score.innerHTML += `<p>${gameData.players[1]}: ${gameData.score[1]}</p>`;
         
       }

     }

})();
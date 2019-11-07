/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


// 0 -> First Player
// 1 -> Second Player

var scores, roundScore, activePlayer, dice, globalScore, gamePlaying;

var lastDice;

init();


// document.querySelector('#current-' + activePlayer).textContent = dice;



// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#current-0').textContent;
// var y = document.querySelector('#current-1').textContent;
// console.log(x);
// console.log(y);


document.querySelector('.btn-roll').addEventListener('click', function (){

    if(gamePlaying){

        // 1 Random number
        dice = Math.floor(Math.random()*6)+1;

        // 2 Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + ".png";

        // 3 Update the round score if the if the rolled number was not 1
        if (dice === 6 && lastDice === 6) {
            // Player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1){
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            // Next Player
            nextPlayer();
        }
        lastDice = dice;
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Update the UI
    var input = document.querySelector('.final-score').value;
    console.log(input);
    if(input){
        var winningScore = input;
    } else {
        winningScore = 30;
    }
    // Check if the player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent ='Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false; 

    }
    else {
         // next Player
        nextPlayer();
    }
    }
    
   

});

document.querySelector('.btn-new').addEventListener('click' , init);

function init(){

    gamePlaying = true;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}


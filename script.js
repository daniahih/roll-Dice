
let player1current = 0;
let player2current = 0;
let startgame = true;
let scores;
let activePlayer;
activePlayer = 0;
let  roundScore;
let currentScore;
let total=0;
scores = [0, 0];

const player2Total = document.querySelector('.total2')
const rollBtn = document.getElementById('roll-btn')
const hold = document.getElementById('.hold')

rollBtn.addEventListener("click", () => {

    if (startgame) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
        if (dice1 !== 1 && dice2 !== 1 ) {
           currentScore = dice1 + dice2;
           total +=currentScore;
           console.log(total)
            console.log(currentScore)
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
            let playerTotal = document.getElementById('score-' + activePlayer).textContent = total;
            if (total>100){
               alert("gameover")
            }
            else if(total===100){
                alert("winner"+activePlayer)
            }

        }
        else if (dice1 === 6 && dice2 === 6) {
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        else {

            nextPlayer();

        }

    }
})

document.querySelector('#hold').addEventListener('click', () => {
    if (startgame) {
    scores[activePlayer] +=currentScore ;
    console.log(scores[activePlayer]);
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    }

})

// Function to giving the turn to the next player
function nextPlayer() {

    // It's the next player's turn if the dice number is 1 (using the ternary operator)
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 2;


}

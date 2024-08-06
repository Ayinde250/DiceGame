let finalScores, currentScore, activePlayer, gamePlaying;

   const initalState = () => {

   finalScores = [0 , 0];
   currentScore = 0;
   activePlayer = 0;
   gamePlaying = true; 

   document.getElementById("score--0").textContent = 0;
   document.getElementById("score--1").textContent = 0;
   document.getElementById("current--0").textContent = 0;
   document.getElementById("current--1").textContent = 0;

   document.querySelector('.player--0').classList.add('player--active');
   document.querySelector('.player--1').classList.remove('player--active');
   document.querySelector('.player--0').classList.remove('player--winner');
   document.querySelector('.player--1').classList.remove('player--winner');

   }; 

initalState ();
   

document.querySelector(".btn--roll").addEventListener("click", 

   function () 
{
   if(gamePlaying) {

      const diceRoll = Math.floor(Math.random() * 6 ) + 1; 
      const diceImage = document.querySelector(".dice").src = `./image/dice-${diceRoll}.png`;

      if (diceRoll !== 1){
         currentScore += diceRoll;

         document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      }  else{

         nextPlayer();

      }

   }  
             
});


document.querySelector(".btn--hold").addEventListener("click", 
   
   function ()    
{
   if(gamePlaying) {

      finalScores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];

      if (finalScores[activePlayer] >= 100) {

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        gamePlaying = false;

      } else {

        nextPlayer();
      }

   }

});

const nextPlayer = () => {
   
   currentScore = 0;
   document.getElementById(`current--${activePlayer}`).textContent = '0';

   if (activePlayer === 0) {

      activePlayer = 1;

   } else {
      activePlayer = 0;
   }
   
   document.querySelector('.player--0').classList.toggle('player--active');
   document.querySelector('.player--1').classList.toggle('player--active');
 };

 document.querySelector(".btn--new").addEventListener("click", function () {

   initalState ();
 });

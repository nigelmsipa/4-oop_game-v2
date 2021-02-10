/**
 * /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 *
 * @format
 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const StartGame = document.getElementById('btn__reset');
const ScreenKeys = document.querySelectorAll('.key');

// Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
StartGame.addEventListener('click', function () {
  game = new Game();
  game.startGame();
});
//Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object
for (let i = 0; i < ScreenKeys.length; i++) {
  ScreenKeys[i].addEventListener('click', (button) => {
    game.handleInteraction(button.target);
  });
}

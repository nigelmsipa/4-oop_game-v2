/**
 * /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 *
 * @format
 */

//Create the Phrase class in the Phrase.js file.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('the force is strong with this one'),
      new Phrase('you were my brother, Anakin'),
      new Phrase('I find your lack of faith disturbing'),
      new Phrase('what is thy bidding my master'),
      new Phrase('I am the senate'),
      new Phrase('I am your father'),
      new Phrase('This is the way'),
      new Phrase('search your feelings you know it to be true'),
    ];
    this.activePhrase = null;
  }
  //starts game by calling randomPhrase() and addPhraseToDisplay()

  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  //getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.

  getRandomPhrase() {
    let randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  // It checks to see if the button clicked by the player matches a letter in the phrase
  // handleInteraction(): this method controls most of the game logic.
  handleInteraction(button) {
    button.disabled = true;
    if (!this.activePhrase.checkLetter(button.innerHTML)) {
      button.classList.add('wrong');
      this.removeLife();
    } else {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.innerHTML);
      if (this.checkForWin()) {
        this.gameOver();
      }
    }
  }
  //if a player clicks a none matching letter they lose a life
  // removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image
  removeLife() {
    let lives = document.querySelectorAll('.tries img');
    if (!this.checkForWin()) {
      lives[this.missed].src = 'images/lostHeart.png';
      this.missed += 1;
    }
    if (this.missed >= 5) {
      this.gameOver();
    }
  }
  //checks to see whether there are still matching letters that havent been pressed
  // checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  //changes the screen based on the outcome of the game
  gameOver() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = '';
    if (this.checkForWin()) {
      document.getElementById('game-over-message').innerHTML =
        'You have done well my young apprentice!';
      overlay.classList.add('win');
      overlay.classList.remove('lose');
    } else {
      document.getElementById('game-over-message').innerHTML =
        'You have failed me for the last time!';
      overlay.classList.add('lose');
      overlay.classList.remove('win');
    }
    // Resetting the gameboard between games.

    this.missed = 0;
    document.querySelector('#phrase ul').innerHTML = '';
    document.querySelectorAll('.key').forEach((key) => {
      key.disabled = false;
      key.classList.remove('chosen', 'wrong');
      key.classList.add('key');
    });
    document.querySelectorAll('.tries img').forEach((img) => {
      img.src = 'images/liveHeart.png';
    });
  }
}

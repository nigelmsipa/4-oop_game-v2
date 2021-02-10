/**
 * /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 *
 * @format
 */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  //addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
  addPhraseToDisplay() {
    const PhraseUl = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i++) {
      const listItems = document.createElement('li');
      const liContent = document.createTextNode(this.phrase[i]);
      listItems.appendChild(liContent);
      if (listItems.textContent === ' ') {
        listItems.classList.add('space');
      } else {
        listItems.classList.add('letter');
        listItems.classList.add('hide');
      }
      PhraseUl.appendChild(listItems);
    }
  }

  //checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  //showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection.
  showMatchedLetter(letter) {
    let letterClass = document.querySelectorAll('.letter');
    for (let i = 0; i < letterClass.length; i++) {
      if (letterClass[i].innerHTML === letter) {
        letterClass[i].classList.remove('hide');
        letterClass[i].classList.add('show');
      }
    }
  }
}

// Global Variables// =====================================
// An array of phrases
const phraseBank = [
  'wild goose chase',
  'good riddance',
  'when pigs fly',
  'a piece of cake',
  'break a leg',
  'love is blind',
  'break the ice',
  'heart of gold'
];

// DOM Manipulation
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const resetBtn = document.querySelector('.btn__reset');
const phrase = document.getElementById('phrase');
const phraseUL = phrase.querySelector('ul');
const keyboard = document.getElementById('qwerty');
const btn = keyboard.querySelectorAll('button');
const hearts = document.querySelectorAll('.tries img');
// Number of guesses
let missed = 0;

// Functions =============================================

// Random Phrase Generator
// Choose phrase randomly from the array and capitalise and split the letters
let getRandomPhraseAsArray = (arr) => {
  let randNum = Math.floor(Math.random() * arr.length);
  let chosenPhrase = arr[randNum].toUpperCase().split('');
  return chosenPhrase;
}

// Phrase Display
// To create and add the list item to show the random phrases
let addPhraseToDisplay = (arr) => {
  for ( let i = 0; i < arr.length; i++ ) {
    const letter = arr[i];
    const listItem = document.createElement('li');
    listItem.textContent = letter;
    if ( listItem.textContent === ' ') {
      listItem.classList.add('space');
    } else {
      listItem.classList.add('letter');
    }
    phraseUL.append(listItem);
  }
}

// Match Letter
// To check if the chosen letter matches the random phrase
let checkLetter = (keyWord) => {
  let matchLetter = null;
  const allLetters = document.querySelectorAll('.letter');
  const chosenLetter = keyWord.textContent.toUpperCase();
  for ( let i=0; i < allLetters.length; i++) {
    if ( chosenLetter === allLetters[i].textContent ) {
      allLetters[i].classList.add('show');
      allLetters[i].style.transitionDuration = '.8s';
      matchLetter = chosenLetter;
    }
  }
  return matchLetter;
}

// Win or Lose
// Winning title
let win = () => {
  overlay.classList.add('win');
  overlay.style.display = '';
  title.textContent = `You're a Star! You did it! Again?`;
}
// Losing title
let lose = () => {
  overlay.classList.add('lose');
  overlay.style.display = '';
  title.textContent = `Oh No! Nevermind, Try Again!`;
}

// To create two different outcomes of the game (win or lose)
let checkWin = () => {
  const allChars = document.querySelectorAll('.letter');
  const shownLetters = document.querySelectorAll('.show');
  if ( shownLetters.length === allChars.length ) {
    reloadGame();
    win();
  } else if ( missed >=5 ) {
    reloadGame();
    lose();
  }
}

// Start Game
let startGame = () => {
  let phraseArray = getRandomPhraseAsArray(phraseBank);
  addPhraseToDisplay(phraseArray);
}
// Reload Game
// Reload the game by removing all classes, refresh the hearts and buttons clicked
let reloadGame = () => {
  overlay.classList.remove('win','lose');
  resetBtn.textContent = 'GAME ON';
  overlay.style.display = '';
  phraseUL.textContent = '';
  missed = 0;
  for ( let i = 0; i < btn.length; i++ ) {
    btn[i].classList.remove('chosen');
    btn[i].removeAttribute('disabled');
  }
  for ( let i = 0; i < hearts.length; i++) {
    hearts[i].setAttribute('src', 'images/liveHeart.png');
  }
  startGame();
}

// Event Handlers =============================================
// To proceed to the game after clicking the reset button
resetBtn.addEventListener('click', ()=> {
  if ( resetBtn.textContent === 'Start Game' ) {
    overlay.style.display = 'none';
    startGame();
  }
    if ( resetBtn.textContent === `GAME ON`) {
    missed = 0;
    overlay.style.display = 'none';
    const listItem = phraseUL.querySelectorAll('li');
    for ( let i = 0; i < listItem.length; i++ ) {
      listItem[i].parentNode.removeChild(listItem[i]);
    }
    startGame();
  }
});

// Add an event listener for clicks to the keyboard
keyboard.addEventListener('click', (e)=> {
  const keyWord = e.target;
  const letterFound = checkLetter(keyWord);
  if ( keyWord.tagName === 'BUTTON' ) {
    keyWord.classList.add('chosen');
    keyWord.setAttribute('disabled', '');
    if ( letterFound === null ) {
      resetBtn.classList.remove('chosen');
      hearts[missed].setAttribute('src', 'images/lostHeart.png');
      missed++;
    }
    checkWin();
  }
});

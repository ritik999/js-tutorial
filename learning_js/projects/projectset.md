# Project related to DOM
# project link

[click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

# Solution code

## project 1

```javascript
    const body = document.querySelector('body');
const btn = document.querySelectorAll('.button');

btn.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

```

## project 2

```javascript 

  const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height < 0 || isNaN(height)) {
    const res = document.createTextNode('pls enter valid height');
    document.querySelector('#results').appendChild(res);
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    const res = document.createTextNode('pls enter valid weight');
    document.querySelector('#results').appendChild(res);
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  const res = document.createTextNode(bmi);
  document.querySelector('#results').appendChild(res);
});

```

## project 3

```javascript

const clock = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);

```


## project 4

```javascript 

const randomValue = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const remGusses = document.querySelector('.lastResult');
const message = document.querySelector('.lowOrHi');

let prevGusses = [];
let numGuess = 0;
let startGame = true;

if (startGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const userInp = parseInt(userInput.value);
    validateGuess(userInp);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('please enter number');
  } else if (guess < 0) {
    alert('pls enter number above 0');
  } else if (guess > 100) {
    alert('pls enter number less than 100');
  } else {
    numGuess++;
    if (numGuess === 11) {
      displayMessage('game over, restart.');
      userInput.value = '';
      gameEnd();
    } else {
      prevGusses.push(guess);
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  remGusses.innerHTML = `${10 - numGuess}`;
  if (guess == randomValue) {
    displayMessage('wow! you guessed right');
    userInput.value = '';
    gameEnd();
  } else {
    userInput.value = '';
    displayMessage('wrong guess. Retry');
  }
};

const displayGuesses = (guess) => {
  guesses.innerHTML += `${guess} `;
};

const displayMessage = (msg) => {
  message.innerText = msg;
};

const gameStart = () => {};

const gameEnd = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
};

```

## project 5

```
javascript

console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  console.log(e.key);
  insert.innerHTML = `<div>
    <h2>Done</h2>
  </div>`;
});

```

## project 6

```javascript 
 const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChangeColor);
stop.addEventListener('click', stopChangeColor);

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  return color;
};

let interval;

function startChangeColor() {
  if (!interval) {
    interval = setInterval(() => {
      body.style.background = randomColor();
    }, 1000);
  }
}

function stopChangeColor() {
  clearInterval(interval);
  interval = null; // done to save space
}

```
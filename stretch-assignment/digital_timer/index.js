let time = 0;
const increment = 0.01;
const incrementMs = increment*1000;
const limit = 10;


//increments time value
const incrTime = () => time += increment;


//grabs digit of base, where base = 10 for tens digit, 1 for ones digit, 0.1 for tenths decimal, 0.01 for hundredths decimal.
const digit = (val, base) => {
  let prelim = Math.trunc(val / base);
   //subtracts the left digit off of prelim until it's left with the digit we want.
   //could be done with strings also, but this seemed easier.
  while (prelim >= 10) {
    prelim -= Math.trunc(prelim / 10) * 10;
  }
  return prelim;
}


// returns object of id names and values of digits to be set in html
const timeStrValues = (t) => {
  return {
    secondTens: digit(t, 10),
    secondOnes: digit(t, 1),
    msHundreds: digit(t, 0.1),
    msTens: digit(t, 0.01)
  };
}

// const test = timeStrValues(15.263);
// console.log(JSON.stringify(test)); //{"secondTens":1,"secondOnes":5,"msHundreds":2,"msTens":6}


//sets time values of each digit
const setTimeValues = () => {
  const obj = timeStrValues(time);
  const entries = Object.entries(obj);
  entries.forEach(e => {
    let digitElem = document.querySelector(`#${e[0]}`);
    digitElem.textContent = e[1];
  });
}

// const test2 = setTimeValues(test); // sets time to 15:26


//sets digits of .digits class red
const setDigitsRed = () => {
  const digitsDiv = document.querySelector('.digits');
  digitsDiv.classList.add('redDigit');
}


//while the timer hasn't hit the limit, it increments the time and sets the time.
//after the timer has hit the limit, it sets the digits to red and clears the timer.
const incrementAndSetTime = () => {
  if (time < limit) {
    incrTime();
    setTimeValues();
  } else {
    setDigitsRed();
    window.clearInterval(timerId);
  }
}

//sets the initial time value of 0
setTimeValues();

//loops through incrementAndSetTime each 10ms until it hits limit
let timerId = window.setInterval(incrementAndSetTime, incrementMs);

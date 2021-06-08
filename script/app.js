'use strict';
var score = 0;
let userName = prompt('Welcome to my page please enter your Name');
alert('Welcome again (' + userName + ') to my page I will ask you some questions about myself and you will answer by yes or no');

//First question
let myName = prompt('My name is Thaer?');
if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
  alert('well done. yes my name is Thaer');
  score++;
  //console.log('true');

}
else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
  alert('sorry . accully its Thaer , now you know my name');

}
else { alert(' you should answer by yes or no'); }


//Second question

let unMaj = prompt('Do you think I studied software development in the university ?');

if (unMaj.toLowerCase() === 'yes' || unMaj.toLowerCase() === 'y') {
  alert('you are wrong , I studied Chemical Engineering');

}
else if (unMaj.toLowerCase() === 'no' || unMaj.toLowerCase() === 'n') {
  alert('thats correct , I studied Chemical Engineering');
  score++;
  //console.log(' true');

}
else { alert(' you should answer by yes or no'); }

//Third question

let favMeal = prompt('My favorite meal is Mansaf?');

if (favMeal.toLowerCase() === 'yes' || favMeal.toLowerCase() === 'y') {
  alert('yes this is true  ');
  score++;
  //console.log('true');

}

else if (favMeal.toLowerCase() === 'no' || favMeal.toLowerCase() === 'n') { alert('thats wrong , from east to west mansaf is the best'); }

else { alert('you should answer by yes or no'); }


// forth question

let favColor = prompt('My favorite color is Grey?');
if (favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y') {
  alert('thats correct');
  score++;
  //console.log(' true');

} else if (favColor.toLowerCase() === 'no' || favColor.toLowerCase() === 'n') {
  alert('thats wrong');

}
else {
  alert('sorry you should answer by yes or no');
}


//Fifth question

let favSeries = prompt('Is Game of Thrones my favorite Series?');
if (favSeries.toLowerCase() === 'yes' || favSeries.toLowerCase() === 'y') {
  alert('thats correct, you should watch it ');
  score++;
  //console.log('true');

} else if (favSeries.toLowerCase() === 'no' || favSeries.toLowerCase() === 'n') {
  alert('thats wrong , its is my favorite ');

}
else {
  alert('you should answer by yes or no');

}

//Sixth question 

for (let i = 0; i < 4; i++) {
  let myAge = prompt(' Can you guess my age , Hint:( between 15-50 ) ? ');
  if (myAge > 30) {
    alert(' too high, try again');
  }
  else if (myAge > 26) { alert('high a littel bit , try again') }

  else if (myAge < 20) {
    alert('too low, try again');
  }
  else if (myAge < 26) { alert('low a littel bit , try again') }

  else {
    alert('Yes , I am 26 years old ');
    console.log(' true');
    score++;
    break;
  }
  if (i == 3) { alert(' I am 26 years old , you can get me a gift in 04/may on my 27th birthday 😜 !!'); }
}

// Seventh Question 
let favPlace = ['irbid', 'wadi rum', 'um qais', 'amman', 'dead sea'];
for (let x = 0; x < 6; x++) {
  let guessPlace = prompt('Can you guess my favorite place in jordan? \n Please type a location name in jordan').toLowerCase();

  if (guessPlace === favPlace[0] || guessPlace === favPlace[1] || guessPlace === favPlace[2] || guessPlace == favPlace[3] || guessPlace == favPlace[4]) {
    alert('good job! , thats correct');
    alert('All favorite places are [irbid, wadi rum , um qais ,amman, dead sea]');
    console.log(' true');
    score++;
    break;
  }

  else {
    alert(' try again')


  }

  if (x == 5) { alert('My favorate places are [irbid, wadi rum , um qais ,amman, dead sea]') };

}


alert(`Thank you ${userName} Your score is = ${score}/7 `)
console.log('your score =', score)
alert(`Thank you so much ${userName} for being my guest , hope you enjoyed. please continue and read the introduction about me in the webpage`);

/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "tom");



/*
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/
theCoders("jennie");
/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"
*/
var driver;
var navigator;

function longestName(driver, navigator) {
  driver = prompt("Hello, who is the: ", "driver?");
  navigator = prompt("Hello, who is the: ", "navigator?");
  //remove whitespace in string 
  let nospaceDriver = driver.replace(/\s/g, "");
  let nospaceNavigator = navigator.replace(/\s/g, "");
  // calculate length of name
  let d = nospaceDriver.length;
  let n = nospaceNavigator.length;
  // find difference in length in name
  let diffD = d - n;
  let diffN = n - d;
  if (d > n) {
    console.log("The driver has the longest name.");
    alert('The driver ' + driver + ',has the longest name with ' + d + ' characters.' + '\nThat is ' + diffD + ' characters longer than ' + navigator + '\'s name.');
  }
  else if (n > d) {
    console.log("The navigator has the longest name.");
    alert('The navigator ' + navigator + ', has the longest name with ' + n + ' characters.' + '\nThat is ' + diffN + ' characters longer than ' + driver + '\'s name.');
  }
  else if (Object.is(n, d)) {
    console.log("The driver " + driver + "and the navigator " + navigator + "  has equally long names");
    alert('The driver and the navigator has equally long names');
  }
}

longestName();
/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/
alert("lets talk about age");

let age;

function ageIsJustaNumber(age) {
  age = prompt("How old are you?");

  if (age <= 0) {
    alert("wait a minute, are you even born? 😅");
  }
  else if ((age > 0) && (age <= 5)) {
    alert("Wow, I'm impressed that you can even write -\n can you even read this? 🤯");
  }
  else if ((age > 5) && (age < 13)) {
    alert("How is school? enjoy playing around all day! 🧒🏽");
  }
  else if ((age >= 13) && (age < 18)) {
    alert("Wow, you are offically a teenager! go on, be mad, break some rules!😎");
  }
  else if ((age >= 18) && (age < 25)) {
    alert("Have fun! soon you'll be an adult!🥳");
  }
  else if (age == 25) {
    alert("Seems like you're on top! hold on, the decline is starting now..😅");
  }
  else if ((age > 25) && (age <= 30)) {
    alert("Do you have a mortgage yet? or kids? tick tock!⏰");
  }
  else if ((age > 30) && (age < 40)) {
    alert("Seems like you are in the golden era! congrats!💛");
  }
  else if ((age >= 40) && (age < 50)) {
    alert("The thirties just seems like a blink away doesn't it? well it's not. it's been over 10 years!🙈");
  }
  else if ((age >= 50) && (age < 60)) {
    alert("The thirties just seems like a blink away doesn't it? well it's not. it's been over 20 years!🙉");
  }
  else if ((age >= 60) && (age < 70)) {
    alert("The thirties just seems like a blink away doesn't it? well it's not. it's been over 30 years!😱");
  }
  else if ((age >= 70) && (age < 80)) {
    alert("I guess you've reached the era of no fucks given😁");
  }
  else if ((age >= 80) && (age <= 99)) {
    alert("hold on you'll soon be a hundred!🧓🏼");
  }
  else if (age > 100) {
    alert("WOW! you are really hanging on to life aren't you! \nWhat's your secret?🧛🏻‍♀️");
  }
  else {
    alert("You need to write your age in numbers 🧐")
  }

}

ageIsJustaNumber();


alert("Let's play with math!");

let x;
let y;
let answer;
let randomOperator;
let operatorType;

//array of operators and calculation
const operator = [{
  sign: "+",
  method: function (x, y) { return x + y; }
}, {
  sign: "-",
  method: function (x, y) { return x - y; }
}, {
  sign: "*",
  method: function (x, y) { return x * y; }
}, {
  sign: "/",
  method: function (x, y) { return x / y; }
}];

//function to get a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

const calculationTest = () => {

  // set x and y to random numbers from 0 to 10
  x = getRandomInt(10);
  y = getRandomInt(10);
  // get random operator
  randomOperator = Math.floor(Math.random() * operator.length);
  // get the operator
  operatorType = operator[randomOperator].sign;
  // calculate correct answer
  answer = operator[randomOperator].method(x, y);
  //answer = Number(answer);


  let question = parseInt(prompt("What is " + x + " " + operator[randomOperator].sign + " " + y + "?"));


  if (question === (answer)) {
    alert("congratulations! " + question + " is correct! \n" + x + " " + operator[randomOperator].sign + " " + y + " = " + answer + " !");
    console.log(x + operator[randomOperator].sign + y);
  }
  else {
    alert("I am sorry " + question + " is not the correct answer to " + x + " " + operator[randomOperator].sign + " " + y + ".\n The correct answer is " + answer + ".")
  }

};

calculationTest(x, y);

/*
5)
In this function we want to give the user a mathematical calculation to
give us the answer to. Something like prompt('What is 5 + 6?')
If the answer is correct, congratulate the user. 'Yay! Correct'
If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
You choose if to use addition, subtraction, multiplication or division.
*/




//};

/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/

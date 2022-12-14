var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What is your name? ")

// practicing pull requests //

console.log(userName + ", Welcome to DO YOU KNOW KARAN? ");
console.log("---");
var questionOne = {
  question : "What is my full name? ",
  answer : "KARAN RANA"
}

var questionTwo = {
  question : "What year was Karan born? ",
  answer : "1999"
}

var questionThree = {
  question : "Does Karan wear spectacles? ",
  answer : "YES"
}

var questionFour = {
  question : "Where does Karan live? ",
  answer : "DEHRADUN"
}

var questionFive = {
  question : "Does Karan have siblings? ", 
  answer : "YES"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];



for (var i = 0; i < questions.length; i++) {
  var currentInstance = questions[i];
  function play(question, answer){
    var userAnswer = readlineSync.question(question)
    if (userAnswer.toUpperCase() === answer){
      console.log("You are right! ")
      score++
      console.log("Your current score: " + score)
      console.log("---")
    } else {
      console.log("You are wrong! ")
      console.log("Your current score: " + score)
      console.log("----")
    }
  }
  play(currentInstance.question, currentInstance.answer);

  }

var highScores = {
  name : "Anonymous",
  highScore : 5
}

console.log("Previous Highscore held by: " + highScores.name);


if (score > highScores.highScore){
  console.log("You beat the previous highscore, scored by " +       highScores.name);
  console.log("New highscore: " + score);
} else {
  console.log("Previous highscore: " + highScores.highScore);
  console.log("Your score: " + score);
}

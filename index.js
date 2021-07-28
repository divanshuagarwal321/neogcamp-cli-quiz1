var readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter your Name : ");
console.log("Welcome " + userName + " to DO YOU KNOW Divanshu?");

var score = 0 ;
var highScores = [
  {
  name : "Divanshu",
  score : 3,
  },
  {
    name : "Shobhit",
    score : 2,
  }
]
readlineSync.setDefaultOptions({limit : ["A","B","C","D"] , limitMessage : 'You entered a wrong input. Please select between - [A/B/C/D] '});
var questions = [
  {
    question : "Where do I live? \n a) Bhilwara \n b) Banglore \n c) Hyderabad \n d) Delhi \n",
    answer : "A",
  },
  {
    question : "which college I am in? \n a) LMNIIT \n b) SKIT \n c) NIT \n d) VIT \n ",
    answer : "B"
  },
  {
    question : "My favourite superhero would be? \n a) Superman \n b) Batman \n c) Wonder Women \n d) Spider Man \n" ,
    answer : "D"
  }
]

for(var i = 0 ; i < questions.length ; i++){
  var userAnswer = readlineSync.question(questions[i].question);
  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
  }
  console.log(" Current Score : " + score);
  console.log("--------------------");
}
console.log("YAY! YOU SCORED : " + score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for(var i = 0 ; i < highScores.length ; i++){
  console.log(highScores[i].name + " : " + highScores[i].score);
}
if(readlineSync.keyInYN("Did you beat any of the high scores ?")){
  console.log("send me a screenshot");
} else {
  console.log("Better luck next time");
}
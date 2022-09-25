const readLineSync = require('readline-sync');
const questions = [
  {
    question: "What present-day Italian city does Mt. Vesuvius overlook?",
    answer: "Naples"
  },
  {
    question: "What is the capital of Canada?",
    answer: "Ottawa"
  },
  {
    question: "What is the name of the largest country in the world?",
    answer: "Russia"
  },
  {
    question: "What country are the Great Pyramids of Giza located in?",
    answer: "Egypt"
  },
  {
    question: "What is the capital of the American State of California?",
    answer: "Sacramento"
  },
]
let userScore = 0;
const welcome = () => {
  const user = readLineSync.question("What is your name?\n");

  console.log(`Welcome ${user} to How well do you know world?`)
}
const play = (questionData) => {
  console.log('-------------------------')
  const { question, answer } = questionData;
  const userAnswer = readLineSync.question(`${question}\n`);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore += 1;
    console.log("Correct");
  }
  else {
    console.log("Wrong");
  }
  console.log(`your current score is ${userScore}`)
}

const startGame = () => {
  if (!questions.length) {
    return console.log("No questions available right now");
  }
  questions.map(questionData => play(questionData))
}
function showScores() {
  if (userScore < 2) {
    console.log(`Sad you scored ${userScore} try again`)
  }
  else {

    console.log("YAY! You SCORED: ", userScore);
  }
}

welcome();
startGame();
showScores();
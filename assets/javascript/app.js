//Timer
var number = 30;
var intervalId;

function run() {
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
    if (number ===0) {

      stop();
      alert("Times Up!")
    }
}
function stop(){
  clearInterval(intervalId)
}
run();

//Questions
var myQuestions = [
  {
    question: "What does the S & P stand for, in regards to the S & P 500?",
    answerList: ["Simple and Proficient", "Standard and Poor", "Sufficient and Proper", "Stocks and Pensions"],
    answer: 1
  },{
    question: "This is a claim to a part of a corporation's assets and earnings?",
    answerList: ["Bond", "Index Fund", "Stock", "Fiduciary"],
    answer: 2
  },{
    question: "Berkshire Hathaway is an American multinational conglomerate company, which is owned by this famous investor?",
    answersList: ["Warren Buffet", "Jeff Bezos", "Dave Ramsey", "Jim Cramer"],
    answer: 0
  },{
     question: "This type of mutual fund is a portfolio contstructed to match or track the components of a market index?",
     answersList: ["Hedge Fund", "Value Fund", "REIT Fund", "Index Fund"],
     answer:3
  },{
    question: "This famous investor created the Vanguard Group?",
    answersList: ["Edward Johnson", "Charlie Munger", "Benjamin Graham", "John C. Bogle"],
    answer: 3

  }];

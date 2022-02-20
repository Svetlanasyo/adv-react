import React, { Component } from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        }]
    };

  }

  answeredQuestion(index, choice) {
    
    const answeredQuestion = this.state.questions[index];
    
    console.log(answeredQuestion)

    answeredQuestion.playerChoice = choice;
    
    console.log(answeredQuestion)

    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;

    this.setState({
      questions : allQuestions
    }, () => {this.updatePlayerScore();})

  }

  updatePlayerScore()
  {
    const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length;
    this.setState({playerScore});
    console.log("New player score: ", playerScore);

  }

  displayResult(index) {
    const question = this.state.questions[index];
    if(!question.playerChoice) {return;}

    if(question.playerChoice === question.rightAnswer) {
      return (
        <p>Your answer is correct!</p>
      )
    }
    else
    {
      return (
        <p>Your answer is incorrect!</p>
      )
    }
  }
  displayQuestion(index)
  {
    const question = this.state.questions[index];
    return (
      <div>
        <p>{question.question}</p>
        <br />
        
        <button
          onClick={() => this.answeredQuestion(index, question.possibleAnswers[0])}
          >{question.possibleAnswers[0]}</button>
        <button
          onClick={() => this.answeredQuestion(index, question.possibleAnswers[1])}
          >{question.possibleAnswers[1]}</button>
        <br />
        
        {this.displayResult(index)}
      </div>
    )
  }


  render() {
    return (
      <div>
        <h1>Quiz show!</h1>
        <hr/>
        {this.state.questions.map((question, index) => this.displayQuestion(index))}

      </div>
    )
  }

}

export default Quiz;

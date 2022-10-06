import { useState } from "react";
import AllAnswer from "./AllAnswer";
import "./style.css";

function App() {
  const [numberQuestion, setNumberQuestion] = useState(0);

  const newQuestion = () => {};

  const data = [
    {
      id: 1,
      question: "Rolexis the company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: 2004,
          correct: true,
        },
        {
          text: 2005,
          correct: false,
        },
        {
          text: 2006,
          correct: false,
        },
        {
          text: 2007,
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Lionardo di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washinton",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "which is the capital of Serbia?",
      answers: [
        {
          text: "Nis",
          correct: false,
        },
        {
          text: "Novi Sad",
          correct: false,
        },
        {
          text: "Krusevac",
          correct: false,
        },
        {
          text: "Beograd",
          correct: true,
        },
      ],
    },
  ];
  return (
    <div className="App">
      <div className="quiz">
        <div className="left-app">
          <h1>
            QUESTION {numberQuestion + 1}/{data.length}
          </h1>
          <div className="question">{data[numberQuestion].question}</div>
        </div>
        <div className="right-app">
          {/* <AllAnswer
            data={data}
            numberQuestion={numberQuestion}
            setNumberQuestion={setNumberQuestion}
          /> */}
          {data[numberQuestion].answers.map((a, id) => {
            return (
              <div className="answer" key={id} onClick={newQuestion}>
                {a.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

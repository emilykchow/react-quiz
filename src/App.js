import { useEffect, useState } from "react";
import "./App.css";

import Start from "./components/Start";
import Question from "./components/Question";
import End from "./components/End";
import Modal from "./components/Modal";
import quizdata from "./data/quizData.json";

const THEMES = {
  light: {
    className: "light-theme",
    name: "Light",
  },
  dark: {
    className: "dark-theme",
    name: "Dark",
  },
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  return savedTheme === THEMES.dark.className ? "dark" : "light";
};

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [theme, setTheme] = useState(getInitialTheme);
  const [showModal, setShowModal] = useState(false);

  const currentTheme = THEMES[theme];

  useEffect(() => {
    document.documentElement.className = currentTheme.className;
    localStorage.setItem("theme", currentTheme.className);
  }, [currentTheme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  // manage quiz timer
  useEffect(() => {
    if (step !== 2) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setTime(0);
    setShowModal(false);
    setStep(2);
  };

  return (
    <div className="App">
      {step === 1 && (
        <Start
          onQuizStart={quizStartHandler}
          toggleTheme={toggleTheme}
          themeName={currentTheme.name}
        />
      )}

      {step === 2 && (
        <Question
          data={quizdata.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizdata.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          toggleTheme={toggleTheme}
          themeName={currentTheme.name}
        />
      )}

      {step === 3 && (
        <End
          results={answers}
          data={quizdata.data}
          onReset={resetHandler}
          onAnswerUpdate={() => setShowModal(true)}
          time={time}
          toggleTheme={toggleTheme}
        />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizdata.data}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

export default App;

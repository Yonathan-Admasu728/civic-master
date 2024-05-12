import React, { useState, useEffect, useMemo } from 'react';
import practiceData from '../data/practiceData.json';
import CongratulationsWithFireworks from './FireWorksTest';

function CivicsTest() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('civicsTestCurrentIndex');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(() => {
    const savedCorrectCount = localStorage.getItem('civicsTestCorrectCount');
    return savedCorrectCount ? parseInt(savedCorrectCount, 10) : 0;
  });
  const [incorrectCount, setIncorrectCount] = useState(() => {
    const savedIncorrectCount = localStorage.getItem('civicsTestIncorrectCount');
    return savedIncorrectCount ? parseInt(savedIncorrectCount, 10) : 0;
  });
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Save the current index and counts to local storage whenever they change
    localStorage.setItem('civicsTestCurrentIndex', currentIndex);
    localStorage.setItem('civicsTestCorrectCount', correctCount);
    localStorage.setItem('civicsTestIncorrectCount', incorrectCount);
  }, [currentIndex, correctCount, incorrectCount]);

  const handleOptionChange = (event) => {
    setUserAnswer(event.target.value);
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    if (showFeedback) return;
    const isCorrect = userAnswer === practiceData[currentIndex].correctAnswer;
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < practiceData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUserAnswer('');
      setShowFeedback(false);
    }
  };

  const handleListen = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(practiceData[currentIndex].question);
    synth.speak(utterance);
  };

  const completionStage = useMemo(() => {
    if ((currentIndex + 1) % 20 === 0 || currentIndex === practiceData.length - 1) {
      return currentIndex + 1;
    }
    return null;
  }, [currentIndex]);

  if (completionStage) {
    return <CongratulationsWithFireworks completionStage={completionStage} handleNextSet={handleNext} />;
  }

  const currentQuestion = practiceData[currentIndex];

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-semibold">{currentIndex + 1} / {practiceData.length}</div>
        <div className="text-sm font-semibold">Correct: {correctCount} Incorrect: {incorrectCount}</div>
      </div>
      <div className="mb-2 bg-white p-4 rounded-lg shadow-md">
        <div className="text-lg font-semibold">{currentQuestion.question}</div>
        <button onClick={handleListen} className="btn btn-ghost flex items-center text-primary">
          <i className="fas fa-volume-up mr-2"></i> Listen to the question 🔊
        </button>
        <div style={{ height: 20 }} />
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="block mb-2 text-sm">
            <input
              type="radio"
              name="answer"
              className="radio radio-primary mr-2"
              value={option}
              checked={userAnswer === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
        <button onClick={handleSubmit} className="btn bg-gray-100 text-primary border-2 border-transparent hover:bg-gray-200 transition-transform duration-300 ease-in-out mt-2">
          Submit
        </button>
      </div>
      {showFeedback && (
        <div className="mt-2">
          <div className={`${userAnswer === currentQuestion.correctAnswer ? 'text-green-500' : 'text-red-500'} text-sm`}>
            {userAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
          </div>
          <div className="text-sm mt-2">{currentQuestion.explanation}</div>
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevious} className="btn btn-outline" disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} className="btn btn-outline" disabled={currentIndex === practiceData.length - 1}>Next</button>
      </div>
    </div>
  )
}

export default CivicsTest;

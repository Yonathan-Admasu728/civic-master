import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEye } from '@fortawesome/free-solid-svg-icons';

import Flashcard from './Flashcard';
import flashcardsData from '../data/flashcardData.json';
import CongratulationsWithFireworks from './CongratulationsWithFireworks';

export default function FlashcardsContainer() {
    const dataKeys = Object.keys(flashcardsData);
    const [currentIndex, setCurrentIndex] = useState(() => {
        // Retrieve the index from local storage if available
        const savedIndex = localStorage.getItem('flashcardsCurrentIndex');
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });
    const [flipped, setFlipped] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [language, setLanguage] = useState('eng');
    const [currentQuestion, setCurrentQuestion] = useState({});

    useEffect(() => {
        // Load the initial flashcard data
        setCurrentQuestion(flashcardsData[dataKeys[currentIndex]]);
        setCompleted(currentIndex >= dataKeys.length); // Check if completed
    }, [currentIndex, dataKeys]); // Include 'dataKeys' in the dependency array

    const handleNext = () => {
        if (currentIndex < dataKeys.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFlipped(false); // Reset the flipped state to show the question side of the flashcard
        } else {
            setCompleted(true); // Mark as completed if at the end of the array
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setFlipped(false); // Reset the flipped state to show the question side of the flashcard
        }
    };

    const toggleCardFlip = () => {
        setFlipped(!flipped);
    };

    if (completed) {
        return <CongratulationsWithFireworks />;
    }

    return (
        <div className="flashcards-container p-4 flex flex-col items-center shadow-lg rounded-lg bg-white">
            <div className="header flex justify-between items-center w-full mb-4">
                <div className="flex items-center">
                    <span className="mr-4 text-sm font-semibold">{`${currentIndex + 1}/${dataKeys.length}`}</span>
                </div>
                <div className="language-select">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="p-2 rounded border-gray-300"
                    >
                        <option value="eng">English</option>
                        <option value="esp">Spanish</option>
                    </select>
                </div>
            </div>
            <Flashcard
                data={currentQuestion}
                language={language}
                flipped={flipped}
                toggleFlip={toggleCardFlip}
            />
            <div className="navigation-buttons flex mt-4">
                <button onClick={handlePrevious} className="btn btn-outline mx-2 p-2 rounded-full bg-black hover:bg-accent-color text-white shadow-md transition-colors duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={toggleCardFlip} className="btn btn-outline mx-2 p-2 bg-white hover:bg-accent-color text-black border border-gray-300 shadow-md transition-colors duration-300 ease-in-out">
                    Hint <FontAwesomeIcon icon={faEye} />
                </button>
                <button onClick={handleNext} className="btn btn-outline mx-2 p-2 rounded-full bg-black hover:bg-accent-color text-white shadow-md transition-colors duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

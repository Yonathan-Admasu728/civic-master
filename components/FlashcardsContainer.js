"use client"; 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEye } from '@fortawesome/free-solid-svg-icons';

import Flashcard from './Flashcard';
import flashcardsData from '../data/flashcardData.json';
import CongratulationsWithFireworks from './CongratulationsWithFireworks';

export default function FlashcardsContainer() {
    const dataKeys = Object.keys(flashcardsData);
    const [currentIndex, setCurrentIndex] = useState(() => {
        return 0;
    });
    const [flipped, setFlipped] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [language, setLanguage] = useState('eng');
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [countdown, setCountdown] = useState(10);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedIndex = localStorage.getItem('flashcardsCurrentIndex');
            if (savedIndex) {
                setCurrentIndex(parseInt(savedIndex, 10));
            }
            setIsInitialized(true);
        }
    }, []);

    useEffect(() => {
        if (isInitialized) {
            if (currentIndex >= dataKeys.length) {
                setCompleted(true);
            } else {
                setCurrentQuestion(flashcardsData[dataKeys[currentIndex]]);
            }
        }
    }, [currentIndex, dataKeys, isInitialized]);

    useEffect(() => {
        if (isInitialized && typeof window !== 'undefined') {
            localStorage.setItem('flashcardsCurrentIndex', currentIndex);
        }
    }, [currentIndex, isInitialized]);

    useEffect(() => {
        let timer;
        if (currentIndex === dataKeys.length - 1 && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, countdown, dataKeys.length]);

    useEffect(() => {
        if (countdown === 0) {
            setCompleted(true);
        }
    }, [countdown]);

    const handleNext = () => {
        if (currentIndex < dataKeys.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFlipped(false);
        } else if (currentIndex === dataKeys.length - 1) {
            setCompleted(true);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setFlipped(false);
        }
    };

    const toggleCardFlip = () => {
        setFlipped(!flipped);
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setFlipped(false);
        setCompleted(false);
        setCountdown(10);
        if (typeof window !== 'undefined') {
            localStorage.setItem('flashcardsCurrentIndex', 0);
        }
    };

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    if (completed) {
        return (
            <div className="congratulations-wrapper">
                <CongratulationsWithFireworks />
                <div className="start-over-button">
                    <button
                        onClick={handleRestart}
                        className="btn btn-outline p-2 rounded-full bg-black hover:bg-accent-color text-white shadow-md transition-colors duration-300 ease-in-out"
                    >
                        Start Over
                    </button>
                </div>
                <style jsx>{`
                    .congratulations-wrapper {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .start-over-button {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                    }
                `}</style>
            </div>
        );
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
            {currentIndex === dataKeys.length - 1 && countdown > 0 && (
                <div className="countdown mt-4 text-xl font-bold text-blue-500">
                    {`Celebration starts in ${countdown}...`}
                </div>
            )}
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

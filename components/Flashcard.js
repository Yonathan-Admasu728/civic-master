"use client"; 
import { useState, useEffect } from 'react';

export default function Flashcard({ data, language, flipped, toggleFlip }) {
    const [isFlipped, setIsFlipped] = useState(flipped);

    // Initialize state safely
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // Effect to sync internal state with prop
    useEffect(() => {
        setIsFlipped(flipped);
    }, [flipped]);

    // Update question and answer based on data and language changes
    useEffect(() => {
        if (data && data[language]) {
            setQuestion(data[language].question);
            setAnswer(data[language].answer);
        }
    }, [data, language]);

    const handleToggleFlip = (e) => {
        e.stopPropagation(); // Prevent the card flip from triggering when buttons are clicked
        toggleFlip();
    };

    // const speakText = (text) => {
    //     const synth = window.speechSynthesis;
    //     const utterance = new SpeechSynthesisUtterance(text);
    //     utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google US English');
    //     utterance.pitch = 1.2; // Range between 0 and 2
    //     utterance.rate = 0.8; // Range between 0.1 and 10
    //     utterance.volume = 0.8; // Range between 0 and 1
    //     synth.speak(utterance);
    // };
    
    const speakText = (text, language = 'en') => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
    
        // Retrieve the list of voices and filter based on language
        const voices = speechSynthesis.getVoices();
        let selectedVoiceName = 'Google US English'; // Default to US English
    
        if (language === 'es') { // Check if the language is Spanish
            const spanishVoice = voices.find(voice => voice.lang.startsWith('es'));
            if (spanishVoice) {
                selectedVoiceName = spanishVoice.name; // Use the first found Spanish voice
            }
        }
    
        utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
        utterance.pitch = 1.2; // Customize pitch
        utterance.rate = 0.8;  // Customize rate
        utterance.volume = 0.8; // Customize volume
    
        synth.speak(utterance);
    };
    
  

    return (
        <div className={`flashcard-container relative ${isFlipped ? 'flipped' : ''}`} onClick={handleToggleFlip}>
            <div className="flashcard-content">
                <div className={`flashcard-face front-face`}>
                    <p className="flashcard-text">{question || 'Loading question...'}</p>
                    <button className="audio-button" onClick={(e) => { e.stopPropagation(); speakText(question); }}>
                         🔊
                    </button>
                </div>
                <div className="flashcard-face back-face">
                    <p className="flashcard-text">{answer || 'Loading answer...'}</p>
                    <button className="audio-button" onClick={(e) => { e.stopPropagation(); speakText(answer); }}>
                         🔊
                    </button>
                </div>
            </div>
            <style jsx>{`
                .flashcard-container {
                    perspective: 1000px;
                    width: 90%;
                    max-width: 350px; /* Fit for mobile */
                    margin: 20px auto;
                }
                .flashcard-content {
                    width: 100%;
                    height: 250px; /* Height for mobile */
                    position: relative;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                .flashcard-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
                    border-radius: 8px;
                    background-color: white;
                    font-size: 1rem;
                    color: var(--primary-color);
                }
                .back-face {
                    transform: rotateY(180deg);
                }
                .flipped .flashcard-content {
                    transform: rotateY(180deg);
                }
                .audio-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    margin-bottom: 1rem;
                    color: var(--primary-color);
                    font-size: 1.2rem;
                }
                .flashcard-text {
                    margin: 0;
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 10px;
                }
                /* Responsive styles for large screens */
                @media (min-width: 768px) {
                    .flashcard-container {
                        max-width: 600px; /* Larger width for large screens */
                    }
                    .flashcard-content {
                        height: 350px; /* Larger height for large screens */
                    }
                    .flashcard-face {
                        padding: 30px; /* Increased padding for better spacing */
                        font-size: 1.5rem; /* Larger text size for readability */
                    }
                    .audio-button {
                        font-size: 1.8rem; /* Larger button size for easier interaction */
                    }
                }
            `}</style>
        </div>
    );
}

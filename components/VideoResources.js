"use client"; // Ensure this is a client-side component
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Video data could be fetched from a JSON file or a backend
const videosData = [
    {
        id: 1,
        title: "Episode 1: Naturalization Interview and Test/Preparing for the Naturalization Interview and Test",
        src: "https://www.youtube.com/embed/MHjOVa6HGHI"
    },
    {
        id: 2,
        title: "Episode 2: Naturalization Interview and Test/The Naturalization Interview",
        src: "https://www.youtube.com/embed/mS8s8JFUhVw"
    },
    {
        id: 3,
        title: "Episode 3: Naturalization Interview and Test/The Civics Test",
        src: "https://www.youtube.com/embed/cV8IcSsd3Zw"
    },
    {
        id: 4,
        title: "Episode 4: Naturalization Interview and Test/The Reading and Writing Test",
        src: "https://www.youtube.com/embed/MlQo8dwr3kA"
    },
];

function VideoResource() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < videosData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="video-resource-container p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-primary-color">Explore Official USCIS Video Guides</h1>
            <h2 className="text-xl mb-4 text-secondary-color">Your Path to Understanding the U.S Citizenship Process</h2>
            <iframe
                src={videosData[currentIndex].src}
                className="w-full md:w-3/4 aspect-video rounded-md shadow-lg"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="Educational Video"
            />
            <div className="navigation-buttons flex mt-4 items-center justify-center space-x-4">
                <button onClick={handlePrevious} className="btn btn-primary p-2 rounded-full bg-primary-color hover:bg-accent-color text-white shadow-md">
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="text-lg">{`${currentIndex + 1} / ${videosData.length}`}</span>
                <button onClick={handleNext} className="btn btn-primary p-2 rounded-full bg-primary-color hover:bg-accent-color text-white shadow-md">
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default VideoResource;

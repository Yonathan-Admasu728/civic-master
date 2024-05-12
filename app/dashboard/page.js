"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faVideo } from '@fortawesome/free-solid-svg-icons';
import FlashcardsContainer from '../../components/FlashcardsContainer';
import CivicsTest from '../../components/CivicsTest';
import VideoResources from '../../components/VideoResources';

export default function DashboardPage() {
    const { data: session } = useSession();
    const user = session?.user;
    const [activeComponent, setActiveComponent] = useState('flashcards');

    // Function to determine the part of the day
    const getPartOfDay = () => {
        const hours = new Date().getHours();
        return hours < 12 ? "morning" : (hours < 18 ? "afternoon" : "evening");
    };

    const welcomeMessage = `Good ${getPartOfDay()}, ${user?.name || 'Guest'}!`;

    return (
        <div className="flex flex-col md:flex-row h-full">
            {/* Sidebar should always be visible on large screens */}
            <aside className={`bg-gray-800 text-white p-5 w-64 min-h-screen hidden md:block`}>
                <h2 className="font-bold text-xl mb-5">Navigation</h2>
                <ul className="space-y-2">
                    <li className="cursor-pointer flex items-center" onClick={() => setActiveComponent('flashcards')}>
                        <FontAwesomeIcon icon={faBook} className="mr-2" />
                        <span>Flashcards</span>
                    </li>
                    <li className="cursor-pointer flex items-center" onClick={() => setActiveComponent('civicsTest')}>
                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                        <span>Civics Test</span>
                    </li>
                    <li className="cursor-pointer flex items-center" onClick={() => setActiveComponent('videos')}>
                        <FontAwesomeIcon icon={faVideo} className="mr-2" />
                        <span>Video Guides</span>
                    </li>
                </ul>
            </aside>
            {/* Main content area */}
            <main className="flex-1 p-2 md:p-10 overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold mb-5">{welcomeMessage}</h1>
                {activeComponent === 'flashcards' && <FlashcardsContainer />}
                {activeComponent === 'civicsTest' && <CivicsTest />}
                {activeComponent === 'videos' && <VideoResources />}
            </main>
            {/* Bottom navigation for small screens */}
            <nav className="bg-gray-800 text-white w-full fixed bottom-0 left-0 right-0 flex justify-around items-center p-2 md:hidden">
                <button onClick={() => setActiveComponent('flashcards')} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faBook} />
                    <span className="text-xs">Flashcards</span>
                </button>
                <button onClick={() => setActiveComponent('civicsTest')} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span className="text-xs">Civics Test</span>
                </button>
                <button onClick={() => setActiveComponent('videos')} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faVideo} />
                    <span className="text-xs">Videos</span>
                </button>
            </nav>
        </div>
    );
}

import React, { useEffect, useRef, useState } from 'react';
import { Fireworks } from 'fireworks-js';



function CongratulationsWithFireworks({ completionStage, handleNextSet }) {
    const messageMap = {
        20: {
            header: "Great Progress!",
            body: "You've completed the first 20 questions. Feel free to take a break, or press 'Continue' to keep going!"
        },
        40: {
            header: "Halfway There!",
            body: "You've answered 40 questions already. Take a quick rest, or continue your journey through the Civics test."
        },
        60: {
            header: "Congratulations! 🎉",
            body: "You've successfully completed all 60 questions of the Civics test. Great job!"
        }
    };

    const { header, body } = messageMap[completionStage];
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            if (entries[0].contentRect.width > 0 && entries[0].contentRect.height > 0) {
                setDimensions({
                    width: entries[0].contentRect.width,
                    height: entries[0].contentRect.height
                });
            }
        });

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
        };
    }, []);



    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            const options = {
                speed: 5,
                acceleration: 1.1,
                friction: 0.95,
                gravity: 0.7,
                particles: 200,
                explosion: 10,
                boundaries: {
                    top: 0,
                    bottom: dimensions.height,
                    left: 0,
                    right: dimensions.width
                },
                colors: ['#FF5733', '#FFFFFF', '#1143B8'],
                mouse: { click: true, move: false, max: 3 }
            };

            const instance = new Fireworks(ref.current, options);
            instance.start();

            return () => {
                instance.stop();
                if (instance.clear) {
                    instance.clear();
                }
            };
        }
    }, [dimensions]); // Re-run this effect if dimensions change


    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            <div className="congratulations-container">
                <h1 className="congratulations-header">{header}</h1>
                <p className="congratulations-text">{body}</p>
                {completionStage !== 60 && (
                    <button onClick={handleNextSet} className="continue-button">
                        Continue
                    </button>
                )}
            </div>
            <div ref={ref} style={{ width: '100%', height: '400px', position: 'absolute', bottom: 0 }}></div>
            <style jsx>{`
                .congratulations-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: calc(100vh - 400px);
                    background-color: #fff;
                    color: #0047AB;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    text-align: center;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .congratulations-header {
                    font-size: 2rem;
                }
                .congratulations-text {
                    font-size: 1.5rem;
                }
                @media (max-width: 768px) {
                    .congratulations-header {
                        font-size: 1.5rem;
                    }
                    .congratulations-text {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}


export default CongratulationsWithFireworks;
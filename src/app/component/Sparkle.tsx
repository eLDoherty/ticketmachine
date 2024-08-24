'use client';
import { useEffect, useState } from 'react';
import '../styles/base/sparkle.scss';

// Define the type for each sparkle
interface Sparkle {
    size: number;
    top: string;
    left: string;
    duration: number;
}

const Sparkles = () => {
    // Initialize state with the Sparkle type
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const numSparkles = 100; // Number of sparkles
        const maxSize = 20; // Maximum size of sparkles
        const minSize = 5;  // Minimum size of sparkles

        // Generate sparkles
        const newSparkles: Sparkle[] = Array.from({ length: numSparkles }).map(() => {
            const size = Math.random() * (maxSize - minSize) + minSize;
            const top = `${Math.random() * 100}vh`;
            const left = `${Math.random() * 100}vw`;
            const duration = Math.random() * 3 + 2; // Between 2 and 5 seconds

            return {
                size,
                top,
                left,
                duration,
            };
        });

        setSparkles(newSparkles);
    }, []);

    return (
        <div className="sparkles">
            {sparkles.map((sparkle, index) => (
                <div
                    key={index}
                    className="sparkle"
                    style={{
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        top: sparkle.top,
                        left: sparkle.left,
                        animation: `sparkle ${sparkle.duration}s infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkles;

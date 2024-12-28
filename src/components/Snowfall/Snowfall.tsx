import React, { useEffect, useRef } from 'react';

interface SnowfallProps {
    minSize?: number;
    maxSize?: number;
    opacity?: number;
}

const Snowfall: React.FC<SnowfallProps> = ({
    minSize = 1,
    maxSize = 5,
    opacity = 0.8,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const snowflakes: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

        const generateSnowflakes = (count: number) => {
            for (let i = 0; i < count; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speed: Math.random() * 1,
                    opacity: Math.random() * opacity,
                });
            }
        };

        const drawSnowflakes = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.beginPath();

            snowflakes.forEach((flake) => {
                ctx.globalAlpha = flake.opacity;
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const updateSnowflakes = () => {
            snowflakes.forEach((flake) => {
                flake.y += flake.speed;
                if (flake.y > canvas.height) {
                    flake.y = -flake.size;
                    flake.x = Math.random() * canvas.width;
                }
            });
        };

        const animate = () => {
            drawSnowflakes();
            updateSnowflakes();
            requestAnimationFrame(animate);
        };

        generateSnowflakes(50); // Количество снежинок
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, [minSize, maxSize, opacity]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
};

export default Snowfall;

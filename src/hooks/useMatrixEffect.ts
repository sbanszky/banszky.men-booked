import { useEffect } from 'react';
import { matrixConfig } from '../config/matrix.config';

export const useMatrixEffect = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Adjust fontSize based on screen width
      matrixConfig.fontSize = window.innerWidth < 768 ? 12 : 16;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = canvas.width / matrixConfig.fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);
    const glowIntensity: number[] = Array(Math.floor(columns)).fill(0);

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${matrixConfig.opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, i) => {
        const intensity = glowIntensity[i];
        const text = matrixConfig.chars[Math.floor(Math.random() * matrixConfig.chars.length)];
        
        if (Math.random() > 0.99) {
          glowIntensity[i] = 1;
        }
        
        ctx.fillStyle = `rgba(0, ${200 + intensity * 55}, ${65 + intensity * 190}, ${0.8 + intensity * 0.2})`;
        ctx.font = `${matrixConfig.fontSize + intensity * 2}px monospace`;
        ctx.fillText(text, i * matrixConfig.fontSize, drop * matrixConfig.fontSize);

        glowIntensity[i] = Math.max(0, glowIntensity[i] - 0.02);

        if (drop * matrixConfig.fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    };

    const interval = setInterval(draw, matrixConfig.speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasRef]);
};
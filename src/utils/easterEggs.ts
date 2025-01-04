import { useEffect } from 'react';

    export const dataBloom = (): void => {
      let keys: string[] = [];
      const code = ['Control', 'Shift', 'b']; // Ctrl+Shift+B

      const createBloom = () => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '9999';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const numShapes = 50;
        const shapes = [];
        for (let i = 0; i < numShapes; i++) {
          shapes.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            opacity: 1,
            speed: Math.random() * 2 + 1,
          });
        }

        let startTime = Date.now();
        const animate = () => {
          const elapsedTime = Date.now() - startTime;
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

          shapes.forEach((shape) => {
            shape.x += shape.speed;
            shape.y += shape.speed;
            shape.opacity -= 0.01;
            shape.radius += 0.1;
            if (shape.opacity < 0) shape.opacity = 0;
            ctx.globalAlpha = shape.opacity;
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
            ctx.fillStyle = shape.color;
            ctx.fill();
          });

          if (shapes.some((shape) => shape.opacity > 0)) {
            requestAnimationFrame(animate);
          } else {
            document.body.removeChild(canvas);
          }
        };

        animate();
      };

      window.addEventListener('keydown', (e) => {
        keys.push(e.key);
        keys = keys.slice(-3);

        if (keys.join(',') === code.join(',')) {
          createBloom();
        }
      });
    };

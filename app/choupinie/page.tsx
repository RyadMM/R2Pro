"use client";

import { useEffect } from 'react';

const Choupinie = () => {
  useEffect(() => {
    const fireworks = () => {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '10000';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particlesArray: any[] = [];
      const numberOfParticles = 200;

      let animationId: number;

      // handle particle
      class Particle {
        x: number;
        y: number;
        size: number;
        weight: number;
        directionX: number;
        directionY: number;
        color: string;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 5 + 1;
          this.weight = Math.random() * 1 + 1;
          this.directionX = Math.random() * 2 - 1;
          this.directionY = Math.random() * 2 - 1;
          this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        update() {
          this.x += this.directionX;
          this.y += this.directionY;
          if (this.y > canvas.height) {
            this.y = 0 - this.size * 2;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * canvas.width;
            this.directionX = Math.random() * 2 - 1;
            this.directionY = Math.random() * 2 - 1;
          }
          this.weight += 0.01;
        }
        draw() {
          ctx!.fillStyle = this.color;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx!.closePath();
          ctx!.fill();
        }
      }

      // create particle array
      function init() {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(
            new Particle(
              Math.random() * canvas.width,
              Math.random() * canvas.height
            )
          );
        }
      }
      init();

      function animate() {
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
        animationId = requestAnimationFrame(animate);
      }
      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      // Clean up function to remove the canvas and animation when the component unmounts
      return () => {
        cancelAnimationFrame(animationId);
        document.body.removeChild(canvas);
      };
    };

    fireworks();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
      pointerEvents: 'none',
      textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 182, 193, 0.3)',
        zIndex: -1,
      }} />
      Choupinichette, tu fais pétiller mon monde comme ces feux d'artifice !
    </div>
  );
};

export default Choupinie;

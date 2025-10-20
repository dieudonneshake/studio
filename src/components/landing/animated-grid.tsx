"use client";

import React, { useRef, useEffect } from "react";

const AnimatedGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius = 1;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = "hsla(142.1, 76.2%, 36.3%, 0.5)";
        ctx!.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    function init(numParticles: number) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
      }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = Math.sqrt(
                    (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                    (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                );

                if (distance < 100) {
                    opacityValue = 1 - distance / 100;
                    ctx!.strokeStyle = `hsla(142.1, 76.2%, 36.3%, ${opacityValue})`;
                    ctx!.lineWidth = 1;
                    ctx!.beginPath();
                    ctx!.moveTo(particles[a].x, particles[a].y);
                    ctx!.lineTo(particles[b].x, particles[b].y);
                    ctx!.stroke();
                }
            }
        }
    }
    
    let animationFrameId: number;
    
    function animate() {
      ctx!.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    const particleCount = Math.floor(width / 15);
    init(particleCount > 100 ? 100 : particleCount);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", () => {});
    };

  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full bg-transparent"></canvas>
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  );
};

export default AnimatedGrid;

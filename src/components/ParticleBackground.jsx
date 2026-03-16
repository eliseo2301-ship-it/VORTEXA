import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Initial setup for canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        let animationFrameId;

        const mouse = { x: null, y: null, radius: 150 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 2 + 1;
                this.density = (Math.random() * 8) + 1; // Reduced for smoother movement
            }
            
            draw() {
                ctx.fillStyle = 'rgba(65, 117, 222, 0.6)'; // Blue primary tone to match the site
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
            
            update() {
                // If mouse position is known, calculate interaction
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x += directionX;
                        this.y += directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let rdx = this.x - this.baseX;
                            this.x -= rdx / 70; // Slower, smoother return
                        }
                        if (this.y !== this.baseY) {
                            let rdy = this.y - this.baseY;
                            this.y -= rdy / 70; // Slower, smoother return
                        }
                    }
                } else {
                    // Slowly return to base position if mouse is out
                    if (this.x !== this.baseX) {
                        let rdx = this.x - this.baseX;
                        this.x -= rdx / 70;
                    }
                    if (this.y !== this.baseY) {
                        let rdy = this.y - this.baseY;
                        this.y -= rdy / 70;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            // Cap at 500 as per user instructions
            for (let i = 0; i < 500; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-[-1]"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default ParticleBackground;

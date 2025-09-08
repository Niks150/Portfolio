
        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Loading screen
        window.addEventListener('load', () => {
            gsap.to('#loading', {
                opacity: 0,
                duration: 0.5,
                delay: 1,
                onComplete: () => {
                    document.getElementById('loading').style.display = 'none';
                    initAnimations();
                }
            });
        });

        function initAnimations() {
            // Create floating particles
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }

            // Hero animations
            const tl = gsap.timeline();
            tl.to('.hero-badge', { duration: 1, y: 0, opacity: 1, ease: 'power3.out' })
              .to('.hero h1', { duration: 1.2, y: 0, opacity: 1, ease: 'power3.out' }, '-=0.8')
              .to('.hero .subtitle', { duration: 1, y: 0, opacity: 1, ease: 'power3.out' }, '-=0.8')
              .to('.hero .hero-description', { duration: 1, y: 0, opacity: 1, ease: 'power3.out' }, '-=0.6')
              .to('.hero .cta-buttons', { duration: 1, y: 0, opacity: 1, ease: 'power3.out' }, '-=0.6');

            // About section animations
            ScrollTrigger.create({
                trigger: '.about-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.profile-image', {
                        scale: 1,
                        rotation: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.about-text h2', {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                    
                    gsap.to('.about-text p', {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                        delay: 0.4
                    });
                    
                    gsap.to('.stats-grid', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.6
                    });
                }
            });

            // Social section animations
            ScrollTrigger.create({
                trigger: '.social-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.social-section .section-title', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.social-section .section-subtitle', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                    
                    gsap.to('.social-card', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                        delay: 0.4
                    });
                }
            });

            // Skills section animations
            ScrollTrigger.create({
                trigger: '.skills-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.skills-section .section-title', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.skill-card', {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.1,
                        delay: 0.2
                    });
                }
            });

            // Projects section animations
            ScrollTrigger.create({
                trigger: '.projects-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.projects-section .section-title', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.project-card', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                }
            });

            // Experience section animations
            ScrollTrigger.create({
                trigger: '.experience-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.experience-section .section-title', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.experience-item', {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.3,
                        delay: 0.2
                    });
                }
            });

            // Contact section animations
            ScrollTrigger.create({
                trigger: '.contact-section',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.contact-section .section-title', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    
                    gsap.to('.contact-section .section-subtitle', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                    
                    gsap.to('.contact-card', {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                        delay: 0.4
                    });
                }
            });
        }

        // Button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Parallax effects
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onUpdate: self => {
                const progress = self.progress;
                gsap.set('.hero-content', { y: progress * 100 });
                gsap.set('.particles', { y: progress * 200 });
            }
        });

        // Refresh ScrollTrigger on resize
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    
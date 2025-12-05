// Main JavaScript file for Wayne Trout's portfolio website
// Additional functionality and interactions

class PortfolioAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParticleEffect();
        this.setupTypingEffect();
        this.setupSkillBars();
        this.setupProjectFilters();
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Particle background effect
    setupParticleEffect() {
        if (typeof p5 !== 'undefined') {
            new p5((sketch) => {
                let particles = [];
                
                sketch.setup = () => {
                    const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
                    canvas.parent('particle-container');
                    canvas.style('position', 'fixed');
                    canvas.style('top', '0');
                    canvas.style('left', '0');
                    canvas.style('z-index', '-1');
                    canvas.style('pointer-events', 'none');
                    
                    // Create particles
                    for (let i = 0; i < 50; i++) {
                        particles.push({
                            x: sketch.random(sketch.width),
                            y: sketch.random(sketch.height),
                            vx: sketch.random(-1, 1),
                            vy: sketch.random(-1, 1),
                            size: sketch.random(2, 6)
                        });
                    }
                };
                
                sketch.draw = () => {
                    sketch.clear();
                    
                    // Update and draw particles
                    particles.forEach(particle => {
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        
                        // Wrap around edges
                        if (particle.x < 0) particle.x = sketch.width;
                        if (particle.x > sketch.width) particle.x = 0;
                        if (particle.y < 0) particle.y = sketch.height;
                        if (particle.y > sketch.height) particle.y = 0;
                        
                        // Draw particle
                        sketch.fill(59, 130, 246, 100);
                        sketch.noStroke();
                        sketch.circle(particle.x, particle.y, particle.size);
                    });
                    
                    // Draw connections
                    for (let i = 0; i < particles.length; i++) {
                        for (let j = i + 1; j < particles.length; j++) {
                            const dist = sketch.dist(
                                particles[i].x, particles[i].y,
                                particles[j].x, particles[j].y
                            );
                            
                            if (dist < 100) {
                                sketch.stroke(59, 130, 246, sketch.map(dist, 0, 100, 50, 0));
                                sketch.strokeWeight(1);
                                sketch.line(
                                    particles[i].x, particles[i].y,
                                    particles[j].x, particles[j].y
                                );
                            }
                        }
                    }
                };
                
                sketch.windowResized = () => {
                    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
                };
            });
        }
    }

    // Advanced typing effect
    setupTypingEffect() {
        const typedElements = document.querySelectorAll('.typed-text');
        
        typedElements.forEach(element => {
            const texts = JSON.parse(element.dataset.texts || '["Hello World"]');
            const speed = parseInt(element.dataset.speed || '100');
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const type = () => {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    element.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    element.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = isDeleting ? speed / 2 : speed;
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }
                
                setTimeout(type, typeSpeed);
            };
            
            type();
        });
    }

    // Animated skill bars
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const targetWidth = bar.dataset.width || '0%';
                const currentWidth = parseFloat(bar.style.width) || 0;
                const target = parseFloat(targetWidth);
                
                if (currentWidth < target) {
                    const increment = target / 50;
                    const newWidth = Math.min(currentWidth + increment, target);
                    bar.style.width = newWidth + '%';
                    
                    requestAnimationFrame(animateSkillBars);
                }
            });
        };
        
        // Trigger animation when skills section is visible
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                    }
                });
            });
            
            observer.observe(skillsSection);
        }
    }

    // Project filtering system
    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.dataset.categories?.split(',') || [];
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Utility functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    static smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        requestAnimationFrame(animation);
    }
    
    static ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoadTime: 0,
            firstPaint: 0,
            firstContentfulPaint: 0
        };
        
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            this.calculateMetrics();
            this.logMetrics();
        });
    }
    
    calculateMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0];
        
        this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach(entry => {
            if (entry.name === 'first-paint') {
                this.metrics.firstPaint = entry.startTime;
            } else if (entry.name === 'first-contentful-paint') {
                this.metrics.firstContentfulPaint = entry.startTime;
            }
        });
    }
    
    logMetrics() {
        console.log('Performance Metrics:', this.metrics);
        
        // Send to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance_metrics', {
                page_load_time: this.metrics.pageLoadTime,
                first_paint: this.metrics.firstPaint,
                first_contentful_paint: this.metrics.firstContentfulPaint
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main animations
    new PortfolioAnimations();
    
    // Initialize performance monitoring
    new PerformanceMonitor();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                Utils.smoothScrollTo(target);
            }
        });
    });
    
    // Add loading animation
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }
    
    // Add cursor trail effect
    const cursorTrail = document.querySelector('.cursor-trail');
    if (cursorTrail) {
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';
            
            requestAnimationFrame(animateTrail);
        };
        
        animateTrail();
    }
});

// Export for use in other scripts
window.PortfolioUtils = Utils;
window.PortfolioAnimations = PortfolioAnimations;
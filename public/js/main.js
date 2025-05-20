/**
 * NIOR GROUP Website JavaScript
 * Handles interactivity and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.querySelector('.contact-form form');

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Sticky Header on Scroll
    function toggleStickyHeader() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', toggleStickyHeader);
    toggleStickyHeader(); // Initial check

    // Smooth Scroll for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to target
                window.scrollTo({
                    top: targetSection.offsetTop - 90, // Offset for header
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Set active nav item based on scroll position
    function setActiveNavOnScroll() {
        const scrollPosition = window.scrollY + 200; // Offset for better UX

        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition) {
                
                const currentId = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavOnScroll);
    setActiveNavOnScroll(); // Initial check

    // Form Submission Handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formEntries = {};
            
            formData.forEach((value, key) => {
                formEntries[key] = value;
            });
            
            // TODO: Add form submission to backend/email service
            // For now, show a success message
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // Show sending status
            submitBtn.textContent = 'Sending...';
            
            // Simulate sending (would be replaced with actual API call)
            setTimeout(() => {
                // Clear form
                this.reset();
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset button
                submitBtn.textContent = originalBtnText;
            }, 1500);
        });
    }

    // Animation on Scroll Effect for Elements
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .value-item, .point');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }

    // Add CSS for the animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .value-item, .point {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .value-item.animate, .point.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .value-item:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .value-item:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .value-item:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .value-item:nth-child(5) {
            transition-delay: 0.4s;
        }
        
        .service-card:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .service-card:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .service-card:nth-child(5) {
            transition-delay: 0.4s;
        }
        
        .service-card:nth-child(6) {
            transition-delay: 0.5s;
        }
        
        .service-card:nth-child(7) {
            transition-delay: 0.6s;
        }
        
        .point:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .point:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .point:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .point:nth-child(5) {
            transition-delay: 0.4s;
        }
        
        .point:nth-child(6) {
            transition-delay: 0.5s;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Run initial animations after a short delay to ensure elements are rendered
    setTimeout(animateOnScroll, 300);
});

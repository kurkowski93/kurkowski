// Obsługa modalu z formularzem kontaktowym
const modal = document.getElementById('contactModal');

function openContactForm() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Blokuje scrollowanie strony pod modalem
}

function closeContactForm() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Przywraca scrollowanie strony
}

// Zamykanie modalu po kliknięciu poza nim
window.onclick = function(event) {
    if (event.target === modal) {
        closeContactForm();
    }
}

// Obsługa formularza
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // FormSubmit zajmie się resztą
        // Możesz dodać tutaj dodatkową walidację jeśli potrzebujesz
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-content')) {
                menuButton.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuButton.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Set initial state based on scroll position when page loads
        updateNavbarState();
        
        // Add scroll event listener
        window.addEventListener('scroll', updateNavbarState);
        
        function updateNavbarState() {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.expertise-card, .project-card, .speaking-card, .certification-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add CSS class for animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fadeIn {
                animation: fadeInAnimation 0.6s ease forwards;
            }
            
            @keyframes fadeInAnimation {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    `);

    // Current year for copyright
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}); 
// Efek scroll & menu interaktif
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Highlight active menu based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });
    
    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll reveal animation
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(item => {
            const windowHeight = window.innerHeight;
            const elementTop = item.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealElements);
    // Call once when page loads
    revealElements();
});
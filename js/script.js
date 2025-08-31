document.addEventListener('DOMContentLoaded', function() {

    // 1. Header Scroll Effect
    const header = document.getElementById('main-header');
    
    // Function to handle the scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) { // If user scrolls more than 50px down
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Listen for the scroll event on the window
    window.addEventListener('scroll', handleScroll);

    
    // 2. Animate elements on scroll (Optional but recommended for a premium feel)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // You can add animation classes here
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => observer.observe(card));

});
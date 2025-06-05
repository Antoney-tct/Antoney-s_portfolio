// Shared JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Background elements (same as your existing code)
    
    // Navigation active state
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Scroll animations (same as your existing code)
    
    // Project filtering (same as your existing code)
    
    // Form handling (same as your existing code)
    
    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.service-icon').style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.service-icon').style.transform = 'translateY(0)';
        });
    });
});
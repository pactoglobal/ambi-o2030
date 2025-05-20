document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for anchor links in mobile menu and other parts of the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Consider navbar height for accurate scroll position
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Close mobile menu after click
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        if (questionButton) {
            questionButton.addEventListener('click', () => {
                // Close other open FAQs
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item && otherItem.classList.contains('open')) {
                //         otherItem.classList.remove('open');
                //     }
                // });
                item.classList.toggle('open');
            });
        }
    });

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Navbar opacity on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/95', 'shadow-lg');
                navbar.classList.remove('bg-white/80');
            } else {
                navbar.classList.remove('bg-white/95', 'shadow-lg');
                navbar.classList.add('bg-white/80');

            }
        });
    }
});

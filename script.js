// Este código já está incluído na tag <script> no final do HTML.
// Se você preferir um arquivo separado, salve este conteúdo como script.js
// e adicione <script src="script.js" defer></script> antes de </body>.

lucide.createIcons();

// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        // Toggle icon
        const icon = menuButton.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons(); // Re-render icons
    });
}

// Smooth scroll for anchor links & close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                // Certifique-se de que menuButton e seu ícone existem antes de tentar manipulá-los
                if (menuButton && menuButton.querySelector('i')) {
                    menuButton.querySelector('i').setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
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
            item.classList.toggle('open');
        });
    }
});

// Set current year in footer
const yearSpanFooter = document.getElementById('currentYearFooter');
if (yearSpanFooter) {
    yearSpanFooter.textContent = new Date().getFullYear();
}

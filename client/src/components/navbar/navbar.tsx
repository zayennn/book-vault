import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            updateThemeIcon();
        }

        const handleToggle = () => {
            body.classList.toggle('dark');

            const theme = body.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);

            updateThemeIcon();
        };

        themeToggle?.addEventListener('click', handleToggle);

        function updateThemeIcon() {
            if (themeToggle) {
                themeToggle.innerHTML = body.classList.contains('dark')
                    ? '<i class="fas fa-sun"></i>'
                    : '<i class="fas fa-moon"></i>';
            }
        }

        // Smooth Scroll
        const anchorHandler = (e: Event) => {
            e.preventDefault();
            const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!;
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: 'smooth' });
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => anchor.addEventListener('click', anchorHandler));

        // Scroll Animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
            elements.forEach(element => {
                const pos = element.getBoundingClientRect().top;
                const screenPos = window.innerHeight / 1.3;
                if (pos < screenPos) {
                    (element as HTMLElement).style.opacity = '1';
                    (element as HTMLElement).style.transform = 'translateY(0)';
                }
            });
        };

        const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
        animatedElements.forEach(element => {
            (element as HTMLElement).style.opacity = '0';
            (element as HTMLElement).style.transform = 'translateY(20px)';
            (element as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        return () => {
            themeToggle?.removeEventListener('click', handleToggle);
            anchors.forEach(anchor => anchor.removeEventListener('click', anchorHandler));
            window.removeEventListener('scroll', animateOnScroll);
            window.removeEventListener('load', animateOnScroll);
        };
    }, []);

    return (
        <header>
            <div className="container header-container">
                <a href="#" className="logo">
                    <i className="fas fa-book-open"></i>
                    <span>BookVault</span>
                </a>

                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <button className="theme-toggle" id="themeToggle">
                    <i className="fas fa-moon"></i>
                </button>
            </div>
        </header>
    );
};

export default Navbar;

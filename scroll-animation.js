

document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < revealElements.length; i++) {
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150; // Distance from top of viewport to trigger animation

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('visible');
            } else {
                revealElements[i].classList.remove('visible');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
});

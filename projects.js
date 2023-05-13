// Toggle navigation menu and icons:
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};
menuToggleButton.addEventListener('click', toggleMenu);

// Remove active class from and icon on link click:
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
}
document.addEventListener('click', removeActiveLinkClass);

// Toggle theme and store selection within local storage:
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme === 'active'){
    bodyElement.classList.add('dark-theme');
}

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    } else {
        localStorage.removeItem('darkTheme');
    }
};
themeToggleButton.addEventListener('click', toggleTheme);

// Scroll reveal:
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.main-title', {origin: 'top'});
sr.reveal('.scroll-reveal-left', {origin: 'left'});
sr.reveal('.scroll-reveal-right', {origin: 'right'});
sr.reveal('.tech-stack-item', {interval: 250});
sr.reveal(`.section title, .section-subtitle-container`, {
    interval: 250,
    origin: 'top'
});
sr.reveal('.portfolio-card', {interval: 500});
sr.reveal(`.form-container, .footer`, {
    origin: 'top'
});
function updateNavSelection() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Get the current page URL
    const currentUrl = window.location.href;

    // Loop through the links and set the active class on the one that matches the current page URL
    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}

function updateMainMarginTop() {
    const header = document.querySelector('.main-header');
    const main = document.querySelector('main');
  
    if (header) {
      const headerHeight = header.clientHeight;
      main.style.marginTop = `${headerHeight}px`;
    }
  }

updateNavSelection();
updateMainMarginTop();

// Attach event listener for window resize
window.addEventListener('resize', updateMainMarginTop);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
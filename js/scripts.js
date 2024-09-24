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

updateNavSelection();
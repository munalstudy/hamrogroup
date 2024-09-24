// document.addEventListener("DOMContentLoaded", function () {
//     // Load the header content from the external HTML file
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '../pages/header.html', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Insert the header content into the placeholder div
//             document.getElementById('header-placeholder').innerHTML = xhr.responseText;
//
//             // After loading the header, update the nav selection
//             // Get all the navigation links
//             const navLinks = document.querySelectorAll('nav a');
//
//             // Get the current page URL
//             const currentUrl = window.location.href;
//
//             // Loop through the links and set the active class on the one that matches the current page URL
//             navLinks.forEach(link => {
//                 if (link.href === currentUrl) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     };
//     xhr.send();
//
//     var xhrFooter = new XMLHttpRequest();
//     xhrFooter.open('GET', '../pages/footer.html', true);
//     xhrFooter.onreadystatechange = function () {
//         if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
//             document.getElementById('footer-placeholder').innerHTML = xhrFooter.responseText;
//         }
//     };
//     xhrFooter.send();
// });

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLIntoDiv('../pages/header.html', 'header-placeholder'); // Adjust the path if needed
    loadHTMLIntoDiv('../pages/footer.html', 'footer-placeholder'); // Adjust the path if needed
});

function loadHTMLIntoDiv(file, divId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(divId).innerHTML = html;
            if (divId === 'header-placeholder') {
                updateNavSelection();
            }
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

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
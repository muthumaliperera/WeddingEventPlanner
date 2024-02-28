var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector('.navbar');

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10vh"; // Hiding navbar by shifting it off-screen
        var navList = document.querySelector('.nav-list');
        navList.style.display = 'none'; // Hiding nav-list when scrolling down
    }
    prevScrollpos = currentScrollPos;
};

document.getElementById('menuIcon').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    
    if (navList.style.display === 'none'|| navList.style.display === '')  {
        navList.style.display = 'block';

        setTimeout(function() {
            navList.style.opacity = '1';
        }, 10);

    } else {
        navList.style.opacity = '0';

        setTimeout(function() {
        navList.style.display = 'none';
        },300);
    }
});

// Get all elements with class "scroll-link"
var scrollLinks = document.querySelectorAll('.scroll-link');

// Loop through each scroll link and add click event listener
scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Get the target section ID from the href attribute of the clicked link
        var targetId = scrollLink.getAttribute('href');

        // Scroll smoothly to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


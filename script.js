var prevScrollpos = window.scrollY;
var menuIcon = document.getElementById('menuIcon');
var navList = document.querySelector('.nav-list');

window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var navbar = document.querySelector('.navbar');
 

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        if (navList.style.display !== 'none') {
            navList.style.opacity = '0';
            setTimeout(function() {
                navList.style.display = 'none';
            }, 300);
        }
        if (menuIcon.classList.contains('fa-times')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            
        }
        
        
    } else {
        navbar.style.top = "-10vh";
        if (navList.style.display !== 'none') {
            navList.style.opacity = '0';
            setTimeout(function() {
                navList.style.display = 'none';
            }, 300);
        }

    }
    prevScrollpos = currentScrollPos;
};

document.getElementById('menuIcon').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    
    if (navList.style.display === 'none'|| navList.style.display === '')  {
        navList.style.display = 'block';

        this.classList.add('fa-times');
        this.classList.remove('fa-bars');

        setTimeout(function() {
            navList.style.opacity = '1';
        }, 10);

    } else {
        navList.style.opacity = '0';

        setTimeout(function() {
        navList.style.display = 'none';
        },300);
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
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


const chevronIcons = document.querySelectorAll('.fa-chevron-down');

    // Add click event listener to each chevron icon
    chevronIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const ans = this.parentElement.parentElement.nextElementSibling;
            if (ans.style.display === 'none') {
                ans.style.display = 'block';
            } else {
                ans.style.display = 'none';
            }
        });
    });

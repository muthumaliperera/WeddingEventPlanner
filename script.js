document.getElementById('menuIcon').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
});
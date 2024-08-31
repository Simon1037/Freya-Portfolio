console.log('Debug master')
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('menu-open');
});


document.addEventListener('click', function (event) {
    var menu = document.getElementById('menu');
    var toggleButton = document.getElementById('menuToggle');

  
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('menu-open');
    }
});
function openNav() {
    document.getElementById('mobile-nav-side-panel').style.width = '350px';
    document.getElementById('exit-button').style.display = 'block';
    document.getElementById('plus').style.display = 'block';
    document.getElementById('mobile-side-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    document.getElementById('mobile-nav-side-panel').style.width = '0';
    document.getElementById('exit-button').style.display = 'none';
    document.getElementById('plus').style.display = 'none';
    document.getElementById('mobile-side-menu').style.display = 'none';
    document.body.style.overflow = 'visible';
}

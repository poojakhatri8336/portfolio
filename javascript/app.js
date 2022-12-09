console.log("Hello");

document.getElementById('myNavbar').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('nav-link')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
});
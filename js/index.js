const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Whenever a click is made a new class is created with the name 'nav-open'
navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

// remove the nav bar once we click on the link
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    });
});
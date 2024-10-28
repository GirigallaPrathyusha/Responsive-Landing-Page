document.querySelectorAll('.scroll').forEach(anchor => 
    {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('data-target'));

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPos = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 1.2;

        if (scrollPos > sectionTop) {
            section.classList.add('active'); 
        }
    });
});

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.remove("loading-active");
        document.body.classList.add("loaded");
        setTimeout(() => {
            reveal(); 
            const preloader = document.getElementById("preloader");
            setTimeout(() => preloader.remove(), 1500);
        }, 600);
    }, 3000); 
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

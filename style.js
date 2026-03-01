window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 30) {
        nav.style.padding = "10px 5%";
        nav.style.background = "rgba(10, 14, 23, 0.98)";
    } else {
        nav.style.padding = "20px 5%";
        nav.style.background = "rgba(10, 14, 23, 0.8)";
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.onload = reveal;

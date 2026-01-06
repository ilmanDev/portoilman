function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}


// Scroll Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
function sendWhatsApp(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let phone = "628xxxxxxxxx"; // GANTI nomor kamu
    let url = `https://wa.me/${+6287872921421}?text=
    Nama: ${name}%0A
    Email: ${email}%0A
    Pesan: ${message}`;

    window.open(url, "_blank");
}
function toggleDark() {
    document.body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        console.error("Navbar tidak ditemukan");
        return;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
window.addEventListener("scroll", function () {
    const footer = document.querySelector(".footer");
    const btn = document.getElementById("backToTop");
    if (!footer || !btn) return;

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        btn.style.bottom = "90px";
    } else {
        btn.style.bottom = "30px";
    }
});


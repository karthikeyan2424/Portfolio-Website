// navbar active script
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.nav-link');
window.onscroll = () => {
    sections.forEach((sec) => {
        if (sec.id === "hero-section" || sec.id === "about-section" || sec.id === "services-section" || sec.id === "portfolio" || sec.id === "contact-us") {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let sectionId = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navlinks.forEach((links) => {
                    links.classList.remove('active');
                    document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
                })
            }
        }
    })
}
// email js script
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let params = {
        form_name: document.getElementById('full-name').value,
        email_id: document.getElementById('email-id').value,
        message: document.getElementById('message').value
    }
    console.log(params);
    emailjs.send("service_n1idmpp", "template_1zjm7xu", params).then(() => {
        document.querySelector('.thank-you-msg').style.display = "block";
        setTimeout(() => {
            document.querySelector('.thank-you-msg').style.display = "none";
        }, 2500)
    })
})

// project

document.addEventListener("DOMContentLoaded", function () {
    // Auto-play carousel every 5 seconds
    let projectCarousel = new bootstrap.Carousel(document.getElementById("projectCarousel"), {
        interval: 5000
    });

    // Pause carousel when hovering over it
    let carouselContainer = document.getElementById("projectCarousel");
    carouselContainer.addEventListener("mouseenter", function () {
        projectCarousel.pause();
    });

    carouselContainer.addEventListener("mouseleave", function () {
        projectCarousel.cycle();
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 9a3965c14a20bc75ef1fdb431a55e803ea55d194

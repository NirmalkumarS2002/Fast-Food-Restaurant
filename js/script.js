//navbar

let menubtn = document.querySelector(".menu-btn")
let closebtn = document.querySelector(".close-btn")
let navcontainer = document.querySelector(".nav-container")
menubtn.addEventListener("click", () => {
    navcontainer.classList.add("active")
    document.body.classList.add("menu-open");
})

closebtn.addEventListener("click", () => {
    navcontainer.classList.remove("active")
        document.body.classList.remove("menu-open");
})

//

let header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
})

//errorpage

let errorpage = document.querySelectorAll(".errorpage")
errorpage.forEach((error) => {
    error.addEventListener("click", () => {
        window.location.href = "404.html"
    })
})


//footer js

const footerMail = document.getElementById("footer-email");
const footerBtn = document.querySelector(".subscribe");
const ferror = document.querySelector(".ferror");

footerBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const email = footerMail.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty
    if (email === "") {
        ferror.textContent = "Please enter your email address";
        ferror.style.color = "red";
        return;
    }

    // Invalid email
    if (!emailPattern.test(email)) {
        ferror.textContent = "Please enter a valid email address";
        ferror.style.color = "red";
        return;
    }

    // Success
    ferror.textContent = "Subscribed Successfully!";
    ferror.style.color = "green";

    footerMail.value = "";

    // Hide after 3 seconds
    setTimeout(() => {
        ferror.textContent = "";
    }, 3000);
});

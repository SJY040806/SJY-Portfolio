// Transition Dark Navbar After Scrolling
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {   // 50px scroll threshold
    nav.classList.add('dark');
  } else {
    nav.classList.remove('dark');
  }
});

// Select all navbar links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {

  link.addEventListener("click", e => {

    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

    hamburger.classList.remove("active");
    menu.classList.remove("active");

  });

});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("active");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.2
});


reveals.forEach(element => {

  observer.observe(element);

});

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");


if (hamburger) {

  hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

  });

}

// Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a[href^='#']");


const sectionObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const currentSection = entry.target.id;


      navItems.forEach(link => {

        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + currentSection) {

          link.classList.add("active");

        }

      });

    }

  });


}, {
  threshold: 0.25
});


sections.forEach(section => {

  sectionObserver.observe(section);

});

const scrollIndicator = document.querySelector(".scroll-indicator");


// Hide scroll indicator when user starts scrolling

let hasScrolled = false;

window.addEventListener("scroll", () => {

  if (!hasScrolled && window.scrollY > 10) {

    scrollIndicator.classList.add("hide");

    hasScrolled = true;

  }

});

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (hamburger) {
      hamburger.classList.remove("active");
    }

    if (menu) {
      menu.classList.remove("active");
    }

  });

});
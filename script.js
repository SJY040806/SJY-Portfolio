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
  link.addEventListener('click', e => {

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = targetElement.offsetTop - navHeight;
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
const menuLinks = document.querySelectorAll("nav a");


hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

  menu.classList.toggle("active");

});


// Close menu after clicking a link

menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("active");
    hamburger.classList.remove("active");

  });

});

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


      history.replaceState(null, null, "#" + currentSection);

    }

  });


}, {
  threshold: 0.5
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
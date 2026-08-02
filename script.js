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
    e.preventDefault(); // prevent default jump

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    // Get element position and adjust for fixed navbar height
    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = targetElement.offsetTop - navHeight;

    // Smooth scroll
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
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

    }

  });


}, {
  threshold: 0.2,
  rootMargin: "-22% 0px -50% 0px"
});


sections.forEach(section => {

  sectionObserver.observe(section);

});
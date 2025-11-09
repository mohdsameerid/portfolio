/* =========================
   script.js — Portfolio Interactivity
   Handles:
   1️⃣ Mobile Navbar Toggle
   2️⃣ Scroll Reveal Animations
   3️⃣ Hero Subtle Fade Effect
   ========================= */

// ----------- MOBILE NAV TOGGLE -----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("mobile-active");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("mobile-active")) {
      navLinks.classList.remove("mobile-active");
      hamburger.classList.remove("active");
    }
  });
});

// ----------- SCROLL REVEAL ANIMATION -----------
const revealElements = document.querySelectorAll(".reveal, .experience-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show", "visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => observer.observe(el));

// ----------- HERO ENTRANCE ANIMATION -----------
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroTitle && heroSubtitle) {
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";
    heroSubtitle.style.opacity = "1";
    heroSubtitle.style.transform = "translateY(0)";
  }
});

// ----------- OPTIONAL SMOOTH SCROLL -----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// ----------- HEADER SCROLL EFFECT -----------
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.85)";
    navbar.style.boxShadow = "0 3px 20px rgba(23,53,93,0.03)";
  }
});



// Optional Hero Reveal on Load
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
});

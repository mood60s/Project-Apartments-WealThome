"use strict";

/*
 Navbar Toggle in Mobile
*/
let navbar = document.querySelector("[data-navbar]");
let navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", (_) => navbar.classList.toggle("active"));

// Scrolling Header State
let header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


//
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-toggle-btn].fav-btn');
  if (!btn) return; // لو مش زرار الفاف، سيبه

  btn.classList.toggle('active');
  // عشان الـ accessibility
  btn.setAttribute('aria-pressed', btn.classList.contains('active'));
});
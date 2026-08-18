/* Yiang V4.0 — Future Innovation Studio */

document.addEventListener("DOMContentLoaded", function () {
  initLanguage();
  initMobileMenu();
  initHeaderScroll();
  initSmoothScroll();
  initScrollReveal();
});

/* Language */
let currentLang = localStorage.getItem("yiang-lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("yiang-lang", lang);

  document.querySelectorAll("[data-en]").forEach(function (el) {
    const text = el.getAttribute("data-" + lang);
    if (text != null && text !== "") {
      el.textContent = text.trim();
    }
  });

  const btn = document.getElementById("language-toggle");
  if (btn) btn.textContent = lang === "en" ? "中文" : "English";
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
}

function initLanguage() {
  applyLanguage(currentLang);
  const button = document.getElementById("language-toggle");
  if (button) {
    button.addEventListener("click", function () {
      applyLanguage(currentLang === "en" ? "zh" : "en");
    });
  }
}

/* Mobile menu */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.textContent = "☰";
      document.body.style.overflow = "";
    });
  });
}

/* Header scroll */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  function update() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* Smooth scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });
}

/* Scroll reveal */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  function check() {
    const trigger = window.innerHeight * 0.88;
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < trigger) el.classList.add("visible");
    });
  }
  window.addEventListener("scroll", check, { passive: true });
  setTimeout(check, 100);
}

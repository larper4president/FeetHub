const buttons = document.querySelectorAll(".main-category[data-category]");
const subNav = document.querySelector(".sub-nav");
const lists = document.querySelectorAll(".sub-nav-list");
const indicator = document.querySelector(".nav-indicator");

const STORAGE_KEY = "activeCategory";
const isTouch = window.matchMedia("(hover: none)").matches;
let hoverTimer = null;

function moveIndicator(btn) {
  const r = btn.getBoundingClientRect();
  const n = btn.closest(".top-nav").getBoundingClientRect();
  indicator.style.left = `${r.left - n.left}px`;
  indicator.style.width = `${r.width}px`;
}

function openCategory(btn, push = true) {
  const key = btn.dataset.category;

  buttons.forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-expanded", "false");
  });

  lists.forEach(list => list.classList.remove("active"));

  const target = document.querySelector(`.sub-nav-list[data-parent="${key}"]`);
  if (!target) return;

  btn.classList.add("active");
  btn.setAttribute("aria-expanded", "true");

  target.classList.add("active");
  subNav.classList.add("active");

  moveIndicator(btn);

  localStorage.setItem(STORAGE_KEY, key);
  if (push) history.pushState(null, "", `#${key}`);
}

function closeAll() {
  buttons.forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-expanded", "false");
  });

  lists.forEach(list => list.classList.remove("active"));
  subNav.classList.remove("active");
  indicator.style.width = 0;

  localStorage.removeItem(STORAGE_KEY);
  history.pushState(null, "", location.pathname);
}

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    btn.classList.contains("active") ? closeAll() : openCategory(btn);
  });

  if (!isTouch) {
    btn.addEventListener("mouseenter", () => {
      hoverTimer = setTimeout(() => openCategory(btn), 250);
    });
    btn.addEventListener("mouseleave", () => clearTimeout(hoverTimer));
  }
});

document.addEventListener("click", e => {
  if (!e.target.closest(".top-nav") && !e.target.closest(".sub-nav")) {
    closeAll();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeAll();
});

window.addEventListener("DOMContentLoaded", () => {
  const key = location.hash.replace("#", "") || localStorage.getItem(STORAGE_KEY);
  if (!key) return;

  const btn = document.querySelector(`.main-category[data-category="${key}"]`);
  if (btn) openCategory(btn, false);
});

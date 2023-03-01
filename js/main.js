document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 300,
    strings: "Clayton Fortunato",
  }).go();
});

// Menu mobile
const ul = document.querySelector(".container-nav a");
const menuBtn = document.querySelector(".menu-btn i");
const links = document.querySelector("nav a");

const menuShow = () => {
  if (ul.classList.contains("open")) {
    ul.classList.remove("open");
  } else {
    ul.classList.add("open");
  }
};

menuBtn.addEventListener("click", () => {
  menuShow();
});

// Fechar menu a clicar
links.forEach((link) => {
  link.addEventListener("click", menuShow);
});

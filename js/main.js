document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 300,
    strings: "Clayton Fortunato",
  }).go();
});

const ul = document.querySelector(".nav-itens");
const menuBtn = document.querySelector(".menu-btn i");

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

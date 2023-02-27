document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 300,
    strings: "Clayton Fortunato",
  }).go();
});

// Menu
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

// scroll animation
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.7;
  target.forEach((el) => {
    if (windowTop > el.offsetTop) {
      el.classList.add(animationClass);
    } else {
      el.classList.remove(animationClass);
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});

//Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

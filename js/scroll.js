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

const initScrollSmooth = () => {
  const linksInternos = document.querySelector("nav a");

  linksInternos.forEach((item) => {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      window.scrollTo({
        top: section.offsetTop - 100,
      });
    };

    item.addEventListener("click", scrollToSection);
  });
};

initScrollSmooth();

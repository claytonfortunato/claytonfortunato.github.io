const dataProjects = [
  {
    title: "Pokedex",
    date: "10 de Janeiro 2023",
    description: `Esta aplicação web tem o intuito de listar e detalhar um pouco mais sobre o pokemon selecionado <br><br>
      
      • Listagem de pokemons; <br>
      • Busca de pokemon pelo nome; <br>
      • Detalhes do pokemon selecionado; <br>
      • Carregamento por lista; <br>
      • Responsividade.`,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/214087631-2111ff67-4177-4ee5-abe5-c907243f6c96.mp4",
    repository: "https://github.com/claytonfortunato/Pokedex",
    site: "",
  },
];

// Open Modal

const openModal = () => {
  const closeModal = document.querySelector(" .close-modal");
  const modal = document.querySelector(".modal");
  const box = document.querySelectorAll(".container-cards .wrapper");
  const modalTitle = modal.querySelector(".title h2");
  const modalDescription = modal.querySelector(".info p");
  const modalDate = modal.querySelector("span");
  const modalLinkProject = modal.querySelector(".links a.link-project");
  const modalLinkRepository = modal.querySelector(".links a.link-repository");

  const iframe = modal.querySelector(".video iframe");

  box.forEach((item, index) => {
    const addData = () => {
      if (index != 5) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        document.body.classList.add("transparent");
      }

      modalTitle.innerHTML = dataProjects[index].title;
      modalDescription.innerHTML = dataProjects[index].description;
      modalDate.innerHTML = dataProjects[index].date;
      modalLinkProject.setAttribute("href", dataProjects[index].site);
      modalLinkRepository.setAttribute("href", dataProjects[index].repository);

      iframe.setAttribute(
        "src",
        dataProjects[index].videoSrc + "?autoplay=1&amp;loop=0"
      );
    };

    item.addEventListener("click", addData);
  });

  const closingModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
    document.body.classList.remove("transparent");
    iframe.setAttribute("src", "");
  };

  closeModal.addEventListener("click", closingModal);

  document.addEventListener("keydown", (event) =>
    event.key === "Escape" ? closingModal() : ""
  );
};

openModal();

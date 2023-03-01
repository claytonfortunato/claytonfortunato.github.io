const dataProjects = [
  {
    title: "Pokedex",
    date: "10 de Janeiro de 2023",
    description: `Esta aplicação web tem o intuito de listar e detalhar um pouco mais sobre o pokemon selecionado <br><br>
      
      • Listagem de pokemons; <br>
      • Busca de pokemon pelo nome; <br>
      • Detalhes do pokemon selecionado; <br>
      • Carregamento por lista; <br>
      • Responsividade.<br>
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • SASS
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/214087631-2111ff67-4177-4ee5-abe5-c907243f6c96.mp4",
    repository: "https://github.com/claytonfortunato/Pokedex",
    site: "",
  },
  {
    title: "Sneakers Shop",
    date: "29 de Janeiro de 2023",
    description: `Projeto simula um ecommerce simples, onde foi construído fazendo uma requisição de um json onde a mesma retorna todas as imagens que temos a exposição , essa aplicação nos permite adicioná-lo, removê-lo do carrinho e mostrando o valor total. <br><br>
      
      • Adicionando produto no carrinho; <br>
      • Adicionando ou diminuindo quantidade de produto; <br>
      • Removendo produto de carrinho; <br>
      • Marcando o total do valor de produto no carrinho; <br>
      • Responsividade.<br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • Redux<br>
      • SASS
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/216209688-b26e39f1-5b9d-416d-a4a2-7930bb502720.mp4",
    repository: "https://github.com/claytonfortunato/e-commerce",
    site: "https://iridescent-maamoul-4f2fd4.netlify.app/",
  },
  {
    title: "Movies",
    date: "2 de Fevereiro de 2023",
    description: `Essa aplicação web tem o intuito de buscar e mostrar dethales de cada filme selecionado, e com a page home com os filmes mais votados. <br><br>
      
      • Página de Top Filmes; <br>
      • Detalhes de cada filmes; <br>
      • Pesquisar filmes no campo de busca; <br>
      • Responsividade.
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • SASS
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/216789465-86a3df9a-b488-40be-b4ca-e947c800ff08.mp4",
    repository: "https://github.com/claytonfortunato/Movies",
    site: "https://profound-maamoul-0e88e6.netlify.app/",
  },
  {
    title: "Todo List",
    date: "6 de Fevereiro de 2023",
    description: `Essa aplicação web tem o intuito de adicionar umas lista de tarefas completas e incompletas e filtrando a busca. <br><br>
      
      • Adicionar tarefas; <br>
      • Filtrar tarefas; <br>
      • Deletar tarefas; <br>
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • SASS<br>
      • Material-UI
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/219694885-2e7161e8-ddd1-4f91-b370-a34a9c2b56f4.mp4",
    repository: "https://github.com/claytonfortunato/Todo-List",
    site: "",
  },
  {
    title: "Calculadora",
    date: "17 de Fevereiro de 2023",
    description: `Essa aplicação web tem o intuito de demonstrar uma simples calculadora. <br><br>
      
      • Adicionar elemento; <br>
      • Calcular elemento; <br>
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • SASS
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/219822585-44b4c6e5-a9c0-43aa-8b52-5414cc789fc7.mp4",
    repository: "https://github.com/claytonfortunato/Calculator-React",
    site: "https://extraordinary-cat-761efb.netlify.app/",
  },
  {
    title: "Forecast Weather",
    date: "17 de Fevereiro de 2023",
    description: `Essa aplicação web tem o intuito de buscar e mostrar a temperatura de cada cidade buscada. <br><br>
      
      • Busca de cidade; <br>
      • Mostrando clima de cada cidade; <br>
      • Horário de inicio e término do por-do-sol; <br>
      • Velocidade e direção do vento; <br>
      • Radar meteorológico e mapas de chuva; <br>
      • Humidade do ar; <br>
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • Typescript<br>
      • Styled-Components
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/219822585-44b4c6e5-a9c0-43aa-8b52-5414cc789fc7.mp4",
    repository: "https://github.com/claytonfortunato/weather-app",
    site: "",
  },
  {
    title: "Jogo da Memória",
    date: "22 de Fevereiro de 2023",
    description: `Um jogo da memória, onde os usuários devem lembrar as posições das cartas e abrir duas imagens exatas sequencialmente para marcar pontos. Uma vez que todos os cartões são abertos, o usuário é vitorioso. <br><br>
      
      • Rastrear os movimentos; <br>
      • Pontos de acertos; <br>
      • Função caso ganhe; <br>
      • Resetar funcionalidade; <br>
      
      <br>
      Tecnologias usadas no projetos:<br>
      • React<br>
      • Typescript<br>
      • Styled-Components
      `,
    videoSrc:
      "https://user-images.githubusercontent.com/104373308/221963518-22130a40-91ff-4998-b87a-a5178747807c.mp4",
    repository: "https://github.com/claytonfortunato/MemoryGame",
    site: "https://eloquent-rugelach-091b24.netlify.app/",
  },
];

// Open Modal

const openModal = () => {
  const closeModal = document.querySelector(".close-modal");
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

      iframe.setAttribute("src", dataProjects[index].videoSrc);
    };

    item.addEventListener("click", addData);
  });

  const handleCloseModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
    document.body.classList.remove("transparent");
    iframe.setAttribute("src", "");
  };

  closeModal.addEventListener("click", handleCloseModal);

  document.addEventListener("keydown", (event) =>
    event.key === "Escape" ? handleCloseModal() : ""
  );
};

openModal();

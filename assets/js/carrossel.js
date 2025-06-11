//TODOS AQUI SAO OS CARROSSEIS DE BOTAO QUE ESTAO NO HTML,TBM UM COPIA E COLA DO MESMO CODIGO,QUE EU TINHA USADO NUMA ATIVIDADE PASSADA
function CarrosselMangaRecomend() {
  const buttonList = document.getElementById('recomendMangas');

  // Espera o carregamento completo da página
  window.addEventListener('load', () => {
    // Duplica os itens do carrossel
    buttonList.innerHTML += buttonList.innerHTML;

    const buttons = buttonList.querySelectorAll('.CarroselImgsMangas');
    const buttonStyle = getComputedStyle(buttons[0]);
    const buttonGap = parseInt(buttonStyle.marginRight || 10);
    const buttonWidth = buttons[0].offsetWidth + buttonGap;

    let index = 1;

    // Define a posição inicial
    buttonList.style.transform = `translateX(-${index * buttonWidth}px)`;

    // Cria função exclusiva para esse carrossel
    window.moveCarouselRecomend = function (direction) {
      index += direction;
      buttonList.style.transition = "transform 0.5s ease-in-out";
      buttonList.style.transform = `translateX(-${index * buttonWidth}px)`;

      setTimeout(() => {
        if (index >= buttons.length / 2 + 1) {
          index = 1;
          buttonList.style.transition = "none";
          buttonList.style.transform = `translateX(-${index * buttonWidth}px)`;
        }

        if (index <= 0) {
          index = buttons.length / 2;
          buttonList.style.transition = "none";
          buttonList.style.transform = `translateX(-${index * buttonWidth}px)`;
        }
      }, 500);
    };
  });
}

function CarrosselMangaShonen() {
  const buttonLista = document.getElementById('shonenManga');

  // Espera o carregamento completo da página
  window.addEventListener('load', () => {
    // Duplica os itens do carrossel
    buttonLista.innerHTML += buttonLista.innerHTML;

    // Agora sim, pegue os elementos após a duplicação
    const buttons = buttonLista.querySelectorAll('.CarroselImgsMangas');

    // Pegue o estilo corretamente
    const buttonStyle = getComputedStyle(buttons[0]);
    const buttonGap = parseInt(buttonStyle.marginRight || 10); // margem entre os cards
    const buttonWidth = buttons[0].offsetWidth + buttonGap;

    let index = 1;

    // Define a posição inicial
    buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;

    // Função para mover o carrossel
    window.moveCarouselShonen = function (direction) {
      index += direction;
      buttonLista.style.transition = "transform 0.5s ease-in-out";
      buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;

      setTimeout(() => {
        if (index >= buttons.length / 2 + 1) {
          index = 1;
          buttonLista.style.transition = "none";
          buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;
        }

        if (index <= 0) {
          index = buttons.length / 2;
          buttonLista.style.transition = "none";
          buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;
        }
      }, 500);
    };
  });
}
function CarrosselMangaIsekai() {
  const buttonLista = document.getElementById('isekaiManga');

  // Espera o carregamento completo da página
  window.addEventListener('load', () => {
    // Duplica os itens do carrossel
    buttonLista.innerHTML += buttonLista.innerHTML;

    // Agora sim, pegue os elementos após a duplicação
    const buttons = buttonLista.querySelectorAll('.CarroselImgsMangas');

    // Pegue o estilo corretamente
    const buttonStyle = getComputedStyle(buttons[0]);
    const buttonGap = parseInt(buttonStyle.marginRight || 10); // margem entre os cards
    const buttonWidth = buttons[0].offsetWidth + buttonGap;

    let index = 1;

    // Define a posição inicial
    buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;

    // Função para mover o carrossel
    window.moveCarouselIsekai = function (direction) {
      index += direction;
      buttonLista.style.transition = "transform 0.5s ease-in-out";
      buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;

      setTimeout(() => {
        if (index >= buttons.length / 2 + 1) {
          index = 1;
          buttonLista.style.transition = "none";
          buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;
        }

        if (index <= 0) {
          index = buttons.length / 2;
          buttonLista.style.transition = "none";
          buttonLista.style.transform = `translateX(-${index * buttonWidth}px)`;
        }
      }, 500);
    };
  });
}
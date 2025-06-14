//TODOS(OU A MAIORIA)DOS CODIGOS SAO CRTL+C E CRTL+V DO MESMO CODIGO.APENAS MUDA AS VARIAVEIS PARA COLOCAR NO SITE
//EXECUTE NO LARAGON,OU ABRA O XAMPP PARA O CODIGO FUNCIONAR,SE USAR O XAMPP,PODE ABRIR NO LIVE SERVER QUE FUNCIONA
//ALGUMAS DAS IMAGENS COLOCADAS NO SITE,QND EXIBIDAS,PODEM BUGAR O CONTAINER QUE FICA AS PAGINAS,POR CONTA QUE ALGUMAS SAO DE DIMENSOES DIFERENTES,NAO PRECISA ARRUMAR

function ExibiçaoPaginaMangaOnePunch() {
  const selectCapitulos = document.getElementById("capitulosOnePunch");
  const containerPaginas = document.getElementById("paginasOnePunch");
  const proxy = "http://localhost/projeto-spa/assets/php/proxy.php?url=";

  async function buscarMangaId(titulo) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}`
        )
    );
    const data = await res.json();
    return data.data[0].id;
  }

  async function buscarCapitulos(mangaId) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=pt-br&limit=100&order[chapter]=asc`
        )
    );
    const data = await res.json();
    return data.data;
  }

  async function mostrarPaginas(capituloId) {
    containerPaginas.innerHTML = "Carregando páginas...";
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/at-home/server/${capituloId}`
        )
    );
    const data = await res.json();
    const { baseUrl, chapter } = data;
    containerPaginas.innerHTML = "";
    chapter.data.forEach((page) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}/data/${chapter.hash}/${page}`;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      containerPaginas.appendChild(img);
    });
  }

  async function iniciar() {
    const mangaId = await buscarMangaId("One Punch Man");
    const capitulos = await buscarCapitulos(mangaId);
    capitulos.forEach((cap) => {
      const option = document.createElement("option");
      option.value = cap.id;
      option.textContent = `Capítulo ${cap.attributes.chapter || "??"} - ${
        cap.attributes.title || ""
      }`;
      selectCapitulos.appendChild(option);
    });
    if (capitulos.length > 0) {
      mostrarPaginas(capitulos[0].id);
    }
    selectCapitulos.addEventListener("change", (e) => {
      mostrarPaginas(e.target.value);
    });
  }

  iniciar();
}

function ExibiçaoPaginaMangaNaruto() {
  const selectCapitulos = document.getElementById("capitulosNaruto");
  const containerPaginas = document.getElementById("paginasNaruto");
  const proxy = "http://localhost/projeto-spa/assets/php/proxy.php?url=";

  async function buscarMangaId(titulo) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}`
        )
    );
    const data = await res.json();
    return data.data[0].id;
  }

  async function buscarCapitulos(mangaId) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=pt-br&limit=100&order[chapter]=asc`
        )
    );
    const data = await res.json();
    return data.data;
  }

  async function mostrarPaginas(capituloId) {
    containerPaginas.innerHTML = "Carregando páginas...";
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/at-home/server/${capituloId}`
        )
    );
    const data = await res.json();
    const { baseUrl, chapter } = data;
    containerPaginas.innerHTML = "";
    chapter.data.forEach((page) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}/data/${chapter.hash}/${page}`;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      containerPaginas.appendChild(img);
    });
  }

  async function iniciar() {
    const mangaId = await buscarMangaId("Naruto");
    const capitulos = await buscarCapitulos(mangaId);
    capitulos.forEach((cap) => {
      const option = document.createElement("option");
      option.value = cap.id;
      option.textContent = `Capítulo ${cap.attributes.chapter || "??"} - ${
        cap.attributes.title || ""
      }`;
      selectCapitulos.appendChild(option);
    });
    if (capitulos.length > 0) {
      mostrarPaginas(capitulos[0].id);
    }
    selectCapitulos.addEventListener("change", (e) => {
      mostrarPaginas(e.target.value);
    });
  }

  iniciar();
}

function ExibiçaoPaginaMangaBleach() {
  const selectCapitulos = document.getElementById("capitulosBleach");
  const containerPaginas = document.getElementById("paginasBleach");
  const proxy = "http://localhost/projeto-spa/assets/php/proxy.php?url=";

  async function buscarMangaId(titulo) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}`
        )
    );
    const data = await res.json();
    return data.data[0].id;
  }

  async function buscarCapitulos(mangaId) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=pt-br&limit=100&order[chapter]=asc`
        )
    );
    const data = await res.json();
    return data.data;
  }

  async function mostrarPaginas(capituloId) {
    containerPaginas.innerHTML = "Carregando páginas...";
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/at-home/server/${capituloId}`
        )
    );
    const data = await res.json();
    const { baseUrl, chapter } = data;
    containerPaginas.innerHTML = "";
    chapter.data.forEach((page) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}/data/${chapter.hash}/${page}`;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      containerPaginas.appendChild(img);
    });
  }

  async function iniciar() {
    const mangaId = await buscarMangaId("Bleach");
    const capitulos = await buscarCapitulos(mangaId);
    capitulos.forEach((cap) => {
      const option = document.createElement("option");
      option.value = cap.id;
      option.textContent = `Capítulo ${cap.attributes.chapter || "??"} - ${
        cap.attributes.title || ""
      }`;
      selectCapitulos.appendChild(option);
    });
    if (capitulos.length > 0) {
      mostrarPaginas(capitulos[0].id);
    }
    selectCapitulos.addEventListener("change", (e) => {
      mostrarPaginas(e.target.value);
    });
  }

  iniciar();
}

function ExibiçaoPaginaMangaHXH() {
  const selectCapitulos = document.getElementById("capitulosHXH");
  const containerPaginas = document.getElementById("paginasHXH");
  const proxy = "http://localhost/projeto-spa/assets/php/proxy.php?url=";

  async function buscarMangaId(titulo) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}`
        )
    );
    const data = await res.json();
    return data.data[0].id;
  }

  async function buscarCapitulos(mangaId) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=pt-br&limit=100&order[chapter]=asc`
        )
    );
    const data = await res.json();
    return data.data;
  }

  async function mostrarPaginas(capituloId) {
    containerPaginas.innerHTML = "Carregando páginas...";
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/at-home/server/${capituloId}`
        )
    );
    const data = await res.json();
    const { baseUrl, chapter } = data;
    containerPaginas.innerHTML = "";
    chapter.data.forEach((page) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}/data/${chapter.hash}/${page}`;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      containerPaginas.appendChild(img);
    });
  }

  async function iniciar() {
    const mangaId = await buscarMangaId("Hunter X Hunter");
    const capitulos = await buscarCapitulos(mangaId);
    capitulos.forEach((cap) => {
      const option = document.createElement("option");
      option.value = cap.id;
      option.textContent = `Capítulo ${cap.attributes.chapter || "??"} - ${
        cap.attributes.title || ""
      }`;
      selectCapitulos.appendChild(option);
    });
    if (capitulos.length > 0) {
      mostrarPaginas(capitulos[0].id);
    }
    selectCapitulos.addEventListener("change", (e) => {
      mostrarPaginas(e.target.value);
    });
  }

  iniciar();
}
function ExibiçaoPaginaMangaKimetsu() {
  const selectCapitulos = document.getElementById("capitulosKimetsu");
  const containerPaginas = document.getElementById("paginasKimetsu");
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";

  async function buscarMangaId(titulo) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}`
        )
    );
    const data = await res.json();
    return data.data[0].id;
  }

  async function buscarCapitulos(mangaId) {
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=pt-br&limit=100&order[chapter]=asc`
        )
    );
    const data = await res.json();
    return data.data;
  }

  async function mostrarPaginas(capituloId) {
    containerPaginas.innerHTML = "Carregando páginas...";
    const res = await fetch(
      proxy +
        encodeURIComponent(
          `https://api.mangadex.org/at-home/server/${capituloId}`
        )
    );
    const data = await res.json();
    const { baseUrl, chapter } = data;
    containerPaginas.innerHTML = "";
    chapter.data.forEach((page) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}/data/${chapter.hash}/${page}`;
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "10px auto";
      containerPaginas.appendChild(img);
    });
  }

  async function iniciar() {
    const mangaId = await buscarMangaId("Kimetsu");
    const capitulos = await buscarCapitulos(mangaId);
    capitulos.forEach((cap) => {
      const option = document.createElement("option");
      option.value = cap.id;
      option.textContent = `Capítulo ${cap.attributes.chapter || "??"} - ${
        cap.attributes.title || ""
      }`;
      selectCapitulos.appendChild(option);
    });
    if (capitulos.length > 0) {
      mostrarPaginas(capitulos[0].id);
    }
    selectCapitulos.addEventListener("change", (e) => {
      mostrarPaginas(e.target.value);
    });
  }

  iniciar();
}

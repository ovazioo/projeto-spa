/*OBS:SE TODOS OS ELEMENTOS NAO ESTIVEREM PRESENTES NO HTML,ELE NAO CONSEGUE PUXAR NENHUMA INFORMAÇAO DO MANGA*/
//NOVAMENTE REPETINDO,TODOS SAO APENAS UM COPIA E COLA UM DO OUTRO,APENAS MUDANDO A VARIAVEL E A TAG DO MANGA PARA APARECER ELE
//OBS2:SO O MANGA DE KIMETSU(E NARUTO EU ACHO),ESTAO COM AS INFORMAÇOES COMPLETAS,NAO É PROBLEMA DE API,É Q AINDA NAO ACRESCENTEI TUDO NO HTML
async function carregarInfoMangaOnePunch() {
  const titulo = "One Punch Man";
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
  const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;

  try {
    const res = await fetch(proxy + encodeURIComponent(urlBusca));
    const data = await res.json();

    if (!data.data.length) {
      document.getElementById("OnePunchTitle").textContent = "Mangá não encontrado.";
      return;
    }

    const manga = data.data[0];
    const attr = manga.attributes;

    const tituloManga = attr.title.en || "Sem título";
    const descricao = attr.description.en || "Sem descrição.";
    const status = attr.status || "Desconhecido";
    const ano = attr.year || "Desconhecido";
    const contentRating = attr.contentRating || "Não informado";
    const originalLanguage = attr.originalLanguage || "Desconhecido";

    // Gêneros
    const generos = attr.tags
      .map(tag => tag.attributes.name.en)
      .filter(Boolean)
      .join(", ") || "Desconhecidos";

    // Autor
    const autorRel = manga.relationships.find(rel => rel.type === "author");
    let nomeAutor = "Desconhecido";
    if (autorRel) {
      const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
      const dataAutor = await resAutor.json();
      nomeAutor = dataAutor.data.attributes.name;
    }

    // Preencher os elementos HTML
    document.getElementById("OnePunchTitle").textContent = tituloManga;
    document.getElementById("OnePunchAutor").textContent = nomeAutor;
    document.getElementById("OnePunchStatus").textContent = status;
    document.getElementById("OnePunchAno").textContent = ano;
    document.getElementById("OnePunchGenero").textContent = generos;
    //document.getElementById("OnePunchRating").textContent = contentRating;
    //document.getElementById("OnePunchIdioma").textContent = originalLanguage;
    document.getElementById("OnePunchDescriçao").textContent = descricao;
    /* OBS:SE TODOS OS ELEMENTOS NAO ESTIVEREM PRESENTES NO HTML,ELE NAO CONSEGUE PUXAR NENHUMA INFORMAÇAO DO MANGA*/
  } catch (error) {
    console.error("Erro ao buscar dados do mangá:", error);
    document.getElementById("OnePunchTitle").textContent = "Erro ao carregar dados.";
  }
}

async function carregarInfoMangaBleach() {
  const titulo = "Bleach";
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
  const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;

  try {
    const res = await fetch(proxy + encodeURIComponent(urlBusca));
    const data = await res.json();

    if (!data.data.length) {
      document.getElementById("BleachTitle").textContent = "Mangá não encontrado.";
      return;
    }

    const manga = data.data[0];
    const id = manga.id;
    const attr = manga.attributes;

    const tituloManga = attr.title.en || "Sem título";
    const descricao = attr.description.en || "Sem descrição.";
    const status = attr.status || "Desconhecido";
    const ano = attr.year || "Desconhecido";
    const contentRating = attr.contentRating || "Não informado";
    const originalLanguage = attr.originalLanguage || "Desconhecido";

    // Gêneros (tags)
    const generos = manga.attributes.tags
      .map(tag => tag.attributes.name.en)
      .filter(Boolean)
      .join(", ") || "Desconhecidos";

    // Autor
    const autorRel = manga.relationships.find(rel => rel.type === "author");
    let nomeAutor = "Desconhecido";
    if (autorRel) {
      const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
      const dataAutor = await resAutor.json();
      nomeAutor = dataAutor.data.attributes.name;
    }

    // Preencher HTML
    document.getElementById("BleachTitle").textContent = tituloManga;
    document.getElementById("BleachAutor").textContent = nomeAutor;
    document.getElementById("BleachStatus").textContent = status;
    document.getElementById("BleachAno").textContent = ano;
    document.getElementById("BleachDescriçao").textContent = descricao;
    document.getElementById("BleachGenero").textContent = generos;
    //document.getElementById("BleachRating").textContent = contentRating;
    //document.getElementById("BleachIdioma").textContent = originalLanguage;
    /* OBS:SE TODOS OS ELEMENTOS NAO ESTIVEREM PRESENTES NO HTML,ELE NAO CONSEGUE PUXAR NENHUMA INFORMAÇAO DO MANGA*/
  } catch (error) {
    console.error("Erro ao buscar dados do mangá Bleach:", error);
    document.getElementById("BleachTitle").textContent = "Erro ao carregar dados.";
  }
}
async function carregarInfoMangaHunter() {
  const titulo = "Hunter x Hunter";
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
  const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;

  try {
    const res = await fetch(proxy + encodeURIComponent(urlBusca));
    const data = await res.json();

    if (!data.data.length) {
      document.getElementById("HunterTitle").textContent = "Mangá não encontrado.";
      return;
    }

    const manga = data.data[0];
    const attr = manga.attributes;

    const tituloManga = attr.title.en || "Sem título";
    const descricao = attr.description.en || "Sem descrição.";
    const status = attr.status || "Desconhecido";
    const ano = attr.year || "Desconhecido";
    const contentRating = attr.contentRating || "Não informado";
    const originalLanguage = attr.originalLanguage || "Desconhecido";

    const generos = attr.tags
      .map(tag => tag.attributes.name.en)
      .filter(Boolean)
      .join(", ") || "Desconhecidos";

    let nomeAutor = "Desconhecido";
    const autorRel = manga.relationships.find(rel => rel.type === "author");
    if (autorRel) {
      const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
      const dataAutor = await resAutor.json();
      nomeAutor = dataAutor.data.attributes.name;
    }

    document.getElementById("HunterTitle").textContent = tituloManga;
    document.getElementById("HunterAutor").textContent = nomeAutor;
    document.getElementById("HunterStatus").textContent = status;
    document.getElementById("HunterAno").textContent = ano;
    document.getElementById("HunterGenero").textContent = generos;
   // document.getElementById("HunterRating").textContent = contentRating;
   // document.getElementById("HunterIdioma").textContent = originalLanguage;
    document.getElementById("HunterDescricao").textContent = descricao;
/* OBS:SE TODOS OS ELEMENTOS NAO ESTIVEREM PRESENTES NO HTML,ELE NAO CONSEGUE PUXAR NENHUMA INFORMAÇAO DO MANGA*/
  } catch (error) {
    console.error("Erro ao buscar dados do mangá:", error);
    document.getElementById("HunterTitle").textContent = "Erro ao carregar dados.";
  }
}


async function carregarInfoMangaNaruto() {
  const titulo = "Naruto";
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
  const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;

  try {
    const res = await fetch(proxy + encodeURIComponent(urlBusca));
    const data = await res.json();

    if (!data.data.length) {
      document.getElementById("NarutoTitle").textContent = "Mangá não encontrado.";
      return;
    }

    const manga = data.data[0];
    const attr = manga.attributes;

    const tituloManga = attr.title.en || "Sem título";
    const descricao = attr.description.en || "Sem descrição.";
    const status = attr.status || "Desconhecido";
    const ano = attr.year || "Desconhecido";
    const contentRating = attr.contentRating || "Não informado";
    const originalLanguage = attr.originalLanguage || "Desconhecido";

    const generos = attr.tags
      .map(tag => tag.attributes.name.en)
      .filter(Boolean)
      .join(", ") || "Desconhecidos";

    // Busca o autor
    const autorRel = manga.relationships.find(rel => rel.type === "author");
    let nomeAutor = "Desconhecido";
    if (autorRel) {
      const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
      const dataAutor = await resAutor.json();
      nomeAutor = dataAutor.data.attributes.name;
    }

    // Preenche os elementos HTML
    document.getElementById("NarutoTitle").textContent = tituloManga;
    document.getElementById("NarutoAutor").textContent = nomeAutor;
    document.getElementById("NarutoStatus").textContent = status;
    document.getElementById("NarutoAno").textContent = ano;
    document.getElementById("NarutoGenero").textContent = generos;
    document.getElementById("NarutoRating").textContent = contentRating;
    document.getElementById("NarutoIdioma").textContent = originalLanguage;
    document.getElementById("NarutoDescriçao").textContent = descricao;
/* OBS:SE TODOS OS ELEMENTOS NAO ESTIVEREM PRESENTES NO HTML,ELE NAO CONSEGUE PUXAR NENHUMA INFORMAÇAO DO MANGA*/
  } catch (error) {
    console.error("Erro ao buscar dados do mangá:", error);
    document.getElementById("NarutoTitle").textContent = "Erro ao carregar dados.";
  }
}
async function carregarInfoMangaKimetsu() {
  const titulo = "Kimetsu";
  const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
  const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;

  try {
    const res = await fetch(proxy + encodeURIComponent(urlBusca));
    const data = await res.json();

    if (!data.data.length) {
      document.getElementById("KimetsuTitle").textContent = "Mangá não encontrado.";
      return;
    }

    const manga = data.data[0];
    const attr = manga.attributes;

    const tituloManga = attr.title.en || "Sem título";
    const descricao = attr.description.en || "Sem descrição.";
    const status = attr.status || "Desconhecido";
    const ano = attr.year || "Desconhecido";
    const contentRating = attr.contentRating || "Não informado";
    const originalLanguage = attr.originalLanguage || "Desconhecido";

    const generos = attr.tags
      .map(tag => tag.attributes.name.en)
      .filter(Boolean)
      .join(", ") || "Desconhecidos";

    // Busca o autor
    const autorRel = manga.relationships.find(rel => rel.type === "author");
    let nomeAutor = "Desconhecido";
    if (autorRel) {
      const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
      const dataAutor = await resAutor.json();
      nomeAutor = dataAutor.data.attributes.name;
    }

    // Preenche os elementos HTML
    document.getElementById("KimetsuTitle").textContent = tituloManga;
    document.getElementById("KimetsuAutor").textContent = nomeAutor;
    document.getElementById("KimetsuStatus").textContent = status;
    document.getElementById("KimetsuAno").textContent = ano;
    document.getElementById("KimetsuGenero").textContent = generos;
    document.getElementById("KimetsuRating").textContent = contentRating;
    document.getElementById("KimetsuIdioma").textContent = originalLanguage;
    document.getElementById("KimetsuDescriçao").textContent = descricao;

  } catch (error) {
    console.error("Erro ao buscar dados do mangá:", error);
    document.getElementById("NarutoTitle").textContent = "Erro ao carregar dados.";
  }
}
carregarInfoMangaKimetsu();
carregarInfoMangaNaruto();
carregarInfoMangaBleach();
carregarInfoMangaOnePunch();
carregarInfoMangaHunter();
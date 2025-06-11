/*
const proxy = "http://localhost/projeto-spa-main/proxy.php?url=";
const mangasFixos = [
  "One Punch Man",
  "Naruto",
  "Hunter x Hunter",
  "Bleach",
  "Kimetsu no Yaiba"
];

async function carregarMangasFixos() {
  const container = document.getElementById("gradeMangas");

  for (const titulo of mangasFixos) {
    try {
      const urlBusca = `https://api.mangadex.org/manga?title=${encodeURIComponent(titulo)}&limit=1`;
      const res = await fetch(proxy + encodeURIComponent(urlBusca));
      const data = await res.json();

      if (!data.data.length) continue;

      const manga = data.data[0];
      const attr = manga.attributes;

      const tituloManga = attr.title.en || "Sem título";
      const ano = attr.year || "Desconhecido";
      const status = attr.status || "Desconhecido";
      const generos = attr.tags.map(tag => tag.attributes.name.en).join(", ") || "Desconhecidos";

      const autorRel = manga.relationships.find(rel => rel.type === "author");
      let nomeAutor = "Desconhecido";

      if (autorRel) {
        const resAutor = await fetch(proxy + encodeURIComponent(`https://api.mangadex.org/author/${autorRel.id}`));
        const dataAutor = await resAutor.json();
        nomeAutor = dataAutor.data.attributes.name;
      }

      const card = document.createElement("div");
      card.classList.add("card-manga");
      card.innerHTML = `
        <h3>${tituloManga}</h3>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Ano:</strong> ${ano}</p>
        <p><strong>Autor:</strong> ${nomeAutor}</p>
        <p><strong>Gêneros:</strong> ${generos}</p>
      `;
      container.appendChild(card);
    } catch (error) {
      console.error("Erro ao carregar mangá:", titulo, error);
    }
  }
}

// Chama essa função ao iniciar a página
carregarMangasFixos();

// Ativa a busca ao clicar no botão
document.getElementById("botaoBusca").addEventListener("click", () => {
  const termo = document.getElementById("inputBusca").value.toLowerCase().trim();
  if (!termo) return;
  mostrarMangaPorTitulo(termo);
});

// Ativa a busca ao pressionar Enter
document.getElementById("inputBusca").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("botaoBusca").click();
  }
});

// Mapeia o termo digitado para a função SPA correspondente
function mostrarMangaPorTitulo(titulo) {
  const normalizado = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove acentos

  PaginaHome(); // Oculta todas as divs

  switch (normalizado) {
    case "one punch man":
      ShowMangaOnePunch();
      break;
    case "naruto":
      ShowMangaNaruto();
      break;
    case "bleach":
      ShowMangaBleach();
      break;
    case "hunter x hunter":
    case "hunterxhunter":
    case "hunter xhunter":
      ShowMangaHXH();
      break;
    case "kimetsu no yaiba":
    case "kimetsu":
    case "demon slayer":
      ShowMangaKimetsu();
      break;
    default:
      alert("Mangá não encontrado.");
  }
}
*/
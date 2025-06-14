const searchInput = document.getElementById("search-name");
const genreDropdown = document.getElementById("genre-dropdown");
const yearDropdown = document.getElementById("year-dropdown");
const btnSearch = document.getElementById("btn-search");
const resultsEl = document.getElementById("results");

// Debounce function
function debounce(fn, delay = 500) {
  let timer;
  return (...args) => { 
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Fetch genres on load
async function loadGenres() {
  try {
    const res = await fetch("https://api.jikan.moe/v4/genres/manga");
    const data = await res.json();
    data.data.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre.mal_id;
      option.textContent = genre.name;
      genreDropdown.appendChild(option);
    });
  } catch (err) {
    console.error("Erro ao carregar gêneros:", err);
  }
}

// Populate year dropdown
function loadYears() {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1950; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
  }
}

// Buscar mangás da API com filtros
async function searchManga({ nome, genero, ano }) {
  const params = new URLSearchParams({
    q: nome,
    genres: genero,
    start_date: ano ? `${ano}-01-01` : "",
    end_date: ano ? `${ano}-12-31` : "",
    type: "manga",
    limit: 25
  });

  const url = `https://api.jikan.moe/v4/manga?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Falha na requisição");
  const data = await res.json();
  return data.data;
}

// Renderização dos resultados
function renderResults(mangas, nomeBuscado) {
  const termo = nomeBuscado?.toLowerCase();
  const filtrados = nomeBuscado
    ? mangas.filter(
        (m) =>
          m.title.toLowerCase().includes(termo) ||
          (m.title_english && m.title_english.toLowerCase().includes(termo))
      )
    : mangas;

  if (filtrados.length === 0) {
    resultsEl.innerHTML = "<li>Nenhum resultado encontrado.</li>";
    return;
  }

  resultsEl.innerHTML = filtrados
    .map(
      (m) => `
    <li class="manga-card">
      <img src="${m.images.jpg.image_url}" alt="Capa de ${m.title}">
      <div class="result-info">
        <h2>${m.title_english || m.title}</h2>
        ${
          m.title_english && m.title_english !== m.title
            ? `<p><em>(${m.title})</em></p>`
            : ""
        }
        <p><strong>Tipo:</strong> ${m.type || "N/A"}</p>
        <p><strong>Status:</strong> ${m.status || "N/A"}</p>
        <p><strong>Capítulos:</strong> ${m.chapters || "Desconhecido"}</p>
        <p><strong>Volumes:</strong> ${m.volumes || "Desconhecido"}</p>
        <p><strong>Ano:</strong> ${
          m.published.from ? m.published.from.slice(0, 4) : "??"
        }</p>
        <p><strong>Nota:</strong> ${m.score || "Sem avaliação"}</p>
        <div class="synopsis hidden"><strong>Sinopse:</strong> ${
          m.synopsis || "Sem sinopse disponível."
        }</div>
      </div>
    </li>
  `
    )
    .join("");

  setupToggleEvents();
}

// Ativar toggle de sinopse
function setupToggleEvents() {
  document.querySelectorAll(".manga-card").forEach((card) => {
    card.addEventListener("click", () => {
      const synopsis = card.querySelector(".synopsis");
      if (synopsis) {
        synopsis.classList.toggle("hidden");
      }
    });
  });
}

// Ação principal com debounce
const runSearch = debounce(async () => {
  const nome = searchInput.value.trim();
  const genero = genreDropdown.value;
  const ano = yearDropdown.value;

  // Se nenhum filtro for aplicado, mostrar mangás populares novamente
  if (!nome && !genero && !ano) {
    loadDefaultMangas();
    return;
  }

  resultsEl.innerHTML = "<li>Buscando mangás...</li>";

  try {
    const mangas = await searchManga({ nome, genero, ano });
    renderResults(mangas, nome);
  } catch (err) {
    resultsEl.innerHTML = `<li style="color: red;">Erro: ${err.message}</li>`;
  }
}, 500);


// Eventos
btnSearch.addEventListener("click", runSearch);
searchInput.addEventListener("input", runSearch);

async function loadDefaultMangas() {
  resultsEl.innerHTML = "<li>Carregando mangás populares...</li>";
  try {
    const res = await fetch("https://api.jikan.moe/v4/top/manga?limit=15");
    const data = await res.json();
    renderResults(data.data, null); // Sem filtro por nome
  } catch (err) {
    resultsEl.innerHTML = `<li style="color: red;">Erro ao carregar mangás iniciais: ${err.message}</li>`;
  }
}
loadGenres();
loadYears();
loadDefaultMangas(); // Carrega mangás populares ao abrir o site



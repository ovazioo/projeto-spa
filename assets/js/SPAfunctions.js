//AQUI É BASICAMENTE QUE FAZ OS MANGAS APARECEREM UM POR UM,PRA TRASNFORMAR EM SPA **NAO MEXA,A NAO SER QUE VC QUEIRA COLOCAR MAIS ALGUMA COISA**
function PaginaHome() {
    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaOnePunch');
    const showmangaFrieren = document.getElementById('DivMangaBleach');
    const showmangaNaruto = document.getElementById('DivMangaNaruto');
    const showmangaHXH = document.getElementById('DivMangaHXH');
    const showmangaKimetsu = document.getElementById('DivMangaKimetsu');
    const SearchManga = document.getElementById('buscaManga');

    if(DivMainMangasShow === "none"){
        DivMainMangas.style.display = "flex";
        showmanga.style.display = "none";
        showmangaFrieren.style.display = "none";
        showmangaNaruto.style.display = "none";
        showmangaHXH.style.display = "none";
        showmangaKimetsu.style.display = "none";
        SearchManga.style.display = "none";
    } 
}
function ShowMangaOnePunch(){
    
    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaOnePunch');
    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        showmanga.style.display = "flex";
    }
}
function ShowMangaBleach(){
    
    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaBleach');
    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        showmanga.style.display = "flex";
    }
}
function ShowMangaNaruto(){

    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaNaruto');

    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        showmanga.style.display = "flex";
    }
}
function ShowMangaHXH(){

    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaHXH');

    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        showmanga.style.display = "flex";
    }
}
function ShowMangaKimetsu(){

    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const showmanga = document.getElementById('DivMangaKimetsu');

    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        showmanga.style.display = "flex";
    }
}

function SearchManga(){

    const DivMainMangas = document.getElementById("divMainMangas");
    const DivMainMangasShow = window.getComputedStyle(DivMainMangas).display;
    const SearchManga = document.getElementById('buscaManga');

    if(DivMainMangasShow === "flex"){
        DivMainMangas.style.display = "none";
        SearchManga.style.display = "flex";
    }
}
//PELO NOME DA FUNÇAO,SO MUDA A COR DO SITE
function MudarCor() {
  const header = document.getElementById("Header"); // div nomeada de header
  const headerCor = window.getComputedStyle(header).backgroundColor; // pega o valor da cor

  const main = document.getElementById("divMainMangas");
  const mainManga = document.querySelectorAll(".MainMangaInformation");
  const recomend = document.querySelectorAll(".DivCarrosselForMangas");
  const footer = document.getElementById("roda");
  const logo = document.getElementById("logo");
  const textA = document.querySelectorAll("#Header a");
  const TextRecomend = document.querySelectorAll(".TextRecomend");
  const mangatitle = document.getElementById("MangaTitle");
  const mangadesc = document.getElementById("MangaDescriçao");
  const listhead = document.getElementById("ListHead");
  const icon = document.getElementById("profileicon");
  const textP = document.querySelectorAll("p");
  const textH1 = document.querySelectorAll("h1");
  const textH2 = document.querySelectorAll("h2");
  const textH3 = document.querySelectorAll("h3");
  const textH4 = document.querySelectorAll("h4");
  const textH5 = document.querySelectorAll("h5");
  const textH6 = document.querySelectorAll("h6");
  const paidoeoalinhas = document.querySelectorAll(".paidoeoalinhas");
  const moon = document.querySelectorAll(".moon");
  const sun = document.querySelectorAll(".sun");
  const menuMobile = document.getElementById("menu-mobile");
  const mangaexibition = document.getElementById("MangaExibition");
  const divSearch = document.getElementById("divSearch");
  const divbusca = document.getElementById("divbusca");
  const libusca = document.querySelectorAll(".results li");
  
  if (headerCor === "rgb(69, 87, 140)") {
    header.style.backgroundColor = "#9DADFF";
    logo.src = "./assets/imgs/logo-black.png";
    main.style.backgroundColor = "#3F4B85";
    mainManga.forEach(el => {
      el.style.backgroundColor = "#9DADFF";
    })
    recomend.forEach(el => {
      el.style.backgroundColor = "#9DADFF";
    });
    TextRecomend.forEach(el => {
      el.style.color = "black";
    })
    mangatitle.style.color = "black";
    mangadesc.style.color = "black";
    listhead.style.color = "black";
    icon.style.color = "black";
    textA.forEach(link => {
      link.style.color = "black";
    });
    textP.forEach(el => {
      el.style.color = "black";
    });
    textH1.forEach(el => {
      el.style.color = "black";
    });
    textH2.forEach(el => {
      el.style.color = "black";
    });
    textH3.forEach(el => {
      el.style.color = "black";
    });
    textH4.forEach(el => {
      el.style.color = "black";
    });
    textH5.forEach(el => {
      el.style.color = "black";
    });
    textH6.forEach(el => {
      el.style.color = "black";
    });
    paidoeoalinhas.forEach(el => {
      el.style.backgroundColor = "#3F4B85";
    })
    moon.forEach(el => {
      el.style.display = "flex";
    })
    sun.forEach(el => {
      el.style.display = "none";
    })
    menuMobile.style.backgroundColor = "#8896DB";
    mangaexibition.style.backgroundColor = "#9DADFF";
    divSearch.style.backgroundColor = "#3F4B85";
    divbusca.style.backgroundColor = "#ab8be6";
    libusca.forEach(el => {
      el.style.background = "#9DADFF";
    })
  } else {
    header.style.backgroundColor = "#45578C";
    logo.src = "./assets/imgs/logo-white.png";
    main.style.backgroundColor = "#0A1240";
    mainManga.forEach(el => {
      el.style.backgroundColor = "#45578C";
    })
    recomend.forEach(el => {
      el.style.backgroundColor = "#45578C";
    });
    TextRecomend.forEach(el => {
      el.style.color = "white";
    })
    mangatitle.style.color = "white";
    mangadesc.style.color = "white";
    listhead.style.color = "white";
    icon.style.color = "white";
    textA.forEach(link => {
      link.style.color = "white";
    });
    textP.forEach(el => {
      el.style.color = "white";
    });
    textH1.forEach(el => {
      el.style.color = "white";
    });
    textH2.forEach(el => {
      el.style.color = "white";
    });
    textH3.forEach(el => {
      el.style.color = "white";
    });
    textH4.forEach(el => {
      el.style.color = "white";
    });
    textH5.forEach(el => {
      el.style.color = "white";
    });
    textH6.forEach(el => {
      el.style.color = "white";
    });
    paidoeoalinhas.forEach(el =>{
      el.style.backgroundColor = "#0A1240";
    })
    moon.forEach(el => {
      el.style.display = "none";
    })
    sun.forEach(el => {
      el.style.display = "flex";
    })
    menuMobile.style.backgroundColor = "#45578C";
    mangaexibition.style.backgroundColor = "#45578C";
    divSearch.style.backgroundColor = "#0A1240";
    divbusca.style.backgroundColor = "#45578C";
    libusca.forEach(el => {
      el.style.background = "#2b3663";
    })
  }
}
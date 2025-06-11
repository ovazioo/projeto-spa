//ESSE É O MENUZINHO SUSPENSO,SE PUDER DEIXA ELE OCUPANDO A TELA TODA EM RELAÇAO AO HEIGHT POR FAVOR
function ShowList() {
  const menu = document.getElementById("menu-mobile");

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
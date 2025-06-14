// Configurações do Google OAuth
const clientId =
  "561300752053-m77ik3tkkr8092tk74h8nev8qmp1gsse.apps.googleusercontent.com";
const redirectUri = "https://ovazioo.github.io/projeto-spa/";
const scope =
  "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

// Clique no botão de login do Google
const googleLoginBtn = document.getElementById("googleLogin");
if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", function () {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
      scope
    )}&prompt=consent`;
    window.location.href = authUrl;
  });
}

// Detectar token no retorno do Google
window.addEventListener("load", function () {
  const hash = window.location.hash;
  if (hash.includes("access_token")) {
    const token = new URLSearchParams(hash.substring(1)).get("access_token");

    fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.email) {
          // Salva no localStorage como usuário logado
          setLoggedUser({
            username: data.name,
            email: data.email,
            picture: data.picture,
          });

          alert(`Bem-vindo, ${data.name}!`);
          // Redireciona para a home (ou outro dashboard)
          window.location.href = "index.html";
        } else {
          alert("Erro ao obter informações do Google.");
        }
      })
      .catch((err) => {
        console.error("Erro na autenticação Google:", err);
        alert("Erro na autenticação Google.");
      });
  }
});

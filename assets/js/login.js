document.addEventListener("DOMContentLoaded", function () {
  // Elementos das views
  const formLogin = document.getElementById("form-login");
  const formCadastro = document.getElementById("form-cadastro");
  const linkCadastro = document.getElementById("link-cadastro");
  const linkLogin = document.getElementById("link-login");
  const tituloForm = document.getElementById("titulo-form");

  // Key do localStorage
  const USERS_KEY = "usuarios_sistema_login";
  const LOGGED_USER_KEY = "usuario_logado";

  // Função para buscar usuários do localStorage (retorna array)
  function getUsers() {
    const usersStr = localStorage.getItem(USERS_KEY);
    return usersStr ? JSON.parse(usersStr) : [];
  }

  // Função para salvar array de usuários no localStorage
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  // Função para buscar usuário logado (objeto) do localStorage
  function getLoggedUser() {
    const userStr = localStorage.getItem(LOGGED_USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  // Função para salvar usuário logado (objeto) no localStorage
  function setLoggedUser(user) {
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
  }

  // Função para remover usuário logado do localStorage (logout)
  function clearLoggedUser() {
    localStorage.removeItem(LOGGED_USER_KEY);
  }

  // Alternar entre as views de cadastro e login
  linkCadastro.addEventListener("click", function (event) {
    event.preventDefault();
    formLogin.classList.add("hidden");
    formCadastro.classList.remove("hidden");
    tituloForm.textContent = "CADASTRAR";
  });

  linkLogin.addEventListener("click", function (event) {
    event.preventDefault();
    formCadastro.classList.add("hidden");
    formLogin.classList.remove("hidden");
    tituloForm.textContent = "ENTRAR";
  });

  // Validação e cadastro de usuário
  formCadastro.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email-cadastro").value;
    const password = document.getElementById("password-cadastro").value;
    const errorMessages = [];

    // Regex para validar o nome de usuário
    const usernameRegex = /^[a-z]{4,}(_[a-z]{4,})*$/;
    if (!usernameRegex.test(username)) {
      errorMessages.push(
        "O nome de usuário deve ter pelo menos 4 caracteres, ser todo em minúsculas e pode conter apenas '_' sem espaços."
      );
    }

    // Regex para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessages.push("O e-mail deve ser válido.");
    }

    // Regex para validar a senha
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*+_]).{8,250}$/;
    if (!passwordRegex.test(password)) {
      errorMessages.push(
        "A senha deve ter entre 8 e 250 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um símbolo (!@#$&*+_)."
      );
    }

    // Exibir mensagens de erro
    const existingErrors = document.querySelectorAll(".error-message");
    existingErrors.forEach((error) => error.remove()); // Remove mensagens de erro anteriores

    if (errorMessages.length > 0) {
      event.preventDefault(); // Impede o envio do formulário
      errorMessages.forEach((message) => {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message text-red-500 mt-2";
        errorMessage.textContent = message;
        formCadastro.appendChild(errorMessage);
      });
      return; // Não prosseguir se houver erros
    }

    // Verifica duplicidade no username e email
    const users = getUsers();
    const usernameExists = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    const emailExists = users.some((u) => u.email === email);

    if (usernameExists) {
      const errorMessage = document.createElement("p");
      errorMessage.className = "error-message text-red-500 mt-2";
      errorMessage.textContent = "Nome de usuário já cadastrado.";
      formCadastro.appendChild(errorMessage);
      return;
    }
    if (emailExists) {
      const errorMessage = document.createElement("p");
      errorMessage.className = "error-message text-red-500 mt-2";
      errorMessage.textContent = "E-mail já cadastrado.";
      formCadastro.appendChild(errorMessage);
      return;
    }

    // Cria novo usuário
    const newUser = { username, email, password };
    users.push(newUser);
    saveUsers(users);

    alert("Cadastro realizado com sucesso! Faça login agora.");
    formCadastro.reset();
    formLogin.classList.remove("hidden");
    formCadastro.classList.add("hidden");
    tituloForm.textContent = "ENTRAR"; // Muda o título para "ENTRAR"
  });

  // Login do usuário
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const identifier = document.getElementById("email").value; // Pode ser e-mail ou nome de usuário
    const password = document.getElementById("password").value;

    const users = getUsers();
    const user = users.find(
      (u) =>
        (u.username.toLowerCase() === identifier.toLowerCase() ||
          u.email === identifier.toLowerCase()) &&
        u.password === password
    );

    if (user) {
      setLoggedUser({ username: user.username, email: user.email });
      alert("Login bem-sucedido!");
      // Aqui você pode adicionar a lógica para redirecionar para a área logada ou dashboard
      // Por exemplo: window.location.href = "dashboard.html";
    } else {
      const errorMessage = document.createElement("p");
      errorMessage.className = "error-message text-red-500 mt-2";
      errorMessage.textContent = "Usuário ou senha incorretos.";
      formLogin.appendChild(errorMessage);
    }
  });
});

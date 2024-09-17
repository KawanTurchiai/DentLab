// login.js

function loginUser(email, password) {;
    // Pegar os usuários armmazenados no localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o usuário existe e a senha está correta

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        return "sucesso";
    } else {
        return "falha";
    }
}

document.getElementById("btnLogin").addEventListener("click", (event) => {
    event.preventDefault();

    // Pegar o email e a senha do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar Login
    const result = loginUser(email, password);

    // Verificar resultado do login
    if (result === "sucesso") {
        //redirecionar para a página home 
        window.location.href = "home.html";
    } else {
        alert("Erro ao fazer o login");
    }
});


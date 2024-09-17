// Função para registrar usuário
function registerUser(email, password) {
    // Pegar os usuários armazenados no localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Usuário já registrado');
    } else {
        // Adicionar o novo usuário
        users.push({ email, password });
        
        // Salvar de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Cadastro realizado com sucesso');
    }
}

// Pegar os dados do formulário e chamar a função de registro
document.getElementById('registerButton').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar se as senhas são iguais
    if (password !== confirmPassword) {
        alert('Senhas não são iguais!');
    } else {
        // Chamar a função de registro
        registerUser(email, password);
    }
});

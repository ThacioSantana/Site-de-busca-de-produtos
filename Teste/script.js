const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const searchTerm = input.value;
    
    // Fazer a pesquisa com o termo inserido pelo usuário (exemplo: busca fictícia)
    const results = [
        { name: 'Produto 1', image: 'product1.jpg', price: 19.99 },
        { name: 'Produto 2', image: 'product2.jpg', price: 29.99 },
        { name: 'Produto 3', image: 'product3.jpg', price: 39.99 }
    ];
    
    showResults(results);
});

function showResults(products) {
    resultsDiv.innerHTML = '';
    
    if (products.length === 0) {
        resultsDiv.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const image = document.createElement('img');
        image.src = product.image;
        productDiv.appendChild(image);
        
        const name = document.createElement('h2');
        name.textContent = product.name;
        productDiv.appendChild(name);
        
        const price = document.createElement('p');
        price.textContent = 'Preço: R$' + product.price.toFixed(2);
        productDiv.appendChild(price);
        
        resultsDiv.appendChild(productDiv);
    }
}

// Mostrar tela de login e ocultar tela de cadastro
function showLogin() {
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
}

// Mostrar tela de cadastro e ocultar tela de login
function showSignup() {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
}

// Evento de clique no link de cadastro
signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSignup();
});

// Evento de clique no link de login
loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    showLogin();
});

// Evento de envio do formulário de login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Lógica de autenticação para o login
    // ...
});

// Evento de envio do formulário de cadastro
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Lógica de criação de conta para o cadastro
    // ...
});

// Mostrar tela de login por padrão
showLogin();

// Função para voltar uma página no histórico do navegador
function goBack() {
    history.back();
}

// Obter todos os elementos com a classe "back-link"
const backLinks = document.getElementsByClassName('back-link');

// Adicionar um evento de clique a cada link
for (let i = 0; i < backLinks.length; i++) {
    const link = backLinks[i];
    link.addEventListener('click', goBack);
}

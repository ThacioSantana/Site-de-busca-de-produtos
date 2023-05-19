const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const backLinks = document.getElementsByClassName('back-link');
const productSelectionContainer = document.getElementById('product-selection-container'); // Obtenha uma referência ao contêiner de seleção de produtos

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
});

// Mostrar tela de login por padrão
showLogin();

// Função para voltar uma página no histórico do navegador
function goBack() {
    history.back();
}

// Adicionar um evento de clique a cada link
for (let i = 0; i < backLinks.length; i++) {
    const link = backLinks[i];
    link.addEventListener('click', goBack);
}

// Adicione um ouvinte de evento ao formulário quando for enviado
productSelectionContainer.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtenha todos os elementos de input do tipo checkbox dentro do contêiner de seleção de produtos
  const checkboxes = productSelectionContainer.querySelectorAll('input[type="checkbox"]');

  // Array para armazenar os produtos selecionados
  const selectedProducts = [];

  // Itere sobre os checkboxes para verificar quais estão marcados
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      // Adicione o valor do checkbox (nome do produto) ao array de produtos selecionados
      selectedProducts.push(checkbox.value);
    }
  });

  // Exiba os produtos selecionados (exemplo)
  alert('Produtos selecionados: ' + selectedProducts.join(', '));

  // Limpe a seleção de produtos (opcional)
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
});

// Adicione um ouvinte de evento ao contêiner para capturar cliques nos botões "Adicionar Comentário"
productSelectionContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-comment')) {
    event.preventDefault();
    
    const commentButton = event.target;
    const productItem = commentButton.parentNode;
    const commentsList = productItem.querySelector('.comments-list');
    
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Digite seu comentário';
    
    const commentSubmitButton = document.createElement('button');
    commentSubmitButton.textContent = 'Enviar';
    
    const commentForm = document.createElement('form');
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const commentListItem = document.createElement('li');
        commentListItem.textContent = commentText;
        commentsList.appendChild(commentListItem);
      }
      
      commentInput.value = '';
      commentInput.focus();
    });
    
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentSubmitButton);
    
    productItem.appendChild(commentForm);
  }
});

// Adicione um ouvinte de evento ao formulário de envio para capturar a seleção de produtos
const submitButton = document.getElementById('submit-products');
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  const checkboxes = productSelectionContainer.querySelectorAll('input[type="checkbox"]');
  
  const selectedProducts = [];
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedProducts.push(checkbox.value);
    }
  });
  
  alert('Produtos selecionados: ' + selectedProducts.join(', '));
});

// Obtém todos os botões dos produtos
var productButtons = document.getElementsByClassName("product-button");

// Adiciona um evento de clique para cada botão do produto
for (var i = 0; i < productButtons.length; i++) {
    productButtons[i].addEventListener("click", function() {
        // Aqui você pode definir o que acontece quando o botão do produto é clicado
        // Pode ser abrir uma nova página com os detalhes do produto ou exibir uma janela modal, por exemplo
        // Exemplo: window.location.href = "detalhes_produto.html";
    });
}

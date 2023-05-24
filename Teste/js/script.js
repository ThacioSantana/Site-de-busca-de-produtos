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
const productSelectionContainer = document.getElementById('product-selection-container');
const submitButton = document.getElementById('submit-products');
const productButtons = document.getElementsByClassName('product-button');

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

function showLogin() {
  loginContainer.style.display = 'block';
  signupContainer.style.display = 'none';
}

function showSignup() {
  loginContainer.style.display = 'none';
  signupContainer.style.display = 'block';
}

function goBack() {
  history.back();
}

signupLink.addEventListener('click', function(event) {
  event.preventDefault();
  showSignup();
});

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  showLogin();
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Lógica de autenticação para o login
  // ...
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Lógica de cadastro do cliente
  // ...
});

for (let i = 0; i < backLinks.length; i++) {
  const link = backLinks[i];
  link.addEventListener('click', goBack);
}

productSelectionContainer.addEventListener('submit', function(event) {
  event.preventDefault();

  const checkboxes = productSelectionContainer.querySelectorAll('input[type="checkbox"]');
  const selectedProducts = [];

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedProducts.push(checkbox.value);
    }
  });

  alert('Produtos selecionados: ' + selectedProducts.join(', '));

  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
});

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

for (let i = 0; i < productButtons.length; i++) {
  productButtons[i].addEventListener('click', function() {
    // Aqui irá poder definir o que acontece quando o botão do produto é clicado
    // Pode ser abrir uma nova página com os detalhes do produto ou exibir uma janela modal, por exemplo
    // Exemplo: window.location.href = "detalhes_produto.html";
  });
}


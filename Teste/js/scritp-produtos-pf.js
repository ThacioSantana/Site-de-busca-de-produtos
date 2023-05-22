function searchProducts(query, category, maxPrice, minStock) {
  query = query.toLowerCase();

  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();
    const productPrice = product.price;
    const productStock = product.stock;

    return (
      productName.includes(query) &&
      productCategory.includes(category.toLowerCase()) &&
      productPrice <= maxPrice &&
      productStock >= minStock
    );
  });

  return filteredProducts;
}

// Obtenha todos os botões dos produtos
const productButtons = document.getElementsByClassName("product-button");

// Adicione um manipulador de eventos a cada botão
for (let i = 0; i < productButtons.length; i++) {
  productButtons[i].addEventListener("click", function() {
    // Aqui você pode definir a lógica para exibir os detalhes do produto
    // por exemplo, abrir uma nova página com os detalhes do produto ou exibir um modal
    // Exemplo: window.location.href = "detalhes_produto.html";
  });
}

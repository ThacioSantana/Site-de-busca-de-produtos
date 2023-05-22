// Função de pesquisa de produtos
function searchProducts(query) {
  // Converte a consulta para minúsculas para uma pesquisa case-insensitive
  query = query.toLowerCase();

  // Filtra os produtos com base na consulta
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    return productName.includes(query);
  });

  return filteredProducts;
}

// Exemplo de uso da função de pesquisa de produtos
const searchTerm = 'camiseta';
const searchResults = searchProducts(searchTerm);

console.log(`Resultados da pesquisa para "${searchTerm}":`);
searchResults.forEach(product => {
  console.log(`- ${product.name} - R$ ${product.price.toFixed(2)}`);
});

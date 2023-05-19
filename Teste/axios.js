form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const searchTerm = input.value;
    
    // Make the HTTP request using Axios
    axios.get('/api/products', { params: { searchTerm } })
        .then(function(response) {
            const results = response.data;
            showResults(results);
        })
        .catch(function(error) {
            console.error('Error fetching products:', error);
        });
});

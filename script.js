document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products');

    // Fetch products from fake store API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productElement = createProductElement(product);
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span class="price">$${product.price}</span>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        const addToCartButton = productDiv.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', addToCartClicked);

        return productDiv;
    }

    function addToCartClicked(event) {
        const button = event.target;
        const productId = button.dataset.id;

        alert(`Added Product ${productId} to cart!`);
        // Implement logic to add the product to cart or perform AJAX request
    }
});

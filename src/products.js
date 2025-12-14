// Vanilla JS for fetching and displaying products
(function () {
    const API_URL = "https://fakestoreapi.com/products";
    const productsContainer = document.getElementById("products-list");

    function addToCart(product) {
        const event = new CustomEvent("addToCart", {
            detail: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
            },
        });
        window.dispatchEvent(event);
    }

    function createProductCard(product) {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="btn-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;

        const button = card.querySelector(".btn-add-to-cart");
        button.addEventListener("click", () => {
            addToCart(product);

            button.textContent = "Added!";
            button.classList.add("btn-added");
            setTimeout(() => {
                button.textContent = "Add to Cart";
                button.classList.remove("btn-added");
            }, 1000);
        });

        return card;
    }

    async function fetchProducts() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            productsContainer.innerHTML = `
        <div class="error">
          <p>Failed to load products. Please try again later.</p>
          <p>${error.message}</p>
        </div>
      `;
        }
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach((product) => {
            const card = createProductCard(product);
            productsContainer.appendChild(card);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fetchProducts);
    } else {
        fetchProducts();
    }
})();

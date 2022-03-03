async function loadProducts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const products = await response.json();

    return products;

    console.log(response);
}

document.addEventListener("DM Products Loaded", async() => {
    let products = [];

    try {
        products = await loadProducts();
    } catch (err) {
        console.log('Failed to load product table...');
        console.log(err);
    }

    console.log(products);
});
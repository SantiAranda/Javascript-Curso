const API = "https://fakestoreapi.com/products";

export async function getProducts() {
  return fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const products = data

      return products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      }))
    });
}

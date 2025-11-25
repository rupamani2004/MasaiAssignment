function processProducts(products) {
  // Step 1: Get an array of product names using map
  const names = products.map(product => product.name);
  console.log("Product names:", names);

  // Step 2: Use forEach to log messages based on product price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });
}

// Example usage:
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);



// Case 1: User Data Cleaner (String & Array Interop)
const rawInput = "  riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedNamesArray = rawInput
  .trim()
  .split(',')
  .map(name => name.trim().toLowerCase());

const formattedString = cleanedNamesArray.join(' | ');

console.log(formattedString);


// Case 2: E-Commerce Product Filter (Array of Objects)
const products = [
  { name: 'Laptop', price: 1000, active: true },
  { name: 'Mouse', price: 20, active: false },
  { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter(product => product.active);

const activeProductNames = activeProducts.map(product => product.name.toUpperCase());

const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log(activeProductNames);
console.log(totalPrice);
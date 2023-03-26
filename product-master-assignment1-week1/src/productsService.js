// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  // get all products
  return JSON.stringify(productsList);
}

const getProductsById = (productId) => {
  let product = null
  // get a product by ID
  let products = productsList;
  for (let i = 0; i < products.length; i++){
    let p = products[i];
    if (p.id == productId){
      product = p;
      break;
    }
  }

  return JSON.stringify(product);
}

const saveProduct = (newProduct) => {
 // save a product
  console.log(newProduct);
  productsList.push(newProduct);
  return JSON.stringify(productsList);
}

const updateProduct = (productId, updateData) => {
  let updatedProductList = null;
  // update the product list
  JSON.stringify(updatedProductList);
}

const deleteProduct = (productId) => {
  // delete a product    
  JSON.stringify(productsList);
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}
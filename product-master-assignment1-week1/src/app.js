//Import the necessary dependencies
const http = require('http')
// Define a port at which the server will run
const PORT = 5000;

const productsService = require("./productsService");
const getRequestData = require('./utils');
const {saveProduct} = require("./productsService");

const server = http.createServer(async (request, response) => {
  let url = request.url;
  let method = request.method;

  if (url.includes("api/v1/products")){
    if (method === "GET"){
      if (url.match('[0-9]')){ // Get a product with specified id
        let product = productsService.getProductsById(url.split("/")[4]);
        response.writeHead(200, {
          'content-type' : 'application/json'
        });
        response.end(product);
        return;
      }
      else { // Get all products
        response.writeHead(200, {
          'content-type' : 'application/json'
        });
        response.end(productsService.getProducts());
        return;
      }
    }

    // Create a new product
    if (method === "POST"){
      let parsedBody = await getRequestData(request);
      let returnBody = saveProduct(parsedBody);
      response.writeHead(200, {
        'content-type' : 'application/json'
      });
      response.end(returnBody);
      return;
    }

    // Update a specific product

    // Delete a specific Product

  }

  //No matching urls found. Return 404
  response.writeHead(404, {
    'content-type': 'application/json'
  });
  response.end()
});



// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})
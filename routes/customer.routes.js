module.exports = (app) => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer(POST)
  app.post("/customers", customers.create);

  // Retrieve all Customers(GET)
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId(GET)
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId(PUT)
  
  /*app.put("/customers/:customerId", customers.update); 
  ------------ Gave an error of Route.put() requires a callback function but got a [object Undefined]*/


  app.put("/customers/:customerId", function (req, res) {
    customers.update;
  });

  // Delete a Customer with customerId (DELETE)
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer(DELETE)
  app.delete("/customers", customers.deleteAll);
};

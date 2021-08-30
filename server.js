//Set express as Node.js web app server framework
//Install express >> npm install express
//Install modules >> npm install express mysql body-parser --save

const express = require("express"); //Import Express
const bodyParser = require("body-parser"); //body-parser is depriciated, should use cookie-parser instead

const app = express();

app.use(bodyParser.json()); //parse requests of content-type: application/json

app.use(bodyParser.urlencoded({ extended: true })); //parse requests of content-type: application/x-www-form-urlencoded

//Route
app.get("/", (req, res) => {
  res.json({ message: "Simple CRUD app using Express..." });
});

require("/home/kimaru/Desktop/nodejs-express-mysql/routes/customer.routes.js")(
  app
);
//Port, listening for requests
app.listen(3000, () => {
  console.log("Server is running at port 3000...");
});

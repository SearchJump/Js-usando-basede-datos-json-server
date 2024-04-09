const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();

const router = jsonServer.router({
  db: path.join(__dirname, "database.json"),
  models: {
    Producto: require("./models/producto"),
    Categoría: require("./models/categoria"),
    Proveedor: require("./models/proveedor")
  }
});

app.use("/", router);

app.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

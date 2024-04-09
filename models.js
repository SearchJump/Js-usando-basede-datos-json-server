const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
  precio: { type: Number },
  categoriaId: { type: Number },
  proveedorId: { type: Number }
});

const productoModel = mongoose.model("Producto", productoSchema);

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String }
});

const categoriaModel = mongoose.model("Categoría", categoriaSchema);

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String },
  direccion: { type: String },
  telefono: { type: String }
});

const proveedorModel = mongoose.model("Proveedor", proveedorSchema);

module.exports = {
  productoModel,
  categoriaModel,
  proveedorModel
};

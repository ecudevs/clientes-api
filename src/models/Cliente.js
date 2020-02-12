const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  foto: { type: String },
  correo: { type: String, required: true },
  numero: { type: String, required: true },
  etiquetas: [String],
  feCreacion: { type: Date, default: Date.now },
  estado: { type: String, default: "A" }
});
const cliente = mongoose.model("cliente", clienteSchema);
module.exports = cliente;

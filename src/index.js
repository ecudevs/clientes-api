const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ClienteController = require("./controllers/ClienteController");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ mensaje: "Hola mundo!" });
});

app.get("/cliente", (req, res) => {
  console.log('1');
  ClienteController.getClientes(res);
});

app.get("/cliente/:_id", (req, res) => {
  ClienteController.getById(req.params._id, res);
});

app.post("/cliente", (req, res) => {
  ClienteController.insertCliente(req.body, res);
});

app.put("/cliente", (req, res) => {
  ClienteController.updateCliente(req.body, res);
});

app.delete("/cliente/:_id", (req, res) => {
  ClienteController.deleteCliente(req.params._id, res);
});

mongoose.connect(
  "mongodb://heroku_lkdpvq3k:8kur5bv4sjgvdeoe3usgpd3aqg@ds133556.mlab.com:33556/heroku_lkdpvq3k",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Magic Happens on port: ${port}`));

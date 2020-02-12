const Cliente = require("../models/Cliente");

const ObjectId = require("mongoose").Types.ObjectId;

function ClienteController() {
  this.getClientes = function (res) {
    Cliente.find({ estado: "A" })
      .then(clientes => {
        res.send({ clientes });
      })
      .catch(error => {
        res.status(500).send({ error });
      });
  };

  this.getById = async function (_id, res) {
    try {
      let cliente = await Cliente.findById(ObjectId(_id));
      res.send({ cliente });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.insertCliente = async function (clienteParam, res) {
    try {
      let clienteToSave = new Cliente(clienteParam);
      let clienteSaved = await clienteToSave.save();
      res.send({ cliente: clienteSaved });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.updateCliente = async function (clienteParam, res) {
    try {
      await Cliente.findByIdAndUpdate(ObjectId(clienteParam._id), clienteParam);
      res.send({ cliente: clienteParam });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.deleteCliente = async function (_id, res) {
    try {
      await Cliente.findByIdAndRemove(ObjectId(_id));
      res.send({ success: true });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

module.exports = new ClienteController();

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:rwBwu0dALD2n4swv@clusternodejsdicasparad.rbfl53e.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNodeJSDicasparadevs`
    );
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error(
      "Ocorreu um erro ao se conectar com o banco de dados: ",
      error
    );
  }
};

module.exports = connectToDatabase;

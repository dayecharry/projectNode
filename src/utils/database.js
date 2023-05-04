const mongoose = require('mongoose');

const connect = async () => {
  try {
    // aqui nos conectamos con la BD
    const db = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Base de datos : ${name} y host: ${host}`);
  } catch (error) {}
};

module.exports = { connect };

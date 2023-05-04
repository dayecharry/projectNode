const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const userRoutes = require('./src/api/routes/characters.routes');

// ejecuto express para crear un nuevo servidor
dotenv.config();
const app = express();
connect(); // conexion con la BD
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/characters', userRoutes);
app.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});

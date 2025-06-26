<<<<<<< HEAD
const swaggerDocs = require('./docs/swagger');
=======
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rotas
const alunoRoutes = require('./routes/alunoRoutes');
app.use('/alunos', alunoRoutes);

<<<<<<< HEAD
// Swagger (vem depois das rotas para documentar)
swaggerDocs(app);

// Ligação MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Ligação à base de dados com sucesso!'))
  .catch(err => console.log('Erro na ligação à base de dados:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
=======
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT}`));
  })
  .catch(err => console.log(err));
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474

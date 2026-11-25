// app.js
import express from 'express';
import clientesRoutes from './routes/clienteRoutes.js';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Direciona todas as requisições que começam com '/clientes' para o arquivo de rotas
app.use('/clientes', clientesRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

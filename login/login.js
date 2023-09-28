const express = require('express');
const app = express();
const port = 8000; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/', (req, res) => {
res.sendFile(__dirname + '/login.html');

});
app.get('/login.css', (req, res) => {
res.sendFile(__dirname + '/login.css');

});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});


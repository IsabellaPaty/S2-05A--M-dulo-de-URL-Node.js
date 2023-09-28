const express = require('express');
const app = express();
const port = 8000; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/', (req, res) => {
res.sendFile(__dirname + '/tela_inicial.html');

});
app.get('/tela_inicial.css', (req, res) => {
res.sendFile(__dirname + '/tela_inicial.css');
});



// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

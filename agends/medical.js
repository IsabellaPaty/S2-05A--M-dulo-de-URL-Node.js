const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/agendamento', (req, res) => {
res.sendFile(__dirname + '/agendamento.html');

});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

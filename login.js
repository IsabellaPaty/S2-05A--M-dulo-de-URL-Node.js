const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
res.sendFile(__dirname + '/login.html');

});
app.get('/login.css', (req, res) => {
res.sendFile(__dirname + '/login.css');

});

app.get('/cadastro', (req, res) => {
res.sendFile(__dirname + '/cadastro.html');
});

app.get('/tela_inicial', (req, res) => {
res.sendFile(__dirname + '/tela_inicial.html');
});

app.get('/agendamentos', (req, res) => {
res.sendFile(__dirname + '/agendamentos.html');
});

app.get('/pagina_medico', (req, res) => {
res.sendFile(__dirname + '/pagina_medico.html');
});

app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

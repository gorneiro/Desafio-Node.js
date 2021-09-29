const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express.

app.get('/', function (req, res) {
  res.send('Sejá bem vindo ao meu site')
})

app.get('/signup', function (req, res) {
  res.send('Efetue o seu registro:')
})

app.get('/signin', function (req, res) {
  res.send('Acesse o site:')
})

//app.get("/teste/:name:")

app.get('/name/:email', function (req, res) {
  res.send('<h1>Ola' + req.params.email + '</h1>')
})

app.listen(8084, function () {
  console.log('Servidor Rodando na URL http://localhost:8084')
}) //Fiz a ligação do meu servidor.

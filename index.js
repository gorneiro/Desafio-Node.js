const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express.
const jwt = require('jsonwebtoken') // declarei a constante jwt para criar o web token
const teste = 'teste321' // declarei a constante teste para a segunda diretriz senha no JWT
const dados = require('./dados.json') //Informações de usuarios

app.use(express.json()) //informei para que a constante app use a função de leitura do json

app.post('/signup', function (req, res) {
  const { name, email, password, telephone } = req.body

  if ((!name, !email, !password, !telephone)) return res.status(204).json()

  res.json({ name, email, password, telephone })
}) //Criação da rota signup, onde vai coletar as informações para cadastro de usuario.

app.get('/search', function (req, res) {
  res.json(dados) /*banco de dados*/
}) //Consultar usuarios já cadastrados.

app.post('/signin', function (req, res) {
  if (
    req.body.email == 'mateus-junior@teste.com' &&
    req.body.password == 'asdw123'
  ) {
    const token = jwt.sign({ id: 1 }, teste, { expiresIn: 5000 }) //Declarei a constante token para gerar o JWT, ele precisa de 3 diretrizes
    return res.json({ token })
  }

  res.status(401).end()
}) //Criação da rota signin,logar e criar o JWT

app.listen(8084, function () {
  console.log('Servidor Rodando na URL http://localhost:8084')
}) //Fiz a ligação do meu servidor

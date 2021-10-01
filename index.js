const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express.
const jwt = require('jsonwebtoken') // declarei a constante jwt para criar o web token
const teste = 'teste321' // Constante para senha no JWT

app.use(express.json()) //informei para que a constante app use a função de leitura do json

app.post('/signup', function (req, res) {
  const { name, email, password, telephones, id } = req.body

  if ((!name, !email, !password, !telephones, !id))
    return res.status(204).json()

  res.json({ name, email, password, telephones, id })
}) //Criação da rota signup, onde vai coletar as informações para cadastro de usuario.

app.get('/search', function (req, res) {
  res.json(/*banco de dados*/)
}) //Consultar usuarios já criados

app.post('/signin', function (req, res) {
  if (
    req.body.email == 'mateus-junior@teste.com' &&
    req.body.password == 'asdw123'
  ) {
    const token = jwt.sign({ id: 1 }, teste, { expiresIn: 500 })
    return res.json({ token })
  }

  res.status(401).end()
}) //Criação da rota signin,logar e criar o JWT

app.listen(8084, function () {
  console.log('Servidor Rodando na URL http://localhost:8084')
}) //Fiz a ligação do meu servidor

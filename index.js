const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express.
const jwt = require('jsonwebtoken') // declarei a constante jwt para criar o web token
const teste = 'teste321' // declarei a constante teste para a segunda diretriz senha no JWT
//const dados = require('./dados.json') Informações de usuarios

const validar = require('./validation.js')
const fs = require('fs')
const db = require('./db')

app.use(express.json()) //informei para que a constante app use a função de leitura do json

app.post('/signup', function (req, res) {
  const { name, email, password, telephone } = req.body

  if ((!name, !email, !password, !telephone))
    return res
      .status(422)
      .json({ message: 'Um ou mais campos necessarios estão vazios' })

  if (!validar.validaremail(email))
    return res.status(422).json({ message: 'Email invalido' })

  const newUser = {
    name,
    email,
    password,
    telephone
  }
  // dados.users.push(newUser)
  db.writedbObject('users', newUser)
  res.json({ name, email, password, telephone })
}) //Criação da rota signup, onde vai coletar as informações para cadastro de usuario.

app.get('/search', function (req, res) {
  const search = db.readdbObject('users')
  res.json(search) /*banco de dados*/
}) //Consultar usuarios já cadastrados.

app.post('/signin', function (req, res) {
  //Validar os dados da requisição
  const { email, password } = req.body
  if ((!email, !password))
    return res.status(422).json({ message: 'Email ou senha invalidas' })

  if (!validar.validaremail(email))
    return res.status(422).json({ message: 'Email invalido' })
  //Validar se a informação esta no nosso db.js
  const recUsuario = db.verificaUsuarioExiste(email, password)
  //se não estiver, informar mensagem de erro.
  if (!recUsuario) return res.status(401).end()
  //se estiver, criar um token e retornar o mesmo.

  const token = jwt.sign(recUsuario, teste, {
    expiresIn: 5000
  }) //Declarei a constante token para gerar o JWT, ele precisa de 3 diretrizes
  return res.json({ token })
}) //Criação da rota signin,logar e criar o JWT

app.listen(8084, function () {
  console.log('Servidor Rodando na URL http://localhost:8084')
}) //Fiz a ligação do meu servidor

const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express.
const jwt = require('jsonwebtoken') //declarei a constante jwt para criar o web token
const teste = 'teste321' //declarei a constante teste para a segunda diretriz senha no JWT
const validar = require('./validation.js') //declarei função regex
const fs = require('fs') //declarei a biblioteca fs
const db = require('./db') //declarei o acesso ao db.js
const port = process.env.PORT || 3000 //declarei a porta para usar no heroku

app.use(express.json()) //informei para que a constante app use a função de leitura do json

//Criação da rota signup, onde vai coletar as informações para cadastro de usuario.
app.post('/signup', function (req, res) {
  const { name, email, password, telephone } = req.body
  //Validar se os campos não estão em brancos
  if ((!name, !email, !password, !telephone))
    return res
      .status(422)
      .json({ message: 'Um ou mais campos necessarios estão vazios' })
  //Validar se o e-mail é valido com uma função regex
  if (!validar.validaremail(email))
    return res.status(422).json({ message: 'Email invalido' })
  //Onde vai ser adicionado campos novos, depois das validações.
  const newUser = {
    name,
    email,
    password,
    telephone
  }
  // Pegar as informaçõs dos campos acima e adicionar no dados.json
  db.writedbObject('users', newUser)
  res.json({ name, email, password, telephone })
})

//Consultar usuarios já cadastrados no banco de dados.
app.get('/search', function (req, res) {
  const search = db.readdbObject('users')
  res.json(search)
})

//Criação da rota signin,logar e criar o JWT
app.post('/signin', function (req, res) {
  //Validar os dados da requisição
  const { email, password } = req.body
  if ((!email, !password))
    return res.status(422).json({ message: 'Email ou senha invalidas' })
  //Validar se o e-mail é valido com uma função regex
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
})

app.listen(port, function () {
  console.log('Servidor Rodando na URL http://localhost:' + port)
}) //Fiz a ligação do meu servidor

const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.

const app = express()

app.use(express.json())

app.listen(8080, () => {
  console.log('API em operação http://localhost:8080')
})

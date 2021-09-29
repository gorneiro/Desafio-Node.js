const express = require('express') //declarei a variavel express, depois de ter usado o npm install express para baixar o pacote do mesmo, assim consigo usar apenas chamando a função.
const app = express() //declarei a constante app para usar o express
app.use(express.json())

app.get("/Client", function(req,res)) //get - Receber dados
app, post() //post - Enviar dados
app.put() //put - Atualizar dados
app.delete() //delete - deletar um resource



app.listen(8080, () => {
  console.log('API em operação http://localhost:8080')
})

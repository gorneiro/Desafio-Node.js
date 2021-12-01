# Desafio API em Node.JS

<P1>Criação de uma API para validação de usuario e senha.</P1>

Primeiro comecei preparando o ambiente, instalando o node.js, npm,Express,gitHub, Eslint.
Logo em seguida fui atras do que era uma API, REST e RESTful.
Assim criei meu index.js e a primeira linha de comando digitada foi app.listen para inicializar o nosso servidor.
Logo em seguida comecei a criar as rotas, com get e post.
Para a consulta de dados eu criei o arquivo dados.json para armazenar as informações.
Fiz a criação do JWT, com 3 parametros para retornar o 'token'.
Minha maior dificuldade no projeto foi a criação do db.js, a logica e a sintaxe para o desenvolvimento do mesmo, precisei pesquisar muito para enteder.
Depois de todos os ajustes, eu fiz o deploy no heroku, os link estão abaixo para testes:

https://apitestemobi.herokuapp.com/Search
https://apitestemobi.herokuapp.com/Signin
https://apitestemobi.herokuapp.com/Signup

A seguir, seguem algumas das fontes de pesquisas que eu estudei para a criação da aplicação!

O que é API? REST e RESTful? | Mayk Brito
https://www.youtube.com/watch?v=ghTrp1x_1As

Autenticação JSON Web Token (JWT) em Node.js
https://www.youtube.com/watch?v=D0gpL8-DVrc

API com Node.js - Passo 12 - Login + JWT Token
https://www.youtube.com/watch?v=A-c643zCW7E

Curso de Node.js - Rotas #07
https://www.youtube.com/watch?v=UMI7kFwmAHo&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=9

Curso de Node.js - Parâmetros #08
https://www.youtube.com/watch?v=G9b-Zi0rg3o&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=9

Curso de Node.js - Nodemon #09
https://www.youtube.com/watch?v=u3MrPxq_RyA&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=10

Curso de Node.js - Exibindo HTML #10
https://www.youtube.com/watch?v=UkwLcuzJRDQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=11

Verbos HTTP
Get: Receber dados de um Resource/endpoint
Post: Enviar dados ou informações para serem processados por um resource/endpoint
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

Regex
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
https://regexr.com/
https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

Exportação de modulos
https://www.sitepoint.com/understanding-module-exports-exports-node-js/

Heroku
https://dzone.com/articles/deploy-your-node-express-app-on-heroku-in-8-easy-s

FS
https://nodejs.org/docs/v0.3.1/api/fs.html

Node.js readFileSync e writeFileSync: ler e gravar arquivos com File System (CONCLUIR O TEXT ROBOT)
https://www.youtube.com/watch?v=TZRMh4BZTS0

Array.prototype.find()
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Codigos de resposta
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
200:ok
201:created
204:não tem conteúdo put, post, delete
400: bad request
404: not found

Obrigado por lerem.
-------------------------------
Criando banco de dados com postgresql no heroku
https://www.youtube.com/watch?v=CrSLbdk6PqI



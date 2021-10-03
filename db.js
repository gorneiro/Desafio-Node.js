// importando a biblioteca FS
const fs = require('fs')
// Declarando a função para leitura do arquivo dados.json
const readdbObject = chave => {
  const dbdata = JSON.parse(
    fs.readFileSync('./dados.json', { encoding: 'utf-8' })
  )
  if (!chave) return dbdata
  return dbdata[chave]
}
// Declarando a função para escrita dos dados no arquivo .json
const writedbObject = (chave, data) => {
  const dbdata = readdbObject(null)
  dbdata[chave].push(data)

  const datajson = JSON.stringify(dbdata, null, 2)
  fs.writeFileSync('./dados.json', datajson, err => {
    if (err) throw err
  })
  return true
}
const verificaUsuarioExiste = (email, senha) => {
  //receber a informação
  const usersdb = readdbObject('users')
  //verificar se ele existe de acordo com os argumentos
  const userExist = usersdb.find(
    user => user.email === email && user.password === senha
  )
  //retornar se e valido ou não valido
  return userExist
}
// Declaração para usar no arquivo index.js
exports.readdbObject = readdbObject
exports.writedbObject = writedbObject
exports.verificaUsuarioExiste = verificaUsuarioExiste

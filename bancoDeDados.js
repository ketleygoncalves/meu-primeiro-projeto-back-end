const mongoose = require('mongoose')

async function conectaBancoDeDados(){
 try{
    console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://ketleymg1:vAZIM6NkvGw4V6S4@cluster0.2clke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Conexão com o banco de dados feita com sucesso!')
 } catch(erro){
    console.log(erro)
 }
}

module.exports = conectaBancoDeDados
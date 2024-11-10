const express = require("express"); // iniciando o express
const router = express.Router(); // configurando o router
const cors = require('cors') // instalando cors - permite consumir api no front-end

const conectaBancoDeDados = require('./bancoDeDados');
conectaBancoDeDados(); // conectando ao banco de dados

const Mulher = require('./mulherModel'); // modelo da mulher

const app = express(); // iniciando o app
app.use(express.json()); // configurando para usar JSON
app.use(cors())

const porta = 3333; // criando a porta

// Função GET - Mostra Mulheres
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find(); // corrigido para find()
        response.json(mulheresVindasDoBancoDeDados);
    } catch (erro) {
        console.log(erro);
        response.status(500).json({ mensagem: "Erro ao buscar mulheres" });
    }
}

// Função POST - Cria Mulher
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,        
    });
    try {
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada);
    } catch (erro) {
        console.log(erro);
        response.status(500).json({ mensagem: "Erro ao criar mulher" });
    }
}

// Função PATCH - Corrige Mulher
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id);
        if (request.body.nome) mulherEncontrada.nome = request.body.nome;
        if (request.body.imagem) mulherEncontrada.imagem = request.body.imagem;
        if (request.body.minibio) mulherEncontrada.minibio = request.body.minibio;
        if (request.body.citacao) mulherEncontrada.citacao = request.body.citacao;

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);
    } catch (erro) {
        console.log(erro);
        response.status(500).json({ mensagem: "Erro ao atualizar mulher" });
    }
}

// Função DELETE - Deleta Mulher
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({ mensagem: "Mulher deletada com sucesso!" });
    } catch (erro) {
        console.log(erro);
        response.status(500).json({ mensagem: "Erro ao deletar mulher" });
    }
}

// Função para mostrar a porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

// Configuração das rotas
app.use(router.get('/mulheres', mostraMulheres)); // rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)); // rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)); // rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)); // rota DELETE /mulheres/:id

// Montando o router no app
app.use(router.post('/mulheres', criaMulher))

// Servidor ouvindo a porta
app.listen(porta, mostraPorta);


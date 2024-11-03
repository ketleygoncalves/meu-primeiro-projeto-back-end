Mulheres na Tecnologia - API
Este é um projeto de backend desenvolvido durante o curso da PrograMaria, com o objetivo de criar uma API para adicionar, editar e deletar informações sobre mulheres que fizeram ou fazem história no mundo da tecnologia.

✨ Objetivo
O objetivo deste projeto é honrar e celebrar a contribuição das mulheres na tecnologia. A API permite gerenciar informações, como:

Nome
Imagem
Mini biografia
Citação inspiradora
Este projeto também visa desenvolver habilidades de backend, como manipulação de banco de dados, criação de rotas e construção de uma API RESTful.

🚀 Funcionalidades
A API oferece as seguintes funcionalidades:

Listar mulheres: Visualizar todas as mulheres cadastradas na base de dados.
Adicionar mulher: Inserir uma nova mulher com nome, imagem, mini biografia e citação.
Editar mulher: Atualizar informações sobre uma mulher específica.
Deletar mulher: Remover uma mulher do banco de dados.
🛠️ Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript
Express - Framework web para Node.js
MongoDB - Banco de dados NoSQL para armazenar as informações das mulheres
Mongoose - ODM (Object Data Modeling) para MongoDB e Node.js
📦 Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configuração do Banco de Dados:

Certifique-se de ter uma instância do MongoDB em execução. Crie um arquivo .env na raiz do projeto e configure a URL de conexão com o MongoDB:

bash
Copiar código
MONGODB_URI=sua-string-de-conexao-mongodb
Inicie o servidor:

bash
Copiar código
npm start
O servidor estará rodando em http://localhost:3333.

📋 Endpoints
Abaixo está a lista de endpoints disponíveis na API:

GET /mulheres
Descrição: Retorna uma lista com todas as mulheres cadastradas.
Resposta:
200 OK: Array de objetos com as informações de cada mulher.
POST /mulheres
Descrição: Adiciona uma nova mulher ao banco de dados.
Body:
json
Copiar código
{
    "nome": "Nome da mulher",
    "imagem": "URL da imagem",
    "minibio": "Mini biografia",
    "citacao": "Citação inspiradora"
}
Resposta:
201 Created: Objeto da mulher criada.
PATCH /mulheres/
Descrição: Atualiza informações de uma mulher específica.
Parâmetros:
id (na URL): ID da mulher a ser editada.
Body: (Pode conter qualquer um dos campos para atualização)
json
Copiar código
{
    "nome": "Nome atualizado",
    "imagem": "URL atualizada",
    "minibio": "Mini biografia atualizada",
    "citacao": "Citação atualizada"
}
Resposta:
200 OK: Objeto atualizado da mulher.
DELETE /mulheres/
Descrição: Deleta uma mulher do banco de dados.
Parâmetros:
id (na URL): ID da mulher a ser deletada.
Resposta:
200 OK: Mensagem de sucesso.
💻 Exemplo de Uso com cURL
Adicionar uma mulher:

bash
Copiar código
curl -X POST http://localhost:3333/mulheres \
-H "Content-Type: application/json" \
-d '{
    "nome": "Ada Lovelace",
    "imagem": "https://example.com/ada.jpg",
    "minibio": "Matemática e pioneira da programação.",
    "citacao": "A máquina analítica tece padrões, assim como o tear de Jacquard tece flores e folhas."
}'
Listar todas as mulheres:

bash
Copiar código
curl http://localhost:3333/mulheres
Editar uma mulher:

bash
Copiar código
curl -X PATCH http://localhost:3333/mulheres/<id-da-mulher> \
-H "Content-Type: application/json" \
-d '{
    "citacao": "Nova citação inspiradora"
}'
Deletar uma mulher:

bash
Copiar código
curl -X DELETE http://localhost:3333/mulheres/<id-da-mulher>
📝 Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para contribuir e expandir este projeto!

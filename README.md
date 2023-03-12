# Labenu Music Awards
Como você deve saber muito bem, o nosso querido chefinho Astrodev é uma pessoa com Networking incrível e ele conhece vários artistas estrelados. Além disso, ele também é um grande ~~megalomaníaco~~ visionário e está planejando fazer um grande evento: o **LAMA**, *Labenu Musical Awards*, um festival  com várias bandas famosas para a formatura da sua turma e, no final, vocês podem eleger a banda que mais gostaram! Entretanto, na opinião dele, vocês só serão merecedores se entregarem um sistema impecável que permita o gerenciamento completo desses shows.

<h3 align="center" > 💻 Funcionalidades:</br></h3>
✅ Cadastrar pessoas usuária;</br>
✅ Login;</br>
✅ Registrar banda (com autorização administrativa)</br>
✅ Visualizar detalhes da banda</br>;
✅ Pegar todos os shows de uma data</br>

---
<h3 align="center" > ❌ Problemas:</br></h3>

Show não está retornando erro para marcar na mesma hora e dia.(ou seja pode marcar diversos shows simultaneamente)
Sem validação de horário 

---

<h3 align="center">🛠 Ferramentas:</h3>
- Typescript</br>
- Node.js</br>
- MySQL</br>
- Express</br>
- Uuid</br>
- JsonWebToken</br>
- Knex</br>
- Bcrypt</br>

---

<h3 align="center">🐱‍🚀 Documentação Postam:</h3>

[---Documentação---]()

---

<h3 align="center"> 🔗 Link Render:</h3>

[---LINK AQUI---]()

---

<h3 align="center">⚙️ Instruções para rodar o projeto:</h3>

> O arquivo *requests.rest*, presente na pasta raiz do projeto, contém todos os endpoints com url do deploy disponível online (Render)

Caso queira rodar o projeto localmente, as instruções são:

```
git clone https://github.com/future4code/Barros-LAMA1.git

npm install -> para instalar as dependências do projeto

criar um arquivo .env com as informações do seus banco de dados

executar as queries do arquivo queries.sql para criar as tabelas

npm run dev -> para rodar o servidor
Instruções para preencher o arquivo dotenv:
```

criar um arquivo .env na pasta raiz com as seguintes variáveis:

```
    DB_USER = 
    DB_PASSWORD =
    DB_HOST = 
    DB_PORT = 
    DB_DATABASE_NAME =
```

Preencher as variáveis com as informações do seu banco de dados.

Ainda no .env, preencher também as variáveis:


    JWT_KEY: ,                  (palavra passe)
    BCRYPT_COST: ,              (cost da lib Bcrypt, geralmente 12)
    ACCESS_TOKEN_EXPIRES_IN = 60min


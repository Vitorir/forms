const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/processar" method="post">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>

            <input type="submit" value="Enviar">
        </form>
    `)
})

app.post('/processar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    console.log(`Nome: ${nome} email: ${email}`);

    res.send('DAdos enviados')
})

app.listen(port, () => {
    console.log(`Servidor no ar!`);
})
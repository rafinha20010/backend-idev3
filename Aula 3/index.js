const express = require('express')
const userService = require('./userService');

const app = express(); //nome qualquer para express
app.use(express.json());


app.post("/users", (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json
            ({ error: "Inserir Nome e Email" })
    }
    const user = userService.adduser(nome, email);
    res.status(200).json({ user });
})
// rota pra listar os usuarios

app.get("/users", (req, res) => {
    res.json(userService.getusers());
})

const port = 3000;
app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
})
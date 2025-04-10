const express = require('express');
const userService = require('./userService');

const app = express(); //nome qualquer para express
app.use(express.json());

app.post("/users", async (req, res) => {
    const { nome, email, senha, endereco, telefone, cpf } = req.body;
    if (!nome || !email || !senha || !endereco || !telefone || !cpf) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios: nome, email, senha, cpf, endereco, telefone" });
    }
    const user = await userService.addUser (nome, email, senha, endereco, telefone, cpf);
    res.status(200).json({ user });
});

// rota pra listar os usuarios
app.get("/users", (req, res) => {
    res.json(userService.getUsers());
});

const port = 3000;
app.listen(port, () => {
    console.log("servidor rodando na porta", port);
});
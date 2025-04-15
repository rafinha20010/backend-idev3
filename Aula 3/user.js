class User {
    constructor(id, nome, email, senha, endereco, telefone, cpf) {
        this.id = id; // id do usuário
        this.nome = nome; // nome do usuário
        this.email = email; // e-mail do usuário
        this.senha = senha;
        this.endereco = endereco; // senha do usuário
        this.telefone = telefone; // telefone do usuário
        this.cpf = cpf; // cpf do usuário
        
        
    }
}

module.exports = User; // exporta o módulo
const User = require("./user");

class userService{
    constructor(){
        this.users = []; //array pra armazenar user
        this.nextid = 1; //contador pra gerar id
    }


    addUser(nome, email){
        const goku = new User(this.nextid++, nome, email);
        this.users.push(goku);
        return user;
    }
}
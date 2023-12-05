class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        switch (this.tipo){
            case "mago": ataque ="magia"
            break
            case "guerreiro": ataque ="espada"
            break
            case "monge": ataque ="artes marciais"
            break
            case "ninja": ataque ="artes shuriken"
            break
        }

        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}


let novoHeroiMago = new heroi("Leonardo","17","mago")
novoHeroiMago.atacar()

let novoHeroiGuerreiro = new heroi("Michelangelo","17","guerreiro")
novoHeroiGuerreiro.atacar()

let novoHeroiMonge = new heroi("Donatello","17","monge")
novoHeroiMonge.atacar()

let novoHeroiNinja = new heroi("Raphael","17","ninja")
novoHeroiNinja.atacar()
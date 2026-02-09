class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar() {
        if (this.tipo == "mago" || this.tipo == "guerreiro" || this.tipo == "monge" || this.tipo == "ninja") {

            if (this.tipo == "mago") {
                this.ataque = "magia"
            } else if (this.tipo == "guerreiro") {
                this.ataque = "espada"
            } else if (this.tipo == "monge") {
                this.ataque = "artes marciais"
            } else {
                this.ataque = "shuriken"
            }
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        } else {

            console.log("Escolha um tipo de herói valido: mago, gerreiro, monge ou ninja.")
        }
    }
}

const bruna = new heroi("Bruna", 29, "ninja")

bruna.atacar()

const gabriel = new heroi("Gabriel", 27, "monge")

gabriel.atacar()

const gisele = new heroi("Gisele", 24, "mago")

gisele.atacar()

const davi = new heroi("Davi", 30, "guerreiro")

davi.atacar()

const theo = new heroi("Theo", 20, "Arqueiro")

theo.atacar()
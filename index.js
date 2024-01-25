//classe da ficha do herói
class fichaHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
//método de ataque com descrição por tipo de personagem
    atacar(){
        let ataque
        if (this.tipo = "mago") {
            ataque = "magia" 
        } else if (this.tipo = "guerreiro") {
            ataque = "espada"
        } else if (this.tipo = "monge") {
            ataque = "artes marciais"
        } else if (this.tipo = "ninja") {
            ataque = "shuriken"
        }
        console.log("o " + this.tipo + " atacou usando " + ataque)
    }
}
//instanciando um herói (objeto) à classe ficha do herói
const jeanHeroi = new fichaHeroi("Jean", 21, "mago")
//Acionando o método atacar
jeanHeroi.atacar() 
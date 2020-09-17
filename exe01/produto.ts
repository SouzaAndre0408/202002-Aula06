export class Produto {
    codigo: number = 0;
    descricao: string = "";
    uniMedida: number = 0;
    qtdEstoque: number = 0;

    constructor(cod: number, desc: string, uniMed: number, qtdEstq: number) {
        this.codigo = cod;
        this.descricao = desc;
        this.uniMedida = uniMed;
        this.qtdEstoque = qtdEstq;
    }

    retornaEstoque = () => {
        return console.log("Qtd Estoque: " + this.qtdEstoque);
    }

    implantaEstoque = (item) => {
        return console.log(`Estoque passado: ${this.qtdEstoque}` + " \nEstoque implantação atual: " + (this.qtdEstoque += item));
    }

    baixaEstoque = (item) => {
        if (this.qtdEstoque <= 0) {
            console.log("Estoque zerado !");
            return false;
        } else {
            let result = (this.qtdEstoque - item);
            console.log(`Estoque baixa atual: ${result}`);
            return true;
        }
    }

    imprimeDados = () => {
        console.log("------------ Bem Vindo ------------");
        console.log("* Código: " + this.codigo + " *");
        console.log("Descrição: " + this.descricao);
        console.log("Unidade de Medida: " + this.uniMedida);
        console.log("Qtd. Estoque: " + this.qtdEstoque);
        console.log("-----------------------------------");
    }

}
export class Lampada {
    status: boolean = true;

    constructor(status: boolean) {
        this.status = status;
    }

    ligar = () => {
        this.status = true;
    }

    desligar = () => {
        this.status = false;
    }

    observar = () => {
        if (this.status) {
            return console.log("Ligada ...");
        } else {
            return console.log("Desligada ...");
        }
    }
}
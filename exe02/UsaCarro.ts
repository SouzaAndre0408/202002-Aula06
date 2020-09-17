import { Carro } from "./Carro"

let marcaCarro1: string = "Volks";
let modeloCarro1: string = "Jetta";
let placaCarro1: string = "FLQ0408";
let velCarro1: number = 10;
let velMaxCarro1: number = 200;
let Carro1 = new Carro(marcaCarro1, modeloCarro1, placaCarro1, velCarro1, velMaxCarro1);


Carro1.Acelerar(10);
Carro1.Acelerar(10);
/*
while (velCarro1 < velMaxCarro1) {
    Carro1.Acelerar(9);
    if (velCarro1 == velMaxCarro1)
        console.log("Velocidade Maxima Atingida:" + velCarro1);
}/*/
Carro1.Frear();
Carro1.imprimeDados();


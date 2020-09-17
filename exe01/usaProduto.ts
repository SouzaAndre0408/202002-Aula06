import { Produto } from "./produto";

let produto = new Produto(1, "Pão", 1, 0);

// produto.baixaEstoque(100);
produto.implantaEstoque(100);
produto.baixaEstoque(10);
console.log("\n");
produto.imprimeDados();
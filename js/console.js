//aprendendo console
console.groupCollapsed("Nossas mensagens!");
console.log("estou escrevendo no console");
console.error("eu sou um erro!");
console.warn("Eu sou um aviso!");

num = 15;
if(num>10){
    console.error("Numero nao pode ser maior que 10");
}

console.assert(num<=10, "Numero nao pode ser maior que 10");
console.groupEnd();
/*Manipulação de Arrays de Objetos com forEach
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

// Definindo o array de objetos produtos
const produtos = [
    { nome: "Nike Hyper Adapt", preço: 3499.9, desconto: 0 },
    { nome: "Terno Enegildo Zegna", preço:30000, esconto: 0 },
    { nome: "Notebook Game ROG Strix", preço: 8729.13, desconto: 0 },
    { nome: "Geladeira LG FrostFree Smart", preço: 10715.06, desconto: 0 }
  ];
  
  // Aplicando um desconto de 10% e exibindo o novo preço
  produtos.forEach(produto => {
    // Calcula o novo preço com desconto de 10%
    produto.preço = produto.preço * 0.9
    
  // Exibe o nome e o novo preço do produto
    console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preço.toFixed(2)}`);
  });
  
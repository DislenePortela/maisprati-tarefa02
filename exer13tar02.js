/*Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/
// Definindo o objeto carrinho com a propriedade itens
const carrinho = {
    itens: [
      { nome: "Berço", quantidade: 1, precoUnitario: 419.90},
      { nome: "Carrinho de Bebe", quantidade: 1, precoUnitario: 419.20},
      { nome: "Bebe Conforto", quantidade: 1, precoUnitario: 450.00}    ]
  };
  
  // Variável para armazenar o valor total do carrinho
  let valorTotal = 0;
  
  // Usando forEach para calcular o valor total do carrinho
  carrinho.itens.forEach(item => {
    const valorItem = item.quantidade * item.precoUnitario;
    valorTotal += valorItem;
  });
  
  // Exibindo o valor total do carrinho
  console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}`);
  
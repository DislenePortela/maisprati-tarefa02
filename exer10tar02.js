/*Combinação de Estruturas
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

// Definindo o array de objetos vendas
const vendas = [
    { produto: "Lava E Seca Sansung5", quantidade: 18, valor: 4199.00},
    { produto: "Fogao Brastemp 6 bocas", quantidade: 7, valor: 3759.00},
    { produto: "Ar Condicionado", quantidade: 13, valor: 6629.30},
    { produto: "Smart TV 43", quantidade: 20, valor: 2690}
  ];
  
  // Variável para armazenar o valor total de vendas
  let valorTotal = 0;
  
  // Usando forEach para calcular o valor total de vendas
  vendas.forEach(venda => {
    const valorVenda = venda.quantidade * venda.valor;
    valorTotal += valorVenda;
  });
  
  // Exibindo o valor total de vendas
  console.log(`Valor total de vendas: R$${valorTotal.toFixed(2)}`);
  
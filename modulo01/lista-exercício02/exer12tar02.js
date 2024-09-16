/*12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

// Definindo o array de objetos estoque
const estoque = [
    { produto: "Terno Slim", quantidade: 13, minimo: 15 },
    { produto: "Sapato", quantidade: 16, minimo: 18 },
    { produto: "Gravata", quantidade: 9, minimo: 10},
    { produto: "Blazer", quantidade: 6, minimo: 7


     }
  ];
  
  // Usando forEach para atualizar a quantidade dos produtos abaixo do mínimo
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      // Duplicando a quantidade do produto
      item.quantidade *= 2;
    }
  });
  
  // Exibindo o estoque atualizado
  console.log(estoque);
  
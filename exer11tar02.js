/*11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

// Definindo o array de objetos pedidos
const pedidos = [
    { cliente: "Joana Luisa", produto: "Vestido", quantidade: 5 },
    { cliente: "Maria Clara", produto: "Sapato", quantidade: 7 },
    { cliente: "Juliana", produto: "Saia", quantidade: 6 },
    { cliente: "Gabriela Lorena", produto: "Calça Jeans", quantidade: 4 },
    { cliente: "Lucas Hënrique", produto: "Blusa", quantidade: 2 },
    { cliente: "Joao Guilherme", produto: "Relógio", quantidade: 1 }
  ];
  
  // Objeto para armazenar a quantidade total de produtos por cliente
  const quantidadePorCliente = {};
  
  // Usando forEach para agrupar a quantidade total de produtos por cliente
  pedidos.forEach(pedido => {
    const { cliente, quantidade } = pedido;
    
    // Se o cliente ainda não estiver no objeto, inicializa a quantidade com 0
    if (!quantidadePorCliente[cliente]) {
      quantidadePorCliente[cliente] = 0;
    }
  
    // Adiciona a quantidade do pedido ao total do cliente
    quantidadePorCliente[cliente] += quantidade;
  });
  
  // Exibindo a quantidade total de produtos por cliente
  console.log(quantidadePorCliente);
  

  
/*9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

// Definindo o array de objetos clientes
const clientes = [
    { nome: "Felippe Filho", idade: 51, cidade: "Gramado, RS" },
    { nome: "Lucas Gabriel", idade: 36, cidade: "Barra do Garças, MT" },
    { nome: "Maria Clara", idade: 41, cidade: "Manacapuru, AM" },
    { nome: "Ana Cecília", idade: 19, cidade: "Jalapao, TO" }
  ];
  
  // Contador para clientes com mais de 30 anos
  let contador = 0;
  
  // Usando forEach para contar quantos clientes têm mais de 30 anos
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  // Exibindo o total de clientes com mais de 30 anos
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);
  
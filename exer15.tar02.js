/*15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/


  // Definindo o array de objetos transacoes
const transacoes = [
    { tipo: "entrada", valor: 7000},
    { tipo: "saida", valor: 500 },
    { tipo: "entrada", valor: 6200},
    { tipo: "saida", valor: 1750},
    { tipo: "entrada", valor: 20000},
    { tipo: "saida", valor: 700},
  ];
  
  // Variável para armazenar o saldo final
  let saldoFinal = 0;
  
  // Usando forEach para calcular o saldo final
  transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
      saldoFinal += transacao.valor;  // Soma no caso de entrada
    } else if (transacao.tipo === "saida") {
      saldoFinal -= transacao.valor;  // Subtrai no caso de saída
    }
  });
  
  // Exibindo o saldo final
  console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);
  
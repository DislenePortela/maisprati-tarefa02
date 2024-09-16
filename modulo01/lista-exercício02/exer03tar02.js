/*Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

function filtrarPropriedades(produto, valorMinimo) {
    const novoObjeto = {};
  
    for (let propriedade in produto) {
      if (produto[propriedade] > valorMinimo) {
        novoObjeto[propriedade] = produto[propriedade];
      }
    }
  
    return novoObjeto;
  }
  
  // Exemplo:
  const produto = {
    preco: 2500,
    desconto: 15,
    peso: 20,
    estoque: 100
 };
  
  const valorMinimo = 10;
  const resultado = filtrarPropriedades(produto, valorMinimo);
  console.log(resultado); 
  
  
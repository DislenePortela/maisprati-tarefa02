/*8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/
// Definindo o array de objetos filmes
const filmes = [

    { titulo: "E O Vento Levou", diretor: "Victor Fleming", anoLançamento: 1932 },
    { titulo: "A Cor Púrpura", diretor: "Steven Spielberg", anoLançamento: 1985 },
    { titulo: "Indiana Jones", diretor: "Steven Spielberg", anoLançamento: 1981 },
    { titulo: "O Poderoso Chefao", diretor: "Francis Ford Coppola", anoLançamento: 1972  }
  ];
  
  // Array para armazenar os títulos dos filmes
  const titulosFilmes = [];
  
  // Usando forEach para preencher o array com os títulos dos filmes
  filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
  });
  
  // Exibindo o novo array com os títulos dos filmes
  console.log(titulosFilmes);
  
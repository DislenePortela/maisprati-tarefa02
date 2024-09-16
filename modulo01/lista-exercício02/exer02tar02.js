/*2. Verificando Propriedades
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

//Objeto livro
let livro ={
titulo:"As Aventuras de Hückleberry Finn",
autor: "Mark Twain",
anoPublicacao: "1884",
genero: "aventura" 
};

//Verificando propriedade editora

let propriedadeExiste =false;

for(let propriedade in livro){
    if(propriedade === "editora"){
        propriedadeExiste = true;
        break;
    }
}

if(!propriedadeExiste){
    livro.editora = "Chatto & Windus";
}
    console.log (livro);
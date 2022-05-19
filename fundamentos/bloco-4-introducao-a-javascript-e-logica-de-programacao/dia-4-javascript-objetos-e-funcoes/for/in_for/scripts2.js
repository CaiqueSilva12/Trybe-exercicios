/*6*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas'
    }
  ]
}

console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`
)

/*7*/

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Askaban',
  autor: 'JK Rowling',
  editor: 'Rocco'
})

/*8*/

console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
)

"use strict";

/* Curso ES6 */
var arr = [{
  id: "1",
  nome: "José"
}, {
  id: "2",
  nome: "Júlio"
}, {
  id: "3",
  nome: "David"
}];
/* Map => serve para percorrer o vetor e retornar algo de dentro */

var newArr = arr.map(function (item) {
  return item.id == '2';
});
console.log(newArr);
/* Reduce => consome as informações do vetor tornando-a em uma única varíavel*/

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
/*Filter => Deixa no Array apenas registros filtrados */

var filter = arr.filter(function (p) {
  return p.id == '1';
});
console.log(filter);
/* Find => Pesquisar por algum elemento dentro do vetor */

var find = arr.find(function (item) {
  return item.id == '2';
});
console.log(find);
/* Find => Pesquisar por algum elemento dentro do vetor */

var findIndex = arr.findIndex(function (item) {
  return item.id == '3';
});
console.log(findIndex);
/** Desestruturação de Objetos */

var usuario = {
  nome: 'David',
  idade: 34,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
/*
class List{
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{  
   constructor(){
     super();
     this.usuario = 'David';
   }

   mostrarUsuario(){
     console.log(this.usuario);
   }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo Todo');
}

MinhaLista.mostrarUsuario();
*/

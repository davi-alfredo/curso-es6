/* Curso ES6 */

const arr = [
  {id: "1", nome: "José"},
  {id: "2", nome: "Júlio"},
  {id: "3", nome: "David"},

];

/* Map => serve para percorrer o vetor e retornar algo de dentro */
const newArr = arr.map(item => item.id == '2');
console.log(newArr);

/* Reduce => consome as informações do vetor tornando-a em uma única varíavel*/
const sum = arr.reduce(function(total, next){
  return total+next;
});
console.log(sum);

/*Filter => Deixa no Array apenas registros filtrados */
const filter = arr.filter(p => p.id == '1');
console.log(filter);


/* Find => Pesquisar por algum elemento dentro do vetor */
const find = arr.find(item => item.id == '2');
console.log(find);

/* Find => Pesquisar por algum elemento dentro do vetor */
const findIndex = arr.findIndex(item => item.id == '3');
console.log(findIndex);

/** Desestruturação de Objetos */

const usuario = {
  nome: 'David',
  idade: 34,
  endereco:{
    cidade: 'São Paulo',
    estado: 'SP'
  }
}

const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade); 

function mostraNome({nome, idade}){
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





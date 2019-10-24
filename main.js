/* Curso ES6 */

const arr = [
  {id: "1", nome: "José"},
  {id: "2", nome: "Júlio"},
  {id: "3", nome: "David"},

];

/* Map => serve para percorrer o vetor e retornar algo de dentro */
const newArr = arr.map(function(item){
  return item;
});

console.log(newArr);

/* Reduce => consome as informações do vetor tornando-a em uma única varíavel*/
const sum = arr.reduce(function(total, next){
  return total+next;
});

console.log(sum);

/*Filter => Deixa no filtro apenas  as condições */
const filter = arr.filter(function(item){
  return item % 2 === 0
});
console.log(filter);


/* Find => Pesquisar por algum elemento dentro do vetor */
const find = arr.find(function(item){
  return item.id == 1;
});

console.log(find);



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





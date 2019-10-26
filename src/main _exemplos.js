/* Curso ES6 */


/**Async Await
 * 
 * yarn add @babel/plugin-transform-async-to-generator -D
 * Adicionar no .babelrc
 * 
 * yarn add @babel-polyfill -D
 * Adicionar no webpackage.config em  entry
 *
 * sudo yarmn add axios -> para chamar um serviço 
 *  
*/

import axios from 'axios';

class Api{
  static async getUserInfo(userName){
    try{
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      console.log(response);
    }catch(err){
      console.warn("Erro na API");      
    }
  }
  
}
Api.getUserInfo("DaviAlfredo");
Api.getUserInfo("DaviAlfdsdsdredo");



/*
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')},2000)
});
*/

/** Tradicional*/
/*
minhaPromise().then(response => {
  console.log(response);
});
*/

/** Com Assync Await*/
/*
async function executaMinhaPromisse(){
  const response = await minhaPromise();
  console.log(response);
}

executaMinhaPromisse();
*/

/**
 * Webpack server
 * yarn add webpack-dev-server -D
 */

/**Importações e Exportações */
/**
//import { soma, sub } from './funcoes';
import multiplicaValor from './mutiplica';
import * as funcoes from './funcoes';

console.log(multiplicaValor(5,3));
console.log(funcoes.soma(5,3));
console.log(funcoes.sub(5,3));
*/


/** Manipulaçẽo de Arrays */

/**
const arr = [
  {id: "1", nome: "José"},
  {id: "2", nome: "Júlio"},
  {id: "3", nome: "David"},

];

/**
 * Map => serve para percorrer o vetor e retornar algo de dentro */
/*
const newArr = arr.map(item => item.id == '2');
console.log(newArr);
*/

/**
 * Reduce => consome as informações do vetor tornando-a em uma única varíavel*/
/*
const sum = arr.reduce(function(total, next){
  return total+next;
});
console.log(sum);
*/

/*Filter => Deixa no Array apenas registros filtrados */
/*
const filter = arr.filter(p => p.id == '1');
console.log(filter);
)/

/**
 *  Find => Pesquisar por algum elemento dentro do vetor
*/
/*
const find = arr.find(item => item.id == '2');
console.log(find);
*/

/**
 * Find => Pesquisar por algum elemento dentro do vetor 
 */
/*
 const findIndex = arr.findIndex(item => item.id == '3');
console.log(findIndex);
*/

/** 
 * Desestruturação de Objetos 
 */

/*
const usuario = {
  nome: 'David',
  idade: 34,
  endereco:{
    cidade: 'São Paulo',
    estado: 'SP'
  }
}

const {nome, idade, endereco: {cidade}} = usuario;
//console.log(nome, idade, cidade); 

function mostraNome({nome, idade}){
  //console.log(nome, idade);
}

mostraNome(usuario);
*/

/**
 * yarn add @babel/plugin-proposal-object-rest-spread
 * 
 * REST -> Pegar o resto das propriedade
 */

 /*
 const user ={
   name: 'David',
   idade: 23,
   empresa: 'Porto Seguro'
 };

 const {name, ...resto} = user;

  console.log(nome);
  console.log(resto);


 const arrayRest = [1,2,3,4];

 const [a,b, ...c] = arrayRest;
//  console.log(a);
//  console.log(b);
//  console.log(c);

*/

 /**
 * 
 * SPREAD -> Cpiar um objeto com a posibilidade de lterar alguma propriedade
 */

 /*
 const usuario1 = {
  name: 'David',
  idade: 23,
  empresa: 'Porto Seguro'
 };

 const usuario2 = { ...usuario1, name:'Priscila' };
 console.log(usuario2);

 */
  
 /**
 * 
 * Template Literals `${variavel}`
 */


 /*
 const nome1 = 'Diego';
 const idad = 23;


 console.log(`Meu nome é ${nome1} e tenho ${idad} anos!`)

 */

 /**
 * 
 * Object Short Sintax
 */
/*
const nome2 = 'David';
const idad2 = 23;

const newUser = {
  nome,
  idade,
  empresa:'Porto'
}
console.log(newUser)

*/

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
//variavel
const number = 10;
number = 20 //erro

const fruit = [];
fruit.push("banana");

const people = {id:1,name:"maria"};
people.sex = "female";
people = {id:2, name:"maria"}

let cont = 0;

//funcoes
const soma = (a, b) => a + b;



//propagacao
fruit.push(...["uva", "maca"]);
["banana", "uva", "maca"]

//desestruturacao
const {id, name} = people;

//modulos
export default people;

export (fruit, soma);
 
import people from 'revisao';
import { fruit } from 'revisao'
import { View } from 'react-native'
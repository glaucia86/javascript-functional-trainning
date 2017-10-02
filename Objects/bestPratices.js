console.log();
console.log("Exemplo 1: =======================");

//Exemplo 1:

var box = {};
box["material"] = "cardboard";
var key = "material";
console.log(box['key']); //undefined
console.log(box.key); //undefined
console.log(box[key]);
 /**
  * Resumindo... evite usar objetos com aspas e anotações. 
  Senão vc pode obter um resultado inesperado.
  */

console.log();
console.log("Exemplo 2: =======================");


//Exemplo 2:
var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123"

var test = box['^&*'];
console.log(test);
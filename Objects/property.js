//Exemplo 1:
var box = {};
box.material = "cardboard";
console.log(box.material); //cardboard

//Exemplo 2:
var box = {};
box.material = "cardboard_1";

var cb = box.material;
console.log(cb);

//Exemplo 3:
box.material = "titanium";
console.log(cb); //imprimirá: "cardboad"

//Exemplo 4:
var box = {};
box.material = "cardboard";
box.material; //cardboard
console.log(box.size); //undefined -> porque 'undefined' é um tipo em Js
console.log();
console.log("Exemplo 1: =======================");

//Exemplo 1:
var box = {};
box["material"] = "cardboard";
console.log(box.material); //"cardboard"

console.log();
console.log("Exemplo 2: =======================");


//Exemplo 2:
var box = {};
box["material"] = "cardboard";
console.log(box["material"]);

console.log();
console.log("Exemplo 3: =======================");


//Exemplo 3:
var box = {};
box["material"] = "cardboard";
var key = "material";
console.log(key);
console.log(box[key]);

console.log();
console.log("Exemplo 4: =======================");

//Exemplo 4:
var box = {};
box["material"] = "cardboard";
var key = "material";
console.log(key);
console.log(box['key']);

console.log();
console.log("Exemplo 5: =======================");

//Exemplo 5:
var box = {};
box["material"] = "cardboard";

var func = function() {
    return "material";
}

console.log(box[func()]);

console.log();
console.log("Exemplo 5: =======================");


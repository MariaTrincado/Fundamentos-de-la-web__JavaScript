/* Ejemplo.

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}   
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);
*/

//PizzaDojo.

function PizzaOven(tipoCorteza,tipoQueso,salsas,ingredientes){
    var pizzaDojo = {};
    pizzaDojo.tipoCorteza = tipoCorteza;
    pizzaDojo.tipoQueso = tipoQueso;
    pizzaDojo.salsas = salsas;
    pizzaDojo.ingredientes = ingredientes;
    return pizzaDojo;
}

var pizza1 = PizzaOven("estilo Chicago", "mozzarella", "tradicional", ["peperonni", "salchicha"]);
console.log(pizza1);

var pizza2 = PizzaOven("Lanzada a Mano", ["mozzarella","feta"], "marinara", ["champiñones", "aceitunas","cebolla"]);
console.log(pizza2);

var pizzaMaria = PizzaOven("borde de queso", "mozzarella", ["salsa de tomate", "salsa blanca"], ["pollo", "choclo","champiñones"]);
console.log(pizzaMaria);

var pizza4 = PizzaOven("a la piedra", "feta", "salsa barbacoa", ["tocino","champiñones"]);
console.log(pizza4);

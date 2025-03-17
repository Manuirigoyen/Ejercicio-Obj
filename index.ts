import { Autos } from "./Autos";

let primerAuto = new Autos(1980,true,"Chevrolet","Camaro",false,"A");
let segundoAuto = new Autos(1999,false,"Fiat","Uno",false,"B");
let tercerAuto = new Autos(2020,true,"Toyota","Corolla",true,"C");
let cuartoAuto = new Autos(2018,true,"Volkswagen","Amarok",true,"D");


console.log(primerAuto);
console.log(segundoAuto);
console.log(tercerAuto);
console.log(cuartoAuto);

/////////PRUEBAS://////////

primerAuto.cajAut = true;

segundoAuto.estaPrendido = true;

tercerAuto.precio = 60000;

console.log(primerAuto);
console.log(segundoAuto.estaPrendido);
console.log(tercerAuto.precio);

segundoAuto.prenderApagar();

console.log("apago automovil " + segundoAuto.estaPrendido);

segundoAuto.girar("derecha");

cuartoAuto.girar("derecha");
cuartoAuto.acelerar();
cuartoAuto.frenar();

console.log(tercerAuto.estaPrendido);
tercerAuto.girar("derecha");
tercerAuto.acelerar();
tercerAuto.frenar();

tercerAuto.prenderApagar();

console.log(tercerAuto.estaPrendido);
tercerAuto.girar("derecha");
tercerAuto.acelerar();
tercerAuto.frenar();

primerAuto.precio = 90000;

console.log(primerAuto.precio);

console.log(primerAuto);
console.log(segundoAuto);
console.log(tercerAuto);
console.log(cuartoAuto);

primerAuto.gama = "D";
console.log(primerAuto.gama);
console.log(primerAuto);

primerAuto.gama = "A";
console.log(primerAuto);
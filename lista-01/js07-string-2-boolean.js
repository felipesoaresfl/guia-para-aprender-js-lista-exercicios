/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
<<<<<<< HEAD
 * ENTRADA                   SAÍDA
=======
 * ENTRADA          SAÍDA
>>>>>>> feito js07
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var certos = ["Y", "Yes", "YES", "yes", "s", "S", "sim", "SIM", "Sim", 1, "👍"];
var entrada = "👍";
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
console.log(certos.includes(entrada));

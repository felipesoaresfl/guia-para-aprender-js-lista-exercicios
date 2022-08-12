/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */

// Entrada
var entrada = [1, 1, 40];

var maior = 0;

for (var i of entrada) {
  if (i > maior) {
    maior = i;
  }
}

console.log("👉 " + maior);

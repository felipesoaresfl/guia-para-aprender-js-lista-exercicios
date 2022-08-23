/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             42
 */

// Entrada
var entrada = [1, 3, 5, 7, 8, 10];

var soma = 0;

// percorrer a lista e fazer a somatória dos elementos
for (let i of entrada) {
  soma += i;
}
// gerar a lista de saida
console.log("👉 ", soma);

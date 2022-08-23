/**
 * Faça um programa que mostre o segundo maior número da lista
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      42
 *
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [40, 42, 1, 0, -10];

var segundoMaior = 40;

var maior = 0;
for (let i in entrada) {
  if (entrada[i] > maior) {
    maior = entrada[i];
    var j = i;
  }
}
entrada.splice(j, 1);

var segundoMaior = 0;
for (let i of entrada) {
  if (i > segundoMaior) {
    segundoMaior = i;
  }
}

console.log("👉 " + segundoMaior);

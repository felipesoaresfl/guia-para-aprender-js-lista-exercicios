/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = "$fcsb";

// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = [];

// implemente aqui uma lógica para criptografar o texto

for (var cont = 0; cont < texto.length; cont++) {
  textoDecripto.push(texto.charCodeAt(cont));
  if (textoDecripto[cont] == 64) {
    textoDecripto[cont] = 122;
  } else if (textoDecripto[cont] == 36) {
    textoDecripto[cont] = 90;
  } else {
    textoDecripto[cont] -= 1;
  }
  textoDecripto[cont] = String.fromCharCode(textoDecripto[cont]);
}
textoDecripto = textoDecripto.join("");

console.log(textoDecripto);

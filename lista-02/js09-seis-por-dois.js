/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 *
 */

// Entrada
// let diaDeTrabalho = new Date();

// Pŕoxima volta

for (let cont = 0; cont <= 7; cont++) {
  console.log(cont);
  var diaDeTrabalho = new Date();
  diaDeTrabalho.setDate(diaDeTrabalho.getDate() + 2);
  console.log(diaDeTrabalho);
  if ((cont = 7)) {
    var folga = new Date();
    folga.setDate(diaDeTrabalho.getDate() + 2);
  }
}

// // Saída com base na próxima folga, calcular dia de trabalho/folga
// let dia = proximaFolga.getDate();
// let mes = proximaFolga.getMonth() + 1;
// let ano = proximaFolga.getFullYear();
// let data = `${dia}/${mes}/${ano}`;

console.log(folga);

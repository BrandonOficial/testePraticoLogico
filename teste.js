// Questão 1
var Indice = 13;
var Soma = 0; 
var K = 0;

while(K < Indice){
    K= K + 1;
    Soma= Soma + K;
}

console.log(Soma)

// Questão 2
function pertenceFibonacci(numero) {
  // Casos base para 0 e 1
  if (numero === 0) return true;
  if (numero === 1) return true;

  // Variáveis para armazenar os dois últimos termos conhecidos
  let anterior = 0;
  let atual = 1;
  let proximo;

  // Loop para iterar até encontrar o número ou ultrapassá-lo
  while (atual <= numero) {
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;

    // Verifica se o número informado foi encontrado
    if (atual === numero) {
      return true;
    }
  }

  // Se o loop terminou sem encontrar o número, ele não pertence à sequência
  return false;
}

// Número a ser verificado
const numero = 13;

// Verifica se o número pertence à sequência
if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}


// Questão 3
/*
logica 

a-          
1 + 2 = 3     
3 + 2 = 5
5 + 2 = 7
7 + 2 = 9 

b- 
2 x 2 = 4
4 x 2 = 8
8 x 2 = 16
16 x 2 = 32
32 x 2 = 64
64 x 2 = 128

c- 
0^2 = 0
1^2 = 1
2^2 = 4
3^2 = 9
4^2 = 16
5^2 = 25
6^2 = 36
7^2 = 49

d-
2^2 = 4
3^2 = 9
4^2 = 16
5^2 = 25
6^2 = 36
7^2 = 49
8^2 = 64
9^2 = 81
10^2 = 100

e- 
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13

f-
2 + 8 = 10
10 + 2 = 12
12 + 4 = 16
16 + 1 = 17
17 + 1 = 18
18 + 1 = 19
19 + 1 = 20
*/

// Questão 4
//ligar o interruptor 1 por 10min e depois a interruptor 2 por 5min. Lâmpada quente e interruptor 1, lâmpada morna interruptor 2, lâmpada fria interruptor 3.

// Questão 5

function inverterString(texto) {
  // Variável para armazenar a string invertida
  let stringInvertida = "";

  // Loop para percorrer a string original na ordem inversa
  for (let i = texto.length - 1; i >= 0; i--) {
    // Adiciona cada caractere da string original à string invertida
    stringInvertida += texto[i];
  }

  // Retorna a string invertida
  return stringInvertida;
}

// String a ser invertida
const texto = "Olá, mundo!";

// Invertendo a string
const textoInvertido = inverterString(texto);

// Imprimindo a string invertida
console.log(textoInvertido);

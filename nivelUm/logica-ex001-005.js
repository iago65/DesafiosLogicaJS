// EX001 - Calculadora Básica
// Receba dois números e uma operação (+, -, *, /) e retorne o resultado
// Se divisão por zero, retorne "Erro: divisão por zero"

function calculadora(num1, num2, operacao) {
    if(operacao === '+'){
      return num1 + num2
    } else if (operacao === '-'){
      return num1 - num2
    } else if (operacao === '*'){
      return num1 * num2
    } else if (operacao === '/'){
      if (num2 === 0){
        return "Erro: divisão por zero"
      }
      return num1 / num2
    }
}

console.log(calculadora(10, 5, '+'));    // 15
console.log(calculadora(10, 5, '-'));    // 5
console.log(calculadora(10, 5, '*'));    // 50
console.log(calculadora(10, 5, '/'));    // 2

//---------------------------------------------------

// EX002 - Par ou Ímpar  
// Retorne "par" ou "ímpar"

function parOuImpar(numero) {
    if(numero % 2 === 0){
      return "ímpar"
    } else{
      return "par"
    }
}

console.log(parOuImpar(4));  // "par"
console.log(parOuImpar(7));  // "ímpar"

//---------------------------------------------------

// EX003 - Maior de Três
// Retorne o maior número entre os três

function maiorDeTres(a, b, c) {
    if (a > b && a > c){
      return a
    } else if (b > c){
      return b
    } else{
      return c
    }
}
// Ou

// function maiorDeTres(a, b, c){
//   return Math.max(a, b, c)
// }

console.log(maiorDeTres(10, 5, 8));  // 10
console.log(maiorDeTres(3, 15, 7));  // 15

//---------------------------------------------------

// EX004 - Tabuada
// Retorne array com tabuada de 1 a 10
// Ex: tabuada(3) = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

function tabuada(numero) {
  let numbers = []
  for(i = 1; i < 11; i++){
      numbers.push(numero * i);
  }
  return numbers
}

console.log(tabuada(3)); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

//---------------------------------------------------

// EX005 - Fatorial
// Calcule o fatorial: 5! = 5*4*3*2*1 = 120

function fatorial(numero) {
  let fatorial = 1
    for(i = 1; i <= numero; i++){
      fatorial *= i
    }
    return fatorial
}

console.log(fatorial(5)); // 120
console.log(fatorial(4)); // 24
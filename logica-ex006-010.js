// EX006 - Números Primos
// Verifique se um número é primo
// Primo: só é divisível por 1 e por ele mesmo

function ehPrimo(numero) {
    if (numero < 2) return false
    
    for (i = 2; i < numero; i++){
      if (numero % i === 0){
        return false
      }
    }
    return true
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(8));  // false

// EX007 - Inverter String
// Inverta uma string sem usar .reverse()

function inverterString(str) {
  let newStr = ''
  for (i = str.length - 1; i >= 0; i--){
    newStr += str[i]
  }
  return newStr
}

console.log(inverterString("hello")); // "olleh"

// EX008 - Contar Vogais
// Conte quantas vogais tem na string

function contarVogais(str) {
    let contador = 0
    for(i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            contador += 1
        }
    }
    return contador
}

console.log(contarVogais("javascript")); // 3

// EX009 - Soma de Array
// Some todos os números de um array

function somaArray(numeros) {
    let soma = 0
    for(i = 0; i < numeros.length; i++){
      soma += numeros[i]
    }
    return soma
}

console.log(somaArray([1, 2, 3, 4, 5])); // 15
console.log(somaArray([10, 20, 30]));    // 60

// EX010 - Palíndromo
// Verifique se uma palavra é palíndromo (lê igual de frente pra trás)

function ehPalindromo(str) {
  let invertedString = ''
  for (i = str.length - 1; i >= 0; i--){
    invertedString += str[i]
  }
  if(invertedString === str){
    return true
  }else{
    return false
  }
}

console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("casa"));  // false
const levels = [
    {
        id: 1,
        description: "Declare uma variável chamada 'x' e atribua-lhe o valor 5.",
        code: `let x = 5;`,
        explanation: "Este código declara uma variável chamada 'x' e atribui a ela o valor 5.",
        test: function (userCode) {
            try {
                let x;
                const script = new Function(userCode + '; return x;');
                const result = script();
                return result === 5 && userCode.includes('let x = 5;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 2,
        description: "Declare uma variável chamada 'name' e atribua-lhe o valor 'John'.",
        code: `let name = 'John';`,
        explanation: "Este código declara uma variável chamada 'name' e atribui a ela a string 'John'.",
        test: function (userCode) {
            try {
                let name;
                const script = new Function(userCode + '; return name;');
                const result = script();
                return result === 'John' && userCode.includes(`let name = 'John';`);
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 3,
        description: "Escreva uma função chamada 'greet' que retorne 'Hello, World!'.",
        code: `function greet() {
    return 'Hello, World!';
}`,
        explanation: "Este código define uma função chamada 'greet' que retorna a string 'Hello, World!'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return greet() === 'Hello, World!';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 4,
        description: "Pergunta: A função 'alert()' exibe uma mensagem em uma caixa de diálogo? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 5,
        description: "Declare uma variável chamada 'age' e atribua-lhe o valor 30.",
        code: `let age = 30;`,
        explanation: "Este código declara uma variável chamada 'age' e atribui a ela o valor 30.",
        test: function (userCode) {
            try {
                let age;
                const script = new Function(userCode + '; return age;');
                const result = script();
                return result === 30 && userCode.includes('let age = 30;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 6,
        description: "Escreva uma função chamada 'sum' que retorne a soma de dois números.",
        code: `function sum(a, b) {
    return a + b;
}`,
        explanation: "Este código define uma função chamada 'sum' que recebe dois argumentos e retorna a soma deles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return sum(2, 3) === 5 && sum(-1, 1) === 0;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 7,
        description: "Pergunta: A estrutura de controle 'if' permite executar um bloco de código com base em uma condição? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 8,
        description: "Declare uma variável chamada 'isStudent' e atribua-lhe o valor 'true'.",
        code: `let isStudent = true;`,
        explanation: "Este código declara uma variável chamada 'isStudent' e atribui a ela o valor booleano 'true'.",
        test: function (userCode) {
            try {
                let isStudent;
                const script = new Function(userCode + '; return isStudent;');
                const result = script();
                return result === true && userCode.includes('let isStudent = true;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 9,
        description: "Escreva uma função chamada 'multiply' que retorne o produto de dois números.",
        code: `function multiply(a, b) {
    return a * b;
}`,
        explanation: "Este código define uma função chamada 'multiply' que recebe dois argumentos e retorna o produto deles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return multiply(2, 3) === 6 && multiply(-1, 1) === -1;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 10,
        description: "Pergunta: O operador '===' verifica a igualdade estrita (mesmo valor e tipo)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 11,
        description: "Declare uma variável chamada 'score' e atribua-lhe o valor 100.",
        code: `let score = 100;`,
        explanation: "Este código declara uma variável chamada 'score' e atribui a ela o valor 100.",
        test: function (userCode) {
            try {
                let score;
                const script = new Function(userCode + '; return score;');
                const result = script();
                return result === 100 && userCode.includes('let score = 100;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 12,
        description: "Escreva uma função chamada 'subtract' que retorne a diferença entre dois números.",
        code: `function subtract(a, b) {
    return a - b;
}`,
        explanation: "Este código define uma função chamada 'subtract' que recebe dois argumentos e retorna a diferença entre eles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return subtract(5, 3) === 2 && subtract(10, 15) === -5;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 13,
        description: "Pergunta: A função 'console.log()' imprime uma mensagem no console? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 14,
        description: "Declare uma variável chamada 'isAdmin' e atribua-lhe o valor 'false'.",
        code: `let isAdmin = false;`,
        explanation: "Este código declara uma variável chamada 'isAdmin' e atribui a ela o valor booleano 'false'.",
        test: function (userCode) {
            try {
                let isAdmin;
                const script = new Function(userCode + '; return isAdmin;');
                const result = script();
                return result === false && userCode.includes('let isAdmin = false;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 15,
        description: "Escreva uma função chamada 'divide' que retorne a divisão de dois números.",
        code: `function divide(a, b) {
    return a / b;
}`,
        explanation: "Este código define uma função chamada 'divide' que recebe dois argumentos e retorna a divisão entre eles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return divide(6, 3) === 2 && divide(5, 2) === 2.5;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 16,
        description: "Pergunta: A estrutura de controle 'for' permite repetir um bloco de código um número específico de vezes? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 17,
        description: "Declare uma variável chamada 'temperature' e atribua-lhe o valor 25.",
        code: `let temperature = 25;`,
        explanation: "Este código declara uma variável chamada 'temperature' e atribui a ela o valor 25.",
        test: function (userCode) {
            try {
                let temperature;
                const script = new Function(userCode + '; return temperature;');
                const result = script();
                return result === 25 && userCode.includes('let temperature = 25;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 18,
        description: "Escreva uma função chamada 'modulus' que retorne o resto da divisão de dois números.",
        code: `function modulus(a, b) {
    return a % b;
}`,
        explanation: "Este código define uma função chamada 'modulus' que recebe dois argumentos e retorna o resto da divisão entre eles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return modulus(5, 2) === 1 && modulus(10, 3) === 1;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 19,
        description: "Pergunta: A função 'typeof' retorna o tipo de uma variável? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 20,
        description: "Declare uma variável chamada 'isLoggedIn' e atribua-lhe o valor 'true'.",
        code: `let isLoggedIn = true;`,
        explanation: "Este código declara uma variável chamada 'isLoggedIn' e atribui a ela o valor booleano 'true'.",
        test: function (userCode) {
            try {
                let isLoggedIn;
                const script = new Function(userCode + '; return isLoggedIn;');
                const result = script();
                return result === true && userCode.includes('let isLoggedIn = true;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 21,
        description: "Pergunta: O operador '+' também pode ser usado para concatenar strings? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 22,
        description: "Declare uma variável chamada 'greeting' e atribua-lhe o valor 'Hello, ' concatenado com o valor de 'name'.",
        code: `let name = 'John';
let greeting = 'Hello, ' + name;`,
        explanation: "Este código declara uma variável chamada 'name' com o valor 'John' e uma variável chamada 'greeting' que concatena 'Hello, ' com o valor de 'name'.",
        test: function (userCode) {
            try {
                let name = 'John';
                let greeting;
                const script = new Function(userCode + '; return greeting;');
                const result = script();
                return result === 'Hello, John' && userCode.includes('let greeting = \'Hello, \' + name;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 23,
        description: "Escreva uma função chamada 'square' que retorne o quadrado de um número.",
        code: `function square(num) {
    return num * num;
}`,
        explanation: "Este código define uma função chamada 'square' que recebe um número como argumento e retorna o quadrado desse número.",
        test: function (userCode) {
            try {
                eval(userCode);
                return square(3) === 9 && square(4) === 16;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 24,
        description: "Pergunta: A função 'parseInt()' converte uma string em um número inteiro? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 25,
        description: "Declare uma variável chamada 'price' e atribua-lhe o valor '19.99' como número (não string).",
        code: `let price = 19.99;`,
        explanation: "Este código declara uma variável chamada 'price' e atribui a ela o valor 19.99 como número.",
        test: function (userCode) {
            try {
                let price;
                const script = new Function(userCode + '; return price;');
                const result = script();
                return result === 19.99 && userCode.includes('let price = 19.99;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 26,
        description: "Escreva uma função chamada 'isEven' que retorne true se um número for par, e false caso contrário.",
        code: `function isEven(num) {
    return num % 2 === 0;
}`,
        explanation: "Este código define uma função chamada 'isEven' que recebe um número como argumento e retorna true se o número for par e false caso contrário.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isEven(4) === true && isEven(3) === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 27,
        description: "Pergunta: O operador '&&' é usado para a operação lógica E (AND)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 28,
        description: "Declare uma variável chamada 'isAdult' e atribua-lhe o valor true se a variável 'age' for maior ou igual a 18.",
        code: `let age = 20;
let isAdult = age >= 18;`,
        explanation: "Este código declara uma variável chamada 'age' com o valor 20 e uma variável chamada 'isAdult' que é atribuída true se 'age' for maior ou igual a 18.",
        test: function (userCode) {
            try {
                let age = 20;
                let isAdult;
                const script = new Function(userCode + '; return isAdult;');
                const result = script();
                return result === true && userCode.includes('let isAdult = age >= 18;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 29,
        description: "Escreva uma função chamada 'max' que retorne o maior de dois números.",
        code: `function max(a, b) {
    return a > b ? a : b;
}`,
        explanation: "Este código define uma função chamada 'max' que recebe dois números como argumentos e retorna o maior deles.",
        test: function (userCode) {
            try {
                eval(userCode);
                return max(3, 5) === 5 && max(10, 7) === 10;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 30,
        description: "Pergunta: A função 'Math.random()' retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 31,
        description: "Declare uma variável chamada 'randomNumber' e atribua-lhe um número aleatório entre 0 e 10.",
        code: `let randomNumber = Math.random() * 10;`,
        explanation: "Este código declara uma variável chamada 'randomNumber' e atribui a ela um valor aleatório entre 0 e 10.",
        test: function (userCode) {
            try {
                let randomNumber;
                const script = new Function(userCode + '; return randomNumber;');
                const result = script();
                return result >= 0 && result < 10 && userCode.includes('let randomNumber = Math.random() * 10;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 32,
        description: "Escreva uma função chamada 'isPositive' que retorne true se um número for positivo, e false caso contrário.",
        code: `function isPositive(num) {
    return num > 0;
}`,
        explanation: "Este código define uma função chamada 'isPositive' que recebe um número como argumento e retorna true se o número for positivo e false caso contrário.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isPositive(3) === true && isPositive(-1) === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 33,
        description: "Pergunta: O operador '||' é usado para a operação lógica OU (OR)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 34,
        description: "Declare uma variável chamada 'isWeekend' e atribua-lhe o valor true se o dia da semana for 'Saturday' ou 'Sunday'.",
        code: `let day = 'Saturday';
let isWeekend = day === 'Saturday' || day === 'Sunday';`,
        explanation: "Este código declara uma variável chamada 'day' com o valor 'Saturday' e uma variável chamada 'isWeekend' que é atribuída true se 'day' for 'Saturday' ou 'Sunday'.",
        test: function (userCode) {
            try {
                let day = 'Saturday';
                let isWeekend;
                const script = new Function(userCode + '; return isWeekend;');
                const result = script();
                return result === true && userCode.includes("let isWeekend = day === 'Saturday' || day === 'Sunday';");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 35,
        description: "Escreva uma função chamada 'isVowel' que retorne true se uma letra for uma vogal (a, e, i, o, u), e false caso contrário.",
        code: `function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}`,
        explanation: "Este código define uma função chamada 'isVowel' que recebe uma letra como argumento e retorna true se a letra for uma vogal (a, e, i, o, u) e false caso contrário.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isVowel('a') === true && isVowel('b') === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 36,
        description: "Pergunta: A função 'Array.isArray()' verifica se um valor é um array? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 37,
        description: "Declare um array chamado 'fruits' e adicione as frutas 'apple', 'banana' e 'cherry'.",
        code: `let fruits = ['apple', 'banana', 'cherry'];`,
        explanation: "Este código declara um array chamado 'fruits' e adiciona as frutas 'apple', 'banana' e 'cherry' ao array.",
        test: function (userCode) {
            try {
                let fruits;
                const script = new Function(userCode + '; return fruits;');
                const result = script();
                return Array.isArray(result) && result.length === 3 && result.includes('apple') && result.includes('banana') && result.includes('cherry');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 38,
        description: "Escreva uma função chamada 'firstElement' que retorne o primeiro elemento de um array.",
        code: `function firstElement(arr) {
    return arr[0];
}`,
        explanation: "Este código define uma função chamada 'firstElement' que recebe um array como argumento e retorna o primeiro elemento do array.",
        test: function (userCode) {
            try {
                eval(userCode);
                return firstElement([1, 2, 3]) === 1 && firstElement(['a', 'b', 'c']) === 'a';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 39,
        description: "Pergunta: A função 'Array.prototype.push()' adiciona um ou mais elementos ao final de um array? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 40,
        description: "Declare uma variável chamada 'colors' e atribua-lhe um array vazio. Em seguida, adicione 'red', 'green' e 'blue' ao array.",
        code: `let colors = [];
colors.push('red');
colors.push('green');
colors.push('blue');`,
        explanation: "Este código declara uma variável chamada 'colors' como um array vazio e, em seguida, adiciona 'red', 'green' e 'blue' ao array.",
        test: function (userCode) {
            try {
                let colors;
                const script = new Function(userCode + '; return colors;');
                const result = script();
                return Array.isArray(result) && result.length === 3 && result.includes('red') && result.includes('green') && result.includes('blue');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 41,
        description: "Pergunta: A função 'Array.prototype.map()' cria um novo array com os resultados da chamada de uma função para cada elemento do array? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 42,
        description: "Declare uma variável chamada 'numbers' e atribua-lhe um array de 1 a 5. Em seguida, use 'map' para criar um novo array onde cada elemento é o dobro do original.",
        code: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);`,
        explanation: "Este código declara um array chamado 'numbers' com valores de 1 a 5 e, em seguida, usa 'map' para criar um novo array chamado 'doubled' onde cada elemento é o dobro do original.",
        test: function (userCode) {
            try {
                let numbers = [1, 2, 3, 4, 5];
                let doubled;
                const script = new Function(userCode + '; return doubled;');
                const result = script();
                return Array.isArray(result) && result.length === 5 && result[0] === 2 && result[1] === 4 && result[2] === 6 && result[3] === 8 && result[4] === 10;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 43,
        description: "Escreva uma função chamada 'reverseString' que receba uma string e retorne a string invertida.",
        code: `function reverseString(str) {
    return str.split('').reverse().join('');
}`,
        explanation: "Este código define uma função chamada 'reverseString' que recebe uma string como argumento e retorna a string invertida.",
        test: function (userCode) {
            try {
                eval(userCode);
                return reverseString('hello') === 'olleh' && reverseString('world') === 'dlrow';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 44,
        description: "Pergunta: A função 'Array.prototype.filter()' cria um novo array com todos os elementos que passam no teste implementado pela função fornecida? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 45,
        description: "Declare uma variável chamada 'ages' e atribua-lhe um array de idades. Em seguida, use 'filter' para criar um novo array com idades maiores ou iguais a 18.",
        code: `let ages = [15, 20, 17, 30, 14, 25];
let adults = ages.filter(age => age >= 18);`,
        explanation: "Este código declara um array chamado 'ages' com várias idades e, em seguida, usa 'filter' para criar um novo array chamado 'adults' com idades maiores ou iguais a 18.",
        test: function (userCode) {
            try {
                let ages = [15, 20, 17, 30, 14, 25];
                let adults;
                const script = new Function(userCode + '; return adults;');
                const result = script();
                return Array.isArray(result) && result.length === 3 && result.includes(20) && result.includes(30) && result.includes(25);
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 46,
        description: "Escreva uma função chamada 'factorial' que retorne o fatorial de um número.",
        code: `function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}`,
        explanation: "Este código define uma função chamada 'factorial' que recebe um número como argumento e retorna o fatorial desse número.",
        test: function (userCode) {
            try {
                eval(userCode);
                return factorial(5) === 120 && factorial(0) === 1;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 47,
        description: "Pergunta: A função 'Array.prototype.reduce()' aplica uma função a um acumulador e a cada valor de um array (da esquerda para a direita) para reduzi-lo a um único valor? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 48,
        description: "Declare uma variável chamada 'scores' e atribua-lhe um array de pontuações. Em seguida, use 'reduce' para calcular a soma total das pontuações.",
        code: `let scores = [10, 20, 30, 40];
let totalScore = scores.reduce((total, score) => total + score, 0);`,
        explanation: "Este código declara um array chamado 'scores' com várias pontuações e, em seguida, usa 'reduce' para calcular a soma total das pontuações.",
        test: function (userCode) {
            try {
                let scores = [10, 20, 30, 40];
                let totalScore;
                const script = new Function(userCode + '; return totalScore;');
                const result = script();
                return result === 100;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 49,
        description: "Escreva uma função chamada 'fibonacci' que retorne um array com os primeiros 'n' números da sequência de Fibonacci.",
        code: `function fibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}`,
        explanation: "Este código define uma função chamada 'fibonacci' que recebe um número 'n' como argumento e retorna um array com os primeiros 'n' números da sequência de Fibonacci.",
        test: function (userCode) {
            try {
                eval(userCode);
                const fib5 = fibonacci(5);
                const fib7 = fibonacci(7);
                return Array.isArray(fib5) && fib5.length === 5 && fib5[0] === 0 && fib5[1] === 1 && fib5[4] === 3 && Array.isArray(fib7) && fib7.length === 7 && fib7[6] === 8;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 50,
        description: "Pergunta: O método 'Array.prototype.forEach()' executa uma função fornecida uma vez para cada elemento do array? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer'.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 51,
        description: "Pergunta: O operador '===' verifica a igualdade estrita (mesmo valor e tipo)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o operador '===' verifica a igualdade estrita.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 52,
        description: "Declare uma variável chamada 'isTrue' e atribua-lhe o valor booleano true.",
        code: `let isTrue = true;`,
        explanation: "Este código declara uma variável chamada 'isTrue' e atribui-lhe o valor booleano true.",
        test: function (userCode) {
            try {
                let isTrue;
                const script = new Function(userCode + '; return isTrue;');
                const result = script();
                return result === true && userCode.includes('let isTrue = true;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 53,
        description: "Escreva uma função chamada 'isEven' que retorne true se um número for par, e false caso contrário.",
        code: `function isEven(num) {
    return num % 2 === 0;
}`,
        explanation: "Este código define uma função chamada 'isEven' que verifica se um número é par.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isEven(2) === true && isEven(3) === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 54,
        description: "Pergunta: A função 'Math.random()' retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'Math.random()' retorna um número aleatório entre 0 e 1.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 55,
        description: "Declare uma variável chamada 'randomNum' e atribua-lhe um número aleatório entre 0 e 100.",
        code: `let randomNum = Math.random() * 100;`,
        explanation: "Este código declara uma variável chamada 'randomNum' e atribui-lhe um número aleatório entre 0 e 100.",
        test: function (userCode) {
            try {
                let randomNum;
                const script = new Function(userCode + '; return randomNum;');
                const result = script();
                return result >= 0 && result < 100;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 56,
        description: "Escreva uma função chamada 'square' que retorne o quadrado de um número.",
        code: `function square(num) {
    return num * num;
}`,
        explanation: "Este código define uma função chamada 'square' que calcula o quadrado de um número.",
        test: function (userCode) {
            try {
                eval(userCode);
                return square(3) === 9 && square(4) === 16;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 57,
        description: "Pergunta: A função 'parseInt()' converte uma string em um número inteiro? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'parseInt()' converte uma string em um número inteiro.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 58,
        description: "Declare uma variável chamada 'parsedNumber' e atribua-lhe o valor resultante da conversão da string '42' em um número inteiro.",
        code: `let parsedNumber = parseInt('42');`,
        explanation: "Este código declara uma variável chamada 'parsedNumber' e atribui-lhe o valor resultante da conversão da string '42' em um número inteiro.",
        test: function (userCode) {
            try {
                let parsedNumber;
                const script = new Function(userCode + '; return parsedNumber;');
                const result = script();
                return result === 42 && userCode.includes("let parsedNumber = parseInt('42');");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 59,
        description: "Escreva uma função chamada 'doubleArray' que receba um array de números e retorne um novo array onde cada número é o dobro do original.",
        code: `function doubleArray(arr) {
    return arr.map(num => num * 2);
}`,
        explanation: "Este código define uma função chamada 'doubleArray' que dobra cada número em um array.",
        test: function (userCode) {
            try {
                eval(userCode);
                const result = doubleArray([1, 2, 3]);
                return Array.isArray(result) && result.length === 3 && result[0] === 2 && result[1] === 4 && result[2] === 6;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 60,
        description: "Pergunta: A função 'Array.prototype.reduce()' aplica uma função a um acumulador e a cada valor de um array (da esquerda para a direita) para reduzi-lo a um único valor? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'Array.prototype.reduce()' aplica uma função a um acumulador e a cada valor de um array para reduzi-lo a um único valor.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 61,
        description: "Declare uma variável chamada 'total' e atribua-lhe a soma dos valores no array [1, 2, 3, 4] usando 'reduce'.",
        code: `let total = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);`,
        explanation: "Este código declara uma variável chamada 'total' e atribui-lhe a soma dos valores no array [1, 2, 3, 4] usando 'reduce'.",
        test: function (userCode) {
            try {
                let total;
                const script = new Function(userCode + '; return total;');
                const result = script();
                return result === 10 && userCode.includes("[1, 2, 3, 4].reduce((acc, num) => acc + num, 0);");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 62,
        description: "Escreva uma função chamada 'factorial' que retorne o fatorial de um número.",
        code: `function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`,
        explanation: "Este código define uma função chamada 'factorial' que calcula o fatorial de um número.",
        test: function (userCode) {
            try {
                eval(userCode);
                return factorial(5) === 120 && factorial(3) === 6;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 63,
        description: "Pergunta: O método 'Array.prototype.filter()' cria um novo array com todos os elementos que passam no teste implementado pela função fornecida? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o método 'Array.prototype.filter()' cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 64,
        description: "Declare uma variável chamada 'evenNumbers' e atribua-lhe um array com todos os números pares do array [1, 2, 3, 4, 5, 6] usando 'filter'.",
        code: `let evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);`,
        explanation: "Este código declara uma variável chamada 'evenNumbers' e atribui-lhe um array com todos os números pares do array [1, 2, 3, 4, 5, 6] usando 'filter'.",
        test: function (userCode) {
            try {
                let evenNumbers;
                const script = new Function(userCode + '; return evenNumbers;');
                const result = script();
                return Array.isArray(result) && result.length === 3 && result.includes(2) && result.includes(4) && result.includes(6);
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 65,
        description: "Escreva uma função chamada 'sum' que retorne a soma de dois números.",
        code: `function sum(a, b) {
    return a + b;
}`,
        explanation: "Este código define uma função chamada 'sum' que calcula a soma de dois números.",
        test: function (userCode) {
            try {
                eval(userCode);
                return sum(2, 3) === 5 && sum(-1, 1) === 0;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 66,
        description: "Pergunta: O método 'Array.prototype.map()' cria um novo array com os resultados da chamada de uma função para cada elemento do array? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o método 'Array.prototype.map()' cria um novo array com os resultados da chamada de uma função para cada elemento do array.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 67,
        description: "Declare uma variável chamada 'squaredNumbers' e atribua-lhe um array com os quadrados dos números no array [1, 2, 3, 4] usando 'map'.",
        code: `let squaredNumbers = [1, 2, 3, 4].map(num => num * num);`,
        explanation: "Este código declara uma variável chamada 'squaredNumbers' e atribui-lhe um array com os quadrados dos números no array [1, 2, 3, 4] usando 'map'.",
        test: function (userCode) {
            try {
                let squaredNumbers;
                const script = new Function(userCode + '; return squaredNumbers;');
                const result = script();
                return Array.isArray(result) && result.length === 4 && result.includes(1) && result.includes(4) && result.includes(9) && result.includes(16);
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 68,
        description: "Escreva uma função chamada 'multiply' que retorne o produto de dois números.",
        code: `function multiply(a, b) {
    return a * b;
}`,
        explanation: "Este código define uma função chamada 'multiply' que calcula o produto de dois números.",
        test: function (userCode) {
            try {
                eval(userCode);
                return multiply(2, 3) === 6 && multiply(-1, 1) === -1;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 69,
        description: "Pergunta: O operador '&&' é usado para a operação lógica E (AND)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o operador '&&' é usado para a operação lógica E (AND).",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 70,
        description: "Declare uma variável chamada 'isAdult' e atribua-lhe o valor true se a variável 'age' for maior ou igual a 18.",
        code: `let age = 20;
let isAdult = age >= 18;`,
        explanation: "Este código declara uma variável chamada 'age' com o valor 20 e uma variável chamada 'isAdult' que é atribuída o valor true se 'age' for maior ou igual a 18.",
        test: function (userCode) {
            try {
                let age = 20;
                let isAdult;
                const script = new Function(userCode + '; return isAdult;');
                const result = script();
                return result === true && userCode.includes('let isAdult = age >= 18;');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 71,
        description: "Escreva uma função chamada 'isPositive' que retorne true se um número for positivo, e false caso contrário.",
        code: `function isPositive(num) {
    return num > 0;
}`,
        explanation: "Este código define uma função chamada 'isPositive' que verifica se um número é positivo.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isPositive(3) === true && isPositive(-1) === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 72,
        description: "Pergunta: O operador '||' é usado para a operação lógica OU (OR)? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o operador '||' é usado para a operação lógica OU (OR).",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 73,
        description: "Declare uma variável chamada 'isWeekend' e atribua-lhe o valor true se o dia da semana for 'Saturday' ou 'Sunday'.",
        code: `let day = 'Saturday';
let isWeekend = day === 'Saturday' || day === 'Sunday';`,
        explanation: "Este código declara uma variável chamada 'day' com o valor 'Saturday' e uma variável chamada 'isWeekend' que é atribuída o valor true se 'day' for 'Saturday' ou 'Sunday'.",
        test: function (userCode) {
            try {
                let day = 'Saturday';
                let isWeekend;
                const script = new Function(userCode + '; return isWeekend;');
                const result = script();
                return result === true && userCode.includes("let isWeekend = day === 'Saturday' || day === 'Sunday';");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 74,
        description: "Escreva uma função chamada 'isVowel' que retorne true se uma letra for uma vogal (a, e, i, o, u), e false caso contrário.",
        code: `function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}`,
        explanation: "Este código define uma função chamada 'isVowel' que verifica se uma letra é uma vogal.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isVowel('a') === true && isVowel('b') === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 75,
        description: "Pergunta: O método 'Array.prototype.every()' testa se todos os elementos do array passam no teste implementado pela função fornecida? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o método 'Array.prototype.every()' testa se todos os elementos do array passam no teste implementado pela função fornecida.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 76,
        description: "Declare uma variável chamada 'allPositive' e atribua-lhe true se todos os números no array [1, 2, 3, 4, 5] forem positivos.",
        code: `let allPositive = [1, 2, 3, 4, 5].every(num => num > 0);`,
        explanation: "Este código declara uma variável chamada 'allPositive' e atribui-lhe true se todos os números no array [1, 2, 3, 4, 5] forem positivos.",
        test: function (userCode) {
            try {
                let allPositive;
                const script = new Function(userCode + '; return allPositive;');
                const result = script();
                return result === true && userCode.includes("[1, 2, 3, 4, 5].every(num => num > 0);");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 77,
        description: "Escreva uma função chamada 'sumArray' que retorne a soma de todos os números em um array.",
        code: `function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}`,
        explanation: "Este código define uma função chamada 'sumArray' que calcula a soma de todos os números em um array.",
        test: function (userCode) {
            try {
                eval(userCode);
                return sumArray([1, 2, 3, 4]) === 10 && sumArray([10, 20, 30]) === 60;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 78,
        description: "Pergunta: O método 'Array.prototype.some()' testa se ao menos um elemento do array passa no teste implementado pela função fornecida? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o método 'Array.prototype.some()' testa se ao menos um elemento do array passa no teste implementado pela função fornecida.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 79,
        description: "Declare uma variável chamada 'hasNegative' e atribua-lhe true se algum número no array [1, -2, 3, 4] for negativo.",
        code: `let hasNegative = [1, -2, 3, 4].some(num => num < 0);`,
        explanation: "Este código declara uma variável chamada 'hasNegative' e atribui-lhe true se algum número no array [1, -2, 3, 4] for negativo.",
        test: function (userCode) {
            try {
                let hasNegative;
                const script = new Function(userCode + '; return hasNegative;');
                const result = script();
                return result === true && userCode.includes("[1, -2, 3, 4].some(num => num < 0);");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 80,
        description: "Escreva uma função chamada 'findMax' que retorne o maior número em um array.",
        code: `function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}`,
        explanation: "Este código define uma função chamada 'findMax' que encontra o maior número em um array.",
        test: function (userCode) {
            try {
                eval(userCode);
                return findMax([1, 2, 3, 4, 5]) === 5 && findMax([-1, -2, -3, -4, -5]) === -1;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 81,
        description: "Pergunta: O método 'Array.prototype.includes()' determina se um array contém um determinado elemento? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que o método 'Array.prototype.includes()' determina se um array contém um determinado elemento.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 82,
        description: "Declare uma variável chamada 'containsThree' e atribua-lhe true se o número 3 estiver presente no array [1, 2, 3, 4, 5].",
        code: `let containsThree = [1, 2, 3, 4, 5].includes(3);`,
        explanation: "Este código declara uma variável chamada 'containsThree' e atribui-lhe true se o número 3 estiver presente no array [1, 2, 3, 4, 5].",
        test: function (userCode) {
            try {
                let containsThree;
                const script = new Function(userCode + '; return containsThree;');
                const result = script();
                return result === true && userCode.includes("[1, 2, 3, 4, 5].includes(3);");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 83,
        description: "Escreva uma função chamada 'reverseString' que inverta uma string.",
        code: `function reverseString(str) {
    return str.split('').reverse().join('');
}`,
        explanation: "Este código define uma função chamada 'reverseString' que inverte uma string.",
        test: function (userCode) {
            try {
                eval(userCode);
                return reverseString('hello') === 'olleh' && reverseString('world') === 'dlrow';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 84,
        description: "Pergunta: A função 'Array.prototype.join()' une todos os elementos de um array em uma string? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'Array.prototype.join()' une todos os elementos de um array em uma string.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 85,
        description: "Declare uma variável chamada 'joinedString' e atribua-lhe a string resultante da união dos elementos do array ['H', 'e', 'l', 'l', 'o'] com um separador '-'.",
        code: `let joinedString = ['H', 'e', 'l', 'l', 'o'].join('-');`,
        explanation: "Este código declara uma variável chamada 'joinedString' e atribui-lhe a string resultante da união dos elementos do array ['H', 'e', 'l', 'l', 'o'] com um separador '-'.",
        test: function (userCode) {
            try {
                let joinedString;
                const script = new Function(userCode + '; return joinedString;');
                const result = script();
                return result === 'H-e-l-l-o' && userCode.includes("['H', 'e', 'l', 'l', 'o'].join('-');");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 86,
        description: "Escreva uma função chamada 'capitalize' que transforme a primeira letra de uma string em maiúscula.",
        code: `function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}`,
        explanation: "Este código define uma função chamada 'capitalize' que transforma a primeira letra de uma string em maiúscula.",
        test: function (userCode) {
            try {
                eval(userCode);
                return capitalize('hello') === 'Hello' && capitalize('world') === 'World';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 87,
        description: "Pergunta: A função 'String.prototype.toUpperCase()' converte todos os caracteres de uma string em maiúsculas? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'String.prototype.toUpperCase()' converte todos os caracteres de uma string em maiúsculas.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 88,
        description: "Declare uma variável chamada 'upperCaseString' e atribua-lhe a string resultante da conversão de 'hello' em maiúsculas.",
        code: `let upperCaseString = 'hello'.toUpperCase();`,
        explanation: "Este código declara uma variável chamada 'upperCaseString' e atribui-lhe a string resultante da conversão de 'hello' em maiúsculas.",
        test: function (userCode) {
            try {
                let upperCaseString;
                const script = new Function(userCode + '; return upperCaseString;');
                const result = script();
                return result === 'HELLO' && userCode.includes("'hello'.toUpperCase();");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 89,
        description: "Escreva uma função chamada 'getInitials' que receba um nome completo e retorne as iniciais.",
        code: `function getInitials(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
}`,
        explanation: "Este código define uma função chamada 'getInitials' que recebe um nome completo e retorna as iniciais.",
        test: function (userCode) {
            try {
                eval(userCode);
                return getInitials('John Doe') === 'JD' && getInitials('Jane Smith') === 'JS';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 90,
        description: "Pergunta: A função 'String.prototype.split()' divide uma string em um array de substrings? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'String.prototype.split()' divide uma string em um array de substrings.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 91,
        description: "Declare uma variável chamada 'words' e atribua-lhe o array resultante da divisão da string 'hello world' usando espaço como delimitador.",
        code: `let words = 'hello world'.split(' ');`,
        explanation: "Este código declara uma variável chamada 'words' e atribui-lhe o array resultante da divisão da string 'hello world' usando espaço como delimitador.",
        test: function (userCode) {
            try {
                let words;
                const script = new Function(userCode + '; return words;');
                const result = script();
                return Array.isArray(result) && result.length === 2 && result.includes('hello') && result.includes('world');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 92,
        description: "Escreva uma função chamada 'removeVowels' que remova todas as vogais de uma string.",
        code: `function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}`,
        explanation: "Este código define uma função chamada 'removeVowels' que remove todas as vogais de uma string.",
        test: function (userCode) {
            try {
                eval(userCode);
                return removeVowels('hello') === 'hll' && removeVowels('world') === 'wrld';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 93,
        description: "Pergunta: A função 'String.prototype.replace()' substitui um valor especificado por outro valor em uma string? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'String.prototype.replace()' substitui um valor especificado por outro valor em uma string.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 94,
        description: "Declare uma variável chamada 'noSpaces' e atribua-lhe a string resultante da substituição de todos os espaços na string 'hello world' por vazios.",
        code: `let noSpaces = 'hello world'.replace(/ /g, '');`,
        explanation: "Este código declara uma variável chamada 'noSpaces' e atribui-lhe a string resultante da substituição de todos os espaços na string 'hello world' por vazios.",
        test: function (userCode) {
            try {
                let noSpaces;
                const script = new Function(userCode + '; return noSpaces;');
                const result = script();
                return result === 'helloworld' && userCode.includes("'hello world'.replace(/ /g, '');");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 95,
        description: "Escreva uma função chamada 'isPalindrome' que verifique se uma string é um palíndromo (lê-se da mesma forma de frente para trás e de trás para frente).",
        code: `function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}`,
        explanation: "Este código define uma função chamada 'isPalindrome' que verifica se uma string é um palíndromo.",
        test: function (userCode) {
            try {
                eval(userCode);
                return isPalindrome('A man a plan a canal Panama') === true && isPalindrome('hello') === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 96,
        description: "Pergunta: A função 'String.prototype.toLowerCase()' converte todos os caracteres de uma string em minúsculas? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'String.prototype.toLowerCase()' converte todos os caracteres de uma string em minúsculas.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 97,
        description: "Declare uma variável chamada 'lowerCaseString' e atribua-lhe a string resultante da conversão de 'HELLO' em minúsculas.",
        code: `let lowerCaseString = 'HELLO'.toLowerCase();`,
        explanation: "Este código declara uma variável chamada 'lowerCaseString' e atribui-lhe a string resultante da conversão de 'HELLO' em minúsculas.",
        test: function (userCode) {
            try {
                let lowerCaseString;
                const script = new Function(userCode + '; return lowerCaseString;');
                const result = script();
                return result === 'hello' && userCode.includes("'HELLO'.toLowerCase();");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 98,
        description: "Escreva uma função chamada 'titleCase' que converta uma string para o formato de título (primeira letra de cada palavra em maiúscula).",
        code: `function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}`,
        explanation: "Este código define uma função chamada 'titleCase' que converte uma string para o formato de título.",
        test: function (userCode) {
            try {
                eval(userCode);
                return titleCase('hello world') === 'Hello World' && titleCase('javaScript is awesome') === 'Javascript Is Awesome';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 99,
        description: "Pergunta: A função 'String.prototype.trim()' remove os espaços em branco do início e do fim de uma string? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "Este código atribui a resposta 'Sim' à variável 'answer', indicando que a função 'String.prototype.trim()' remove os espaços em branco do início e do fim de uma string.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 100,
        description: "Declare uma variável chamada 'trimmedString' e atribua-lhe a string resultante da remoção dos espaços em branco do início e do fim de '  hello world  '.",
        code: `let trimmedString = '  hello world  '.trim();`,
        explanation: "Este código declara uma variável chamada 'trimmedString' e atribui-lhe a string resultante da remoção dos espaços em branco do início e do fim de '  hello world  '.",
        test: function (userCode) {
            try {
                let trimmedString;
                const script = new Function(userCode + '; return trimmedString;');
                const result = script();
                return result === 'hello world' && userCode.includes("'  hello world  '.trim();");
            } catch (e) {
                return false;
            }
        }
    },
     {
        id: 101,
        description: "Pergunta: O método 'document.getElementById()' retorna um elemento do documento pelo seu ID? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'document.getElementById()' é usado para selecionar um elemento HTML pelo seu atributo ID. Ele retorna o elemento correspondente ao ID especificado.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 102,
        description: "Crie um elemento HTML <div> com o ID 'myDiv' e, em seguida, use JavaScript para alterar seu conteúdo para 'Hello, World!'.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="myDiv"></div>
    <script>
        document.getElementById('myDiv').textContent = 'Hello, World!';
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, criamos um elemento <div> com o ID 'myDiv' e, usando JavaScript, alteramos seu conteúdo para 'Hello, World!'. Isso demonstra como manipular o DOM para alterar o conteúdo de um elemento.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const div = doc.getElementById('myDiv');
                return div && div.textContent === 'Hello, World!';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 103,
        description: "Escreva uma função chamada 'changeColor' que altere a cor de fundo de um elemento HTML com um ID especificado.",
        code: `function changeColor(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}`,
        explanation: "Esta função 'changeColor' aceita um ID de elemento e uma cor como argumentos. Ela usa 'document.getElementById()' para selecionar o elemento e altera a cor de fundo usando 'style.backgroundColor'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof changeColor === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 104,
        description: "Pergunta: O método 'document.createElement()' cria um novo elemento HTML? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'document.createElement()' é usado para criar um novo elemento HTML especificado pelo argumento passado (como 'div', 'p', 'button', etc.).",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 105,
        description: "Crie um elemento HTML <button> com o texto 'Click me' e adicione-o ao corpo do documento usando JavaScript.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script>
        let button = document.createElement('button');
        button.textContent = 'Click me';
        document.body.appendChild(button);
    </script>
</body>
</html>`,
        explanation: "Este exemplo demonstra como criar um elemento <button> com 'document.createElement()' e adicionar texto a ele com 'textContent'. Finalmente, o botão é adicionado ao corpo do documento com 'appendChild'.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const button = doc.querySelector('button');
                return button && button.textContent === 'Click me';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 106,
        description: "Escreva uma função chamada 'addElement' que crie um novo elemento HTML <p> com um texto especificado e o adicione a um elemento com um ID especificado.",
        code: `function addElement(id, text) {
    let p = document.createElement('p');
    p.textContent = text;
    document.getElementById(id).appendChild(p);
}`,
        explanation: "A função 'addElement' cria um novo elemento <p> com o texto fornecido e o adiciona ao elemento especificado pelo ID. Ela usa 'document.createElement()' para criar o elemento e 'appendChild()' para adicioná-lo ao DOM.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof addElement === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 107,
        description: "Pergunta: O método 'document.querySelector()' retorna o primeiro elemento que corresponde a um seletor CSS especificado? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'document.querySelector()' retorna o primeiro elemento dentro do documento que corresponde ao seletor CSS especificado. Se nenhum elemento for encontrado, ele retorna null.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 108,
        description: "Crie um elemento HTML <input> com um tipo 'text' e um ID 'myInput', e adicione-o ao corpo do documento usando JavaScript.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script>
        let input = document.createElement('input');
        input.type = 'text';
        input.id = 'myInput';
        document.body.appendChild(input);
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, criamos um elemento <input> com o tipo 'text' e o ID 'myInput' usando 'document.createElement()' e adicionamos ao corpo do documento com 'appendChild'.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const input = doc.getElementById('myInput');
                return input && input.type === 'text';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 109,
        description: "Escreva uma função chamada 'getValue' que obtenha o valor de um elemento <input> com um ID especificado.",
        code: `function getValue(id) {
    return document.getElementById(id).value;
}`,
        explanation: "A função 'getValue' aceita um ID de elemento como argumento e retorna o valor do elemento <input> correspondente usando 'document.getElementById().value'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof getValue === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 110,
        description: "Pergunta: O evento 'click' é acionado quando um elemento HTML é clicado? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O evento 'click' é acionado quando um elemento HTML é clicado pelo usuário. Ele é comumente usado para interações com botões e links.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 111,
        description: "Adicione um manipulador de eventos de 'click' a um botão com o ID 'myButton' que exiba um alerta com o texto 'Button clicked!'.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <button id="myButton">Click me</button>
    <script>
        document.getElementById('myButton').addEventListener('click', () => {
            alert('Button clicked!');
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, criamos um botão com o ID 'myButton' e adicionamos um manipulador de eventos 'click' que exibe um alerta quando o botão é clicado.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const button = doc.getElementById('myButton');
                const script = doc.querySelector('script').textContent;
                return button && script.includes("alert('Button clicked!')");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 112,
        description: "Escreva uma função chamada 'setText' que altere o texto de um elemento HTML com um ID especificado para um texto fornecido.",
        code: `function setText(id, text) {
    document.getElementById(id).textContent = text;
}`,
        explanation: "A função 'setText' aceita um ID de elemento e um texto como argumentos. Ela usa 'document.getElementById()' para selecionar o elemento e altera o texto usando 'textContent'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof setText === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 113,
        description: "Pergunta: O evento 'input' é acionado quando o valor de um elemento <input> muda? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O evento 'input' é acionado sempre que o valor de um elemento <input> muda. É comumente usado para monitorar entradas de texto em tempo real.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 114,
        description: "Adicione um manipulador de eventos de 'input' a um elemento <input> com o ID 'myInput' que registre o valor atual no console.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <input type="text" id="myInput">
    <script>
        document.getElementById('myInput').addEventListener('input', (event) => {
            console.log(event.target.value);
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, adicionamos um manipulador de eventos 'input' a um elemento <input> com o ID 'myInput'. Quando o valor do <input> muda, o valor atual é registrado no console.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const input = doc.getElementById('myInput');
                const script = doc.querySelector('script').textContent;
                return input && script.includes("console.log(event.target.value)");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 115,
        description: "Escreva uma função chamada 'toggleVisibility' que altere a visibilidade de um elemento HTML com um ID especificado.",
        code: `function toggleVisibility(id) {
    let element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}`,
        explanation: "A função 'toggleVisibility' alterna a visibilidade de um elemento HTML com base no seu ID. Se o elemento estiver oculto (display: none), ele será exibido (display: block) e vice-versa.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof toggleVisibility === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 116,
        description: "Pergunta: O evento 'submit' é acionado quando um formulário HTML é enviado? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O evento 'submit' é acionado quando um formulário HTML é enviado. Ele pode ser usado para validar e processar os dados do formulário antes de enviar.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 117,
        description: "Adicione um manipulador de eventos de 'submit' a um formulário com o ID 'myForm' que previna o envio do formulário e exiba um alerta com o texto 'Form submitted!'.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form id="myForm">
        <input type="text">
        <button type="submit">Submit</button>
    </form>
    <script>
        document.getElementById('myForm').addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted!');
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, adicionamos um manipulador de eventos 'submit' a um formulário com o ID 'myForm'. O evento é prevenido (preventDefault) para evitar o envio do formulário e um alerta é exibido.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const form = doc.getElementById('myForm');
                const script = doc.querySelector('script').textContent;
                return form && script.includes("event.preventDefault()") && script.includes("alert('Form submitted!')");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 118,
        description: "Escreva uma função chamada 'addClass' que adicione uma classe CSS a um elemento HTML com um ID especificado.",
        code: `function addClass(id, className) {
    document.getElementById(id).classList.add(className);
}`,
        explanation: "A função 'addClass' adiciona uma classe CSS a um elemento HTML com base no seu ID. Ela usa 'document.getElementById()' para selecionar o elemento e 'classList.add()' para adicionar a classe.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof addClass === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 119,
        description: "Pergunta: O método 'classList.add()' adiciona uma classe CSS a um elemento HTML? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'classList.add()' é usado para adicionar uma ou mais classes a um elemento HTML. Ele é comumente usado para aplicar estilos CSS dinamicamente.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 120,
        description: "Declare um elemento HTML <div> com o ID 'myBox' e, em seguida, use JavaScript para adicionar a classe 'hidden' a ele.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div id="myBox">This is a box</div>
    <script>
        document.getElementById('myBox').classList.add('hidden');
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, declaramos um elemento <div> com o ID 'myBox' e, usando JavaScript, adicionamos a classe 'hidden' a ele. A classe 'hidden' é definida no CSS para ocultar o elemento.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const div = doc.getElementById('myBox');
                return div && div.classList.contains('hidden');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 121,
        description: "Pergunta: O método 'classList.remove()' remove uma classe CSS de um elemento HTML? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'classList.remove()' é usado para remover uma ou mais classes de um elemento HTML. Ele é útil para alterar dinamicamente o estilo de um elemento.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 122,
        description: "Declare um elemento HTML <div> com o ID 'myBox' que tem a classe 'hidden'. Em seguida, use JavaScript para remover a classe 'hidden' dele.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div id="myBox" class="hidden">This is a box</div>
    <script>
        document.getElementById('myBox').classList.remove('hidden');
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, declaramos um elemento <div> com o ID 'myBox' e a classe 'hidden'. Usando JavaScript, removemos a classe 'hidden' para exibir o elemento.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const div = doc.getElementById('myBox');
                return div && !div.classList.contains('hidden');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 123,
        description: "Escreva uma função chamada 'removeClass' que remova uma classe CSS de um elemento HTML com um ID especificado.",
        code: `function removeClass(id, className) {
    document.getElementById(id).classList.remove(className);
}`,
        explanation: "A função 'removeClass' aceita um ID de elemento e um nome de classe como argumentos. Ela usa 'document.getElementById()' para selecionar o elemento e 'classList.remove()' para remover a classe especificada.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof removeClass === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 124,
        description: "Pergunta: O método 'querySelectorAll()' retorna todos os elementos que correspondem a um seletor CSS especificado? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'querySelectorAll()' retorna uma NodeList contendo todos os elementos que correspondem ao seletor CSS especificado. Ao contrário de 'querySelector()', que retorna apenas o primeiro elemento correspondente.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 125,
        description: "Crie três elementos HTML <div> com a classe 'box'. Em seguida, use JavaScript para alterar a cor de fundo de todos os elementos 'box' para azul.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            margin: 10px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <script>
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.style.backgroundColor = 'blue';
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, criamos três elementos <div> com a classe 'box' e usamos 'querySelectorAll()' para selecionar todos eles. Em seguida, usamos 'forEach()' para iterar sobre os elementos e alterar sua cor de fundo para azul.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const boxes = doc.querySelectorAll('.box');
                return boxes.length === 3 && Array.from(boxes).every(box => box.style.backgroundColor === 'blue');
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 126,
        description: "Escreva uma função chamada 'changeAllBackgrounds' que altere a cor de fundo de todos os elementos que correspondem a um seletor CSS especificado.",
        code: `function changeAllBackgrounds(selector, color) {
    let elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.backgroundColor = color;
    });
}`,
        explanation: "A função 'changeAllBackgrounds' aceita um seletor CSS e uma cor como argumentos. Ela usa 'querySelectorAll()' para selecionar todos os elementos correspondentes e altera sua cor de fundo usando 'forEach()' e 'style.backgroundColor'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof changeAllBackgrounds === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 127,
        description: "Pergunta: O método 'addEventListener()' pode ser usado para adicionar múltiplos ouvintes de eventos ao mesmo elemento HTML? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O método 'addEventListener()' permite adicionar múltiplos ouvintes de eventos ao mesmo elemento HTML, para que diferentes funções sejam executadas em resposta ao mesmo evento.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 128,
        description: "Crie um elemento HTML <button> com o ID 'myButton'. Adicione dois ouvintes de eventos 'click' que exibem diferentes mensagens de alerta.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <button id="myButton">Click me</button>
    <script>
        let button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            alert('First click handler');
        });
        button.addEventListener('click', () => {
            alert('Second click handler');
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, criamos um botão com o ID 'myButton' e adicionamos dois ouvintes de eventos 'click' que exibem diferentes mensagens de alerta. Ambos os manipuladores de eventos serão acionados quando o botão for clicado.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const button = doc.getElementById('myButton');
                const script = doc.querySelector('script').textContent;
                return button && script.includes("alert('First click handler')") && script.includes("alert('Second click handler')");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 129,
        description: "Escreva uma função chamada 'addMultipleClickHandlers' que adicione múltiplos ouvintes de eventos 'click' a um botão com um ID especificado.",
        code: `function addMultipleClickHandlers(id, handlers) {
    let button = document.getElementById(id);
    handlers.forEach(handler => {
        button.addEventListener('click', handler);
    });
}`,
        explanation: "A função 'addMultipleClickHandlers' aceita um ID de botão e um array de manipuladores de eventos como argumentos. Ela adiciona cada manipulador de eventos 'click' ao botão usando 'addEventListener()'.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof addMultipleClickHandlers === 'function';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 130,
        description: "Pergunta: O evento 'DOMContentLoaded' é acionado quando o documento HTML inicial foi completamente carregado e analisado? (Responda com 'Sim' ou 'Não')",
        code: `let answer = 'Sim';`,
        explanation: "O evento 'DOMContentLoaded' é acionado quando o documento HTML inicial foi completamente carregado e analisado, sem esperar que as folhas de estilo, imagens e subframes terminem de carregar.",
        test: function (userCode) {
            return userCode.trim().toLowerCase() === "let answer = 'sim';";
        }
    },
    {
        id: 131,
        description: "Adicione um ouvinte de eventos 'DOMContentLoaded' que altere o texto de um elemento <div> com o ID 'myDiv' para 'Page loaded!'.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="myDiv"></div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('myDiv').textContent = 'Page loaded!';
        });
    </script>
</body>
</html>`,
        explanation: "Neste exemplo, adicionamos um ouvinte de eventos 'DOMContentLoaded' que altera o texto de um elemento <div> com o ID 'myDiv' para 'Page loaded!' quando o documento HTML inicial é completamente carregado.",
        test: function (userCode) {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userCode, 'text/html');
                const div = doc.getElementById('myDiv');
                const script = doc.querySelector('script').textContent;
                return div && script.includes("document.getElementById('myDiv').textContent = 'Page loaded!'");
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 132,
        description: "Escreva uma função chamada 'onDOMContentLoaded' que receba uma função de callback e a execute quando o evento 'DOMContentLoaded' for acionado.",
        code: `function onDOMContentLoaded(callback) {
    document.addEventListener('DOMContentLoaded', callback);
}`,
        explanation: "A função 'onDOMContentLoaded' aceita uma função de callback como argumento e a registra como um ouvinte de eventos 'DOMContentLoaded'. Quando o evento é acionado, a função de callback é executada.",
        test: function (userCode) {
            try {
                eval(userCode);
                return typeof onDOMContentLoaded === 'function';
            } catch (e) {
                return false;
            }
        }
    }
];

// Exporte os níveis
if (typeof module !== 'undefined' && module.exports) {
    module.exports = levels;
}

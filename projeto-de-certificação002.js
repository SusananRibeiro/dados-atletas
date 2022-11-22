// Projeto de certificação 2 – Dados dos atletas - SENAI 2022
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas
    }
    calculaCategoria() { // para calcular a categoria do atleta
      if (this.idade > 8 && this.idade < 12) 
      return "Infantil"
      if(this.idade > 11 && this.idade < 14)
      return "Juvenil"
      if(this.idade > 13 && this.idade < 16)
      return "Intermediário"
      if(this.idade > 15 && this.idade < 31)
      return "Adulto"
    } 
    calculaIMC() { // para calcular o IMC do atleta
      return this.peso / (this.altura * this.altura)
    } 
    calculaMediaValida() { // para calcular a média válida do atleta.
      let notasGerais = this.notas;
      let notasOrganizadas = notasGerais.sort(function comparaNumeros(a, b) { // Colocar em ordem crescente 
        if (a == b) return 0;
        if (a < b) return -1;
        if (a > b) return 1
      })
      let notasComputadas = notasOrganizadas.slice(1, 3) // seleção dos valores
      let somaNotasComputadas = notasComputadas.reduce(function(total, atual) {
        return total + atual
      }, 0) // soma das notas
      let media = (somaNotasComputadas / notasComputadas.length);
      return media
      }
    obtemNomeAtleta() { // que retorna o nome do atleta
      return this.nome
    }
    obtemIdadeAtleta() { // que retorna a idade do atleta
      return this.idade
    }
    obtemPesoAtleta() { // que retorna o peso do atleta
      return this.peso
    }
    obterAltura() { // que retorna o peso do atleta
      return this.altura
    }
    obtemNotasAtleta() { // que retorna as notas do atleta
      return this.notas
    }
    obtemCategoria() { // que retorna a categoria do atleta
      return atleta.calculaCategoria()
    }
    obtemIMC() { // que retorna o IMC do atleta
      return atleta.calculaIMC()
    }
    obtemMediaValida() { // que retorna a média válida do atleta
      return atleta.calculaMediaValida()
    }
   }
   const atleta = new Atleta("Cesar Abascal",
   30, 80, 1.70,
   [10, 9.34, 8.42, 10, 7.88]);
   
console.log("Nome: " + atleta.obtemNomeAtleta()) // retorna "Nome: Cesar Abascal"
console.log("Idade: " + atleta.obtemIdadeAtleta()) // retorna "Idade: 30"
console.log("Peso: " + atleta.obtemPesoAtleta()) // retorna "Peso: 80"
console.log("Altura: " + atleta.obterAltura()) // retorna "Altura: 1.7"
console.log("Notas: " + atleta.obtemNotasAtleta()) // retorna "Notas: 10, 9.34, 8.42, 10, 7.88"
console.log("Categoria: " + atleta.obtemCategoria()) // retorna "Categoria: Adulto"
console.log("IMC: " + atleta.obtemIMC()) // retorna "IMC: 27.68166089965398"
console.log("Média válida: " + atleta.obtemMediaValida()) // retorna "Média válida: 8.766666666666666"

 
/*Declara o atleta
Exemplo de entrada:
const atleta = new Atleta("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);
Exemplo de saída

Exemplo de saída:
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666
*/

describe("Sintaxe Básica", function () {
  describe("Variáveis", function () {
    it("Deve ser possível declarar variáveis e atribuir tipos de dados", () => {
      // Seu código aqui

      expect(umaString).toBe("sou uma string");
      expect(umNumero).toBe(42);
      expect(umBooleano).toBe(true);
    });
    it("Deve demonstrar o escopo de bloco de 'let'", () => {
      // Seu código aqui

      if (true) {
        let x = 20; // escopo diferente
        expect(x).toBe(20);
      }
      expect(x).toBe(10);
    });
    it("Deve demonstrar o comportamento de 'const'", () => {
      // Seu código aqui

      expect(() => {
        y = 40;
      }).toThrow();
    });
    it("Deve demonstrar o escopo de função de 'var'", () => {
      // Seu código aqui

      expect(z).toBe(40);
      if (true) {
        var z = 60; // mesmo escopo
        expect(z).toBe(60);
      }
      expect(z).toBe(60);
    });
  });
  describe("Números e Matemática", () => {
    describe("Números e Matemática - Adição Simples", function () {
      it("Deve somar dois números", () => {
        const n1 = 5
        const n2 = 3

        // Seu código aqui

        expect(soma).toBe(8);
      });
    });
    describe("Números e Matemática - Multiplicação e Divisão", function () {
      it("Deve multiplicar e dividir números", () => {
        const n1 = 4
        const n2 = 5
        const n3 = 20

        // Seu código aqui

        expect(produto).toBe(20);
        expect(quociente).toBe(5);
      });
    });
    describe("Números e Matemática - Raiz Quadrada", function () {
      it("Deve calcular a raiz quadrada de um número", () => {
        const n1 = 16

        // Seu código aqui

        expect(raiz).toBe(4);
      });
    });
    describe("Números e Matemática - Potenciação", function () {
      it("Deve elevar um número a uma potência", () => {
        const n1 = 2
        const n2 = 3

        // Seu código aqui

        expect(potencia).toBe(8);
      });
    });
    describe("Números e Matemática - Arredondamento", function () {
      it("Deve arredondar para o inteiro mais próximo", () => {
        const n1 = 2.5

        // Seu código aqui

        expect(arredondado).toBe(3);
      });
    });
    describe("Números e Matemática - Números Aleatórios", function () {
      it("Deve gerar um número aleatório entre 0 e 1", () => {
        // Seu código aqui

        expect(aleatorio).toBeGreaterThanOrEqual(0);
        expect(aleatorio).toBeLessThan(1);
      });
    });
    describe("Números e Matemática - Conversão de String para Número", function () {
      it("Deve converter uma string para número usando parseFloat", () => {
        const s1 = "3.14"

        // Seu código aqui

        expect(numero).toBe(3.14);
      });
    });
    describe("Números e Matemática - Truncamento de Número", function () {
      it("Deve truncar um número para remover a parte decimal", () => {
        const n1 = 3.14

        // Seu código aqui

        expect(truncado).toBe(3);
      });
    });
    describe("Números e Matemática - Correção de Precisão de Ponto Flutuante", function () {
      it("Deve corrigir erros de precisão em operações de ponto flutuante", () => {
        const n1 = (0.1 + 0.2)

        // Seu código aqui

        expect(resultado).toBe("0.30");
      });
    });
  })
  describe("Strings e Textos", function () {
    describe("Strings - Concatenação", function () {
      it("Deve concatenar duas strings", () => {
        const parte1 = "Olá, ";
        const parte2 = "mundo!";

        // Seu código aqui

        expect(mensagem).toBe("Olá, mundo!");
      });
    });
    describe("Strings - Comparação", function () {
      it("Deve comparar duas strings", () => {
        const str1 = "JavaScript";
        const str2 = "javascript";

        // Seu código aqui

        expect(comparacao).toBe(true);
      });
    });
    describe("Strings - Extração de Substring", function () {
      it("Deve extrair uma substring", () => {
        const str = "Hello, world!";

        // Seu código aqui

        expect(substr).toBe("world");
      });
    });
    describe("Strings - Reversão", function () {
      it("Deve reverter uma string", () => {
        const str = "abcd";

        // Seu código aqui

        expect(reversed).toBe("dcba");
      });
    });
    describe("Strings - parseInt", function () {
      it("Deve converter uma string para inteiro", () => {
        const numero = "42";

        // Seu código aqui

        expect(resultado).toBe(42);
      });
    });
    describe("Strings - parseFloat", function () {
      it("Deve converter uma string para float", () => {
        const numero = "3.14";

        // Seu código aqui

        expect(resultado).toBe(3.14);
      });
    });
    describe("Strings - Identificação de Números", function () {
      it("Deve identificar e converter números em uma string mista", () => {
        const mista = "O preço é 25 reais";

        // Seu código aqui

        expect(preco).toBe(25);
      });
    });
    describe("Strings - Template Literals", function () {
      it("Deve usar template literals para inserção de variáveis", () => {
        const linguagem = "JavaScript";
        const ano = 1995;

        // Seu código aqui

        expect(frase).toBe("JavaScript foi criado em 1995.");
      });
    });
    describe("Strings - Contagem de Caracteres", function () {
      it("Deve contar quantas vezes um caractere aparece", () => {
        const str = "banana";

        // Seu código aqui

        expect(contaA).toBe(3);
      });
    });
    describe("Strings - Substituição de Caracteres", function () {
      it("Deve substituir todos os espaços por hífens", () => {
        const original = "Olá mundo JavaScript";

        // Seu código aqui

        expect(modificado).toBe("Olá-mundo-JavaScript");
      });
    });
  })
  describe("Boolean", function () {
    describe("Booleanos - Verdadeiro e Falso Literal", function () {
      it("Deve reconhecer true e false literais", () => {

        // Seu código aqui

        expect(verdadeiro).toBe(true);
        expect(falso).toBe(false);
      });
    });

    describe("Booleanos - Coerção de Tipo para Verdadeiro", function () {
      it("Deve considerar certos valores como verdadeiros e outros como falsos", () => {
        const numeroPositivo = 1;
        const numeroZero = 0;
        const stringNaoVazia = "a";
        const stringVazia = "";
        const objetoVazio = {};
        const nulo = null;
        const indefinido = undefined;
        const nan = NaN;

        // Seu código aqui

        expect(Boolean(numeroPositivo)).toBe(b1);
        expect(Boolean(numeroZero)).toBe(b2);
        expect(Boolean(stringNaoVazia)).toBe(b3);
        expect(Boolean(stringVazia)).toBe(b4);
        expect(Boolean(objetoVazio)).toBe(b5);
        expect(Boolean(nulo)).toBe(b6);
        expect(Boolean(indefinido)).toBe(b7);
        expect(Boolean(nan)).toBe(b8);
      });
    });

    describe("Booleanos - Avaliação em Contexto Booleano com Operador Lógico", function () {
      it("Deve usar operadores lógicos para avaliar em contexto booleano", () => {
        const verdadeiroEVerdadeiro = true && true;
        const verdadeiroOuFalso = true || false;

        // Seu código aqui

        expect(verdadeiroEVerdadeiro).toBe(b1);
        expect(verdadeiroOuFalso).toBe(b2);
      });
    });

    describe("Booleanos - Negando Valores Booleanos", function () {
      it("Deve negar valores booleanos", () => {
        const verdadeiro = !false;
        const falso = !true;

        // Seu valor aqui

        expect(verdadeiro).toBe(b1);
        expect(falso).toBe(b2);
      });
    });
  })
  describe("Arrays", function () {
    it("Deve acessar elementos de um array", () => {
      // Seu código aqui

      expect(arr[1]).toBe(20);
    });
    it("Deve manipular arrays com push e pop", () => {
      let arr = [10, 20];

      // Seu código aqui

      expect(arr).toEqual([10, 20, 30]);

      // Seu código aqui

      expect(arr).toEqual([10, 20]);
    });
    it("Deve iterar sobre um array com forEach", () => {
      let arr = [1, 2, 3];
      let soma = 0;

      // Seu código aqui

      expect(soma).toBe(6);
    });
    it("Deve criar um novo array com map", () => {
      let original = [1, 2, 3];

      // Seu código aqui

      expect(dobrados).toEqual([2, 4, 6]);
    });
    it("Deve filtrar elementos de um array com filter", () => {
      let numeros = [1, 2, 3, 4, 5];

      // Seu código aqui

      expect(pares).toEqual([2, 4]);
    });
  })
  describe("Objetos", function () {
    it("Deve acessar propriedades de um objeto", () => {
      // Seu código aqui

      expect(pessoa.nome).toBe("Ana");
      expect(pessoa['idade']).toBe(25);
    });
    it("Deve modificar propriedades de um objeto", () => {
      let pessoa = { nome: "Carlos", idade: 30 };

      // Seu código aqui

      expect(pessoa.idade).toBe(31);
    });
    it("Deve listar as chaves de um objeto com Object.keys", () => {
      let objeto = { a: 1, b: 2, c: 3 };

      // Seu código aqui

      expect(chaves).toEqual(['a', 'b', 'c']);
    });
    it("Deve listar os valores de um objeto com Object.values", () => {
      let objeto = { a: 1, b: 2, c: 3 };

      // Seu código aqui

      expect(valores).toEqual([1, 2, 3]);
    });
    it("Deve usar o spread operator para copiar e modificar objetos", () => {
      let original = { a: 1, b: 2 };

      // Seu código aqui

      expect(copia).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
  describe("Expressões Regulares", function () {
    // https://regex101.com/
    describe("Expressões Regulares - Validação de E-mail", function () {
      it("Deve validar um endereço de e-mail", () => {
        // Seu código aqui

        expect(regexEmail.test("usuario@example.com")).toBe(true);
        expect(regexEmail.test("usuarioexample.com")).toBe(false);
      });
    });
    describe("Expressões Regulares - Validação de Números de Telefone", function () {
      it("Deve validar um número de telefone", () => {
        // Seu código aqui

        expect(regexTelefone.test("(11) 98888-7777")).toBe(true);
        expect(regexTelefone.test("11988887777")).toBe(false);
      });
    });
    describe("Expressões Regulares - Busca de Palavras", function () {
      it("Deve encontrar todas as ocorrências de uma palavra em um texto", () => {
        const texto = "A raposa marrom rápida pula sobre o cão preguiçoso.";

        // Seu código aqui

        const ocorrencias = texto.match(regexPalavra);
        expect(ocorrencias.length).toBe(1);
        expect(ocorrencias[0]).toBe("raposa");
      });
    });
    describe("Expressões Regulares - Divisão de Strings com Padrões", function () {
      it("Deve dividir uma string baseada em um padrão", () => {
        const texto = "maçã, banana; laranja: uva";

        // Seu código aqui

        const frutas = texto.split(regexSeparadores);
        expect(frutas).toEqual(["maçã", "banana", "laranja", "uva"]);
      });
    });
  })
  describe("Tratamento de erros", function () {
    describe("Tratamento de Erros - Captura Simples de Erro", function () {
      it("Deve capturar um erro com try-catch", () => {
        function falhar() {
          throw new Error("Falha intencional");
        }
        let capturouErro = false;

        // Seu código aqui

        expect(capturouErro).toBe(true);
      });
    });
    describe("Tratamento de Erros - Lançamento de Erros Personalizados", function () {
      it("Deve lançar um erro personalizado", () => {
        class ErroEspecifico extends Error {
          constructor(mensagem) {
            super(mensagem);
            this.nome = "ErroEspecifico";
          }
        }

        function validarUsuario(usuario) {
          if (!usuario.nome) {
            // Seu código aqui
          }
        }

        let erroCapturado = null;
        try {
          validarUsuario({});
        } catch (erro) {
          erroCapturado = erro;
        }
        expect(erroCapturado.nome).toBe("ErroEspecifico");
        expect(erroCapturado.message).toBe("O nome do usuário é obrigatório");
      });
    });
    describe("Tratamento de Erros - Uso do Bloco Finally", function () {
      it("Deve executar o bloco finally independentemente de um erro", () => {
        let finalizado = false;

        // Seu código aqui

        expect(finalizado).toBe(true);
      });
    });
    describe("Tratamento de Erros - Verificação de Tipos de Erro", function () {
      it("Deve verificar o tipo do erro capturado", () => {
        function operacaoPerigosa() {
          throw new TypeError("Tipo inválido");
        }

        let erroCapturado = null;
        try {
          operacaoPerigosa();
        } catch (erro) {
          // Seu código aqui
        }
        expect(erroCapturado).not.toBeNull();
        expect(erroCapturado.message).toBe("Tipo inválido");
      });
    });
  })
  describe("Estruturas de Controle", function () {
    describe("Estruturas de Controle - if-else", function () {
      it("Deve usar if-else para controlar o fluxo", () => {
        function maiorQue5(valor) {
          // Seu código aqui
        }
        expect(maiorQue5(10)).toBe("maior que 5");
        expect(maiorQue5(3)).toBe("menor que 5");
      });
    });
    describe("Estruturas de Controle - switch", function () {
      it("Deve usar switch para controlar o fluxo", () => {
        let fruta = "maçã";
        function corDaFruta(fruta) {
          // Seu código aqui
        }
        expect(corDaFruta("maçã")).toBe("Vermelho");
        expect(corDaFruta("banana")).toBe("Amarelo");
        expect(corDaFruta("jaca")).toBe("Cor desconhecida");
      });
    });
    describe("Estruturas de Controle - for loop", function () {
      it("Deve usar for loop para iterar", () => {
        let soma = 0;

        // Seu código aqui

        expect(soma).toBe(15);
      });
    });
    describe("Estruturas de Controle - while e do-while loops", function () {
      it("Deve usar while loop para iterar", () => {
        let numero = 5;
        let resultado = 1;

        // Seu código aqui

        expect(resultado).toBe(120);
        expect(numero).toBe(1);
      });
      it("Deve usar do-while loop para iterar pelo menos uma vez", () => {
        let resultado = '';
        let i = 0;

        // Seu código aqui

        expect(resultado).toBe("aaaaa");
        expect(i).toBe(5)
      });
    });
    describe("Estruturas de Controle - for...in loop", function () {
      it("Deve usar for...in para iterar sobre propriedades de um objeto", () => {
        let objeto = { a: 1, b: 2, c: 3 };
        let soma = 0;

        // Seu código aqui

        expect(soma).toBe(6);
      });
    });
  });
  describe("Funções", function () {
    it("Deve ser possível declarar e usar funções", () => {

      // Seu código aqui

      let resultado = soma(5, 3);

      expect(resultado).toBe(8);
    });
    describe("Funções - Função Básica", function () {
      it("Deve definir e chamar uma função básica", () => {

        // Seu código aqui

        expect(saudacao("Alice")).toBe("Olá, Alice!");
      });
    });
    describe("Funções - Função Anônima", function () {
      it("Deve atribuir uma função anônima a uma variável", () => {

        // Seu código aqui

        expect(quadrado(4)).toBe(16);
      });
    });
    describe("Funções - IIFE", function () {
      it("Deve executar uma IIFE", () => {

        // Seu código aqui

        expect(resultado).toBe("Executado imediatamente");
      });
    });
    describe("Funções - Funções de Alta Ordem", function () {
      it("Deve passar uma função como argumento", () => {
        function soma(a, b) {
          return a + b;
        }

        // Seu código aqui

        expect(operacaoBinaria(soma, 5, 3)).toBe(8);
      });
    });
    describe("Funções - Callbacks", function () {
      it("Deve usar uma função callback", () => {

        // Seu código aqui

        processar(resultado => {
          expect(resultado).toBe("Processamento concluído");
        });
      });
    });
    describe("Funções - Arrow Functions", function () {
      it("Deve declarar uma arrow function", () => {

        // Seu código aqui

        expect(dobro(6)).toBe(12);
      });
    });
    describe("Funções - Funções Geradoras", function () {
      it("Deve usar uma função geradora para iterar valores", () => {

        // Seu código aqui

        const gen = geradorId();
        expect(gen.next().value).toBe(1);
        expect(gen.next().value).toBe(2);
      });
    });
    describe("Funções - Async/Await", function () {
      it("Deve esperar por uma função assíncrona", async () => {

        // Seu código aqui

        const dados = await obterDados();
        expect(dados).toBe("Dados recebidos");
      });
    });
    describe("Funções - Encadeamento de Funções", function () {
      it("Deve encadear chamadas de função", () => {

        // Seu código aqui

        const saudacao = criarSaudacao().comNome("Mundo").exibir();
        expect(saudacao).toBe("Olá, Mundo!");
      });
    });
    describe("Funções - Parâmetros Padrão", function () {
      it("Deve usar parâmetros padrão em funções", () => {

        // Seu código aqui

        expect(saudacao("Ana")).toBe("Olá, Ana!");
        expect(saudacao()).toBe("Olá, visitante!");
      });
    });
  });
  describe("Classes", function () {
    describe("Classes - Definição Básica", function () {
      it("Deve criar uma instância de uma classe", () => {

        // Seu código aqui

        const pessoa = new Pessoa("Alice");
        expect(pessoa.dizerNome()).toBe("Meu nome é Alice");
      });
    });
    describe("Classes - Herança", function () {
      it("Deve herdar propriedades e métodos de uma classe base", () => {
        // Use a classe do teste anterior

        // Seu código aqui

        // class Estudante extends Pessoa
        const estudante = new Estudante("Bob", "Ciência da Computação");
        expect(estudante.dizerNome()).toBe("Meu nome é Bob");
        expect(estudante.dizerCurso()).toBe("Meu curso é Ciência da Computação");
      });
    });
    describe("Classes - Métodos Estáticos", function () {
      it("Deve chamar um método estático sem instanciar a classe", () => {

        // Seu código aqui

        expect(Utilitario.multiplicar(3, 4)).toBe(12);
      });
    });
    describe("Classes - Getters e Setters", function () {
      it("Deve usar getters e setters", () => {

        // Seu código aqui

        const pessoa = new Pessoa("Ana");
        expect(pessoa.nome).toBe("ANA");
        pessoa.nome = "Bia";
        expect(pessoa.nome).toBe("BIA");
      });
    });
    describe("Classes - Propriedades de Classe", function () {
      it("Deve definir propriedades de classe", () => {

        // Seu código aqui

        const pessoa = new Pessoa("Carlos", 30);
        expect(pessoa.nome).toBe("Carlos");
        expect(pessoa.idade).toBe(30);
      });
    });
    describe("Classes - Método toString", function () {
      it("Deve sobrescrever o método toString", () => {

        // Seu código aqui

        const pessoa = new Pessoa("Diana", 25);
        expect(pessoa.toString()).toBe("Diana, 25 anos");
      });
    });
    describe("Classes - Herança Múltipla com Mixins", function () {
      it("Deve implementar herança múltipla usando mixins", () => {
        // Seu código aqui

        class Pessoa { }

        class PessoaMultifacetada extends ComportamentoFalante(ComportamentoComedor(Pessoa)) { }

        const pessoa = new PessoaMultifacetada();
        expect(pessoa.falar()).toBe("Estou falando.");
        expect(pessoa.comer()).toBe("Estou comendo.");
      });
    });
    describe("Classes - Classes Abstratas", function () {
      it("Deve simular uma classe abstrata", () => {

        // Seu código aqui

        // class Carro extends Veiculo

        const carro = new Carro();
        expect(carro.mover()).toBe("O carro está se movendo");
        expect(() => new Veiculo()).toThrow();
      });
    });
    describe("Classes - Encapsulamento com Campos Privados", function () {
      it("Deve usar campos privados", () => {

        // Seu código aqui

        const pessoa = new Pessoa("Eduardo");
        expect(pessoa.getNome()).toBe("Eduardo");
        expect(pessoa.nome).toBeUndefined();
        //expect(pessoa.#nome).toBe("Eduardo")
      });
    });
  });
})

describe("Extras", () => {
  describe("Comparação de Tipos", () => {
    it("Deve comparar tipos de variáveis usando typeof", () => {
      let num = 5;
      let str = "5";
      expect(
        // Seu código aqui
      ).toBe(false);
    });
  })
  describe("Uso de arrays multidimensionais", () => {
    it("Deve manipular um array multidimensional", () => {
      // Seu código aqui
      expect(matriz[0][1]).toBe(2);
      expect(matriz[1][0]).toBe(3);
    });
  })
  describe("Uso de Date para manipular datas", () => {
    it("Deve usar objetos Date para manipular datas", () => {
      // Seu código aqui
      data.setDate(data.getDate() + 1);
      expect(data.toISOString().slice(0, 10)).toBe('2024-01-02');
    });
  })
  describe("Uso de função construtora para criar objetos", () => {
    it("Deve usar uma função construtora para criar objetos", () => {
      function Carro(marca, modelo) {
        // Seu código aqui
      }
      let meuCarro = new Carro("Ford", "Mustang");
      expect(meuCarro.marca).toBe("Ford");
      expect(meuCarro.modelo).toBe("Mustang");
    });

  })
})



# Documentação
Criar métodos e funções que deveriam atuar em escopo global da linguagem para solucionar problemas recorrentes em termos de manipulação de dados dentro do JavaScript. Voltado princpialmente para métodos de manipulação de Arrays atraves de conceitos de CRUD, mas não se limitando a isso.

---
## Métodos e Funções

### Métodos
**.insert(indice, valor)**: É responsável pelo C (Create), e funciona inserindo um determinado valor em uma posicao especificada do array. Nome alternativo: *.create(indice, valor)*

**.update(indice, valor)**: É responsável pelo U (Update), e funciona substituindo o atual valor presente na posição informada pelo valor passado. É possível passar o mesmo valor já com as modificações, por isso seria uma atualização.

**.remove(indice)**: É responsável pelo D (Delete), e funciona simplesmente apagando o item que se encontra na posicao passada pelo array. Nome alternativo: *.delete(indice)*.

**.erease(valor)**: Apagar a primeira ocorrencia de um valor em um array.

**.ereaseAll(valor)**: Apaga todas as ocorrencias de um valor em um array.

**.special()**: Exclui todos os elementos repetidos de um determinado array (inclusive objetos com um mesmo valor em uma chave informada).

**.orderUp(callback)**: Ordenar array de número, string ou objeto do menor para o maior. Para manipular objetos é necessário passar uma função de callback indicando qual é a chave a ser usada para a ordenação.

**.orderDown(callback)**: Ordenar array de número, string ou objeto do maio para o menor. Para manipular objetos é necessário passar uma função de callback indicando qual é a chave a ser usada para a ordenação.

**.merge(chave, [chaves])**: Retorna uma array composto pelas chaves passadas no primeiro e no segundo parâmetro. Tem como função comparar os valores de cada objeto usando a chave informada, e caso o valor seja igual, é feita uma junção dos valores presentes nas demais chaves.

### Funções
**type()**: Retorna o tipo do objeto passado, seja string, object, function, integer, float, boolean, array entre outros.

**matrix(num_colunas, num_linhas, valor)**: Retorna uma matriz com o número de colunas e linhas informados, e preenche todos os campos com o valor passado.

---

## Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/Palhanor/Prototypes
```

### Dependências
Instale as dependências
```bash
$ npm install prompt-sync
```
### Rodando
Rode o projeto no terminal usando o Node:

**Prototypes** 
```bash
$ node ./prototype.js
```
**Functions** 
```bash
$ node ./function.js
```
# Documentação
Criar métodos e funções que deveriam atuar em escopo global da linguagem para solucionar problemas recorrentes em termos de manipulação de dados dentro do JavaScript. Voltado princpialmente para métodos de manipulação de Arrays atraves de conceitos de CRUD, mas não se limitando a isso.

## Métodos
**.insert(indice, valor)**: É responsável pelo C (Create), e funciona inserindo um determinado valor em uma posicao especificada do array. Nome alternativo: *.create(indice, valor)*

**.update(indice, valor)**: É responsável pelo U (Update), e funciona substituindo o atual valor presente na posição informada pelo valor passado. É possível passar o mesmo valor já com as modificações, por isso seria uma atualização.

**.remove(indice)**: É responsável pelo D (Delete), e funciona simplesmente apagando o item que se encontra na posicao passada pelo array. Nome alternativo: *.delete(indice)*.

**.erease(valor)**: Apagar a primeira ocorrencia de um valor em um array

**.ereaseAll(valor)**: Apaga todas as ocorrencias de um valor em um array

**.special()**: Exclui todos os elementos repetidos de um determinado array (inclusive objetos com um mesmo valor em uma chave informada)

**.order()**: Ordenar array de número ou strings do maior para o menor ou do menor para o maior.Numeros devem ter precedencia sobre string.


## Funções
**type()**: Retorna o tipo do objeto passado, seja string, object, function, integer, float, boolean, array entre outros.
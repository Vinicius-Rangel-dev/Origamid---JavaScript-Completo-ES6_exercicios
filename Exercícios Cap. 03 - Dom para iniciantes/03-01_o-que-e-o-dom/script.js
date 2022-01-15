//window.alert('isso é um alerta');

/* const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/'){
    console.log('é igual');
}

 */

/* const h1Selecionado = document.querySelector('h1');
//alert('teste');
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em ', h1Selecionado.innerText);
}) */

//Exercícios:
// Retorne o url da página atual utilizando o objeto window

const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector ('.ativo');


// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela

const largura = window.innerWidth;
console.log(largura);
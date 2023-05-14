// getElementById pega um elemento do HTML pelo id
const btn = document.getElementById('botao-alterar-tema')
// querySelector pega uma tag do HTMl
const body = document.querySelector('body')
const imgBTN = document.querySelector('.img-button')
const imgLogo = document.getElementById('logo')

// addEventListener adiciona um ação para seu elemento
btn.addEventListener('click', () => {
        // contains() verifica se o elemento contem a classe descrita no caso modo-escuro
        const modoEscuroAtivo = body.classList.contains('modo-escuro')
        //toggle() alterna o q esta escrito nele, nesse caso ele alterna o modo escuro, se já estiver ele tira, se não estiver ele coloca
        body.classList.toggle('modo-escuro')

        if(modoEscuroAtivo){
            //remove() remove do elemento o q está descrito
            //body.classList.remove('modo-escuro')

            // setAttribute() altera um atributo de um elemento, src é onde ele quer mudar e .src/imagens/sun.png é o caminho para achar o q vai ser mudado
            imgBTN.setAttribute('src','./src/imagens/sun.png')
            imgLogo.setAttribute('src', './src/imagens/pokedex-logo.svg')
        }
        else{
            // classList.add() adiciona uma classe ao elemento
            //body.classList.add('modo-escuro')

            imgBTN.setAttribute('src','./src/imagens/moon.png')
            imgLogo.setAttribute('src', './src/imagens/EquipeRoket-logo.svg')
        }
})

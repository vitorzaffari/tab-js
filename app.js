

const botoes = document.querySelectorAll('.tab-btn');
const secaoConteudo = document.querySelector('.secao-conteudo');
const conteudo = document.querySelectorAll('.conteudo-texto');

secaoConteudo.addEventListener('click', function(e){
    const id = e.target.dataset.id;


    if(id){
    botoes.forEach(function (btn) {
        btn.classList.remove('ativo');
        e.target.classList.add('ativo');
    });

    conteudo.forEach(function (item){
        item.classList.remove('ativo');
    });
     const element = document.getElementById(id);
     element.classList.add('ativo');
     }
})

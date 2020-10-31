var hamburger = document.querySelector(".hamburger"); /*Aqui será utilizado o seletor para pegar o menu, no caso o hamburger*/ 
/*O var é fundamental para distinguir variáveis locais de globais.*/

/*Não ocorreu modificão no código para melhor entendimento*/

/*Já a função document.querySelector() serve para buscar um elemento do mundo HTML 
e trazê-lo para o mundo JavaScript para que possamos manipulá-lo.*/

hamburger.addEventListener("click",function(){ /*addEventListener é a maneira de registrar uma espera de evento, quando esse evento (nesse caso, o click) ocorrer, será ativada uma função*/ 
    
    document.querySelector(".container").classList.toggle("show-menu"); /*A função será buscar um elemento do container(através do querySelector)*/ 
    
    /*E a partir da lista de classes (classList), fazer uma alteração (toggle)*/ 

    /*Exemplo:

    Quando a sidebar estiver escondida:
    .sidebar

    Quando a sidebar estiver à mostra:
    .sidebar show-menu*/

})

/*Aqui será desenvolvida, que mostrará o botão quando o evento de scroll ocorrer*/
function scroll(){ /*A função scroll é acionada*/ 
    let btn = document.getElementById("link-topo")/*É selecionado o button pelo id "link-topo"*/
    /*A oartur daqyum urpa cinoarar a medida em que foi feito o scroll a pardir do topo*/ 
    if (document.documentElement.scrollTop > 50){ /*Se a medida for maior do que 50*/ 
        btn.style.display = "block";/*O display do botão é modificado para block, caracterizando uma mostra.*/
    }
    else{/*Se não..*/
        btn.style.display = "none";/*O display do botão permanece o mesmo (none), e não ocorre nada*/
    }
}

/*Quando o scroll é feito, a função é acionada*/
window.onscroll = function() {
    scroll()
}

/*Já a função backtoTop() funcionará quando o botão for clicado, e irá posicionar o scrollTop na pos. 0 (posição inicial)*/
function backtoTop(){
    document.documentElement.scrollTop = 0
}

/*Agora será feito o cálculo do orçamento*/

document.querySelector("#qtde").addEventListener("change", atualizarPreco)/*O EventListener recebe 2 parâmetros: 1-O evento que se quer escutar, no caso uma alteração  2- A função que será executada a partir do evento, nesse caso, atualizar a qtd de pag*/
document.querySelector("#js").addEventListener("change", atualizarPreco) /*Tratando elemento com EventListener*/ 
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco) /*Tratando elemento com EventListener*/ 
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco) /*Tratando elemento com EventListener*/ 
document.querySelector("#prazo").addEventListener("change", function (){  /*No caso do prazo, além de fazer a atualização do preço, deseja-se mostrar a quantidade de semanas*/ 
    const prazo = document.querySelector("#prazo").value /*Para isso, defini-se uma constante prazo, que será indicada pelo valor do id prazo, no range, em HTML*/
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)` /*Para demonstrar o prazo*/
                                                                                    /*O label referente ao prazo será modificado pelo texto Prazo: 'X' semanas*/
    atualizarPreco()                                                                 
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value /* 2-definirá uma constante com o nome quantidade (qtde) / 3- atribuirá essa constante ao valor do id qtde-pag */
    const temJS = document.querySelector("#js").checked /*Necessidade de JS marcada*/
    const QuerLayout = document.querySelector("#layout-sim").checked /*Necessidade de layout*/
    const prazo = document.querySelector("#prazo").value /*Valor do prazo definido*/

    let preco = qtde * 100; /*Aqui é feito o cálculo inicial de preço por página*/

    if (temJS) preco *= 1.1 /*Se tem a necessiade de um script de js, por página será aumentado 10%*/

    if (QuerLayout) preco += 300 /*Se deseja o desenvolvimento de um layout, será aumentado em 300 reais o valor*/

    let taxaUrg = 1 - prazo*0.1; /*Aqui é definida a taxa de urgência, que caracteriza uma relação inversamente proporcional com o prazo*/

    preco *= 1 + taxaUrg /*Com isso, o preço será ele + a porcentagem da taxa de urgência*/

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}` /*Para a label de preço, o HTML interno dele será o valor do cálculo feito*/
                                                            /*O toFixed é utilizado para limitar a quantidade de casas decimais*/

}      

let spinnerWrapper = document.querySelector(".spinner-wrapper"); /*A primeira, selecionando o spinnerWrapper*/

/*Para fazer com que o evento pre-load ocorra, existem 2 formas*/

window.addEventListener("load", function(){ /*E adicionando um event-listener à window*/
    spinnerWrapper.style.display = "none"; /*Dessa forma, quando o evento de carregamento ocorrer, o display ficará none = Invisível*/
})    


/*Já a segunda...*/

/*window.addEventListener("load", function(){ /*E adicionando um event-listener à window*/
    /*spinnerWrapper.parentElement.removeChild("spinner-wrapper") = "none";*/ /*Dessa forma, quando o evento de carregamento ocorrer, 
                                                                            o elemento pai (body) irá remover o filho (spinnerWrapper)
})*/
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


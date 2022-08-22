var dimensao = prompt("Entre com a dimensão do tabuleiro");

imprimeMar(dimensao);

function imprimeMar(dimensao) {
    const main = document.querySelector('main');


    let htmlString = "";

    for (let i = 0; i < dimensao; i++) {
        for (let j = 0; j < dimensao; j++) {
            htmlString += `<div>${i}</div>`;
        }
        htmlString += `<br>`;

    }
    main.innerHTML = htmlString;
}

document.querySelector('div').onclick = function() {clicar()};

function clicar(){
    document.querySelector('id').innerHTML = "YOU CLICKED ME!";
};


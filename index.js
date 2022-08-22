var dimensao = prompt("Entre com a dimensão do tabuleiro");

imprimeMar(dimensao);

function imprimeMar(dimensao) {
    const main = document.querySelector('main');


    let htmlString = "";

    for (let i = 0; i < dimensao; i++) {
        for (let j = 0; j < dimensao; j++) {
            htmlString += `<div id = "teste">${i}</div>`;
        }
        htmlString += `<br>`;

    }
    main.innerHTML = htmlString;
}

//pensar num seletor, pois ID precisa ser único

document.getElementById('teste').onclick = function() {myFunction()};

function myFunction() {
  document.getElementById('teste').innerHTML = "YOU CLICKED ME!";
}


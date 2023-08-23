let data = new Date();


diaAtual = data.getDay();
mesAtual = data.getMonth() + 1;
anoAtual = data.getFullYear();


function clicou() {
    diaResult = document.querySelectorAll(".age-display");
    mesResult = document.querySelectorAll(".mesInserido");
    anoResult = document.querySelectorAll(".anoInserido");

    diaResult.innerHTML = diaAtual;
}




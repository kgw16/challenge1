
function limparCaixa(){


    var campo1 = document.querySelector("#name1");
    var campo2 = document.querySelector("#name2");
    console.log("oi");
    campo1.value="";
      campo2.value="";
    }

var buttonLimpar = document.querySelector(".bu3");

buttonLimpar.onclick = limparCaixa;


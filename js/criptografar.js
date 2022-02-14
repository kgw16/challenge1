function crip(){
    var mensagem=[];

    var palavra = document.querySelector("#name1");
    var texto = palavra.value;

    console.log(texto[1]);
    var cripto = texto.length; 
    console.log(cripto);

    var palavra2 = document.querySelector("#name2");

    
    

    for (var i = 0; i<cripto  ;i++) {


        var vogalA=true;
        var vogalE=true;
        var vogalI=true;
        var vogalO=true;
        var vogalU=true; 

        if(texto[i] == "a"){

            mensagem.push("ai");
            //Array.prototype.push.apply(mensagem, ai);
            vogalA=false;
        }
        if(texto[i] == "e"){

            mensagem.push("enter");
        //Array.prototype.push.apply(mensagem, enter);
        vogalE=false;
        }
        if(texto[i] == "i"){

            mensagem.push("imes");
            //Array.prototype.push.apply(mensagem, cripto[2]);
            vogalI=false;
        }
        if(texto[i] == "o"){

            mensagem.push("ober");
            //Array.prototype.push.apply(mensagem, cripto[3]);
            vogalO=false;
        }
        if(texto[i] == "u"){

            mensagem.push("ufat");
            //Array.prototype.push.apply(mensagem, ufat);
            vogalU=false;
        }
        if((vogalA == true) && (vogalE == true) && (vogalI == true) && (vogalO == true) && (vogalU == true)){

            mensagem.push(texto[i]);
        }
    }
console.log(mensagem);
palavra2.value=mensagem.join("");
}
var button1 = document.querySelector(".bu1");
button1.onclick = crip;



function descrip(){

    var palavra2 = document.querySelector("#name2");
    var codigo = palavra2.value;
    console.log(codigo);
    var mensagem=[];

    var palavra = document.querySelector("#name1");

    for(var i = 0 ;i < codigo.length; i++){

        var vogalA=true;
        var vogalE=true;
        var vogalI=true;
        var vogalO=true;
        var vogalU=true; 


        if(codigo[i]=="a"){
            mensagem.push("a");
            i=i+1;
            vogalA=false;
            console.log("funciona a");
            continue;
        }
        if(codigo[i]=="e"){
            mensagem.push("e");
            i=i+4;
            vogalE=false;
            console.log("funciona e");
            continue;
        }
        if(codigo[i]=="i"){
            mensagem.push("i");
            i=i+3;
            vogalI=false;
            console.log("funciona i");
            continue;
        }
        if(codigo[i]=="o"){
            mensagem.push("o");
            i=i+3;
            vogalO=false;
            console.log("funciona o");
            continue;
        }
        if(codigo[i]=="u"){
            mensagem.push("u");
            i=i+3;0
            vogalU=false;
            console.log("funciona u");
            continue;
        }
        if((vogalA == true) && (vogalE == true) && (vogalI == true) && (vogalO == true) && (vogalU == true)){

            mensagem.push(codigo[i]);
        }


    }
    palavra.value=mensagem.join("");
}



var button2 = document.querySelector(".bu2");

button2.onclick = descrip;

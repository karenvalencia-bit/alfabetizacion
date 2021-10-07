//lobo 
let lobo1=document.getElementById("lobo1");
let fotolobo1=document.getElementById("fotolobo1");
let lobo2=document.getElementById("lobo2");
let fotolobo2=document.getElementById("fotolobo2");

//cerdo 
let cerdo1=document.getElementById("cerdo1");
let fotocerdo1=document.getElementById("fotocerdo1");
let cerdo2=document.getElementById("cerdo2");
let fotocerdo2=document.getElementById("fotocerdo2");

//mono
let mono1=document.getElementById("mono1");
let fotomono1=document.getElementById("fotomono1");
let mono2=document.getElementById("mono2");
let fotomono2=document.getElementById("fotomono2");

//leon
let leon1=document.getElementById("leon1");
let fotoleon1=document.getElementById("fotoleon1");
let leon2=document.getElementById("leon2");
let fotoleon2=document.getElementById("fotoleon2");


let contadorlobo=0;
let contadorcerdo=0;
let contadormono=0;
let contadorleon=0;


lobo1.addEventListener("click", activarlobo1);
lobo2.addEventListener("click", activarlobo2);

cerdo1.addEventListener("click", activarcerdo1);
cerdo2.addEventListener("click", activarcerdo2);

mono1.addEventListener("click", activarmono1);
mono2.addEventListener("click", activarmono2);

leon1.addEventListener("click", activarleon1);
leon2.addEventListener("click", activarleon2);





function activarlobo1(){

    
    lobo1.classList.remove("bg-warning");
    fotolobo1.classList.remove("invisible");
    contadorlobo++;

    setTimeout(function() {

        if(contadorlobo !=2){
           lobo1.classList.add("bg-warning");
           fotolobo1.classList.add("invisible");
           contadorlobo--;

        }
        else{
            let audio1 = new Audio("audio/lobo.mp3");
            audio1.play();

            let resultadolobo=document.getElementById("resultadolobo");
            resultadolobo.classList.remove("invisible");
            resultadolobo.classList.add("visible");
        }
 
        
    },1000)
}


function activarlobo2(){

    
    lobo2.classList.remove("bg-primary");
    fotolobo2.classList.remove("invisible");
    contadorlobo++;

    setTimeout(function() {
 
        if(contadorlobo !=2){
            lobo2.classList.add("bg-primary");
           fotolobo2.classList.add("invisible");
           contadorlobo--;

        }
        else{
            let audio1 = new Audio("audio/lobo.mp3");
            audio1.play();
            let resultadolobo=document.getElementById("resultadolobo");
            resultadolobo.classList.remove("invisible");
            resultadolobo.classList.add("visible");
        }
    },1000)
}

function activarcerdo1(){

    
    cerdo1.classList.remove("bg-secondary");
    fotocerdo1.classList.remove("invisible");
    contadorcerdo++;

    setTimeout(function() {
 
        if(contadorcerdo !=2){
            cerdo1.classList.add("bg-secondary");
           fotocerdo1.classList.add("invisible");
           contadorcerdo--;

        }
        else{
            let audio1 = new Audio("audio/cerdo.mp3");
            audio1.play();
            let resultadoConstructor=document.getElementById("resultadocerdo");
            resultadoConstructor.classList.remove("invisible");
            resultadoConstructor.classList.add("visible");
        }
    },1000)
}


function activarcerdo2(){

    
    cerdo2.classList.remove("bg-dark");
    fotocerdo2.classList.remove("invisible");
    contadorcerdo++;

    setTimeout(function() {
 
        if(contadorcerdo !=2){
            cerdo2.classList.add("bg-dark");
           fotocerdo2.classList.add("invisible");
           contadorcerdo--;

        }
        else{
            let audio1 = new Audio("audio/cerdo.mp3");
            audio1.play();
            let resultadocerdo=document.getElementById("resultadocerdo");
            resultadocerdo.classList.remove("invisible");
            resultadocerdo.classList.add("visible");
        }
    },1000)
}

function activarmono1(){

    
    mono1.classList.remove("bg-danger");
    fotomono1.classList.remove("invisible");
    contadormono++;

    setTimeout(function() {

        if(contadormono !=2){
            mono1.classList.add("bg-danger");
           fotomono1.classList.add("invisible");
           contadormono--;

        }
        else{
            let audio1 = new Audio("audio/mono.mp3");
            audio1.play();

            let resultadomono=document.getElementById("resultadomono");
            resultadomono.classList.remove("invisible");
            resultadomono.classList.add("visible");
        }
 
        
    },1000)
}

function activarmono2(){

    
    mono2.classList.remove("bg-success");
    fotomono2.classList.remove("invisible");
    contadormono++;

    setTimeout(function() {

        if(contadormono !=2){
            mono2.classList.add("bg-success");
           fotomono2.classList.add("invisible");
           contadormono--;

        }
        else{
            let audio1 = new Audio("audio/mono.mp3");
            audio1.play();

            let resultadomono=document.getElementById("resultadomono");
            resultadomono.classList.remove("invisible");
            resultadomono.classList.add("visible");
        }
 
        
    },1000)
}
   


function activarleon1(){

    
    leon1.classList.remove("bg-info");
    fotoleon1.classList.remove("invisible");
    contadorleon++;

    setTimeout(function() {

        if(contadorleon !=2){
            leon1.classList.add("bg-info");
           fotoleon1.classList.add("invisible");
           contadorleon--;

        }
        else{
            let audio1 = new Audio("audio/leon.mp3");
            audio1.play();

            let resultadoleon=document.getElementById("resultadoleon");
            resultadoleon.classList.remove("invisible");
            resultadoleon.classList.add("visible");
        }
 
        
    },1000)
}

function activarleon2(){

    
    leon2.classList.remove("bg-warning");
    fotoleon2.classList.remove("invisible");
    contadorleon++;

    setTimeout(function() {

        if(contadorleon !=2){
            leon2.classList.add("bg-warning");
            fotoleon2.classList.add("invisible");
           contadorleon--;

        }
        else{
            let audio1 = new Audio("audio/leon.mp3");
            audio1.play();

            let resultadoleon=document.getElementById("resultadoleon");
            resultadoleon.classList.remove("invisible");
            resultadoleon.classList.add("visible");
        }
 
        
    },1000)
}
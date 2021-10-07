//medico
let medico1=document.getElementById("medico1");
let fotomedico1=document.getElementById("fotomedico1");
let medico2=document.getElementById("medico2");
let fotomedico2=document.getElementById("fotomedico2");

//constructor
let constructor1=document.getElementById("constructor1");
let fotoconstructor1=document.getElementById("fotoconstructor1");
let constructor2=document.getElementById("constructor2");
let fotoconstructor2=document.getElementById("fotoconstructor2");

//profesor
let profesor1=document.getElementById("profesor1");
let fotoprofesor1=document.getElementById("fotoprofesor1");
let profesor2=document.getElementById("profesor2");
let fotoprofesor2=document.getElementById("fotoprofesor2");

//policia
let policia1=document.getElementById("policia1");
let fotopolicia1=document.getElementById("fotopolicia1");
let policia2=document.getElementById("policia2");
let fotopolicia2=document.getElementById("fotopolicia2");


let contadormedico=0;
let contadorconstructor=0;
let contadorprofesor=0;
let contadorpolicia=0;


medico1.addEventListener("click", activarmedico1);
medico2.addEventListener("click", activarmedico2);

constructor1.addEventListener("click", activarconstructor1);
constructor2.addEventListener("click", activarconstructor2);

profesor1.addEventListener("click", activarprofesor1);
profesor2.addEventListener("click", activarprofesor2);

policia1.addEventListener("click", activarpolicia1);
policia2.addEventListener("click", activarpolicia2);





function activarmedico1(){

    
    medico1.classList.remove("bg-warning");
    fotomedico1.classList.remove("invisible");
    contadormedico++;

    setTimeout(function() {

        if(contadormedico !=2){
            medico1.classList.add("bg-warning");
           fotomedico1.classList.add("invisible");
           contadormedico--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();

            let resultadoMedico=document.getElementById("resultadoMedico");
            resultadoMedico.classList.remove("invisible");
            resultadoMedico.classList.add("visible");
        }
 
        
    },1000)
}


function activarmedico2(){

    
    medico2.classList.remove("bg-primary");
    fotomedico2.classList.remove("invisible");
    contadormedico++;

    setTimeout(function() {
 
        if(contadormedico !=2){
            medico2.classList.add("bg-primary");
           fotomedico2.classList.add("invisible");
           contadormedico--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();
            let resultadoMedico=document.getElementById("resultadoMedico");
            resultadoMedico.classList.remove("invisible");
            resultadoMedico.classList.add("visible");
        }
    },1000)
}

function activarconstructor1(){

    
    constructor1.classList.remove("bg-secondary");
    fotoconstructor1.classList.remove("invisible");
    contadorconstructor++;

    setTimeout(function() {
 
        if(contadorconstructor !=2){
            constructor1.classList.add("bg-secondary");
           fotoconstructor1.classList.add("invisible");
           contadorconstructor--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();
            let resultadoConstructor=document.getElementById("resultadoConstructor");
            resultadoConstructor.classList.remove("invisible");
            resultadoConstructor.classList.add("visible");
        }
    },1000)
}


function activarconstructor2(){

    
    constructor2.classList.remove("bg-dark");
    fotoconstructor2.classList.remove("invisible");
    contadorconstructor++;

    setTimeout(function() {
 
        if(contadorconstructor !=2){
            constructor2.classList.add("bg-dark");
           fotoconstructor2.classList.add("invisible");
           contadorconstructor--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();
            let resultadoConstructor=document.getElementById("resultadoConstructor");
            resultadoConstructor.classList.remove("invisible");
            resultadoConstructor.classList.add("visible");

        }
    },1000)
}

function activarprofesor1(){

    
    profesor1.classList.remove("bg-danger");
    fotoprofesor1.classList.remove("invisible");
    contadorprofesor++;

    setTimeout(function() {
 
        if(contadorprofesor !=2){
            profesor1.classList.add("bg-danger");
           fotoprofesor1.classList.add("invisible");
           contadorprofesor--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();
            let resultadoProfesor=document.getElementById("resultadoProfesor");
            resultadoProfesor.classList.remove("invisible");
            resultadoProfesor.classList.add("visible");
        }
    },1000)
}

function activarprofesor2(){

    profesor2.classList.remove("bg-danger");
    fotoprofesor2.classList.remove("invisible");
    contadorprofesor++;

    setTimeout(function() {
 
        if(contadorprofesor !=2){
            profesor2.classList.add("bg-danger");
           fotoprofesor2.classList.add("invisible");
           contadorprofesor--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();
            let resultadoProfesor=document.getElementById("resultadoProfesor");
            resultadoProfesor.classList.remove("invisible");
            resultadoProfesor.classList.add("visible");
        }
    },1000)
   
}

function activarpolicia1(){

    
    policia1.classList.remove("bg-info");
    fotopolicia1.classList.remove("invisible");
    contadorpolicia++;

    setTimeout(function() {

        if(contadorpolicia !=2){
            policia1.classList.add("bg-info");
           fotopolicia1.classList.add("invisible");
           contadorpolicia--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();

            let resultadoPolicia=document.getElementById("resultadoPolicia");
            resultadoPolicia.classList.remove("invisible");
            resultadoPolicia.classList.add("visible");
        }
 
        
    },1000)
}

function activarpolicia2(){

    
    policia2.classList.remove("bg-warning");
    fotopolicia2.classList.remove("invisible");
    contadorpolicia++;

    setTimeout(function() {

        if(contadorpolicia !=2){
            policia2.classList.add("bg-warning");
            fotopolicia2.classList.add("invisible");
           contadorpolicia--;

        }
        else{
            let audio1 = new Audio("audio/audio1.mp3");
            audio1.play();

            let resultadoPolicia=document.getElementById("resultadoPolicia");
            resultadoPolicia.classList.remove("invisible");
            resultadoPolicia.classList.add("visible");
        }
 
        
    },1000)
}
let medico1=document.getElementById("medico1");
let fotomedico1=document.getElementById("fotomedico1");
let medico2=document.getElementById("medico2");
let fotomedico2=document.getElementById("fotomedico2");


medico1.addEventListener("click", activarmedico1);
medico2.addEventListener("click", activarmedico2);


function activarmedico1(){

    
    medico1.classList.remove("bg-dark");
    fotomedico1.classList.remove("invisible");

    setTimeout(function() {
 
        medico1.classList.add("bg-dark");
    fotomedico1.classList.add("invisible");
    },1000)
}

function activarmedico2(){

    
    medico2.classList.remove("bg-dark");
    fotomedico2.classList.remove("invisible");

    setTimeout(function() {
 
        medico2.classList.add("bg-dark");
    fotomedico2.classList.add("invisible");
    },1000)
}
let menuVisible = false;

function mostrarOcultarMenu(){

    if(menuVisible){

        document.getElementById("nav").classList = "";

        menuVisible = fasle;

    }else{


        document.getElementById("nav").classList = "responsive";

        menuVisible = true;

    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";

    menuVisible = false;
}

function efectoHabilidades(){
    
    let skills = document.getElementById("skills");

    let distacia_skills = window.innerHeight = skills.getBoundingClientRect().top;

    if(distacia_skills >= 300){

        let habilidades = document.getElementsByClassName("progreso");

        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("photoshop");
        habilidades[2].classList.add("JavaScript");
        habilidades[3].classList.add("Apis");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("Comunicación");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("Proyect");
    }
}

/*DETECTO EL SCROLL Y APLICA LAS ANIMACIONES*/
window.onscroll = function(){

    efectoHabilidades();

}
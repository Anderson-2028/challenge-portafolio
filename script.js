let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades [0].classList.add("javascript");
        habilidades [1].classList.add("htmlcss");
        habilidades [2].classList.add("comunicacion");
        habilidades [3].classList.add("trabajoenequipo");
        habilidades [4].classList.add("creactividad");
    }
}


window.onscroll = function(){
    efectoHabilidades();
}
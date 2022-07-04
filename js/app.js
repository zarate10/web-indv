const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('.desplegar')
const loader = document.querySelector('.loaderbg')


let desplegado = false;
function desplegar(){ 

    if (desplegado === false){ 
        menu.style.marginTop = "0px"
        desplegado = true
    } else { 
        menu.style.marginTop = "-500px"
        desplegado = false
    }

}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loader.style.display = "none";

    }, 1000)
});
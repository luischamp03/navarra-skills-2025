let contenedorPets = document.querySelector(".pet_detalles");

let pets = document.querySelectorAll(".pet_detalle");

const btnRecargar = document.getElementById("btn_recargar");
const btnMatch = document.getElementById("btn_match");
const btnNoMatch = document.getElementById("btn_nomatch");

pets = Array.from(pets);

console.log(pets);


document.addEventListener("click", e => {
    if(e.target === btnRecargar || e.target === btnMatch || e.target === btnNoMatch){
        pets.pop().remove();
        console.log(pets);
    }
} )
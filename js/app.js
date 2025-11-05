let contenedorPets = document.querySelector(".pet_detalles");

let pets = document.querySelectorAll(".pet_detalle");

const btnRecargar = document.getElementById("btn_recargar");
const btnMatch = document.getElementById("btn_match");
const btnNoMatch = document.getElementById("btn_nomatch");

const matches = document.querySelector(".matches");

pets = Array.from(pets);

console.log(pets);

document.addEventListener("click", (e) => {
  if (e.target === btnMatch) {
    let spanContador = document.querySelector(".match-count");
    let contador = 1;
    if (spanContador) {
      contador = parseInt(spanContador.textContent) + 1;
      spanContador.textContent = contador;
    } else {
      spanContador = document.createElement("span");
      spanContador.classList.add("match-count");
      spanContador.textContent = 1;
      matches.appendChild(spanContador);
    }
    console.log(contador);
  }
});

/*document.addEventListener("click", e => {
    if(e.target === btnRecargar || e.target === btnMatch || e.target === btnNoMatch){
        pets.pop().remove();
        console.log(pets);
    }
} )*/

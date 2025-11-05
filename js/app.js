let contenedorPets = document.querySelector(".pet_detalles");
let pets = document.querySelectorAll(".pet_detalle");
const btnRecargar = document.getElementById("btn_recargar");
const btnMatch = document.getElementById("btn_match");
const btnNoMatch = document.getElementById("btn_nomatch");
const matches = document.querySelector(".matches");

pets = Array.from(pets);

console.log(pets);

function sumaContador() {
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
}

function contadorMatches(e) {
  if (e.target === btnMatch) {
    sumaContador();
  }
}

function noMatch(e) {
  if (e.target === btnNoMatch) {
    pets.pop().remove();
  }
}

document.addEventListener("click", contadorMatches);
document.addEventListener("click", noMatch);

let isDragging = false;
let offsetX = 0,
  offsetY = 0;

pets.forEach((pet) => {
  let adoptar = pet.querySelector(".adoptar");
  let nope = pet.querySelector(".nope");
  let coords;

  pet.addEventListener("mousedown", function (event) {
    isDragging = true;
    offsetX = event.clientX - pet.offsetLeft;
    offsetY = event.clientY - pet.offsetTop;
    pet.style.cursor = "grabbing";
  });

  pet.addEventListener("mousemove", function (event) {
    if (!isDragging) return;
    coords = event.clientX - offsetX;
    if (coords > 0) {
      adoptar.style.opacity = coords / 100;
    } else {
      nope.style.opacity = (coords / 100) * -1;
    }
    pet.style.transform = `translateX(${coords}px) rotate(${coords / 10}deg)`;
  });

  pet.addEventListener("mouseup", function () {
    if (isDragging) {
      isDragging = false;
      pet.style.cursor = "grab";
      pet.style.transform = `translateX(0px) rotate(0deg)`;
      adoptar.style.opacity = 0;
      nope.style.opacity = 0;
      offsetX = 0;
      offsetY = 0;

      if (coords > 100) {
        sumaContador();
        pet.remove();
      }

      if (coords <= -100) {
        pet.remove();
      }
    }
  });
});

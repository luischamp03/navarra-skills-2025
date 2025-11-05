# Fase 1

## Funcionalidad de eliminar card de pets

Capturé los 3 botones y además las cards de los pets en un array. Cuando se pulsa un botón, desaparece la última card que se encuentra en el array y se remueve del html

```js
document.addEventListener("click", (e) => {
  if (
    e.target === btnRecargar ||
    e.target === btnMatch ||
    e.target === btnNoMatch
  ) {
    pets.pop().remove();
  }
});
```

# Fase 2

## Funcionalidad de contador de matches

Realicé la funcionalidad de contador de matches donde verifico primero si existe el elemento en el DOM. De ser así, capturo su contenido y lo sumo. De no ser así, creo el elemento.

```js
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
```

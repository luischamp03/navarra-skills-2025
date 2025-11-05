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

# Navarra Skills 2025

## 💬 **Antes de empezar…**

Queremos que sepas que esta prueba no está pensada solo para evaluarte. No esperamos que sepas hacer todo o incluso que te de tiempo a terminar todas las fases de la prueba, por lo que no te preocupes si algo no sale perfecto o si tienes que buscar cómo hacer cierta animación o lógica. Es normal y nos ocurre a todos.

Lo que si que te pedimos es que el código que utilices lo entiendas y seas capaz de explicarlo.

Hemos desarrollado la prueba completa para que:

- Puedas inspeccionar y replicar el diseño.
- Para que, en caso de que alguna parte del enunciado no la tengas clara, puedas analizar y probar tantas veces como necesites

[https://adopter.vercel.app](https://adopter.vercel.app)

Ahora sí... Explora, equivócate, vuelve atrás, mejora… y sobre todo...**¡disfruta del camino!**

## 🧠 Contexto

¡Hola!

Soy el fundador de "Adopter", un proyecto que nació de una idea muy simple: hacer que adoptar un animal sea tan fácil y emocionante como hacer “match”.

Quiero crear una aplicación web que conecte a personas con animales en adopción, permitiendo que puedan descubrirlos uno a uno, indicar si creen hacer match con él, y vivir una experiencia visual y fluida durante el proceso.

El foco inicial del proyecto está en la experiencia de usuario (UX) y en la interfaz (UI). Quiero que la aplicación sea tan agradable de usar que la gente quiera seguir buscando su mascota ideal.

Para ello, necesito que tú seas la persona encargada de construir el MVP (mínimo producto viable).

No te preocupes, el diseño de lo que necesitamos por el momento está hecho y lo puedes [consultar aquí](https://www.figma.com/design/WhbXd9IZ2p2YLMnrXBJmKp/Adopter-%7C-Navarra-Skills-2025), ya que el trabajo del diseñador ya ha sido realizado. Tu tarea será convertir ese diseño en una `web-app` funcional, `mobile first`, e ir añadiendo funcionalidades de forma progresiva.

Hasta el momento, he definido tres fases que van desde una versión simple y funcional hasta una versión más rica e interactiva, con la idea de lanzar la aplicación al mundo cuanto antes y poder aportar valor a las personas y animales.

### ⚙️ Fase 1 · Maquetación e interacción básica

En esta primera fase, necesitaré tener una versión mínima viable del producto.

**Objetivo**:

Traducir el diseño a código e implementar las interacciones básicas con los botones.

**Qué espero**:

- Que el diseño entregado esté implementado con fidelidad y con enfoque `mobile first`.
- Que en pantalla se muestren las siguientes secciones:

  - Header con el logo
  - Contenido principal con:

    - Las tarjetas centradas, apiladas una detrás de otra, con la información del animal (imagen, nombre, edad, etc.).
    - Detrás de todas las tarjetas, tendremos un mensaje acompañado de un icono para informar al usuario de que por el momento no hay mas animales para adoptar.
    - Botonera de acciones:
      - 🔄 Recargar - por el momento no será necesario que haga nada
      - ❤️ Match
      - ❌ Descartar

  - Que al pulsar cualquiera de los botones, la tarjeta deberá desaparecer de la web (eliminar del html).
  - Que los datos de los animales provengan directamente del HTML, ya que no tenemos un backend que nos los provea por el momento.

### 📈 Fase 2 · Contador de matches

Ahora quiero añadir un poco más de feedback visual.

**Objetivo**:

Mostrar al usuario con cuántos animales ha hecho "match".

**Qué espero**:

- Que en el header incluyas un contador visible del número de “matches”.
- Que este contador se actualice dinámicamente al hacer clic en el botón de match️.
- Que el indicador se muestre cuando haya algún match y no antes.

### 💫 Fase 3 · Animaciones e interacción por gestos (swipe)

Esta es la fase donde quiero que la experiencia de usuario vaya al siguiente nivel.

**Objetivo**:

Permitir que el usuario pueda arrastrar la tarjeta hacia la derecha o izquierda para indicar “match” o “reject” y añadir “movimiento” a los eventos clic de los botones.

**Qué espero**:

- Que la tarjeta siga el movimiento del dedo de forma fluida y natural al arrastrar (dragging).
- Que al mover la tarjeta en el eje horizontal, aparezca el texto de “Adoptar” o “Nope” de manera progresiva y fluida.
- Que al completar el gesto (cuando suelte la tarjeta) y haya habido un desplazamiento de 100px, se interprete correctamente si ha sido “match” o “reject”, y aparezca la siguiente tarjeta.
- Que al completar el gesto (cuando suelte la tarjeta) y no haya habido un desplazamiento de 100px, la tarjeta vuelva a su estado inicial.
- Que el gesto funcione de forma independiente a los clics de los botones.
- Que al al clicar sobre los botones, la tarjeta activa se anime hacia el lado correspondiente,que rote y reduzca su opacidad al mínimo. Mantendremos que la tarjeta desaparezca del DOM una vez la transición de la que hablamos haya terminado.

## 🧩 Criterios de evaluación

Más allá de que la aplicación “funcione”, queremos ver cómo trabajas y tu pensamiento de desarrollador.

Tendremos en cuenta:

- Que cada fase que se desarrolle funcione correctamente y se construya sobre la anterior sin romper nada de lo ya existente.
- Commits frecuentes y descriptivos, mostrando cómo vas avanzando en la creación de la aplicación.
- Limpieza, legibilidad y organización del código.
- Fidelidad al diseño entregado (UI / UX) y adaptación a los distintos dispositivos. Para dispositivos móviles no es necesario contemplar la orientación `landscape`.
- Suavidad y naturalidad en las animaciones o transiciones.
- Documentación.

## 🚀 Documentación

Queremos que dentro del propio archivo en el que estás (o en otro fichero a parte, en caso de que conozcas la sintaxis `markdown`) documentes qué hacen los distintos bloques de código (fundamentalmente lo referente a Javascript) y en caso de que hayas tenido dudas de cómo encararlo, expliques el por qué de las decisiones tomadas.

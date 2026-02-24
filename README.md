
# ⚡ Actividad: La Odisea de los Bits

Has sido convocado por la mismísima Atenea para construir el **Portal de las Deidades**. Los dioses están dispersos y los héroes no encuentran su camino. Tu misión es reconstruir el sistema de navegación del Olimpo utilizando Vue Router (Composition API).

## 📜 El Contexto

El Olimpo es una aplicación de una sola página (SPA). Para que los mortales y semidioses interactúen con él, necesitan un sistema que sepa exactamente quién los visita, qué buscan y a dónde tienen permitido ir.

---

## 🛠️ Requisitos Técnicos Previos

* Un proyecto de Vue 3.
* Vue Router instalado y configurado.
* Conocimiento de `useRoute` y `useRouter`.

---

## 🏛️ Desafío 1: El Registro de las Deidades (useRoute.params)

Cada dios tiene un reino propio. No podemos crear una página para cada uno; necesitamos una **Ruta Dinámica**.

**Instrucciones:**

1. Crea una ruta que reciba un parámetro dinámico llamado `id`.
2. En el componente de destino, utiliza la herramienta adecuada para capturar ese `id` de la URL.
3. Muestra en pantalla un mensaje que diga: *"Bienvenido al reino de [ID-DEL-DIOS]"*.
4. Si el usuario cambia el ID manualmente en la barra de direcciones del navegador, el mensaje debe actualizarse automáticamente.

---

## 🏹 Desafío 2: El Carcaj de Artemisa (useRoute.query)

Artemisa necesita filtrar sus flechas mágicas. Los mortales pueden buscar por tipo o por poder a través de la URL.

**Instrucciones:**

1. Crea una página llamada `Carcaj`.
2. El componente debe ser capaz de leer "parámetros de consulta" (query strings) de la URL (ejemplo: `?tipo=fuego&cantidad=50`).
3. Muestra en la interfaz qué está buscando el usuario basándote únicamente en lo que dice la URL.
4. Añade una sección de "Filtros Activos" donde se listen los valores encontrados en la consulta.

---

## 🕊️ Desafío 3: Las Sandalias de Hermes (useRouter.push)

Hermes es el mensajero. Él no espera a que alguien haga clic en un enlace; él decide a dónde ir basándose en eventos.

**Instrucciones:**

1. Crea un formulario simple (o un conjunto de botones) en la página de inicio.
2. En lugar de usar etiquetas `<a>` o `<router-link>`, utiliza una función en JavaScript para navegar.
3. Al presionar un botón de "Ir al Inframundo", el código debe enviar al usuario a la ruta `/hades`.
4. Al presionar un botón de "Búsqueda Divina", el código debe recoger un texto de un input y enviar al usuario a la ruta del Desafío 2, pasando el texto como un `query parameter`.

---

## 💀 Desafío 4: El Juicio de Minos (useRouter.replace)

No todos pueden entrar al Elíseo. Si un mortal intenta entrar a una ruta prohibida, debe ser expulsado sin posibilidad de volver atrás con el botón del navegador.

**Instrucciones:**

1. Crea una ruta llamada `/eliseo`.
2. Simula una validación: si el usuario no tiene una "moneda de oro" (puedes usar una variable booleana simple en el script), el sistema debe redirigirlo inmediatamente a la ruta `/entrada-inframundo`.
3. **Condición crítica:** La redirección debe hacerse de tal forma que, si el usuario intenta darle al botón "Atrás" del navegador, no pueda regresar a la pantalla de error; debe saltarse esa entrada en el historial.

---

## 🛡️ Entregables

Para considerar la misión cumplida, los alumnos deben demostrar:

1. Que el sistema reconoce diferentes dioses cambiando solo la URL.
2. Que los filtros de búsqueda funcionan al escribir manualmente en la URL.
3. Que la navegación por botones funciona correctamente sin recargar la página.
4. Que el acceso denegado no permite "volver atrás" al sitio prohibido.

---

## 💡 Una pista del Oráculo

> *"Recuerda, viajero: uno de tus aliados sirve para **leer** el mapa que ya tienes en la mano, mientras que el otro es la **fuerza** que te empuja hacia un nuevo destino."*

¡Mucha suerte en tu odisea! El Olimpo confía en tu código.
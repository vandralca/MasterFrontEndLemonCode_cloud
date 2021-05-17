# Listado de imágenes con React

## Resumen

Como miembro de un portal de un banco de imagenes nos piden tener un carrito de la compra siempre 
visible: - El usuario tiene una area principal en la que se muestra una página con imagenes, cada imagen
tiene un checkbox que permite seleccionarlo y añadirlo al carrito de la compra (cada imagen tiene un ID).

## Mejoras incluídas

- El carrito permite elementos tanto de "gatitos" como de "perritos" simultáneamente, incluso 
cuando se navega entre galerías, pudiendo añadir/borrar de ambos tipos manteniendo la coherencia.
- Haz que el carrito se puede ocultar.
- Implementa una página de "checkout" para hacer el pedido.
- Estilalo con material UI.
- Añade una opcíon de vaciar carrito.

## Revisión

- Las escenas no tienen lógica
- Cada pod se descompone en componente y container (los containers no llevan sufijo "container" en el
nombre del componente React, sí en el nombre del fichero).
- Routing usando variables TS en lugar de valores hardcodeados.
- Se ha extraído a un servicio la parte correspondiente a la lógica de recuperación de imágenes
- Se ha introducido algún pequeño custom hook a modo de uso

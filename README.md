Prueba Final - Cafetería Nanacao (Testing con Jest y Supertest)

Este repositorio contiene la solución al desafío práctico de testing para la API REST de la **Cafetería Nanacao**.

El objetivo principal es implementar pruebas unitarias y de integración para validar el correcto funcionamiento de las 
rutas principales del servidor Express utilizando **Jest** y **Supertest**.

## Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución para JavaScript.
* **Express** - Framework para la creación de la API REST.
* **Jest** - Framework de pruebas en JavaScript.
* **Supertest** - Librería para testear servidores HTTP.

## Requerimientos y Cobertura de Pruebas

En el archivo `tests/server.spec.js` se implementaron las siguientes pruebas:

1. **`GET /cafes`**: Comprueba que la ruta devuelve un estado HTTP **200** y que la respuesta es un arreglo con al menos 1 objeto.
2. **`DELETE /cafes/:id`**: Verifica que al intentar eliminar un café con un `id` inexistente devuelva un código **404**
    (incluyendo el token de autorización en la cabecera).
3. **`POST /cafes`**: Valida que la creación de un nuevo café agregue el objeto correctamente y retorne un estado **201**.
4. **`PUT /cafes/:id`**: Comprueba que si se intenta actualizar un café enviando un `id` en los parámetros diferente al `id` del
   payload, la API devuelva un estado **400**.


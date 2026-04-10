# 🧪 Ejercicio: CRUD básico con Express (Node.js)

## 🎯 Objetivo

Desarrollar un servidor web utilizando **Node.js** y **Express** que permita gestionar una lista de inventores mediante una API REST.

---

## 📦 Datos iniciales

Trabajar con el siguiente arreglo en memoria:

```js
const inventors = [
  { _id: 1, first: "Albert", last: "Einstein", year: 1879 },
  { _id: 2, first: "Isaac", last: "Newton", year: 1643 },
  { _id: 3, first: "Galileo", last: "Galilei", year: 1564 },
  { _id: 4, first: "Marie", last: "Curie", year: 1867 },
  { _id: 5, first: "Johannes", last: "Kepler", year: 1571 },
  { _id: 6, first: "Nicolaus", last: "Copernicus", year: 1473 },
  { _id: 7, first: "Max", last: "Planck", year: 1858 },
];
```

---

## ⚙️ Requisitos

1. Crear un servidor con Express.
2. El servidor debe ejecutarse en el puerto **3000**.
3. Configurar el middleware necesario para trabajar con JSON.

---

## 🔌 Endpoints a implementar

### 1. GET `/`
Debe devolver un mensaje de bienvenida indicando que la API está funcionando.

---

### 2. GET `/inventors`
Debe devolver la lista completa de inventores.

---

### 3. GET `/inventors/:id`
Debe devolver un inventor según su `_id`.

- Si no existe, responder con código **404**.

---

### 4. POST `/inventors`
Debe permitir agregar un nuevo inventor.

- Recibe datos por `body`
- Debe generar automáticamente el `_id`
- Validar que los campos `first`, `last` y `year` estén presentes
- Si faltan datos, responder con **400**

---

### 5. PUT `/inventors/:id`
Debe actualizar un inventor existente.

- Recibe datos por `body`
- Si el inventor no existe, responder con **404**
- Validar datos obligatorios

---

### 6. DELETE `/inventors/:id`
Debe eliminar un inventor por `_id`.

- Si no existe, responder con **404**

---

## 📌 Condiciones

- No utilizar base de datos
- Toda la información debe mantenerse en memoria
- Utilizar JavaScript
- Probar los endpoints con herramientas como Postman o Thunder Client

---

## ⭐ Extras (opcional)

- Crear un endpoint para buscar por apellido  
  `GET /inventors/search?last=Curie`

- Crear un endpoint para filtrar por año  
  `GET /inventors/before/:year`

---

## ❓ Preguntas guía

1. ¿Qué diferencia hay entre `req.params` y `req.body`?
2. ¿Qué código de estado HTTP usarías si un recurso no existe?
3. ¿Qué limitaciones tiene usar datos en memoria?
4. ¿Qué verbo HTTP corresponde a cada operación CRUD?

---

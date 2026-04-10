# 🧪 Ejercicio CRUD con usuarios

## 🎯 Objetivo
Trabajar con un archivo `users.json` y desarrollar funciones para realizar operaciones CRUD (Create, Read, Update, Delete).

---

# 🧩 Consignas

## 1️⃣ Read – Listar usuarios

Crear funciones que permitan:

- Obtener todos los usuarios
- Buscar un usuario por `id`
- Filtrar usuarios por `pais`
- Filtrar usuarios por estado (`activo`)

---

## 2️⃣ Create – Agregar usuario

Crear una función que permita agregar un nuevo usuario.

### Reglas
- El `id` no debe repetirse
- El `email` no debe repetirse
- Todos los campos son obligatorios

---

## 3️⃣ Update – Modificar usuario

Crear una función para actualizar un usuario por `id`.

### Debe permitir modificar:
- nombre
- apellido
- email
- edad
- país
- estado (`activo`)

---

## 4️⃣ Delete – Eliminar usuario

Crear una función que elimine un usuario por `id`.

---

# ⚠️ Validaciones

Agregar validaciones para:

- Edad mayor a 0
- Email con formato válido
- No permitir duplicados (`id` y `email`)
- No permitir actualizar o eliminar usuarios inexistentes

---

# 💾 Persistencia en archivo (opcional)

- Leer los usuarios desde `usuarios.json`
- Guardar los cambios luego de cada operación

---

# 🚀 Nivel intermedio (opcional)

- Listar usuarios ordenados por edad
- Contar usuarios por país
- Buscar usuarios por nombre o apellido
- Implementar baja lógica (usar `"activo": false` en lugar de eliminar)

---
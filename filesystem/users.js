import fs from "fs";

// Leer los usuarios del archivo users.json
function leerUsuarios() {
    const usuarios = fs.readFileSync("users.json", "utf-8");
    // JSON.parse convierte un string JSON en un array de objetos de JavaScript
    const objetosUsuarios = JSON.parse(usuarios);

    // agregar elemento al array de objetos
    objetosUsuarios.push({ nombre: "Juan Pedro", pais: "Argentina" });

    objetosUsuarios[0].pais = "Chile";

    return objetosUsuarios;
}

console.log(leerUsuarios());

function escribirUsuarios(usuarios) {
    // Asi como JSON.parse convierte un string a JSON. JSON.stringify convierte un array de objetos a un string JSON
    
    fs.writeFileSync("users.json", JSON.stringify(usuarios, null, 2), "utf-8");
}
import fs from "fs";

const data = fs.readFileSync("texto.txt", "utf-8");

console.log(data);
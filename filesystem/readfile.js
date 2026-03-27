import fs from "fs";
import chalk from "chalk";

const data = fs.readFileSync("filesystem/texto.txt", "utf-8");

    // NPM es el gestor de paquetes de Node.js,

console.log(chalk.bgBlue(data));
console.log(chalk.bgRed(data));
console.log(chalk.bgGreen(data));

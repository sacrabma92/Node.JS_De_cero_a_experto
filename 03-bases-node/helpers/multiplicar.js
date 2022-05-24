const fs = require("fs");
const colors = require("colors/safe");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(colors.red("================="));
      console.log(colors.bgBlue("    Tabla del:", base));
      console.log(colors.red("================="));

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

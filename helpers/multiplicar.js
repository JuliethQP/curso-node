const fs = require('fs');

const crearArchivo = async (base = 5, listar, hasta=10) => {
  let salida = ''
  try {    
      for (let i = 1; i <= hasta; i++) {
        salida += (`5x ${i} = ${i * base}\n`)
      }    

    if (listar) {
      console.log(salida)
    }
    fs.writeFileSync(`salidas/tabla-${base}.txt`, salida)


    return `tabla-${base}.txt`
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  crearArchivo
}
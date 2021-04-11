
const argv =require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.log(argv)




crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(`archivo creado ${nombreArchivo}`))
  .catch(err => console.log(err))


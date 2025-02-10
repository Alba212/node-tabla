// tema: Configuracion de Yargs independiente

const {crearArchivo} = require('./organizacion/multiplicar');
const argv = require('./Yargs/yargs');





crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

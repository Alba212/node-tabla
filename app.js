// fs = file system
// const fs = require('fs');
const {crearArchivo} = require('./organizacion/multiplicar');
// tema: yargs
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check((argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .argv;


console.log(argv);



crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));







    

/*
let salida = '';

for(let i= 1; i<=10; i++){
    salida += `${base} x ${i} = ${ base * i }\n`;
}

console.log(salida);
 
fs.writeFile(`tabla- ${base}.txt`, salida, (err) =>{ primera forma
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
})

fs.writeFileSync(`tabla- ${base}.txt`, salida); segundo forma

console.log(`tabla-${base}.txt creado`);
*/
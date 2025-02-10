const { error } = require('console');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    /*
    let salida = '';

    for(let i= 1; i<=10; i++){
        salida += `${base} x ${i} = ${ base * i }\n`;
    }

    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    console.log(`tabla-${base}.txt creado`);
    */
   
    return new Promise((resolve, reject) => {
        let salida = '';
        let consola = '';
        
        
            for(let i= 1; i<=hasta; i++){
                salida += `${base} x ${i} = ${ base * i }\n`;
                consola += `${colors.green(base)} x ${colors.red(i)} = ${ base * i }\n`;
            }
    
        
        
        if(listar){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        (salida) ?
        resolve(`tabla-${base}.txt`)
        : reject('Error');

    });

}

module.exports = {
    crearArchivo
}

//require
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=============='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=============='.green);
    for (let i = 1; i <= limite; i++) {
        let multiplo = base * i;
        console.log(`${base} x ${i} = ${multiplo} `);
    }
}







// module.exports.crearArchivo = (base) => {}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let multiplo = base * i;
            data += `${base} x ${i} = ${multiplo} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
            console.log('The file has been saved!');
        });

    });
}



module.exports = {
    crearArchivo,
    listarTabla
}
//require
//const fs = require('fs');

const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
    //let base = '1';

let commando = argv._[0];
switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:   ${archivo.red}`))
            .catch(err => console.log(err));


        break;
    default:
        console.log('comando no reconocido');
}

//let argv2 = process.argv;

//console.log('limite', argv.limite);
//console.log(argv);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//convertir de string a arreglo, separar elementos

// ejecutar node app --base=3
//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(err => console.log(err));
// let data = '';

//for (let i = 1; i <= 10; i++) {
//  let multiplo = base * i;
// data += `${base} x ${i} = ${multiplo} \n`;
//}
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//  if (err) throw err;
//  console.log('The file has been saved!');
//});
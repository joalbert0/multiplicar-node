const opts = {
    base: {

        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'igenera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}



//const argv = require('yargs')
//  .command('listar', 'imprime en consola la tabla de multiplicar', {
//    base: {

//      demand: true,
//     alias: 'b'
// },
// limite: {
//   alias: 'l',
//   default: 10
// }

// })
//.command ('crear','genera un archivo de tabla de multiplicar',{
//  base: {

//    demand: true,
//  alias: 'b'
//},
//limite: {
//  alias: 'l',
// default: 10
//}
//})
//.argv;


//.help()
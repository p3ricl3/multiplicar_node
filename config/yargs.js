const option = {

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
    .command('listar', 'Imprime en consola la tabla de multiplicar', option)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', option)
    .help()
    .argv;


module.exports = {
    argv
}
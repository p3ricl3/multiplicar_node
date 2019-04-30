const { creaArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;




// tabla de multiplicar

let comando = argv._[0];


switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':

        creaArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${ archivo }`))
            .catch(err => console.log(err))

        break;

    default:

        console.log('Comando no reconocido');

}

//console.log(process.argv);



// let parametro = argv[2];
// let base = parametro.split('=')[1]
const { CrearArchivo, ListarTabla } = require('./multiplicar/multiplicar')
const argv = require('./cofig/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'Listar':
        ListarTabla(argv.base, argv.limite)
            .then(solucion => console.log(colors.red(solucion)))
            .catch(error => console.log(error).blue);
        break;

    case 'Crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(
                colors.yellow('Archivo creado') +
                colors.blue(` ${archivo}`)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
}
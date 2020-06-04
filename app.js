const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('Tareas por hacer: '.green);
        for ( let tarea of listado ){
            console.log(`tarea: ${tarea.descripcion}, estado: ${tarea.completado}`);
        }
        console.log('Listar tareas');
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando invalido');
        break;
}

// function counting(miArray, ele ){
//     let contador = 0;
//     miArray.map( element => {
//         if(element === ele)
//         contador++;
//     })
//     return contador;
// }

// miArray = [1,2,2,5,4,8,5,3,5,5];

// console.log(counting(miArray, 5));
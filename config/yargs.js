const options = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Tarea por hacer'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por realizar', { 
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Tarea por hacer'
        }
     })
    .command('actualizar', 'Actualiza el estado de una tarea, por defecto a true', { 
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Marca como completada o pentiende una tarea'
        }
    })
    .command('borrar', 'Borra un elemento pidiendo la descripción', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};
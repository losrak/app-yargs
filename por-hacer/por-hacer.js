const fs = require('fs');

let listadoPorHacer = [];

const guardarData = () => {
    let data = JSON.stringify(listadoPorHacer);
    if(data){
        fs.writeFile('db/data.json', data, (err) => {
            if(err)
                throw new Error('No se pudo grabar en el archivo', err);
            else{
                console.log("Se guardaron los datos correctamente");
                return data;
            }
        });
    }
};

cargarDB = () => {
    
    try{

        listadoPorHacer = require('../db/data.json');
    }catch  (error){
        listadoPorHacer = [];
    }

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion, 
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarData();
    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();
    console.log(listadoPorHacer);

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarData();
        return true;
    }else{
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarData();
        return true;
    }

    // let index = listadoPorHacer.findIndex( tarea => {
    //     return tarea.descripcion === descripcion;
    // });

    // if(index >= 0){
    //     listadoPorHacer.splice(index,1);
    //     guardarData();
    //     return true;
    // }else{
    //     console.log('No existe ese elemento');
    // }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
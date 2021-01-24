const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la trea por hacer'
};
const completado ={
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const  argv  =  require ('yargs')
                    .command('crear','Crear un elemento por hacer',{
                        descripcion
                    })
                    .command('actualizar','Actualizar el estado completado de una taea',{
                        descripcion,
                        completado
                    })
                    .command('borrar','borra una tarea',{
                        descripcion
                    })
                    .help()
                    .argv;
module.exports = {
    argv
}
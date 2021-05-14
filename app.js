const moduloTareas = require('./tareas/tareas.js')// Declaro una constante y requiero el modulo tareas.
const process = require('process');// Declaro una constante y requiero del modulo nativo el metodo "process",para poder interactuar con la terminal y recibir los datos.
const accion = process.argv[2];// Declaro la constante accion y le asigno lo que devuelve la propiedad argv, en su posicion 2, de process.


switch (accion) { // Realizo un switch para trabajar con condicionales.
    case 'crear' : // En caso de escribir 'crear' en la posicio 2 del argv, debe hacer lo siguiente:
        let titulo = process.argv[3]; // Declaro la variable titulo y le asigno lo que recibe por escrito en la posicion 3 de la propiedad argv, de process.
        if (!titulo) { // En caso de no recibir titulo:
            console.log('Debes escribir un titulo'); // Muestra por consola este mensaje.
            break;
        }
        moduloTareas.guardarTarea(titulo) // Requiero del moduloTareas el metodo guardarTarea().
        break;
    case 'filtrar' : // En caso de escribir 'filtrar' en la posicio 2 del argv de process, debe hacer lo siguiente:
        moduloTareas.leerPorEstado(process.argv[3]) // Requiero del moduloTareas el metodo leerPorEstado(), que recibe por parametro lo que se escribe en la posicion 3 del argv de process.
        break
    case 'borrar' : // En caso de escribir 'borrar' en la posicio 2 del argv de process, debe hacer lo siguiente:
        moduloTareas.borrarUltimo() // Requiero del moduloTareas el metodo borrarUltimo().
        break
    case accion: // En caso de escribir en la posicio 2 del argv de process, debe hacer lo siguiente:
        if (accion ==='listar') { // si lo escrito es igual a 'listar' :
            return moduloTareas.listarTarea() // Retorna del moduloTareas el metodo listarTarea().
        }
        if (!accion) { // si no se escribe nada :
            return console.log ('Atención - Tienes que pasar una acción'); // Muestra por consola este mensaje.
        }
        console.log ('No entiendo qué quieres hacer'); // Si se escribe cualquier otra cosa, muestra por consola este mensaje.
        break 
    default:
        break;
}
 
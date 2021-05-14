const fs = require ('fs'); // Declaro la constante fs y requiero el modulo nativo filesystem, para trabajar con el archivo Json.

const lista = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')) // Declaro la constante lista, para poder leer el Json y poder modificarlo. En el objeto Json parseo (convertir Json en JS) lo que recivo de filesystem en su propiedad readFileSync(metodo de lectura), pasando como primer parametro la carpeta donde se encuentra (./db) y el archivo con su extencion (/tareas.json), y como segundo parametro la codificacion de caracteres (utf-8).


module.exports = { // Exporto un objeto literal
    cartel : function(mensaje){ // Realizo un metodo que permita mostrar un cartel predeterminado.
        console.log('-------------------------------');
        console.log(mensaje);
        console.log('-------------------------------');
    },
    escribirJson : function(lista){ // Realizo un metodo que permita sobreescribir el archivo Json y guardarlo.
        fs.writeFileSync('./db/tareas.json',JSON.stringify(lista,null,2),'utf-8') // utilizo el metodo writeFileSync de filesystem (para sobreescribir el archivo) pasandole tres parametros, el primero en donde quiero guardarlo ('./db/tareas.json'), otro parametro que es lo que quiero guardad (JSON.stringify(lista,null,2) donde se stringifyca la lista (conviertir JS a Json) y se le pasa un formato (null,2), y como ultimo parametro la codificacion de caracteres (utf-8).
    },
    guardarTarea : function(titulo,estado = 'pendiente') { // Realizo un metodo que permita guardar una tarea nueva, y le doy un valor por defecto a estado (estado = 'pendiente').
        let nuevaTarea = { // Declaro una variable para poder crear una nueva tarea.
            titulo,
            estado 
        }
        lista.push(nuevaTarea) // Agrego la nueva tarea.
        this.escribirJson(lista) // Mando la nueva tarea a escribirJson para que la stringifyque y la guarde.
        this.listarTarea(); // Muestro la lista con la tarea nueva agregada.
        this.cartel('        TAREA AGREGADA') // Muestro cartel con el mensaje predeterminado.
    },
    listarTarea : function(tareas = lista){ // Realizo un metodo que permita mostrar un listado de las tareas, y le doy un valor por defecto a tareas (tareas = lista).
        this.cartel('           TAREAS') // Muestro cartel con el mensaje predeterminado.
        return tareas.forEach((tarea,i) => { // Aplico un forEach a tareas, que contiene un callback con dos parametros, primero el elemento (tarea) y segundo el indice que ocupa ese elemento (i).
            console.log(i+1 + '- ' + tarea.titulo +' '+'='+' '+ tarea.estado)}) // Por cada iteracion devuelve por consola lo concatenado. Muestra cada una de las tareas en forma de lista.       
    },
    leerPorEstado : function(estado){ // Realizo un metodo que permita mostrar las tareas con estados filtrados.
        let filtrarEstado = lista.filter(list=> list.estado === estado) // Declaro una variable y le aplico un filter a la lista, que contiene un callback que recorre cada una de las tareas de la lista y devuelve las que tiene el estado filtrado.
        this.cartel('       TAREAS FILTRADAS') // Muestro cartel con el mensaje predeterminado.
        return filtrarEstado.forEach((tarea,i) => { // Aplico un forEach a filtrarEstado, que contiene un callback con dos parametros, primero el elemento (tarea) y segundo el indice que ocupa ese elemento (i).
            console.log(i+1 + '- ' + tarea.titulo +' '+'='+' '+ tarea.estado)}) // Por cada iteracion devuelve por consola lo concatenado. Muestra cada una de las tareas en forma de lista.  
    },
    borrarUltimo : function(){ // Realizo un metodo que permita eliminar la ultima tarea.
        lista.pop() // Elimino la ultima tarea.
        this.escribirJson(lista) // Mando la lista a escribirJson para que la stringifyque y la guarde.
        this.listarTarea() // Muestro la lista con la tarea eliminada.
        this.cartel('       TAREA ELIMINADA') // Muestro cartel con el mensaje predeterminado.
    }, 
}

